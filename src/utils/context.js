import { createContext, useState } from "react";

const Context = createContext();

export const AppContext = ({ children }) => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();

  return (
    <Context.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
