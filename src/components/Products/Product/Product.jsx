import "./Product.scss";

import prod from "../../../assets/products/headphone-prod-1.webp";
import { useNavigate } from "react-router-dom";
const Product = ({product}) => {
  const navigate = useNavigate()
  return (
    <div className="product-card" onClick={()=>navigate(`/product/${product.id}`)}>
      <div className="thumbnail">
        <img src={process.env.REACT_APP_BASE_URL+ product.attributes.image.data.attributes.url} alt="Apple Watch" />
      </div>
      <div className="prod-details">
        <span className="name">{product.attributes.title}</span>
        <span className="price">&#8377;{product.attributes.price}</span>
      </div>
    </div>
  );
};

export default Product;
