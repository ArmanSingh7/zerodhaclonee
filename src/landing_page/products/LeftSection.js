import React from 'react';
import Hero from '../products/Hero';
function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src = {imageURL} style={{paddingLeft:"15%"}} />
                </div>
                <div className='col-1'></div>
                <div className='col-5 p-5 mt-5'>
                    <h1 className='fs-4 mb-4'>{productName}</h1>
                    <p style={{fontSize:"1.08rem" , paddingRight:"15%",lineHeight:"1.8rem",color:"#424242",wordSpacing:"4px"}}>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}} >Try Demo</a>
                        <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>Learn More</a>
                    </div>
                    <div className='mt-3'>
                        <a href={googlePlay}><img src="media/googlePlayBadge.svg"/></a>
                    <a href={appStore}><img src="media/appstoreBadge.svg"/></a>
                    </div>
                    
                </div>

            </div>

        </div>
     );
}

export default LeftSection;