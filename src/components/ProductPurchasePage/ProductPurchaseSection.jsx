import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import CartImg from '../../assets/WomanNewItems/img2.png'
import Rating from 'react-rating';
import ProductCouter from '../ProductCouter/ProductCouter';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { toast } from 'react-hot-toast';
import AddressModal from '../AddressModal/AddressModal';
import { useSelector } from 'react-redux';
import { addToCartProducts, getStoredCart, getToUserAddress, removeFromDb } from '../../utilities/fakedb';

const ProductPurchaseSection = () => {
    const user = true;
    const userAddress = false;

    const foundProducts = [];
    const [products, setProducts] = useState([]);
    const [openModal, setOpenModal] = useState();
    // const [getAddressModalData, setGetAddressModalData] = useState()
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [paymentMethod, setPaymentMethod] = useState();
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(null);


    let priceItems = 200;
    useEffect(() => {
        setPrice(quantity * priceItems)
    }, [quantity])

    // toastify 
    const notify = () => toast.success('Your Selected Item Deleted Successfull', {
        style: {
            backgroundColor: '#0C4E67',
            color: 'white'
        },
        className: "bg-black",
    });
    const handleDelete = () => {
        if (user) {
            notify();
        }
    }

    const handleOpenModal = () => {
        setOpenModal(true)
    }

    const itemsData = useSelector((state) => {
        // console.log(state.items.data)
        return state.items.data;
    });

    useEffect(() => {
        const storedCart = getStoredCart();
        // console.log(storedCart)

        if (itemsData) {
            for (const id in storedCart) {
                const savedCart = itemsData?.find(item => item.id == id)
                if (savedCart) {
                    if (!Object.isExtensible(savedCart)) {
                        // Make the object extensible
                        Object.preventExtensions(savedCart);
                    }
                    let quantityItem = storedCart[id]

                    const updatedObject = {
                        ...savedCart,
                        quantity: quantityItem,
                    };


                    // console.log(updatedObject)

                    // const fieldName = "quantityIt";
                    // savedCart[fieldName] = quantityItem;

                    // const cartItem = savedCart.quantity = quantityItem
                    // console.log(savedCart.quantity = quantityItem)
                    // foundProducts = [...foundProducts, savedCart]
                    foundProducts.push(updatedObject)
                }
            }
        }
        setProducts(foundProducts)
        addToCartProducts(foundProducts)
    }, [products])


    // console.log(products)
    let subTotal = 0;
    let totalQuantity = 0;
    let total = 0;
    const vat = 5;
    let delivery = 100;
    for (const product of products) {

        let quantity = product.quantity;
        totalQuantity += quantity
        let quantityPrice = quantity * parseFloat(product.price)
        subTotal = subTotal + quantityPrice
        let vatPrice = (subTotal * vat) / 100
        total = (subTotal + vatPrice + delivery)
        // console.log(vatPrice)
    }


    useEffect(() => {
        fetch('pamentMethod.json')
            .then(res => res.json())
            .then(data => setPaymentMethod(data))
    }, [])

    const navigate = useNavigate();


    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const handleOrderConfirm = () => {
        // Find the selected payment method object
        const selectedMethod = paymentMethod.find(item => item.paymentMethodName === selectedPaymentMethod);

        // Check if the selectedMethod exists
        if (selectedMethod) {
            navigate('/adedAddress', {
                state: {
                    paymentMethod: selectedPaymentMethod,
                    paymentImage: selectedMethod.image,
                    totalPayment: total.toFixed(2),
                }
            });
        } else {
            // Handle the case where the selected payment method is not found
            console.error("Selected payment method not found");
        }
    };



    const getAddressModalData = getToUserAddress()

    return (
        <div>
            <Fade>
                <div className='container mx-auto my-20'>
                    <div className="mx-5">

                        {/*  single added products  */}
                        <div className='my-10'>
                            <table className='w-full border'>
                                <thead>
                                    <tr>
                                        <th className='border p-2 lg:text-xl'>Product Name</th>
                                        <th className='border p-2 lg:text-xl'>Product Price</th>
                                        <th className='border p-2 lg:text-xl'>Product Quantity</th>
                                        <th className='border p-2 lg:text-xl'>Delete</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center py-5'>
                                    {
                                        products.map((item, index) => <>
                                            <tr className='border'>
                                                <td className='py-5 px-3 font-semibold'>{item.title}</td>
                                                <td className='py-5 px-3 font-semibold'>{item.price}$</td>
                                                <td className='py-5 px-3 font-semibold'>{item.quantity}</td>
                                                <td className='py-5 px-3'>
                                                    <div className='flex justify-center'>
                                                        <Icon onClick={() => removeFromDb(item?.id)} title='Delete' className='text-2xl text-red-600 cursor-pointer' icon="fluent-mdl2:delete" />
                                                    </div>
                                                </td>
                                            </tr>
                                        </>)
                                    }

                                </tbody>
                            </table>
                        </div>

                        <div className='grid lg:grid-cols-2 gap-5'>
                            {/* added address  */}
                            <div className='border p-5'>
                                <div className='flex justify-between items-center'>
                                    <h3 className='text-2xl font-bold'>Address</h3>
                                    <div>
                                        {getAddressModalData ? <Link><Icon onClick={() => handleOpenModal()} icon="tabler:edit" className='text-4xl text-[#4A53A1]' /></Link>
                                            : <Link onClick={() => handleOpenModal()} to=''><Icon className='text-4xl text-[#4A53A1]' icon="gala:add" /></Link>}
                                    </div>
                                </div>
                                {getAddressModalData ? <><hr className='mt-2' />
                                    <div className='mt-5'>
                                        <div className='space-y-5'>
                                            <p><span className='font-medium'>Name:</span> {getAddressModalData?.name}</p>
                                            <p><span className='font-medium'>Email:</span> {getAddressModalData?.email}</p>
                                            <p><span className='font-medium'>Mobile:</span> {getAddressModalData?.mobile}</p>
                                            <p><span className='font-medium'>Address:</span> {getAddressModalData?.address}</p>
                                        </div>
                                    </div></> : <></>}
                            </div>

                            {/* summery  */}
                            <div className='row-span-3'>
                                <div className='flex mb-5'>
                                    <input type="text" placeholder='Please Enter Coupon' className='border-2 focus:outline-none text-xl w-full border-[#0C4E67] px-3 rounded-none' />
                                    <button className='bg-[#0C4E67] lg:w-5/12 w-8/12 text-white py-3 px-3 font-semibold'>Add Coupon</button>
                                </div>
                                <table className='border w-full'>
                                    <tr>
                                        <th className='p-5 text-2xl' colSpan={2}>Summary</th>
                                    </tr>
                                    <tbody>
                                        <tr>
                                            <td className='border p-5 text-lg font-semibold'>Sub Total</td>
                                            <td className='border p-5 text-lg font-semibold text-end'>{subTotal.toFixed(2)}৳</td>
                                        </tr>
                                        <tr>
                                            <td className='border p-5 text-lg font-semibold'>Quantity</td>
                                            <td className='border p-5 text-lg font-semibold text-end'>{totalQuantity}</td>
                                        </tr>
                                        <tr>
                                            <td className='border p-5 text-lg font-semibold'>Vat</td>
                                            <td className='border p-5 text-lg font-semibold text-end'>{vat}%</td>
                                        </tr>
                                        <tr>
                                            <td className='border p-5 text-lg font-semibold'>Delivery Charge</td>
                                            <td className='border p-5 text-lg font-semibold text-end'>{delivery}৳</td>
                                        </tr>
                                        <tr>
                                            <td className='border p-5 text-lg font-semibold'>Total</td>
                                            <td className='border p-5 text-lg font-semibold text-end'>{total.toFixed(2)}৳</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='border mt-5 p-5'>
                                    <div className='space-y-5'>
                                        {paymentMethod ? (
                                            paymentMethod.map((method, index) => (
                                                <li className='list-none flex lg:gap-5 gap-5 items-center' key={index}>
                                                    <input
                                                        id={method.paymentMethodName}
                                                        value={method.paymentMethodName} // Set the value to the payment method name
                                                        className="peer/draft w-6 h-6"
                                                        type="radio"
                                                        name="status"
                                                        checked={selectedPaymentMethod === method.paymentMethodName}
                                                        onChange={handlePaymentMethodChange}
                                                    />
                                                    <label
                                                        htmlFor={method.paymentMethodName}
                                                        className="peer-checked/draft:text-sky-500 text-xl font-medium flex items-center gap-5"
                                                    >
                                                        {method.paymentMethodName}
                                                        <div className=''>
                                                            <img src={method.image} className='w-full' alt="" />
                                                        </div>
                                                    </label>
                                                </li>
                                            ))
                                        ) : (
                                            <p>No payment methods available</p>
                                        )}
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <button onClick={handleOrderConfirm} disabled={!selectedPaymentMethod} className={!selectedPaymentMethod? `w-full px-8 text-xl font-semibold py-3 bg-[#0C4E67] bg-opacity-50 text-white`: `w-full px-8 text-xl font-semibold py-3 bg-[#0C4E67] text-white`}>
                                    Order Confirm
                                            
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade >

            {openModal ? <AddressModal setOpenModal={setOpenModal} /> : <></>}

        </div >
    );
};

export default ProductPurchaseSection;