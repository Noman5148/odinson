import React,{Fragment} from 'react'
import './App.css' 
import Home from "./Component/Home"
import About from './Component/About'
import Portfolio from './Component/Portfolio'
import Contact from "./Component/Contact"
import Blog from "./Component/Blog"
import Resume from './Component/Resume'
import Services from './Component/Services'
import Testimonail from "./Component/Testimonail"
import Navbar from './Component/Navbar'
import Footer from "./Component/Footer"

const App = () => {

  return (
    <Fragment>
    <Navbar/>
    <Home/>
    <About/> 
    <Resume/>  
    <Services/>
    <Testimonail/>
    <Portfolio/>
    <Blog/>
    <Contact/>
    <Footer/>


    </Fragment>
  )
}

export default App