import React from "react";
import { Icon } from "@iconify/react";

const ContactDetails = () => {
  return (
    <div className=" w-11/12 mx-auto">
      <h1 className="text-2xl font-semibold my-6">Contact Details</h1>
      <div className="flex w-full gap-8">
        <div className="w-full">
          <div className="w-full">
            <label className="font-semibold">Shop Name</label> <br />
            <input
              className="border w-full border-purple-200 mt-3 p-3 "
              type="text"
              name=""
              placeholder="UbantoUrban"
              id=""
            />
          </div>
          <div className="flex w-full gap-6 mt-6">
            <div className="w-1/2">
              <label className="font-semibold">Shop Logo/Image</label> <br />
              <input
                className="border w-full border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="Image.jpg"
                id=""
              />
            </div>
            <div className="w-1/2 relative">
              <label className="font-semibold">Use Brand</label> <br />
              <input
                className="border w-full text-center border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="Apex,Bata"
                id=""
              />
              <div className="absolute -right-1 top-9 cursor-pointer">
              <Icon className="text-5xl" icon="ph:plus-fill" />
              </div>
            </div>
          </div>
          <div className="flex w-full gap-6 mt-6">
            <div className="w-1/2">
              <label className="font-semibold">Area</label> <br />
              <input
                className="border w-full text-center border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="Mirpur Commerce College "
                id=""
              />
            </div>
            <div className="w-1/2">
              <label className="font-semibold">House</label> <br />
              <input
                className="border w-full text-center  border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="2/1"
                id=""
              />
            </div>
          </div>
          <div className="flex w-full gap-6 mt-6">
            <div className="w-1/2 relative">
              <label className="font-semibold">Mobile Number</label> <br />
              <input
                className="border w-full border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="01700000000"
                id=""
              />
                <div className="absolute -right-1 top-9 cursor-pointer">
              <Icon className="text-5xl" icon="ph:plus-fill" />
              </div>
            </div>
            <div className="w-1/2">
              <label className="font-semibold">Email</label> <br />
              <input
                className="border w-full border-purple-200 p-3 mt-3"
                type="email"
                name="email"
                placeholder="urbanubanto.fashion@gmail.com"
                id=""
              />
            </div>
          </div>
        </div>

        {/* secon ............ */}
        <div className="w-full">
          <div className="flex  gap-6"></div>
          <div className="flex w-full gap-6 mt-28">
            <div className="w-1/2">
              <label className=" font-semibold">Product Quality</label> <br />
              <input
                className="border w-full border-purple-200  p-3 mt-3 "
                type="text"
                name=""
                placeholder="High Segment"
                id=""
              />
            </div>
            <div className="w-1/2 relative">
              <label className="font-semibold">Product Category</label> <br />
              <input
                className="border w-full border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="Shoes"
                id=""
              />
                <div className="absolute -right-1 top-9 cursor-pointer">
              <Icon className="text-5xl" icon="ph:plus-fill" />
              </div>
            </div>
          </div>
          <div className="flex w-full gap-6 mt-6">
            <div className="w-1/2">
              <label className=" font-semibold">Road</label> <br />
              <input
                className="border w-full border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="2 No"
                id=""
              />
            </div>
            <div className="w-1/2">
              <label className=" font-semibold">Block</label> <br />
              <input
                className="border w-full border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="C"
                id=""
              />
            </div>
          </div>
          <div className="flex w-full gap-6 mt-6">
            <div className="w-1/2">
              <label className=" font-semibold">Website</label> <br />
              <input
                className="border w-full border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="urbanubanto.com "
                id=""
              />
            </div>
            <div className="w-1/2 relative">
              <label className=" font-semibold">Social Media link</label> <br />
              <input
                className="border w-full border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="Out Side Area"
                id=""
              />
                <div className="absolute -right-1 top-9 cursor-pointer">
              <Icon className="text-5xl" icon="ph:plus-fill" />
              </div>
            </div>
          </div>
          <div className="flex w-full gap-6 mt-6"></div>
        </div>
      </div>
      <div className="mt-6">
        <label className=" font-semibold">Details</label> <br />
        <textarea
          className="border border-purple-200 p-4 w-full"
          placeholder="message"
          name="most"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <div className="text-end  mt-4 ">
        <button className=" bg-[#282B35] p-2 w-28 text-[#F5F5F5]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactDetails;
