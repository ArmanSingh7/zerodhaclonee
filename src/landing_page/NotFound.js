import React from 'react';
function NotFound() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
            
            <h1 className='mt-5 mb-4 fs-4' style={{fontWeight:"500" , color:"#424242"}}>404 Not Found </h1>
            <p className='mb-4' style={{color:"#666",fontWeight:"400", fontSize:"1rem" , lineHeight:"1.8" , fontFamily:"sans-serif"}}>Sorry, the page you are looking for does not exist.</p>
            

            </div>
        </div>
     );
}

export default NotFound;