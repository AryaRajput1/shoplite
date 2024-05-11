import "./Home.scss";

import Banner from "./Banner/Banner";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import Products from "../Products/Products";
import { useContext, useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import Context from "../../utils/context";
const Home = () => {
  const { categories,setCategories,products,setProducts} = useContext(Context)
  useEffect(()=>{
    getCategories()
    getProducts()
  },[])

  const getCategories = async ()=>{
    const response = await fetchDataFromApi('/api/categories?populate=*')
    setCategories(response.data)
  }

  const getProducts = async ()=>{
    const response = await fetchDataFromApi('/api/products?populate=*')
    setProducts(response.data)
  }
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <ShopByCategory categories={categories}/>
          <Products headingText="Popular Products" products={products}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
