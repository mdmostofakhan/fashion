import React from "react";
import { useEffect, useState } from "react";
import Category from "../../Category/Category";
import { useSelector } from "react-redux";
import { Fade, Slide } from "react-awesome-reveal";
// import { getCategory } from "../../../Api/ApiService";

const WomenPageCategories = () => {
  // const [categories, setCategories] = useState([]);
  const [quantity, setQuantity] = useState(5);
  // useEffect(() => {
  //   const categoryData = async () => {
  //     const data = await getCategory();
  //     setCategories(data);
  //   };
  //   categoryData();
  // }, []);
  const categoriesData = useSelector((state) => {
    return state.categories;
  });
  return (
    <div className="container  w-[80%] mx-auto">
      <div className="text-center py-20">
        <h3 className="text-3xl font-medium">Top Categories</h3>
      </div>
      <div className=" grid xl:grid-cols-5 lg:grid-cols-4 xl:mx-0 lg:mx-5 md:mx-5 md:grid-cols-4 gap-5 justify-center">
        {categoriesData?.data?.slice(0, quantity)?.map((category, idx) => (
          <Slide><Category key={idx} category={category}></Category></Slide>
        ))}
      </div>

      <div className="flex text-end lg:justify-end md:justify-end justify-center xl:mr-0 lg:mr-5 md:mr-5 mt-10">
        <button
          onClick={() => setQuantity(categoriesData.length)}
          className="bg-[#0C4E67] text-white py-4 px-10 text-2xl"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default WomenPageCategories;
