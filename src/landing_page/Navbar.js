import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (

      <nav class="navbar navbar-expand-lg fixed-top border-bottom" style={{backgroundColor:"#FFF",paddingLeft:"12.5%",paddingRight:"2%"}}>
        <div class="container p-2 ">
          <Link class="navbar-brand" to="/">
            <img src="media/logo.svg" alt="Logo" style={{width:"25%"}}/>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
           

            <form class="d-flex" role="search">
               <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{marginLeft:"-15%"}}>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup" style={{color:"GrayText",fontWeight:"500",fontSize:"15px"}}>
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about" style={{color:"GrayText",fontWeight:"500",fontSize:"15px"}}>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/product" style={{color:"GrayText",fontWeight:"500",fontSize:"15px"}}>
                 Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/pricing" style={{color:"GrayText",fontWeight:"500",fontSize:"15px"}}>
                 Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support" style={{color:"GrayText",fontWeight:"500",fontSize:"15px"}}>
                 Support
                </Link>
              </li>
            </ul>
            </form>
          </div>
        </div>

      </nav>

  );
}

export default Navbar;
