import React,{useState} from 'react'

import {Link} from "react-router-dom";

const Menu = () => {

  const [selectedMenu, setSelectedMenu] = useState(0); 
  const[isProfileDropdownOpen,setIsprofileDropdownOpen]=useState(false);
  
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileClick= (index) =>{
    setIsprofileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass= "menu";
  const activeMenuCass = "menu selected";

  return (
    <div className='menu-container'>
      <img src="kite-logo.svg" alt="" style={{width:"4%"}}/>
      <div className='menus'>
        <div className='profile' onClick={handleMenuClick}>
            <div className='avatar'>
              ZU 
            </div>
            <p className='username'>USERID</p>
          </div>
          <ul>
            <li>
              <Link style={{textDecoration:"none"}} to="/" onClick={() => handleMenuClick(0)}>
                <p className={selectedMenu===0?activeMenuCass : menuClass}>Dashboard</p>
              </Link>
              
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to="/orders" onClick={() =>handleMenuClick(1)}>
                <p className={selectedMenu ===1? activeMenuCass : menuClass} >Orders</p>
              </Link>
             
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to="/holdings" onClick={() =>handleMenuClick(2)}>
                <p className={selectedMenu ===2? activeMenuCass : menuClass} >Holdings</p>
              </Link>
            </li>
            <li>
             <Link style={{textDecoration:"none"}} to="/positions" onClick={() =>handleMenuClick(3)}>
                <p className={selectedMenu ===3? activeMenuCass : menuClass} >Positions</p>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to="/funds" onClick={() =>handleMenuClick(4)}>
                <p className={selectedMenu ===4? activeMenuCass : menuClass} >Funds</p>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to="/apps" onClick={() =>handleMenuClick(5)}>
                <p className={selectedMenu ===5? activeMenuCass : menuClass} >Apps</p>
              </Link>
            </li>
          </ul>
          <hr/>
          
          
      </div>
      
    </div>
  );
};
export default Menu;
