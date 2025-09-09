import React from 'react'
function Universe(
    {imageURL,
    productName,
    productDescription,
    tryDemo,
    coin,
    learnMore,
    googlePlay,
    appStore,
}) {
    return ( 
       <div className="container p-5">
            <div className="row justify-content-evenly align-items-center "style={{paddingLeft:"8%",paddingRight:"8%"}}>
                <h1 className='fs-4 text-center mt-5 ' style={{color:"#424242"}}>The Zerodha Universe</h1>
                <p className='fs-6 text-center mt-4 mb-5'>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-md-4 col-xs-10  text-center mb-5 p-2'>
                    <img src="media/zerodhaFundhouse.png" className='d-block mx-auto mb-3' style={{width:"65%"}}></img>
                    <p className=' mt-2 d-block mx-auto' style={{fontSize:"12px",maxWidth:"250px",textAlign:"center",paddingLeft:"1%",fontWeight:"500",color:"#9b9b9b"}}>Our asset management venture
                    that is creating simple and transparent index funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-md-4 col-xs-10  text-center mb-5 p-2'>
                    <img src="media/sensibullLogo.svg" style={{width:"75%"}} className='d-block mx-auto mb-4'></img>
                    <p className=' mt-2 d-block mx-auto' style={{fontSize:"12px",maxWidth:"290px",textAlign:"center",paddingLeft:"1%",fontWeight:"500",color:"#9b9b9b"}}>Options trading platform that lets you
                    create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className='col-md-4 col-xs-10  text-center mb-5 p-2'>
                    <img src="media/tijori.svg" style={{width:"50%"}} className='d-block mx-auto mb-3'></img>
                    <p className=' mt-2 d-block mx-auto' style={{fontSize:"12px",maxWidth:"250px",textAlign:"center",paddingLeft:"1%",fontWeight:"500",color:"#9b9b9b"}}>Investment research platform
                    that offers detailed insights on stocks,
                    sectors, supply chains, and more.
                    </p>
                </div>
                <div className='col-md-4 col-xs-10  text-center p-2'>
                    <img src="media/streakLogo.png" style={{width:"50%"}} className='d-block mx-auto mb-3'></img>
                   <p className=' mt-2 d-block mx-auto' style={{fontSize:"12px",maxWidth:"190px",textAlign:"center",paddingLeft:"1%",fontWeight:"500",color:"#9b9b9b"}}>Systematic trading platform
                    that allows you to create and backtest
                    strategies without coding.</p>
                </div>
                <div className='col-md-4 col-xs-10  text-center p-2'>
                    <img src="media/smallcaseLogo.png" className='d-block mx-auto mb-3'></img>
                  <p className=' mt-2 d-block mx-auto' style={{fontSize:"12px",maxWidth:"190px",textAlign:"center",paddingLeft:"1%",fontWeight:"500",color:"#9b9b9b"}}>Thematic investing platform
                    that helps you invest in diversified
                    baskets of stocks on ETFs</p>
                </div>
                <div className='col-md-4 col-xs-10  text-center p-2'>
                    <img src="media/dittoLogo.png" style={{width:"40%"}} className='d-block mx-auto mb-3'></img>
                    <p className='mt-2 d-block mx-auto' style={{fontSize:"12px",maxWidth:"190px",textAlign:"center",paddingLeft:"1%",fontWeight:"500",color:"#9b9b9b"}}>Personalized advice on life
                    and health insurance. No spam
                    and no mis-selling.</p>
                </div>
                 <button className='p-2 mt-5 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto",borderRadius:'5px',backgroundColor:"#387ed1"}}>Sign up for free</button>

            </div>     
    </div>
     );
}

export default Universe;