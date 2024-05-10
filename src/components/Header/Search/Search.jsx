import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
// import { useNavigate } from "react-router-dom";

import prod from '../../../assets/products/earbuds-prod-2.webp'
const Search = ({ setShowSearch }) => {
    const [query, setQuery] = useState("");
    // const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setShowSearch(false)}
                />
            </div>
            <div className="search-result-content">
                    <div className="search-results">
                        <div className="search-result-item">
                            <div className="img-container">
                                <img src={prod} alt="product"/>
                            </div>
                            <div className="prod-details">
                                <span className="name">Earphones</span>
                                <span className="desc">prod details</span>
                                <span className="price">&#8377;22334</span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Search;