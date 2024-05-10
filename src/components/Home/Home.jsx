import "./Home.scss";

import Banner from "./Banner/Banner";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import Products from "../Products/Products";
import { useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
const Home = () => {
  useEffect(()=>{
    getCategories()
  },[])

  const getCategories = async ()=>{
    // const response = await fetchDataFromApi('/api/categories?populate=*')
  }
  return (
    <div>
      <Banner />
      <div className="main-content">
        <div className="layout">
          <ShopByCategory />
          <Products headingText="Popular Products"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
