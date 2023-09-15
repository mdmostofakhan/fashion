import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { getCategory, getIems } from "../Api/ApiService";
import { useDispatch, useSelector } from "react-redux";
import { addCategories } from "../store/slices/CategorySlices";
import { addItems } from "../store/slices/ItemsSlices";
import ChatOption from "../pages/Home/ChatOption/ChatOption";
import { addToCartProducts, getStoredCart } from "../utilities/fakedb";

const Main = () => {
  // const [products, setProducts] = useState([]);
  let foundProducts = [];

  const dispatch = useDispatch();
  useEffect(() => {
    const data = getCategory().then((data) => dispatch(addCategories(data)));
    // setCategories(data);
  }, []);
  useEffect(() => {
    getIems().then((data) => dispatch(addItems(data)));
  }, []);


  /* const itemsData = useSelector((state) => {
    // console.log(state.items.data)
    return state.items.data;
  });

  useEffect(() => {
    const storedCart = getStoredCart();
    // console.log(storedCart)

    if (itemsData) {
      for (const id in storedCart) {
        const savedCart = itemsData?.find(item => item.id == id)
        if (savedCart) {
          if (!Object.isExtensible(savedCart)) {
            // Make the object extensible
            Object.preventExtensions(savedCart);
          }
          let quantityItem = storedCart[id]

          const updatedObject = {
            ...savedCart,
            quantity: quantityItem,
          };


          // console.log(updatedObject)

          // const fieldName = "quantityIt";
          // savedCart[fieldName] = quantityItem;

          // const cartItem = savedCart.quantity = quantityItem
          // console.log(savedCart.quantity = quantityItem)
          // foundProducts = [...foundProducts, savedCart]
          foundProducts.push(updatedObject)
        }
      }
    }
    // setProducts(foundProducts)
    addToCartProducts(foundProducts)
  }, []) */



  const location = useLocation();
  const shouldRenderNavbarAndFooter = location.pathname !== '/';

  return (
    <div>
      {shouldRenderNavbarAndFooter && <Navbar></Navbar>}
      <Outlet></Outlet>
      <div className='fixed bottom-5 right-5'>
        <ChatOption></ChatOption>
      </div>
      {shouldRenderNavbarAndFooter && <Footer></Footer>}
    </div>
  );
};

export default Main;
