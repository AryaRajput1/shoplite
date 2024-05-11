import Products from "../Products/Products";
import {useNavigate, useParams} from 'react-router-dom'
import "./Category.scss";
import { useFetchData } from "../../hooks/fetchData";
const Category = () => {
    const {id} = useParams()
    const products = useFetchData(`/api/products?populate=*&[filters][categories][id]=${id}`)

    return <div className="category-main-content">
        <div className="layout">
            <div className="category-title">
                {products?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}
            </div>
           {products.length > 0 ? <Products isCategoryPage={true} products={products}/>:<span className="category-no-product">No products available.</span> }
        </div>
    </div>;
};

export default Category;
