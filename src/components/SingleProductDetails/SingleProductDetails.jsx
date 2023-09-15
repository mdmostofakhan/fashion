import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Rating from "react-rating";
import { Icon } from "@iconify/react";
import ProductCouter from "../ProductCouter/ProductCouter";
import { Helmet } from "react-helmet";
import Discount50 from "../Discount50/Discount50";
import { Link, useParams } from "react-router-dom";
import { getIems, getSingleItem } from "../../Api/ApiService";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { Fade } from "react-awesome-reveal";
// import { getIems } from "../../Api/ApiService";
import brandIcon from '../../assets/icons/brand-icons/img1.png'

const SingleProductDetails = () => {
  const user = true;

  const { _id } = useParams();
  const [singleItemDetails, setSingleItemDetails] = useState([]);
  const { title, image, price, description } = singleItemDetails;
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [priceItm, setPriceItm] = useState(null);

  // console.log(singleItemDetails)
  let priceItems = price;
  useEffect(() => {
    setPriceItm(quantity * priceItems)
  }, [quantity, price])


  // const handleAddToCart = (product) => {
  //   const newCart = [...cart, product];
  //   setCart(newCart);
  //   addToDb(product.id);
  //   console.log("cart");
  // };

  useEffect(() => {
    getSingleItem(_id).then((singleData) => setSingleItemDetails(singleData));
  }, []);

  // let itemsData = useSelector((state) => {
  //   return state.items;
  // });

  // const itemsDatas = itemsData.data;
  // // console.log(itemsDatas);
  // useEffect(() => {
  //   const storedCart = getStoredCart();
  //   const savedCart = [];
  //   console.log(storedCart);
  //   for (const id in storedCart) {
  //     const addedProduct = itemsDatas?.find((item) => item.id === id);
  //     console.log(addedProduct);
  //     if (addedProduct) {
  //       let quantity = storedCart[id];
  //       addedProduct.quantity = quantity;
  //       savedCart.push(addedProduct);
  //     }
  //     // console.log(id);
  //   }
  //   setCart(savedCart);
  //   // console.log(savedCart);
  //   // console.log("jjj");
  // }, []);


  // toastify 
  const notify = () => toast.success('Your Product Added Successfull', {
    style: {
      backgroundColor: '#0C4E67',
      color: 'white'
    },
    className: "bg-black",
  });
  const handleAddedToCart = () => {
    if (user) {
      notify();
    }
  }


  const handleAddToCart = (item) => {
    console.log(item.id)
    addToDb(item.id)
    if (user) {
      notify();
    }
  }

  const images = [
    {
      original: `${image}`,
      thumbnail: `${image}`,
    },
    {
      original: `${image}`,
      thumbnail: `${image}`,
    },
    {
      original: `${image}`,
      thumbnail: `${image}`,
    },
    {
      original: `${image}`,
      thumbnail: `${image}`,
    },
  ];

  return (
    <div>
      <Helmet>
        <title>UrbanUtopia | Signle Product</title>
      </Helmet>
      <Fade>
        <div className="container mx-auto py-20 px-4 lg:px-0">
          <div className="lg:flex justify-center relative">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:mx-5 lg:items-start gap-8 lg:gap-10 ">
              <div className="w-full lg:w-6/12 md:w-11/12">
                <ImageGallery
                  showPlayButton={false}
                  slideOnThumbnailOver={true}
                  showFullscreenButton={false}
                  slideDuration={50}
                  items={images}
                />
              </div>
              <div className="w-full lg:w-6/12 md:w-11/12 space-y-2">
                <h2 className="lg:text-4xl md:text-4xl text-3xl font-semibold">{title}</h2>
                <div className="flex flex-wrap lg:gap-8 md:gap-5 gap-3 items-center">
                  <p className="text-xl font-semibold"><del className="text-[#757575]">41.40৳</del></p>
                  <p className="text-2xl font-semibold"><ins className="no-underline">{price}৳</ins></p>
                  <h4 className="bg-[#DE2121] px-3 py-1 text-sm text-white font-semibold text-center">50% Off</h4>
                  <div>
                    <img src={brandIcon} className="w-full" alt="" />
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <Rating
                    readonly
                    placeholderRating={4.5}
                    emptySymbol={<Icon icon="gridicons:star-outline" />}
                    placeholderSymbol={<Icon icon="ic:baseline-star" />}
                    fullSymbol={<Icon icon="ic:baseline-star-half" />}
                    className='text-2xl text-[#0C4E67]'
                  ></Rating>
                  <span className="text-xs font-medium">{`( 4.5 Rating )`}</span>
                </div>
                <hr />
                <div className="space-y-4">
                  <div className="space-y-2 mt-5 font-semibold">
                    <li className="list-none">New Arribal Shoes collection</li>
                    <li className="list-none">Air force shoes collection</li>
                    <li className="list-none">New design shoes collection</li>
                  </div>
                  <div>
                    <h3 className="font-semibold flex items-center gap-2"><span className="text-xl font-bold uppercase">SKU:</span> Mega-jewe-177-1</h3>
                    <h3 className="font-semibold flex items-center gap-2 mb-5"><span className="text-xl font-bold">Categories:</span> Nike Brand Shoes</h3>
                  </div>
                  <div className="flex gap-5">
                    <button className="lg:w-6/12 border rounded-none border-black bg-white lg:px-8 px-2 md:px-8 py-3 flex items-center gap-3 text-xl"><Icon className="text-2xl  font-bold" icon="streamline:interface-favorite-heart-reward-social-rating-media-heart-it-like-favorite-love" /> Wish List</button>
                    <button className="lg:w-6/12 border rounded-none border-black bg-white py-3 lg:px-9 px-2 md:px-9 text-xl">Size Guide</button>
                  </div>
                  <div className="flex gap-5 flex-wrap">
                    <ProductCouter product={singleItemDetails} />
                    <button onClick={() => handleAddToCart(singleItemDetails)} className="border-black border lg:px-8 px-4 lg:py-0 md:py-0 py-3 lg:w-auto md:w-auto w-full text-xl font-semibold">Add to Cart</button>
                  </div>
                  <div>
                    <Link to='/cart' onClick={() => handleAddToCart(singleItemDetails)}>
                      <button className="border-black border w-full px-8 text-xl font-semibold py-3 bg-[#0C4E67] text-white">Purchase</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default SingleProductDetails;
