import React from 'react';
function OpenAccount() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
            
            <h1 className='mt-5 mb-4 fs-4' style={{fontWeight:"500" , color:"#424242"}}>Open a Zerodha account </h1>
            <p className='mb-4' style={{color:"#666",fontWeight:"400", fontSize:"1rem" , lineHeight:"1.8" , fontFamily:"sans-serif"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto",borderRadius:'3px',textAlign:"center",fontWeight:"500",backgroundColor:"#387ed1",whiteSpace:"nowrap",maxWidth:"200px"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default OpenAccount;