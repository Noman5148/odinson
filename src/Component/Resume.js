import React,{Fragment,useEffect} from 'react'
import "../CSS/Resume.css"
import Aos from 'aos'
import "aos/dist/aos.css"

const Resume = () => {
  useEffect(()=>{

    Aos.init({ duration: 2000, once:true, easing:"ease"});
 
  }, [])
  return (
    <Fragment>
        <section className='resume'>

        <div className="res-tittle">
          <h2>Job History</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, temporibus consequuntur dicta ullam illo facere.</p>
        </div>

        <div className="resume-row">

                <div data-aos = "fade-up-right" className="content">
                <span className="date">2015 - 2017</span>
                  <h4>Software Engineer At Microsoft</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
          
                <div data-aos = "fade-up-left" className="content">
                <span className="date">2018 - 2020</span>
                <h4>Senior Visualiser At Tesla</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

                <div data-aos = "fade-up-right" className="content">
                <span className="date">2020 - 2022</span>
                <h4>Web Designer At Matrola</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

                <div data-aos = "fade-up-left" className="content">
                <span className="date">2013 - 2014</span>
                <h4>Andriod Developer At Goolge</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              

          </div>


        </section>
    </Fragment>
  )
}

export default Resume