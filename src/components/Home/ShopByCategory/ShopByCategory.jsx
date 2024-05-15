import "./ShopByCategory.scss";

import cat1 from "../../../assets/category/cat-1.jpg";
import cat2 from "../../../assets/category/cat-2.jpg";
import cat3 from "../../../assets/category/cat-3.jpg";
import cat4 from "../../../assets/category/cat-4.jpg";
import { useNavigate } from "react-router-dom";
const ShopByCategory = ({categories}) => {
    const navigate = useNavigate()
    return <div className="shop-by-category" >
        <div className="categories">
        {categories?.map((category) => (<div className="category" key={category.id}  onClick={()=> navigate(`/category/${category.id}`)}>
                <img src={category?.attributes.image?.data?.attributes.url} alt={category.title}/>
            </div>)
        )}
        
        </div>

    </div>;
};

export default ShopByCategory;
