import "./Home.scss";

import Banner from "./Banner/Banner";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import Products from "../Products/Products";
const Home = () => {
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
