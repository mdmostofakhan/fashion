import React from "react";
import { Icon } from "@iconify/react";

const Faq = () => {
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
      <div className="grid grid-cols-2  gap-6 mt-6">
        <div className="">
          <label className="text-xl font-semibold">Delivery Process</label>
          <div className="grid  grid-cols-12 items-center mt-4 border border-purple-200  w-full">
            <div className="col-span-1 h-full border-r-2">
              <h1 className=" text-xl  mt-2 ml-2">o1</h1>
            </div>
            <div className="col-span-2 h-full border-r-2 border-purple-200">
              <h2 className="text-xl mt-2 ml-2">topic</h2>
            </div>
            <input className="col-span-8" type="text" name="" placeholder="" />
            <Icon className="text-5xl col-span-1" icon="ph:plus-fill" />
          </div>
          <div className="grid  grid-cols-12 items-center mt-8 border border-purple-200 w-full">
            <div className="col-span-1 h-full border-r-2 border-purple-200">
              <h1 className=" text-xl  mt-2 ml-2">o1</h1>
            </div>
            <div className="col-span-2 h-full border-r-2 border-purple-200">
              <h2 className="text-xl mt-2 ml-2">topic</h2>
            </div>
            <input
              className="col-span-8 ml-2"
              type="text"
              name=""
              placeholder="How many color in this product?"
            />
            <Icon
              className="text-5xl col-span-1"
              icon="material-symbols:delete"
            />
          </div>
        </div>

        <div className="">
          <label className="text-xl font-semibold">Answer</label>
          <div className="grid grid-cols-12 w-full items-center mt-4 border border-purple-200">
            <div className="border-r-2 border-purple-200 h-full col-span-1">
              <h2 className="text-xl mt-2 ml-2">01</h2>
            </div>
            <div className="border-r-2 border-purple-200 h-full col-span-2">
              <h2 className="text-xl mt-2 ml-2">Topic</h2>
            </div>
            <input
              className="col-span-8 ml-2"
              type="text"
              name=""
              placeholder=""
              id=""
              required
            />
            <Icon className="text-5xl col-span-1" icon="ph:plus-fill" />
          </div>
          <div className="grid grid-cols-12 w-full items-center mt-8 border-purple-200 border">
            <div className="border-r-2 h-full col-span-1">
              <h2 className="text-xl mt-2 ml-2">01</h2>
            </div>
            <div className="border-r-2 border-purple-200 h-full col-span-2">
              <h2 className="text-xl mt-2 ml-2">Topic</h2>
            </div>
            <input
              className="col-span-8 ml-2"
              type="text"
              name=""
              placeholder=""
              id=""
              required
            />
            <Icon
              className="text-5xl col-span-1"
              icon="material-symbols:delete"
            />
          </div>
        </div>
      </div>
      <div className="text-end  mt-12 ">
        <button className=" bg-[#282B35] rounded-lg  p-2 w-28 text-[#F5F5F5]">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Faq;
