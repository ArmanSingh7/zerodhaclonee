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
    <div className="container">
      <div className="row align-items-center g-5">
    {/* Image */}
    <div className="col-md-7 ">
      <img src={imageURL} className="img-fluid" alt={productName} style={{paddingLeft:"10%"}}/>
    </div>

    {/* Text */}
    <div className="col-md-5 ">
      <h1 className="fs-4 mb-4">{productName}</h1>
      <p
        style={{
          fontSize: "1.08rem",
          lineHeight: "1.8rem",
          color: "#424242",
          wordSpacing: "2px",
           maxWidth: "460px",
           paddingRight:"18%"
        }}
      >
        {productDescription}
      </p>

          {/* Links */}
          <div className="mb-3">
            {tryDemo && (
              <a
                href={tryDemo}
                style={{ textDecoration: "none", fontSize: "16px", fontWeight: "500" }}
              >
                Try Demo →
              </a>
            )}
            {coin && (
              <a
                href={coin}
                style={{
                  marginLeft: tryDemo ? "20px" : 0,
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Coin →
              </a>
            )}
            {learnMore && (
              <a
                href={learnMore}
                style={{
                  marginLeft: tryDemo || coin ? "20px" : 0,
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                Learn More →
              </a>
            )}
          </div>

          {/* App store buttons */}
          {(googlePlay || appStore) && (
            <div className="mt-3">
              {googlePlay && (
                <a href={googlePlay}>
                  <img
                    src="media/googlePlayBadge.svg"
                    alt="Get it on Google Play"
                    className="img-fluid"
                    style={{ maxWidth: "150px" }}
                  />
                </a>
              )}
              {appStore && (
                <a
                  href={appStore}
                  style={{ marginLeft: googlePlay ? "20px" : 0 }}
                >
                  <img
                    src="media/appstoreBadge.svg"
                    alt="Download on the App Store"
                    className="img-fluid"
                    style={{ maxWidth: "150px" }}
                  />
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
