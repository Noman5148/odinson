import React,{Fragment} from 'react'
import "../CSS/Home.css"

const Home = () => {
  return (
    <Fragment>
    <section className="home" id = "home">

        <div className="home-content">
          <h3>Its Me!</h3>
          <h2>Thor Odinson</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui aliquid veritatis ipsum. Nihil, mollitia nesciunt</p>  
      </div>
        
        <div class="social">
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-pinterest"></i></a>
        </div>

        <div className="hire-btn">
        <a href="#contact"> Hire Me </a>
        </div>

    </section>

    </Fragment>
  )
}

export default Home