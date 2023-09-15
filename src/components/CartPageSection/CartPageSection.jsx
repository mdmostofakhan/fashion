import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import CartImg from '../../assets/WomanNewItems/img2.png'
import Rating from 'react-rating'
import ProductCouter from '../ProductCouter/ProductCouter';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { addToCartProducts, addToDb, deleteCartProduct, getStoredCart, removeFromDb } from '../../utilities/fakedb';
import AddedCartProducts from './AddedCartProducts';

const CartPageSection = () => {
    const user = true;

    let foundProducts = [];
    const [products, setProducts] = useState([]);
    // const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(null);
    const [productIsCheck, setProductIsCheck] = useState(false);

    // let priceItems = 200;
    // useEffect(() => {
    //     setPrice(quantity * priceItems)
    // }, [quantity])


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
    for(const product of products){

        let quantity = product.quantity;
        totalQuantity += quantity
        let quantityPrice = quantity * parseFloat(product.price)
        subTotal = subTotal + quantityPrice
        let vatPrice = (subTotal * vat) / 100
        total = (subTotal + vatPrice + delivery)
        console.log(vatPrice)
    }
    // console.log(subTotal)


    // toastify 
    const notify = () => toast.success('Your Selected Item Deleted Successfull', {
        style: {
            backgroundColor: '#0C4E67',
            color: 'white'
            
        },
        className: "bg-red-600",
    });
    const handleDelete = () => {
        if (user) {
            notify();
        }
    }


    const handleProductChecked = () => {
        setProductIsCheck(!productIsCheck)
    }

    const handleAllDelete = () => {
        if(productIsCheck){
            deleteCartProduct()
            setProductIsCheck(!productIsCheck)
            notify();
        }
    }

    return (
        <>
            <Fade>
                <div className='mx-5'>
                    <div className='container mx-auto my-20'>
                        {/* all select  */}
                        <div className='border p-5 flex justify-between'>
                            <div className="flex items-center gap-5 ">
                                <input onClick={() => handleProductChecked()} checked={productIsCheck ? true : false} type="checkbox" id='selectAll' className="cursor-pointer text-xlappearance-none indeterminate:bg-gray-300 rounded-lg border-4 border-black w-8 h-8" />
                                <label for='selectAll' className="cursor-pointer text-2xl font-semibold">{productIsCheck ? 'Not Seletct' : 'Select all'}</label>
                            </div>
                            <div onClick={() => handleAllDelete()} title='Delete' className='cursor-pointer'>
                                <Icon className='text-3xl text-red-600' icon="fluent-mdl2:delete" />
                            </div>
                        </div>
                        {/*  select product  */}
                        {
                            products?.map((item, index) => <AddedCartProducts key={item.id} item={item} productIsCheck={productIsCheck} />)

                        }

                        {/* summery  */}
                        <div className='mt-16'>
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
                        </div>

                        <div className='flex justify-center gap-5 mt-20'>
                            <Link to='/women' className='btn rounded-none lg:w-52 h-14 text-xl bg-transparent border-2 hover:border-[#3B95B0] hover:text-[#3B95B0] hover:bg-transparent border-black normal-case'>Return Shop</Link>
                            <Link to='/checkOut' className='btn rounded-none lg:w-52 h-14 text-xl border-0 bg-[#0C4E67] hover:bg-[#3B95B0] text-white normal-case'>Check Out</Link>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default CartPageSection;