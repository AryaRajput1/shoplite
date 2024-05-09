import Product from "./Product/Product";
import "./Products.scss";

const Products = ({ isCategoryPage,headingText }) => {
  return (
    <div className="products-container">
      {!isCategoryPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
