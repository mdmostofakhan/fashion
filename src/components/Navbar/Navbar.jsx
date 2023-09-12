import { Link } from "react-router-dom";
import logo from "../../assets/logo/UrbanUtopia.png";
import cartIcon from "../../assets/icons/Vector.png";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div className="lg:mx-0 mx-5">
      <div className="container mx-auto py-1 xl:px-0 lg:px-2 md:px-5 ">
        <div className="lg:navbar md:navbar px-0">
          <div className="flex-1 lg:w-48 md:w-60 py-5 mx-auto lg:h-14 ">
            <Link to="/" className="text-center">
              <p className='logoFont text-[#03384D] text-4xl font-bold'><span className='text-[#3B95B0] logoFont'>Urban</span>Utopia</p>
            </Link>
          </div>
          <div className="flex items-center lg:gap-5 justify-center gap-3">
            <div className="form-control relative lg:w-80 md:w-60 w-full">
              <input
                type="text"
                placeholder="Search Products"
                className=" input input-bordered rounded-full border-black w-full h-10 md:w-auto"
              />
              <div className="absolute top-2 lg:right-5 md:right-5 right-2 ">
                <Icon className="text-2xl" icon="circum:search" />
              </div>
            </div>
            <div>
              <Link to='/login' className="border rounded-full lg:w-[122px] hover:bg-[#03384D] hover:text-white transition duration-300 ease-in-out font-medium md:w-20 text-2xl md:h-10 lg:h-10 bg-transparent px-5 py-1 border-black">
                login
              </Link>
            </div>
            <div className="md:w-9 relative hover:scale-110">
              <Link to='/cart'><Icon className="w-full text-5xl" icon="fluent:cart-16-regular" /></Link>
              <div className="badge bg-[#3B95B0] border-2 gap-2 absolute -top-0 -right-4 text-white">
                0
              </div>
              {/* <div className="badge badge-primary absolute -top-0 -right-8">+99</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
