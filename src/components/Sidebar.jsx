import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash, FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearFromCart, total, itemAmount } = useContext(CartContext);
  // console.log(useContext(CartContext));

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      }   transition-all duration-300 z-20 px-4 lg:px-[35px] shadow-2xl md:w-[35vw] xl:max-w-[30vh] w-full bg-white fixed top-0  h-full
      `}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Bag({itemAmount})
        </div>
        {/* icon */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex overflow-x-hidden h-[300px] lg:h-[300px] flex-col gap-y-2 overflow-y-auto">
        {cart.map((item) => {
          return (
            <CartItem
              item={item}
              key={item.id}
            />
          );
        })}
      </div>
      <div className="  flex flex-col gap-y-3 py-4 mt-4">
        <div className=" flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase  font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearFromCart}
            className=" cursor-pointer py-4 bg-rose-500 text-white w-12 h-12 flex justify-center items-center text-xl "
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to="/"
          className="bg-gray-200 flex p-4 font-medium justify-center text-primary w-full items-center"
        >
          View cart
        </Link>
        <Link
          to="/"
          className="bg-primary flex p-4 font-medium justify-center text-white w-full items-center"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
