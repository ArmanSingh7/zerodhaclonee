import React from 'react';

function Stats() {
    return ( 
        <div className='container pt-3 px-5'>
            <div className='row pt-3 px-5'>
                <div className='col-6 pt-3 px-5 text-muted'>
                    <h1 className='fs-3 mb-5'>Trust With Confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted pt-3 mb-4' style={{ lineHeight: "1.6",paddingRight: "6.5rem" }}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India. </p>
                    <h2 className='fs-4 '>No spam or gimmicks</h2>
                    <p className='text-muted pt-3 mb-4' style={{ lineHeight: "1.6",paddingRight: "6.5rem"  }}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies. </p>
                    <h2 className='fs-4'>The Zerodha universe</h2>
                    <p className='text-muted pt-3 mb-4' style={{ lineHeight: "1.6",paddingRight: "6.5rem"  }}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted pt-3' style={{ lineHeight: "1.6" ,paddingRight: "6.5rem" }}>With initiative like Nudge and Kill Switch , we don't just facilitate transactions, but actively help you do better with your money.</p>
                    
                </div>
                <div className='col-6 mt-5'>
                    <img src='media/ecosystem.png' alt='eco' style={{width:"110%"}}/>
                    <div className='text-center mt-5' >
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore Our products <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Stats;