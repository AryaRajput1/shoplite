import "./CartItem.scss";

import prod from '../../../assets/products/earbuds-prod-5.webp';
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import Context from "../../../utils/context";
const CartItem = () => {

    const {cartItems,handleAddToCart,handleRemoveFromCart,handleCartProductQuantity} = useContext(Context)



    return <div className="cart-products">
       {  cartItems.map(cartItem=> <div className="cart-product" key={cartItem.id}>
            <div className="img-container">
                <img src={process.env.REACT_APP_BASE_URL+cartItem.attributes.image.data.attributes.url} alt="prod"/>
            </div>
            <div className="prod-details">
                <span className="name">
                    {cartItem.attributes.title}
                </span>
                <MdClose className="close-btn" onClick={()=>handleRemoveFromCart(cartItem)}/>
                <div className="quantity-buttons">
                    <span onClick={()=> handleCartProductQuantity('dec',cartItem)}>-</span>
                    <span>{cartItem.attributes.quantity}</span>
                    <span onClick={()=> handleCartProductQuantity('inc',cartItem)}>+</span>
                  </div>
                  <div className="text">
                    <span>{cartItem?.attributes?.quantity}</span>
                    <span>x</span>
                    <span>&#8377; {cartItem?.attributes?.price}</span>
                    <span>=</span>
                    <span className="highlight">&#8377; {cartItem.attributes?.price*cartItem.attributes?.quantity}</span>
                  </div>
            </div>
        </div>)}

    </div>;
};

export default CartItem;
