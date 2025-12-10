import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/homeHero.png' alt='Hero_image' className='mb-5'/>
            
            <h1 className='mt-5' style={{color:"#666" , fontWeight:"500"}}>Invest in everything  </h1>
            <p className='fs-5' style={{fontWeight:"400",color:"#424242"}}>Online platform to invest in stocks,
                derivatives, mutual funds, and more</p>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"15%",margin:"0 auto",borderRadius:'10px',background:"#387ed1"}}>Sign Up Now</button>
            </div>
        </div>
     );
}

export default Hero;