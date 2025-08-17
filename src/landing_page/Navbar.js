import React from "react";
function Navbar() {
  return (

      <nav class="navbar navbar-expand-lg fixed-top " style={{backgroundColor:"#FFF"}}>
        <div class="container p-2">
          <a class="navbar-brand" href="##">
            <img src="media/logo.svg" alt="Logo" style={{width:"25%"}}/>
          </a>
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
                <a class="nav-link active" aria-current="page" href="##" style={{color:"#424242",fontWeight:"400"}}>
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="##" style={{color:"#424242",fontWeight:"400"}}>
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="##" style={{color:"#424242",fontWeight:"400"}}>
                 Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="##" style={{color:"#424242",fontWeight:"400"}}>
                 Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="##" style={{color:"#424242",fontWeight:"400"}}>
                 Support
                </a>
              </li>
            </ul>
            </form>
          </div>
        </div>

      </nav>

  );
}

export default Navbar;
