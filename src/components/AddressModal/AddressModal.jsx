import { Icon } from '@iconify/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { addToUserAddress } from '../../utilities/fakedb';

const AddressModal = ({ setOpenModal, setGetAddressModalData }) => {


    // toastify 
    const notify = () => toast.success('Your Address Added Successfull', {
        style: {
            backgroundColor: '#0C4E67',
            color: 'white'
        },
        className: "bg-black",
    });
    // from handle 
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        addToUserAddress(data)
        reset();
        notify();
        setOpenModal(false)
    };

    const handleCloseModal = () => {
        setOpenModal(false)
    }


    return (
        <div>
            {/* <!-- Main modal --> */}
            <div class="bg-black bg-opacity-70 fixed top-0 left-0 right-0 z-50 w-full p-4 h-screen">
                <div class="relative lg:w-6/12 w-10/12 mx-auto">
                    {/* <!-- Modal content --> */}
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 mt-10">
                        {/* <!-- Modal header --> */}
                        <div class="flex items-center justify-between lg:px-12 md:px-20 px-[20px] py-4 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-2xl font-semibold text-gray-900 dark:text-white">
                                Add New Address
                            </h3>
                            <button onClick={() => handleCloseModal()} class="text-black hover:text-red-600 rounded-lg text-sm ">
                                <Icon className='text-4xl' icon="carbon:close-outline" />
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div class="">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body lg:px-12 md:px-20 px-[20px] space-y-5 ">
                                <div className="form-control">
                                    <label className="label px-0">
                                        <span className="label-text text-xl font-medium">Full Name*</span>
                                    </label>
                                    <input type="text" {...register("name", {required: true})} placeholder="Your Full Name*" className="input placeholder-black input-bordered h-16 rounded-none border-black text-black text-xl" />
                                </div>
                                <div className="form-control">
                                    <label className="label px-0">
                                        <span className="label-text text-xl font-medium">Mobile Number*</span>
                                    </label>
                                    <input type="text" {...register("mobile", {required: true})}  placeholder="eg: 01********125" className="input placeholder-black input-bordered h-16 rounded-none border-black text-black text-xl" />
                                </div>
                                <div className="form-control">
                                    <label className="label px-0">
                                        <span className="label-text text-xl font-medium">Email*</span>
                                    </label>
                                    <input type="email" {...register("email", {required: true})}  placeholder="Your Email" className="input placeholder-black input-bordered h-16 rounded-none border-black text-black text-xl" />
                                </div>
                                <div className="form-control">
                                    <label className="label px-0">
                                        <span className="label-text text-xl font-medium">Address*</span>
                                    </label>
                                    <input type="text" {...register("address", {required: true})}  placeholder="Your Address" className="input placeholder-black input-bordered h-16 rounded-none border-black text-black text-xl" />
                                </div>
                                {/* <div className="form-control">
                                    <label className="label px-0">
                                        <span className="label-text text-xl font-medium">Area*</span>
                                    </label>
                                    <input type="text" {...register("area")} required placeholder="Your Area" className="input placeholder-black input-bordered h-16 rounded-none border-black text-black text-xl" />
                                </div>
                                <div className="form-control">
                                    <label className="label px-0">
                                        <span className="label-text text-xl font-medium">City*</span>
                                    </label>
                                    <input type="text" {...register("city")} required placeholder="Your City" className="input placeholder-black input-bordered h-16 rounded-none border-black text-black text-xl" />
                                </div> */}
                                <div className="form-control mt-10 lg:ml-auto">
                                    <input type="submit" value='Save' className='btn px-16 bg-[#0C4E67] text-white mt-4 normal-case text-[16px] h-16 rounded-none hover:bg-[#3B95B0]' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressModal;