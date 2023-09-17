import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const AddProducts = () => {
 const [regularAmount, setRegularAmount] = useState()
 const [discountPercentage, setDiscountPercentage] = useState()
 const [newDiscountPrice, setNewDiscountPrice] = useState(0)
 const [newDiscountAmount, setNewDiscountAmount] = useState(0) 
 
const handleAmountChange = (e) => {
  setRegularAmount(e.target.value);
}

const handleDiscountChange = (e) => {
  setDiscountPercentage(e.target.value);
}


  useEffect(() => {
     if(!isNaN(regularAmount) && !isNaN(discountPercentage)) {
        const amountPrice = parseFloat(regularAmount) * parseFloat(discountPercentage) / 100;
        const discountPrice = parseFloat(regularAmount) - parseFloat(amountPrice);

console.log(discountPrice, 'heloo', amountPrice)

        setNewDiscountPrice(discountPrice.toFixed(2))
        setNewDiscountAmount(amountPrice.toFixed(2))
      }
      else{
        setNewDiscountPrice('')
        setNewDiscountAmount('');
      }
     
  },[regularAmount, discountPercentage])

  return (
    <div className=" w-11/12 mx-auto">
      <h1 className="text-2xl font-semibold my-6">Add Products</h1>
      <div className="grid md:grid-cols-2  grid-cols-1 w-full gap-8">
        <div className="w-full">
          <div className="w-full">
            <label className="font-semibold">Product Name</label> <br />
            <input
              className="border w-full border-purple-200 mt-3 p-3 "
              type="text"
              name=""
              placeholder="Core i7 5th gen Leptop"
              id=""
            />
          </div>
          <div className="flex w-full gap-6 mt-6">
            <div className="w-1/2">
              <label className="font-semibold">Product SKU</label> <br />
              <input
                className="border w-full border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="MEGA-JEWE-177-1"
                id=""
              />
            </div>
            <div className="w-1/2">
              <label className="font-semibold">Product Quantity</label> <br />
              <input
                className="border w-full text-center border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="10,000"
                id=""
              />
            </div>
          </div>
          <div className="flex w-full gap-6 mt-6">
            <div className="w-1/2">
              <label className="font-semibold">Product Regular Price</label>{" "}
              <br />
              <input
                className="border w-full text-center border-purple-200 p-3 mt-3"
                type="number"
                name="regularPrice"
                placeholder="1250 ৳ "
                onChange={handleAmountChange}
               value={regularAmount}
                id="number"
              />
            </div>
            <div className="w-1/2">
              <label className="font-semibold">Discount Percentage</label>{" "}
              <br />
              <input
                className="border w-full text-center  border-purple-200 p-3 mt-3"
                type="number"
                name="disc"
                placeholder="10%"
               onChange={handleDiscountChange}
                value={discountPercentage}
                id=""
              />
            </div>
          </div>
          <div className="flex w-full gap-6 mt-6">
            <div className="w-1/2">
              <label className="font-semibold">Free Delivery</label> <br />
              <input
                className="border w-full text-center  border-purple-200 bg-gray-700 text-[#F5F5F5] p-3 mt-3"
                type="text"
                name=""
                placeholder="Free Delivery"
                id=""
              />
            </div>
            <div className="w-1/2">
              <label className="font-semibold">Paid Delivery</label> <br />
              <input
                className="border w-full text-center  border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="Paid Deliver"
                id=""
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="font-semibold">Mega Offer Name</label> <br />
            <input
              className="border w-full justify-between border-purple-200  mt-2 p-3 "
              type="text"
              name=""
              placeholder="Eid Festival Mega offer   "
              id=""
            />
          </div>

          <div className="mt-6 relative">
            <label className="font-semibold ">Create Size Guide</label> <br />
            <table className="border w-full mt-2">
              <tr className="grid grid-cols-4">
                <input
                  type="text"
                  placeholder="Size"
                  className="border  border-purple-200 p-3"
                />
                <input
                  type="text"
                  placeholder="Chest"
                  className="border  border-purple-200 p-3"
                />
                <input
                  type="text"
                  placeholder="Waist"
                  className="border  border-purple-200 p-3"
                />

                <input
                  type="text"
                  placeholder="Waist"
                  className="border   border-purple-200  p-3"
                />
                <div className="absolute -right-1 top-8">
                  <Icon className="ml-auto text-5xl" icon="ph:plus-fill" />
                </div>
              </tr>
            </table>
          </div>
        </div>

        {/* secon ............ */}
        <div className="w-full">
          <div className="flex  gap-6">
            <div className="w-1/2">
              <label className=" font-semibold">Product Image</label> <br />
              <input
                className="border w-full border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="Image.jpg"
                id=""
              />
            </div>
            <div className="w-1/2">
              <label className=" font-semibold">Product Brand </label> <br />
              <input
                className="border w-full border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="Apex,Bata"
                id=""
              />
            </div>
          </div>
          <div className="flex w-full gap-6 mt-6">
            <div className="w-1/2">
              <label className=" font-semibold">Product Category</label> <br />
              <input
                className="border w-full border-purple-200  p-3 mt-3 "
                type="text"
                name=""
                placeholder="MEGA-JEWE-177-1"
                id=""
              />
            </div>
            <div className="w-1/2">
              <label className="font-semibold">Product Sub Category</label>{" "}
              <br />
              <input
                className="border w-full border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="MEGA-JEWE-177-1 "
                id=""
              />
            </div>
          </div>
          <div className="flex w-full  gap-6 mt-6">
            <div className="w-1/2">
              <label className=" font-semibold">Discount Amount</label> <br />
              <input
                className="border w-full text-center border-purple-200 p-3 mt-3"
                type="number"
                name="discount"
                value={newDiscountAmount}
                placeholder="125 ৳"
                id=""
              />
            </div>
            <div className="w-1/2">
              <label className=" font-semibold">New Discount Price</label>{" "}
              <br />
              <input
                className="border w-full text-center border-purple-200 p-3 mt-3"
                type="text"
                name=""
                value={newDiscountPrice}
                placeholder="1125 ৳"
                id=""
              />
            </div>
          </div>
          <div className="flex w-full gap-6 mt-6">
            <div className="w-1/2">
              <label className=" font-semibold">Inside Area </label> <br />
              <input
                className="border text-center w-full border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="60 ৳ "
                id=""
              />
            </div>
            <div className="w-1/2">
              <label className=" font-semibold">Out Side Area</label> <br />
              <input
                className="border text-center w-full border-purple-200 p-3 mt-3"
                type="text"
                name=""
                placeholder="100 ৳ "
                id=""
              />
            </div>
          </div>
          <div className="flex w-full gap-6 mt-6">
            <div className="w-1/2 relative">
              <label className=" font-semibold">Start Date</label> <br />
              <input
                className="border w-full border-purple-200 p-3 mt-2"
                type="text"
                name=""
                placeholder="12.00 am 29 July 2023  "
                id=""
              />
              <div className="absolute -right-0 top-10 ">
                <Icon className=" text-4xl" icon="clarity:date-solid" />
              </div>
            </div>
            <div className="w-1/2 relative">
              <label className=" font-semibold">Ending Date</label> <br />
              <input
                className="border w-full border-purple-200 p-3 mt-2"
                type="text"
                name=""
                placeholder="12.00 am 07 Aug 2023 "
                id=""
              />
              <div className="absolute -right-0 top-10 ">
                <Icon className=" text-4xl" icon="clarity:date-solid" />
              </div>
            </div>
          </div>

          <div className="mt-6 ml-6 relative">
            <label className=" font-semibold">Sub Details</label> <br />
            <input
              className="border w-full border-purple-200 justify-between  mt-2 p-3 "
              type="text"
              name=""
              placeholder=""
              id=""
            />
            <div className="absolute -right-1 top-8 ">
              <Icon className=" text-5xl" icon="ph:plus-fill" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <label className=" font-semibold">Product Name</label> <br />
        <textarea
          className="border p-4 w-full"
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

export default AddProducts;
