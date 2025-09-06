import React from 'react';
function RightSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    coin,
    learnMore,
    googlePlay,
    appStore,
}) {
    return ( 
    <div className="container">
      <div className="row">
            <div className="col-6 mt-5 " style={{paddingRight:"5%",paddingLeft:"15%",paddingTop:"10%"}}>
          
                <h1 className="fs-4 mt-5 mb-4">{productName}</h1>
                <p
                    style={{
                    fontSize: "1.08rem",
                    paddingRight: "18%",
                    lineHeight: "1.8rem",
                    color: "#424242",
                    wordSpacing: "2px",
                    }}>
                    {productDescription}
                </p>
            <div>
                {tryDemo && (
              <a href={tryDemo} style={{textDecoration: "none",fontSize: "16px",fontWeight: "500",}}>
                Try Demo →
              </a>)}
                {coin && (
              <a href={coin}style={{ marginLeft: tryDemo ? "20px" : 0,textDecoration: "none",fontSize: "16px",fontWeight: "500",}}>
                Coin →</a>)}
                {learnMore && (
              <a href={learnMore}style={{
                  marginLeft: tryDemo || coin ? "20px" : 0,
                  textDecoration: "none",
                  fontWeight: "500",}}>
                Learn More →</a>)}
          </div>
          
          
        </div>
            <div className="col-6">
                <img src={imageURL} style={{ paddingRight: "1%",marginLeft:"-13%" }} alt="" />
            </div>
      </div>
    </div>
     );
}

export default RightSection;