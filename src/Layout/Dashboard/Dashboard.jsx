import React from "react";
import { Icon } from "@iconify/react";
import { NavLink, Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-10 ">
        <div className="bg-[#0C4E67] min-h-full col-span-2">
          <div className="my-10">
            <Link to="/" className="">
              <p className="logoFont text-[#03384D] md:text text-center lg:text-[2rem] font-bold">
                <span className="text-[#3B95B0]  logoFont">Urban</span>Utopia
              </p>
            </Link>
          </div>
          <ul className="nabLinkStyle">
            <li className=" mb-8 text-white">
              <NavLink
                className="flex gap-2 p-4 text-xl font-semibold items-center"
                to="/dashboard"
              >
                <div className="flex gap-4 mx-auto md:mx-0">
                <span className="bg-red-600 "><Icon icon="material-symbols:dashboard" /></span>
                <span className=" hidden md:inline-block">Dashboard</span>
                </div>
              </NavLink>
            </li>

            <li className=" mt-2 text-white mb-8 ">
              <NavLink
                className="flex gap-2 p-4 text-xl font-semibold items-center"
                to="/dashboard/orders"
              >
                <div className="flex gap-4 mx-auto md:mx-0">
                <Icon icon="iconoir:cart" />
                <span className="hidden md:inline-block"> Orders</span>
                </div>
              </NavLink>
            </li>
            <li className=" mt-2 text-white mb-8 ">
              <NavLink
                className="flex gap-2 p-4 text-xl font-semibold items-center"
                to="/dashboard/products"
              >
               <div className="flex gap-4 mx-auto md:mx-0">
               <Icon icon="streamline:shopping-bag-hand-bag-1-shopping-bag-purse-goods-item-products" />
                <span className="hidden md:inline-block"> Products</span>
               </div>
              </NavLink>
            </li>
            <li className=" mt-2 text-white mb-8">
              <NavLink
                className="flex gap-2 p-4 text-xl font-semibold items-center"
                to="/dashboard/addproducts"
              >
                <div className="flex gap-4 mx-auto md:mx-0">
                <Icon icon="streamline:shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products" />{" "}
                <span className="hidden md:inline-block"> Add Products</span>
                </div>
              </NavLink>
            </li>
            <li className="  mt-2 text-white mb-8">
              <NavLink
                className="flex gap-2 text-xl p-4 font-semibold items-center"
                to="/dashboard/delivery"
              >
               <div className="flex gap-4 mx-auto md:mx-0">
               <Icon icon="iconoir:delivery-truck" />
                <span className="hidden md:inline-block">
                 
                  Delivery & Return
                </span>
               </div>
              </NavLink>
            </li>
            <li className=" mt-2 text-white mb-8">
              <NavLink
                className="flex gap-2 p-4 text-xl font-semibold items-center"
                to="/dashboard/contact"
              >
                <div className="flex gap-4 mx-auto md:mx-0">
                <Icon icon="ri:contacts-fill" />
                <span className="hidden md:inline-block"> Contact Details</span>
                </div>
              </NavLink>
            </li>
            <li className=" mt-2 text-white mb-8">
              <NavLink
                className="flex gap-2 p-4 text-xl font-semibold items-center"
                to="/dashboard/faq"
              >
                  <div className="flex gap-4 mx-auto md:mx-0">
                  <Icon icon="bi:chat-right-dots-fill" />
                <span className="hidden md:inline-block">FAQ</span>
                  </div>
              </NavLink>
            </li>
            <li className=" mt-2 text-white mb-8">
              <button className="flex hover:text-[#3997B1] transition-all delay-100 ease-in-out p-4 gap-2 text-xl font-semibold items-center">
               <div className="flex gap-4 mx-auto md:mx-0">
               <Icon icon="mi:log-in" />
                <span className="hidden md:inline-block">Log Out</span>
               </div>
              </button>
            </li>
          </ul>
        </div>
        <div className="col-span-8">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
