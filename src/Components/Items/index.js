

import { LuHeart } from "react-icons/lu";
// import { Link } from "react-router-dom";
// import URL from "../URL";

import './index.css'

const Items = (props) => {
    // console.log(props);
    const { title,image} = props;
    // console.log(item);
    let productName = ''
    const checkProductName = (title)=>{
      // title.length>21?title.slice(0,21)+'...':title
      productName=title.length>21?title.slice(0,21)+'...':title
    } 
    checkProductName(title)

    // const getId = (id)=>{
    //   // <Link to={`/product:${id}`}></Link>
    //   console.log(`${URL}/products/${id} clicked`)
    // }

    return (
      <div className='items-main-container'>
          <div className="image-container">
            {/* To avoid immediate invocation we are using arrow func for img  */}
            <img src={image} className='product-image' alt="product-img"/>
          </div>
          <p className="product-name">{productName}</p>
          <div className="product-signup-caption">
            <p><span>Sign in</span> are Create account to see Price</p>
            <LuHeart className="love"/>
          </div>
      </div>
    );
  };
  
  export default Items;
  