import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import CartImg from '../../assets/WomanNewItems/img2.png'
import Rating from 'react-rating'
import ProductCouter from '../ProductCouter/ProductCouter';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { toast } from 'react-hot-toast';

const CartPageSection = () => {
    const user = true;

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
    
    

    return (
        <>
            <Fade>
                <div className='mx-5'>
                    <div className='container mx-auto my-20'>
                        <div class="grid grid-rows-3 lg:grid-flow-col gap-8 xl:mx-0 lg:mx-5 md:mx-5">
                            <div class="lg:col-span-2 md:col-span-2 border p-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-5 cursor-pointer">
                                        <input type="checkbox" for='selectAll' className="text-xlappearance-none indeterminate:bg-gray-300 rounded-lg border-4 border-black w-8 h-8" />
                                        <span id='selectAll' className=" text-2xl font-semibold">Select all</span>

                                    </div>
                                    <div>
                                        <Icon onClick={handleDelete} icon="fluent-mdl2:delete" className='text-3xl cursor-pointer text-red-600' />
                                    </div>
                                </div>
                            </div>
                            <div class="row-span-2 lg:col-span-2 md:col-span-2 col-span-1 border">
                                <div className='flex md:flex-wrap flex-wrap justify-between flex-row items-center gap-10 p-5'>
                                    <div className='flex items-center gap-5'>
                                        <div className="flex items-center gap-5 cursor-pointer">
                                            <input type="checkbox" for='selectOne' className="text-xlappearance-none indeterminate:bg-gray-300 rounded-lg border-4 border-black w-8 h-8" />
                                        </div>
                                        <div className='w-48 p-3'>
                                            <img className='w-full' src={CartImg} alt="" />
                                        </div>
                                        <div className='space-y-3'>
                                            <h2 className='text-3xl font-semibold'>Nike Air Force 1</h2>
                                            <p>Fitted Long Strappy Shoes</p>
                                            <div className='flex items-center justify-between'>
                                                <Rating
                                                    readonly
                                                    placeholderRating={4.5}
                                                    emptySymbol={<Icon icon="ic:baseline-star-half" />}
                                                    placeholderSymbol={<Icon icon="ic:baseline-star" />}
                                                    fullSymbol={<Icon icon="ic:baseline-star" />}
                                                    className='text-2xl text-[#40F223]'
                                                ></Rating>
                                                <span>7.5k Ratings</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex justify-center items-center lg:w-auto md:w-48 '>
                                        <div>
                                            <h2 className='text-5xl font-bold text-center mb-8'>{priceItems}$</h2>
                                            <ProductCouter quantity={quantity} setQuantity={setQuantity}></ProductCouter>
                                        </div>
                                    </div>
                                    <div className='md:ml-auto'>
                                        <button onClick={handleDelete}><Icon icon="fluent-mdl2:delete" className='text-3xl text-red-600' /></button>
                                    </div>
                                </div>
                            </div>
                            <div class="row-span-3 col-span-1 border">
                                <h3 className='text-2xl text-center font-bold py-4'>Summery</h3>
                                <div className="divider m-0"></div>
                                <ul>
                                    <li className='flex justify-between py-2 px-6'>
                                        <span className='text-xl font-medium'>Sub Total</span>
                                        <span className='text-xl font-medium'>00.00$</span>
                                    </li>
                                    <div className="divider m-0"></div>
                                    <li className='flex justify-between py-2 px-6'>
                                        <span className='text-xl font-medium'>Vat</span>
                                        <span className='text-xl font-medium'>00.00$</span>
                                    </li>
                                    <div className="divider m-0"></div>
                                    <li className='flex justify-between py-2 px-6'>
                                        <span className='text-xl font-medium'>Delivery Charge</span>
                                        <span className='text-xl font-medium'>00.00$</span>
                                    </li>
                                    <div className="divider m-0"></div>
                                    <li className='flex justify-between py-2 px-6'>
                                        <span className='text-xl font-bold'>Total</span>
                                        <span className='text-xl font-bold'>{price}$</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex justify-center gap-5 mt-20'>
                            <Link to='/women' className='btn rounded-none lg:w-52 h-14 text-xl bg-transparent border-2 hover:border-[#3B95B0] hover:text-[#3B95B0] hover:bg-transparent border-black normal-case'>Return Shop</Link>
                            <Link to='/productPurchasePage' className='btn rounded-none lg:w-52 h-14 text-xl border-0 bg-[#0C4E67] hover:bg-[#3B95B0] text-white normal-case'>Check Out</Link>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default CartPageSection;