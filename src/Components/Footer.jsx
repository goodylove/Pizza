import React from 'react';
import "../Style/Footer.css"

function Footer() {
    return (  
        <div className="footer">
            <div className="socialMedia">
                
               <span> <i className='fa fa-twitter'></i></span>
               <span> <i className='fa fa-github'></i></span>
              <span>  <i className='fa fa-instagram'></i></span>
               <span> <i className='fa fa-linkedin'></i></span>
              
     </div>

                <p>&copy; 2022 goodytect.com</p>      
        </div>
    );
}

export default Footer;
