import "./Home.scss";

import Banner from './Banner/Banner'
import ShopByCategory from "./ShopByCategory/ShopByCategory";
const Home = () => {
    return <div style={{height: '2000px'}}>
        <Banner/>
        <div className="main-content">
            <div className="layout">

        <ShopByCategory/>
            </div>
        </div>
    </div>;
};

export default Home;
