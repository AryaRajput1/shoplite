import "./Header.scss";

import { TbSearch } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";

import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import Search from "./Search/Search";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const handleScroll = (e) => {
    const offset = window.scrollY;
    if (offset > 200) {
        
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
      <div className="header-content">
        <ul className="left">
          <li><a href={'/'}>Home</a></li>
          <li><a href={'/category/1'}>Category</a></li>
          <li><a href={'/product/1'}>Product</a></li>
        </ul>
        <div className="center">SHOPLITE.</div>
        <div className="right">
          <TbSearch onClick={()=> setShowSearch(true)}/>
          <AiOutlineHeart />
          <span className="cart-icon">
            <CgShoppingCart onClick={()=> setShowCart(true)}/>
            <span>6</span>
          </span>
        </div>
      </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart}/>}
    {showSearch && <Search setShowSearch={setShowSearch}/>}
    </>
  );
};

export default Header;
