import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const ProductCouter = ({ product }) => {

  // const {id} = product;
  // console.log(id)
  const [itemQuantity, setItemQuantity] = useState(1);

  // const updateCount = (action) => {
  //   if (action === "increment") {
  //     setItemQuantity( quantity + 1);
  //     console.log("call");
  //   } else if (action === "decrement" && quantity > 1) {
  //     setItemQuantity(quantity - 1);
  //   }
  // };
  // console.log(product);


  const handleDcrement = (product) => {
    let productQuantity = product?.quantity
    // let p = productQuantity + 1
    productQuantity += 1
    setItemQuantity(productQuantity => productQuantity - 1)
    console.log(productQuantity, 'hello')
  }
  // let productQuantity = product?.quantity
  const handleIncrement = (product) => {
    let productQuantity = product?.quantity
    // let p = productQuantity + 1
    productQuantity += 1
    setItemQuantity(productQuantity => productQuantity + 1)
    console.log(productQuantity, 'hello')
  }


  return (
    <>
      <div className="flex">
        <button onClick={() => handleDcrement(product)} className="border-black border px-5 py-3 text-2xl font-semibold">-</button>
        <input value={itemQuantity} type="text" disabled className=" border-y w-28 bg-white focus:outline-none  border-black py-2 text-center text-xl" defaultValue='0' />
        <button onClick={() => handleIncrement(product)} className="border-black border px-5 py-3 text-2xl font-semibold">+</button>
      </div>

      {/* <div className="flex items-center w-52">
      <input
        type="text"
        Value={quantity}
        // disabled
        // onClick={updateQuantity}
        className="text-center text-2xl disabled font-semibold w-full input rounded-none border-black focus:outline-none"
      />
      <div className="flex flex-col-reverse gap-1 border-y-[1px] border-r-[1px] border-black py-[5px] px-4">
        <button
            onClick={() => updateCount("decrement")}
          className=" bg-transparent border-none"
        >
          <Icon icon="teenyicons:down-solid" />
        </button>
        <button
            onClick={() => updateCount("increment")}
          className=" bg-transparent border-none"
        >
          <Icon icon="teenyicons:up-solid" />
        </button>
      </div>
    </div> */}
    </>
  );
};

export default ProductCouter;
