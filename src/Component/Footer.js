import React,{Fragment} from 'react'
import "../CSS/Footer.css"

const Footer = () => {
  return (
    <Fragment>

    <section className="footer">

        <h2>Odinson</h2>

        <div className='footer-nav'>
        <ul>
            <li><a href="#home"> Home </a></li>
            <li><a href="#about"> About </a></li>  
            <li><a href="#services"> Services  </a></li>
            <li><a href="#portfolio"> Portfolio </a></li> 
            <li><a href="#blog">Blog</a></li>                           
        </ul>
       </div>

        <div class="footer-icon">
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-pinterest"></i></a>
        </div>
        
        <p>Copyright ©2023 All rights reserved by <span> Odinson </span> </p>

    </section>
    
    </Fragment>
  )
}

export default Footer