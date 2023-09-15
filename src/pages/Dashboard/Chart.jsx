import React from "react";
import { Icon } from '@iconify/react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "Jan",

      pv: 0,
      amt: 5,
    },
    {
      name: "Feb",

      pv: 0,
      amt: 4,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 0,
      amt: 3,
    },
    {
      name: "April",
      uv: 2780,
      pv: 0,
      amt: 2,
    },
    {
      name: "May ",
      uv: 1890,
      pv: 0,
      amt: 2.5,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 0,
      amt: 3,
    },

  ];

  return (

    <div className="border border-purple-200 rounded-2xl ">
      <div className="flex justify-between lg:px-4 mt-4">
        <p className="text-2xl font-semibold">Claims Over the Years</p>
        <div>
          <p className="text-[#5041BC] flex gap-2 text-xl font-semibold items-center">
            <Icon icon="icon-park-outline:dot" />  Total Sales</p>
          <p className="text-[#EA8F95] flex gap-2 text-xl font-semibold items-center">
            <Icon icon="icon-park-outline:dot" />  Total Income</p>
        </div>
      </div>
      <div>
        <BarChart
          width={500}
          height={300}
          data={data}
        >
          <XAxis dataKey="name"></XAxis>
          <YAxis />
          <Tooltip></Tooltip>
          <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Chart;
