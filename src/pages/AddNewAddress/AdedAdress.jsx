import React from 'react';
import { Helmet } from 'react-helmet';
import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const AdedAdress = () => {
    return (
        <div>
            <Fade>
                <Helmet><title>UrbanUtopia | Address Edit</title></Helmet>
                <div className='bg-[#C8C2BF] py-20'>
                    <div className="lg:w-7/12 md:w-10/12 w-[90%] mx-auto">
                        <div className=" flex-col lg:flex-row-reverse">

                            <div className="xl:max-w-full lg:max-w-3xl md:max-w-2xl max-w-sm flex-shrink-0 rounded-md shadow-md bg-white mx-1 md:mx-0 lg:mx-0 xl:mx-0 ">
                                <form className="card-body lg:px-12 md:px-20 px-[16px] space-y-5 py-16">
                                    <div>
                                        <p className='text-2xl font-semibold'>Add New Address</p>
                                    </div>
                                    <div className="form-control space-y-5">
                                        <div className='flex justify-between items-center'>
                                            <h4 className="label-text text-xl font-bold">Nadim Hossain</h4>
                                            <Link to='' className='text-[##4A53A1] font-bold text-xl'>Edit</Link>
                                        </div>
                                        <p>+000*******000</p>
                                        <p>Dhaka -North,Mirpur-2,House#2/1,Road#2,Mirpur-2,Dhaka-1216,Commerce college</p>
                                        <p>Office</p>
                                    </div>
                                    <div className="flex mt-10 gap-5 lg:ml-auto">
                                        <Link to='/orderDone' className='btn bg-[#0C4E67] text-white mt-4 normal-case text-[16px] px-10 h-16 rounded-none hover:bg-[#3B95B0]'>Confirm</Link>
                                        <button className='btn bg-[#0C4E67] text-white mt-4 normal-case text-[16px] px-10 h-16 rounded-none hover:bg-[#3B95B0]'>Pay</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                <DownloadMobile></DownloadMobile>
            </Fade>
        </div>
    );
};

export default AdedAdress;