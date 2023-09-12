import React from "react";
import { Icon } from "@iconify/react";

const Delivery = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className=" text-3xl mt-8 font-semibold">Delivery & Return </h2>
      <p className=" text-xl mt-6 font-semibold">
        Certainly, I can help you create a set of frequently asked questions
        (FAQ) related to various topics. Please let me know which specific topic
        you're interested in, whether it's related to a product, service,
        company, or any other subject. Additionally, if you have a list of
        questions you'd like to include in the FAQ, feel free to provide them,
        and I can help you organize and refine them.
      </p>
      <div className="grid mt-6 grid-cols-2  ">
        <div className=" ">
          <label className="text-xl font-semibold">Delivery Process</label>
          <div className="flex  text-center mt-2">
            <div className="border p-3 border-purple-200 ">
              <h2>01</h2>
            </div>
            <div className="border p-3 border-purple-200  ">
              <h2>Topic</h2>
            </div>
            <div className="relative ">
              <input
                className="border p-3 border-purple-200"
                type="text"
                name=""
                placeholder=""
                id=""
              />
              <div className="absolute -right-0 top-0 cursor-pointer">
                <Icon className="text-5xl" icon="ph:plus-fill" />
              </div>
            </div>
          </div>

          <div className="flex  text-center mt-6">
            <div className="border p-3 border-purple-200 ">
              <h2>01</h2>
            </div>
            <div className="border p-3 border-purple-200  ">
              <h2>Topic</h2>
            </div>
            <div className="relative ">
              <input
                className="border p-3 border-purple-200"
                type="text"
                name=""
                placeholder="Confirm Orders"
                id=""
              />
              <div className="absolute -right-0 top-0 cursor-pointer">
                <Icon className="text-5xl" icon="material-symbols:delete" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full ">
          <label className="text-xl font-semibold">Return Condition </label>
          <div className="flex text-center mt-2">
            <div className="border border-purple-200 p-3">
              <h2>01</h2>
            </div>
            <div className="border border-purple-200 p-3">
              <h2>Topic</h2>
            </div>
            <div className=" relative ">
              <input
                className="border p-3 border-purple-200"
                type="text"
                name=""
                placeholder=""
                id=""
              />
              <div className="absolute -right-1 top-0 cursor-pointer">
                <Icon className="text-5xl" icon="ph:plus-fill" />
              </div>
            </div>
          </div>

          <div className="flex mt-6 text-center">
            <div className="border border-purple-200 p-3">
              <h2>01</h2>
            </div>
            <div className="border border-purple-200 p-3">
              <h2>Topic</h2>
            </div>
            <div className=" relative ">
              <input
                className="border p-3 border-purple-200"
                type="text"
                name=""
                placeholder="Damage Product, Date over issue"
                id=""
              />
              <div className="absolute -right-1 top-0 cursor-pointer">
                <Icon className="text-5xl" icon="material-symbols:delete" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-end  mt-4 ">
        <button className=" bg-[#282B35] p-2 w-28 text-[#F5F5F5]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Delivery;
