import "./Product.scss";

import prod from "../../../assets/products/headphone-prod-1.webp";
const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={prod} alt="Apple Watch" />
      </div>
      <div className="prod-details">
        <span className="name">Apple Watch</span>
        <span className="price">&#8377;39,999</span>
      </div>
    </div>
  );
};

export default Product;
