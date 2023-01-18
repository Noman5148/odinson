import React,{Fragment,useEffect} from 'react'
import person from "../Images/ian-dooley-d1UPkiFd04A-unsplash.jpg"
import "../CSS/Testimonail.css"
import Aos from 'aos'
import "aos/dist/aos.css"
 
const Testimonail = () => {
  useEffect(()=>{

    Aos.init({ duration: 2000, once:true, easing:"ease"});
 
  }, [])
  return (
    <Fragment>

    <section className="test">

    <div className='test-tittle'>
		<h2>What <span> Client Say </span> </h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, temporibus consequuntur dicta ullam illo facere.</p>
  </div>

    <div className="test-row">

    <div data-aos = "zoom-in-right" className="single-testi">
      <i class="fa-solid fa-quote-left"></i>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum modi quod, nulla animi ab repellendus officia iure. Ratione, deleniti omnis!</p>
        <div className="client-data">
        <div class="testi-img"> 
            <img src={person} alt="person"/> 
         </div>
         <div className="client-name">
            <h2>David Warner</h2> 
            <h3>Manager, OPPO</h3>
         </div>
      </div>  
   </div>

   <div data-aos = "zoom-in" class="single-testi">
       <i class="fa-solid fa-quote-left"></i>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum modi quod, nulla animi ab repellendus officia iure. Ratione, deleniti omnis!</p>
        <div className="client-data">
        <div class="testi-img"> 
            <img src={person} alt="person"/> 
         </div>
         <div className="client-name">
            <h2>Tim David</h2> 
            <h3>CEO, APPLE</h3>
         </div>
      </div>  
   </div>

   <div data-aos = "zoom-in-left" class="single-testi">
   <i class="fa-solid fa-quote-left"></i>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum modi quod, nulla animi ab repellendus officia iure. Ratione, deleniti omnis!</p>
        <div className="client-data">
        <div class="testi-img"> 
            <img src={person} alt="person"/> 
         </div>
         <div className="client-name">
            <h2>Williamson</h2> 
            <h3>CEO, Microsoft</h3>
         </div>
      </div>  
   </div> 
    
    </div>
      
    </section>
   
    </Fragment>
  )
}

export default Testimonail