
import { CiSearch,CiHeart,CiBag1 } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import LOGO from '../CardImgs/Logo.png'
import { AiOutlineMenu } from "react-icons/ai";

import './index.css'
import FilterBar from "../FilterBar";

const Header = () => {
    return(
        <div className="header-main-container">
            <div className="logo-container">
                <div className="flex-icon">
                    <AiOutlineMenu className="header-menu-icon"/>
                    <img src={LOGO} alt="logo"/>
                </div>
                {/* <img src={LOGO} alt="logo"/> */}
                <h2>LOGO</h2>
                <div className="options-container">
                    <CiSearch className="option"/>
                    <CiHeart className="option"/>
                    <CiBag1 className="option"/>
                    <VscAccount className="option hide-icon"/>
                    <select className="select-language hide-icon" id="language">
                        <option value='Eng' active>Eng</option>
                        <option value='Tel'>Tel</option>
                        <option value='Hin'>Hin</option>
                    </select>
                </div>

            </div>
            <nav>
                <ul className="list-items-container">
                    <li>SHOP</li>
                    <li>SKILLS</li>
                    <li>STORIES</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                </ul>
            </nav>
            <div className="nav-items-min">
                <p className="home">HOME <span className="span-dash">|</span> <span className="shop">SHOP</span></p>
                {/* <p>SHOP</p> */}
            </div>
            <h1>DISCOVER OUR PRODUCTS</h1>
            <p>Lorem ipsum dolor sit amet consectetur. 
                Amet est posuere rhoncus<br/> scelerisque. 
                Dolor integer scelerisque nibh amet mi ut elementum dolor.
                </p>
            <FilterBar/>
        </div>
    )
}
export default Header