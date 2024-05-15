import "./SingleProduct.scss";

import prod from "../../assets/products/headphone-prod-1.webp";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

import "./SingleProduct.scss";
import { useLocation, useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/fetchData";
import { useContext, useEffect, useState } from "react";
import Context from "../../utils/context";
const SingleProduct = () => {
  const {id} = useParams()
  const products = useFetchData(`/api/products?populate=*&[filters][id]=${id}`)

  const location = useLocation()

  useEffect(()=>{
    window.scrollTo(0,0)
  },[location])

  const {handleAddToCart} = useContext(Context)

  const [cartCount,setCartCount] = useState(1)

  const decCartCount = ()=>{
    if(cartCount>0){
      setCartCount(prev=>prev-1)
    }
  }

  const incCartCount = ()=>{
      setCartCount(prev=>prev+1)
  }

  if(!products || products.length <= 0) {
    return 
  }
  const data= products[0].attributes
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
            <div className="left"><img src={data?.image?.data?.attributes?.url} alt="product"/></div>
            <div className="right">
                <span className="name"> {data?.title}</span>
                <span className="price"> &#8377; {data?.price}</span>
                <span className="desc">{data.desc} </span>
                <div className="cart-buttons">
                  <div className="quantity-buttons">
                    <span onClick={decCartCount} className={`${cartCount?'':'disabled'}`}>-</span>
                    <span>{cartCount}</span>
                    <span onClick={incCartCount}>+</span>
                  </div>
                  <button className="add-to-cart-button" onClick={()=>{
                    handleAddToCart( products[0],cartCount)
                    setCartCount(1)
                    }}><FaCartPlus/>ADD TO CART</button>
                </div>
                <span className="divider"></span>
                <div className="info-item">
                  <span className="text-bold">Category: <span>{data?.categories?.data?.[0].attributes?.title}</span></span>
                  <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                  

                </div>
            </div>
        </div>
        <RelatedProducts productId={id} categoryId={data?.categories?.data?.[0]?.id}/>
      </div>
    </div>
  );
};

export default SingleProduct;
