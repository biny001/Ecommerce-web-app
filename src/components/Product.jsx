import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { id, image, category, title, price } = product;
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <div
        className=" mb-4 relative overflow-hidden 
      group transition border 
      border-[#e4e4e4] h-[300px]"
      >
        <div className="w-full h-full flex justify-center items-center">
          {/*Image */}
          <div className="w-[200px] mx-auto flex  justify-center items-center">
            <img
              className=" transition group-hover:cursor-pointer duration-300 max-h-[160px] group-hover:scale-110"
              src={image}
              alt="cloth"
            />
          </div>
        </div>
        {/* buttons */}
        <div className="group-hover:right-5  gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute top-6 -right-11  p-2 flex flex-col items-center justify-center">
          <button onClick={() => addToCart(product, id)}>
            <div className="  bg-red-500    flex justify-center items-center text-white w-12 h-12">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category,title,price */}
      <div>
        <div className=" mb-1 text-grey-500 text-sm capitalize">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
