import React from 'react';

function Education() {
    return ( 
         <div className='container p-5'>
            <div className='row '>
                <div className='col-6'>
                    <img src='media/education.svg' style={{width:"75%"}}/>
                </div>
                <div className='col-6'>
                    <h1 className='mb-3 fs-3'>Free and open market education</h1>
                    <p className='mt-4' style={{ paddingRight: "6.5rem", fontFamily:"sans-serif" , lineHeight:"1.8rem" }}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href='' className='mx-0 ' style={{textDecoration:"none" , fontFamily:"sans-serif" , lineHeight:"1.8rem"}}>Varsity <i class="fa fa-arrow-right ms-2" aria-hidden="true"></i></a>
                    
                    <p className='mt-4' style={{ paddingRight: "6.5rem" , fontFamily:"sans-serif"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href='' className='mx-0 ' style={{textDecoration:"none"}}>TradingQ&A<i class="fa fa-arrow-right ms-2" aria-hidden="true"></i></a>
                 </div>
                
                

            </div>
        </div>
     );
}

export default Education;