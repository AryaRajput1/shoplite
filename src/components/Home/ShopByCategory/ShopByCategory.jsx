import "./ShopByCategory.scss";

import cat1 from "../../../assets/category/cat-1.jpg";
import cat2 from "../../../assets/category/cat-2.jpg";
import cat3 from "../../../assets/category/cat-3.jpg";
import cat4 from "../../../assets/category/cat-4.jpg";
const ShopByCategory = () => {
    return <div className="shop-by-category" >
        <div className="categories">
            <div className="category">
                <img src={cat1} alt="Category-1"/>
            </div>
            <div className="category">
                <img src={cat2} alt="Category-2"/>
            </div>
            <div className="category">
                <img src={cat3} alt="Category-3"/>
            </div>
            <div className="category">
                <img src={cat4} alt="Category-4"/>
            </div>
        </div>

    </div>;
};

export default ShopByCategory;
