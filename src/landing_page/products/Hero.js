import React from 'react';
function Hero() {
    return ( 
        <>
       <div className='container p-5'>
            <div className='row p-5 text-center border-bottom'>
                <h1 className='fs-3 mt-5'>Zerodha Products</h1>
                <p className='fs-5' style={{paddingTop:"1%",color:"#424242"}}>Sleek, modern, and intuitive trading platforms</p>

                <p style={{fontSize:"1.1rem"}}>Check out our <a href="" style={{textDecoration:"none"}}>investment offerings</a> →</p>
            </div>
       </div>

        </>
     );
}

export default Hero;