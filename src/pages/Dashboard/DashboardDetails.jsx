import React from "react";
import Chart from "./Chart";
import ReChart from "./ReChart";

const DashboardDetails = () => {
  return (
    <div className="w-11/12 mx-auto ">
      <p className="text-2xl font-black my-6">Dashboard</p>
      <div className="flex justify-between gap-5">
        <div className="border text-center border-purple-200 rounded-lg w-full py-10">
          <p>Total Sales</p>
          <p className="text-4xl mt-3 font-semibold">৳ 75.9k</p>
        </div>
        <div className="border text-center border-purple-200 rounded-lg w-full py-10">
          <p>Last Month Sales</p>
          <p className="text-4xl mt-3 font-semibold">৳ 75.9k</p>
        </div>
        <div className="border text-center border-purple-200 rounded-lg w-full py-10">
          <p>Last Week Sales</p>
          <p className="text-4xl mt-3 font-semibold">৳ 75.9k</p>
        </div>
        <div className="border text-center border-purple-200 rounded-lg w-full py-10">
          <p>Recent Sales</p>
          <p className="text-4xl mt-3 font-semibold">৳ 75.9k</p>
        </div>
      </div>
      <div className="flex gap-5 justify-between my-10">
        <div className="w-full">
        <Chart></Chart>
        </div>
        <div className="w-full">
        <Chart></Chart>
        </div>
      </div>
    </div>
  );
};

export default DashboardDetails;
