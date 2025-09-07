import React from "react";
function LeftSection({
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
    <div className="container text-muted">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageURL} style={{ paddingLeft: "15%" }} alt="" />
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5 mt-5">
          <h1 className="fs-4 mb-4">{productName}</h1>
          <p
            style={{
              fontSize: "1.08rem",
              paddingRight: "18%",
              lineHeight: "1.8rem",
              color: "#424242",
              wordSpacing: "2px",
            }}
          >
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
          {(googlePlay || appStore) && (
            <div className="mt-3">{googlePlay && (
                <a href={googlePlay}><img
                    src="media/googlePlayBadge.svg"
                    alt="Get it on Google Play"/></a>)}
              {appStore && (
                <a href={appStore}
                  style={{ marginLeft: googlePlay ? "20px" : 0 }}>
                  <img src="media/appstoreBadge.svg"
                    alt="Download on the App Store"/>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
