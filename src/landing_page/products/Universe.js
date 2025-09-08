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
       <div className="container">
            <div className="row ">
                <h1 className='fs-4 text-center mt-5 ' style={{color:"#424242"}}>The Zerodha Universe</h1>
                <p className='fs-6 text-center mt-4'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col'>
                    <img src=''/>
                </div>
                <div className='col'>
                    <img src=''/>
                </div>
                <div className='col'>
                    <img src=''/>
                </div>
                

            </div>     
    </div>
     );
}

export default Universe;