import Product from "./Product/Product";
import "./Products.scss";

const Products = ({ isCategoryPage, headingText, products }) => {
  return (
    <div className="products-container">
      {!isCategoryPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.map(prod => (<Product key={prod.id} product={prod} />))}
      </div>
    </div>
  );
};

export default Products;
