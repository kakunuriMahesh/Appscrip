
// import { IoIosArrowDown } from "react-icons/io";
import './index.css'
const SideBar = ()=>{
    return(
        <div className='filter-column-container'>
            <div className="customizble-container">
                <input type="checkbox"/>
                <h5>CUSTOMIZBLE</h5>
            </div>
            <div className='filter-item'>
                <select>
                    <option>IDEAL FOR</option>
                </select>
                <p>ALL</p>
            </div>
            <div className='filter-item'>
                <select>
                    <option>OCCASION</option>
                </select>
                <p>ALL</p>
            </div>
            <div className='filter-item'>
                <select>
                    <option>WORK</option>
                </select>
                <p>ALL</p>
            </div>
            <div className='filter-item'>
                <select>
                    <option>FABRIC</option>
                </select>
                <p>ALL</p>
            </div>
            <div className='filter-item'>
                <select>
                    <option>SEGMENT</option>
                </select>
                <p>ALL</p>
            </div>
            <div className='filter-item'>
                <select>
                    <option>SUITABLE FOR</option>
                </select>
                <p>ALL</p>
            </div>
            <div className='filter-item'>
                <select>
                    <option>RAW MATERIALS</option>
                </select>
                <p>ALL</p>
            </div>
            <div className='filter-item'>
                <select>
                    <option>PATTERN</option>
                </select>
                <p>ALL</p>
            </div>
        </div>
    )
}
export default SideBar