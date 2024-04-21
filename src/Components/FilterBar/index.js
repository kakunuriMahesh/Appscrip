import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './index.css'
import SideBar from "../SideBar";
import Products from "../Products";

const FilterBar = () => {
    const [showSideBar, setShowSideBar] = useState(false);

    const toggleSideBar = () => {
        setShowSideBar(!showSideBar);
    }

    return (
        <div>
            <div className="filterbar-main-container">
                <div className="filter">
                    <h5>3425 ITEMS</h5>
                    <div>
                        {showSideBar ? (
                            <div>
                                <IoIosArrowBack />
                                <h5 onClick={toggleSideBar}>HIDE FILTER</h5>
                            </div>
                        ) : (
                            <div>
                                <IoIosArrowForward />
                                <h5 onClick={toggleSideBar}>SHOW FILTER</h5>
                            </div>
                        )}
                    </div>
                </div>
                <select className="min select-recommended-items">
                    <option value='recommended' className="recommended">RECOMMENDED</option>
                    <option value='newest'>NEWEST FIRST</option>
                    <option value='popular'>POPULAR</option>
                    <option value='hightolow'>PRICE: HIGH TO LOW</option>
                    <option value='lowtohigh'>PRICE: LOW TO HIGH</option>
                </select>
                <div className="min-filter">
                    <hr/>
                    <div className="min-filter-flex">
                        <h5 className="filter-head" onClick={toggleSideBar}>FILTER</h5>
                        <hr className="hrmin"/>
                        <select className="select-recommended-items min-select">
                            <option value='recommended' className="recommended">RECOMMENDED</option>
                            <option value='newest'>NEWEST FIRST</option>
                            <option value='popular'>POPULAR</option>
                            <option value='hightolow'>PRICE: HIGH TO LOW</option>
                            <option value='lowtohigh'>PRICE: LOW TO HIGH</option>
                        </select>
                    </div>
                    <hr/>
                </div>
            </div>
            <div className="slidebar-product-container">
                {showSideBar && <SideBar />}
                <Products view={showSideBar}/>
            </div>
        </div>
    )
}

export default FilterBar;
