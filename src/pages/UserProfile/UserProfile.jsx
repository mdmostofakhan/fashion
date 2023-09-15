import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    return (
        <>
            <div className='container mx-auto my-10'>
                <div className='flex items-center justify-center lg:flex-nowrap md:flex-wrap flex-wrap gap-16'>
                    <div className=''>
                        <div className="rounded-full h-72 w-72 overflow-hidden">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1689629870780-5d0e655383e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Image"
                                className="object-cover object-center h-full w-full"
                            />
                        </div>
                    </div>
                    <div className="h-52 lg:block md:hidden hidden">
                        <div className="border-l h-full border-gray-300 mx-4"></div>
                    </div>
                    <div className='space-y-5'>
                        <h2 className='text-5xl font-bold text-[#0C4E67]'>Nadim Hasan</h2>
                        <p className='flex items-center gap-3 text-xl'><Icon icon="mi:email" className='text-3xl text-[#0C4E67]' /> userexample123@gmail.com</p>
                        <p className='flex items-center gap-3 text-xl'><Icon icon="solar:phone-bold" className='text-3xl text-[#0C4E67]' /> +880 1700000234</p>
                        {/* <Link className='btn bg-[#3B95B0] text-white hover:bg-[#03384D]'>Edit Profile</Link> */}
                    </div>
                </div>
                <div className='my-20 lg:mx-0 md:mx-0 mx-5'>
                    <h2 className='text-2xl font-bold my-3 rounded-lg px-6 py-2 text-white bg-[#3B95B0]'>Your Orders</h2>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Order #
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Placed On
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Items
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Total
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        645958160205045
                                    </th>
                                    <td className="px-6 py-4">
                                        13/09/2023
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='flex gap-1'>
                                            <div className="h-16 w-16 rounded-md overflow-hidden">
                                                <img
                                                    src="https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                                    alt="Image"
                                                    className="object-cover object-center h-full w-full"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        290৳
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">MANAGE</a>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        645958160205045
                                    </th>
                                    <td className="px-6 py-4">
                                        13/09/2023
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className='flex gap-1'>
                                            <div className="h-16 w-16 rounded-md overflow-hidden">
                                                <img
                                                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                                    alt="Image"
                                                    className="object-cover object-center h-full w-full"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        290৳
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">MANAGE</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>

        </>
    );
};

export default UserProfile;