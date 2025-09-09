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
    <div className="container text-muted ">
      <div className="row mt-5 pt-5">
            <div className="col-6 pt-5 mt-5" style={{paddingRight:"5%",paddingLeft:"10%"}}>
          
                <h1 className="fs-4">{productName}</h1>
                <p
                    style={{
                    fontSize: "1.08rem",
                    paddingRight: "17%",
                    lineHeight: "1.8rem",
                    color: "#424242",
                    wordSpacing: "2px",
                    }}>
                    {productDescription}
                </p>
            <div>
                {tryDemo && (
              <a href={tryDemo} style={{textDecoration: "none",fontSize: "16px",fontWeight: "500",}}>
                Learn More →
              </a>)}
                {coin && (
              <a href={coin}style={{ marginLeft: tryDemo ? "20px" : 0,textDecoration: "none",fontSize: "16px",fontWeight: "500",}}>
                Coin →</a>)}
                {learnMore && (
              <a href={learnMore}style={{
                  marginLeft: tryDemo || coin ? "20px" : 0,
                  textDecoration: "none",
                  fontWeight: "500",}}>
                Kite Connect →</a>)}
          </div>
          
          
        </div>
            <div className="col-6  ">
                <img src={imageURL} style={{ paddingRight: "1%",marginLeft:"-13%" }} alt="" />
            </div>
      </div>
    </div>
     );
}

export default RightSection;