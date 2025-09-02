import React from 'react';

function Team() {
    return ( 
        <>
        <div className='container'>
        <div className='row '>
            <h1 className='text-center' style={{color:"#424242", lineHeight:"1.5", fontSize:"1.5rem"}}> People </h1>
        </div>
        <div className='row mt-5' style={{color:"#424242",lineHeight:"1.8",fontWeight:"400", fontSize:"1.02rem"}}>
            <div className='col-6 pb-5 pl-5 text-center'>
                <img src="media/nithinKamath.jpg" style={{width:"50%" , borderRadius:"100%",marginLeft:"25%"}}/>

                <h5 className='mt-3' style={{position:"relative",marginLeft:"20%"}}>Nithin Kamath</h5>
                <p style={{marginLeft:"20%"}}>Founder , CEO</p>
            </div>
            <div className='col-6' style={{paddingRight:"10%",marginLeft:"-4%"}}>         
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                </p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                 <p>Connect on <a href="https://nithinkamath.me/" style={{textDecoration:"none"}}>Homepage</a> / <a href="https://nithinkamath.me/" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="https://nithinkamath.me/" style={{textDecoration:"none"}}>Twitter</a></p>
                
            </div>
        </div>
      </div>

        </>
     );
}

export default Team;