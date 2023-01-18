import React,{Fragment,useEffect} from 'react'
import "../CSS/Services.css"
import Aos from 'aos'
import "aos/dist/aos.css"

const Services = () => {
    useEffect(()=>{

        Aos.init({ duration: 2000, once:true, easing:"ease"});
     
      }, [])
  return (
    <Fragment>

    <section className="services" id='services'>

        <div className="ser-tittle">
        <h2> MY SERVICES  </h2> 
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, temporibus consequuntur dicta ullam illo facere.</p>
        </div>

        <div className="ser-row">

        <div data-aos = "fade-up-right" className="ser-col">
            <div className="single-ser">
            <span class="ico-area"> <i class="fa-solid fa-camera"></i> </span>
            <div class="service-desc">
                <h2>Photoshope</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eveniet accusantium consequatur blanditiis.</p>
            </div>
            </div>
        </div>

        <div data-aos = "zoom-in" className="ser-col">
            <div className="single-ser">
            <span class="ico-area"> <i class="fa-solid fa-laptop"></i> </span>
            <div class="service-desc">
                <h2>Frontend</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eveniet accusantium consequatur blanditiis.</p>
            </div>
            </div>
        </div>

        <div data-aos = "zoom-in" className="ser-col">
            <div className="single-ser">
            <span class="ico-area"> <i class="fa-solid fa-pen-nib"></i> </span>
            <div class="service-desc">
                <h2>Designer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eveniet accusantium consequatur blanditiis.</p>
            </div>
            </div>
        </div>

        <div data-aos = "fade-up-left" className="ser-col">
            <div className="single-ser">
            <span class="ico-area"> <i class="fa-solid fa-code"></i></span>
            <div class="service-desc">
                <h2>Full Stack</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eveniet accusantium consequatur blanditiis.</p>
            </div>
            </div>
        </div>

        </div>

    </section>

    </Fragment>
  )
}

export default Services