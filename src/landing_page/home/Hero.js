import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <img src='media/homeHero.png' alt='Hero_image' className='mb-5'/>
            
            <h1 className='mt-5'>Invest in everything  </h1>
            <p>Online platform to invest in stocks,
                derivatives, mutual funds, and more</p>
            <button>Sign Up Now</button>
            </div>
        </div>
     );
}

export default Hero;