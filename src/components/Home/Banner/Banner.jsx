import "./Banner.scss";

import BannerImg from '../../../assets/products/headphone-prod-4.webp'
import { useFetchData } from "../../../hooks/fetchData";
import { useEffect, useState } from "react";
const Banner = () => {
    const products = useFetchData('/api/products?populate=*')

    const [currImg , setCurrImg] = useState(BannerImg)

    useEffect(()=>{
        const t1= setInterval(()=>{
            const productImageArray = products?.map(product => product?.attributes?.image?.data?.attributes.url);
           const x =Math.floor(Math.random() * (productImageArray.length+1));
           console.log(productImageArray[x])
            setCurrImg(process.env.REACT_APP_BASE_URL+productImageArray[x])
            },5000)
           return () => clearInterval(t1)
    },[products])

    if(!products || products.length === 0)
        return

    return <>
    <div className="hero-banner">
        <div className="content">

            <div className="text-content">
                <h1>SALES</h1>
                <p>Choose From a Wide Range, Available At Great Prices. Prime Members Can Enjoy Unlimited Free Shipping, Early Access To Lightning Deals and More.</p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta shop-btn">Shop Now</div>
                </div>
            </div>
                <img src={currImg ||BannerImg} alt="Banner" className="banner-img"/>
        </div>
    </div>
    </>;
};

export default Banner;
