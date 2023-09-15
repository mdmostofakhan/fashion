import React from "react";
import image from '../../../assets/ManNewItems/img1.png'

const OrderTable = () => {
  return (
    <div>
      <table className="  w-full ">
        <thead className="border">
          <tr>
            <th className="border border-purple-200 py-3">Date</th>
            <th className="border border-purple-200 py-3">Image</th>
            <th className="border border-purple-200 py-3">Product Name</th>
            <th className="border border-purple-200 py-3">Quantity</th>
            <th className="border border-purple-200 py-3">Product price</th>
            <th className="border border-purple-200 py-3">Customer Name </th>
            <th className="border border-purple-200 py-3">Phone Number</th>
            <th className="border border-purple-200 py-3">Status</th>
          </tr>
        </thead>

        <tbody className="text-center">
          <tr>
            <td className="border border-purple-200"> 29 Aug 2023</td>
            <td className="border border-purple-200 w-[140px] p-3">
              <img className="w-full" src={image} alt="" />
            </td>
            <td className="border border-purple-200">Shoes</td>
            <td className="border border-purple-200">02 </td>
            <td className="border border-purple-200">550৳</td>
            <td className="border border-purple-200">Sakib Miya</td>
            <td className="border border-purple-200"> 017000000000</td>
            <td className="border border-purple-200">Complete</td>
          </tr>

          <tr>
            <td className="border border-purple-200">29 Aug 2023</td>
            <td className="border border-purple-200 w-[140px]  p-3">
              <img className="w-full" src={image} alt="" />
            </td>
            <td className="border border-purple-200">Shoes</td>
            <td className="border border-purple-200">02 </td>
            <td className="border border-purple-200">550৳</td>
            <td className="border border-purple-200">Sakib Miya</td>
            <td className="border border-purple-200"> 017000000000</td>
            <td className="border border-purple-200">Complete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
