import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (

      <nav class="navbar navbar-expand-lg fixed-top " style={{backgroundColor:"#FFF"}}>
        <div class="container p-2">
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
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/signup" style={{color:"#424242",fontWeight:"400"}}>
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/about" style={{color:"#424242",fontWeight:"400"}}>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/product" style={{color:"#424242",fontWeight:"400"}}>
                 Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/pricing" style={{color:"#424242",fontWeight:"400"}}>
                 Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support" style={{color:"#424242",fontWeight:"400"}}>
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
