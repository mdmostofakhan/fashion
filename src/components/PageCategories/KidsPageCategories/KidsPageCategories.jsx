import React, { useEffect, useState } from "react";
import Category from "../../Category/Category";
// import { getCategory } from "../../../Api/ApiService";
import { useDispatch, useSelector } from "react-redux";
import { Slide } from "react-awesome-reveal";
// import { addCategories } from "../../../store/slices/CategorySlices";

const KidsPageCategories = () => {
  // const [categories, setCategories] = useState([]);
  const [quantity, setQuantity] = useState(5);

  const categoriesData = useSelector((state) => {
    return state.categories;
  });

  // console.log(categoriesData);
  return (
    <div className="container w-[80%] mx-auto">
      <div className="text-center py-20">
        <h3 className="text-3xl font-medium">Top Categories</h3>
      </div>
      <div className=" grid grid-cols-1  lg:grid-cols-5 xl:mx-0 lg:mx-5 md:mx-5 md:grid-cols-3 gap-5 justify-center">
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

export default KidsPageCategories;
