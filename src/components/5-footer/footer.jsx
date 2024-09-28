import React from 'react';
import './footer.css'


const Footer=()=>{
    return(
        <footer className='flex'>
          <ul className='flex'>
          <li>
            <a href="">About</a>
          </li>    
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          </ul>
          <div  className="flex">
          <p>@2024 All rights reserved</p>
          <img src='../public/images/logoNobg.png' style={{width:80}}/> 
          </div>

        </footer>


    );
}

export default Footer;