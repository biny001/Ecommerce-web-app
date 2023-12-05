import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { category, title, id, price, image, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img
            className="max-w-[80px]"
            src={image}
            alt="cloth"
          />
        </Link>
        <div className="w-full flex flex-col">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            <Link
              className="text-primary hover:underline text-sm uppercase font-medium max-w-[240px]"
              to={`/product/${id}`}
            >
              {title}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="text-sm   flex gap-x-2 h-[36px]">
            {/* qty */}
            <div className="flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium">
              {/* remove icon */}
              <div
                onClick={() => decreaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="px-2 h-full flex justify-center items-center">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(id)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item price */}
            <div className="flex-1 flex items-center justify-around">
              $ {price}
            </div>
            {/* final price */}
            <div className="flex-1 flex justify-end items-center text-primary font-medium">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
