import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Context = createContext();

export const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);


  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    const index = items.findIndex((item) => item.id === product.id);
    if (index != -1) {
      items[index].attributes.quantity = quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }

    setCartItems(items);
  };

  useEffect(()=>{
  const subtotal =  cartItems.reduce((acc,item)=>{
      return acc+ item.attributes.quantity*item.attributes.price
    },0)

    const count =  cartItems.reduce((acc,item)=>{
      return acc+ item.attributes.quantity
    },0)

    setCartSubTotal(subtotal)
    setCartCount(count)
  },[cartItems])

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];

    items = items.filter((item) => item.id !== product.id);

    setCartItems(items);
  };

  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    const index = items.findIndex((item) => item.id === product.id);
    if (index != -1) {
      if (type === "inc") {
        items[index].attributes.quantity += 1;
      } else {
        if (type === "dec") {
          if (items[index].attributes.quantity > 1) {
            items[index].attributes.quantity -= 1;
          } else {
            items = items.filter((item) => item.id !== product.id);
          }
        }
      }
    }

    setCartItems(items);
  };

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cartItems,
        setCartItems,
        cartCount,
        setCartCount,
        cartSubTotal,
        setCartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
