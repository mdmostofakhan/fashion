import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { Icon } from '@iconify/react';
import { useLocation } from 'react-router-dom';
import { getToUserAddress } from '../../utilities/fakedb';
import AddressModal from '../../components/AddressModal/AddressModal';
import bkashPopup from '../../assets/icons/PaymentIcons/bkash.png'

const AdedAdress = () => {

    const [openModal, setOpenModal] = useState();
    const [openPayModal, setOpenPayModal] = useState();

    const location = useLocation();
    const paymentMethod = location.state?.paymentMethod;
    const paymentImage = location.state?.paymentImage;
    const totalPayment = location.state?.totalPayment;

    console.log(totalPayment)
    // address 
    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const getAddressModalData = getToUserAddress()

    // payment 
    const handleOpenPaymentModal = () => {
        setOpenPayModal(true)
    }
    const handleClosePaymentModal = () => {
        setOpenPayModal(false)
    }


    return (
        <div className='relative'>
            <Fade>
                <Helmet><title>UrbanUtopia | Address Edit</title></Helmet>
                <div className='bg-[#C8C2BF] py-20'>
                    <div className="lg:w-7/12 md:w-10/12 w-[90%] mx-auto">
                        <div className=" flex-col lg:flex-row-reverse">

                            <div className="xl:max-w-full lg:max-w-3xl md:max-w-2xl max-w-sm flex-shrink-0 rounded-md shadow-md bg-white mx-1 md:mx-0 lg:mx-0 xl:mx-0 ">
                                <div className="card-body lg:px-12 md:px-20 px-[16px] space-y-5 py-16">
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
                                    {/* Payment Method  */}
                                    <div className='border p-5'>
                                        <div className='flex justify-between items-center'>
                                            <h3 className='text-2xl font-bold'>Payment Method</h3>
                                            <div>
                                                <Link><Icon icon="tabler:edit" className='text-4xl text-[#4A53A1]' /></Link>
                                            </div>
                                        </div>
                                        <hr className='my-3' />
                                        <div>
                                            <fieldset className='space-y-5'>
                                                <div className='flex justify-between items-center'>
                                                    <li className='list-none flex lg:gap-5 gap-5 items-center'>
                                                        <input id="nagad" className="peer/draft w-6 h-6" type="checkbox" name="status" checked />
                                                        <label for="nagad" className="peer-checked/draft:text-sky-500 text-xl font-medium flex items-center gap-5">{paymentMethod}
                                                            <div className=''>
                                                                <img src={paymentImage} className='w-full' alt="" />
                                                            </div>
                                                        </label>
                                                    </li>
                                                    <span className='text-2xl font-medium'>{totalPayment} ৳</span>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className="flex mt-10 gap-5 lg:mx-auto">
                                        <Link to='/orderDone' className='btn bg-[#0C4E67] text-white mt-4 normal-case text-[16px] px-10 h-16 rounded-none hover:bg-[#3B95B0]'>Confirm</Link>
                                        <button onClick={() => handleOpenPaymentModal()} className='btn bg-[#0C4E67] text-white mt-4 normal-case text-[16px] px-10 h-16 rounded-none hover:bg-[#3B95B0]'>Pay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DownloadMobile></DownloadMobile>
            </Fade>

            {openModal ? <AddressModal setOpenModal={setOpenModal} /> : <></>}



            {openPayModal ? <div class="bg-black bg-opacity-70 fixed top-0 left-0 right-0 z-50 w-full p-4 h-screen">
                <div class="relative lg:w-6/12 w-10/12 mx-auto">
                    {/* <!-- Modal content --> */}
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 mt-10">
                        {/* <!-- Modal header --> */}
                        <div class="flex items-center justify-between lg:px-12 md:px-20 px-[20px] py-4 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
                                Payment
                            </h3>
                            <button onClick={() => handleClosePaymentModal()} class="text-black hover:text-red-600 rounded-lg text-sm ">
                                <Icon className='text-4xl' icon="carbon:close-outline" />
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div className='py-10 bg-[#F7F7F7]'>
                            <img src={bkashPopup} className='w-6/12 mx-auto text-center shadow-lg' alt="" />
                        </div>
                    </div>
                </div>
            </div> : <></>}

        </div>
    );
};

export default AdedAdress;