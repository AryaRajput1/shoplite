import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
// import { useNavigate } from "react-router-dom";

import prod from '../../../assets/products/earbuds-prod-2.webp'
import { useFetchData } from "../../../hooks/fetchData";
import { useNavigate } from "react-router-dom";
const Search = ({ setShowSearch }) => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const onChange = (e) => {
        setQuery(e.target.value);
    };

    let data = useFetchData(`/api/products?populate=*&[filters][title][$contains]=${query}`)

    if(!query){
        data=null
    }

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
                      {data?.map(item=>  <div key={item.id} className="search-result-item" onClick={()=>{
                        navigate('/product/'+item.id+'/')
                        setShowSearch(false)
                      }}>
                            <div className="img-container">
                                <img src={item.attributes?.image?.data?.attributes?.url} alt="product"/>
                            </div>
                            <div className="prod-details">
                                <span className="name">{item.attributes.title}</span>
                                <span className="desc">{item.attributes.desc}</span>
                                <span className="price">&#8377;{item.attributes.price}</span>
                            </div>
                        </div>
                      )}
                    </div>
            </div>
        </div>
    );
};

export default Search;