import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, curItem) => {
      return acc + curItem.price * curItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, cur) => {
        return acc + cur.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  //add to cart
  const addToCart = (product, id) => {
    const newItem = {
      ...product,
      amount: 1,
    };
    //check if item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  //clear cart

  const clearFromCart = () => {
    setCart([]);
  };

  //increaseAmount
  const increaseAmount = (id) => {
    // const newCart = cart.map((item) => {
    //   if (item.id === id) {
    //     return { ...item, amount: item.amount + 1 };
    //   } else {
    //     return item;
    //   }
    // });
    // setCart(newCart);
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  };

  //Decrease amount
  const decreaseAmount = (id) => {
    const newCart = cart
      .map((item) => {
        if (item.id === id && item.amount > 0) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      })
      .filter((item) => item.amount > 0);

    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearFromCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
