import "./Banner.scss";

import BannerImg from '../../../assets/banner-img.png'
const Banner = () => {
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
                <img src={BannerImg} alt="Banner" className="banner-img"/>
        </div>
    </div>
    </>;
};

export default Banner;
