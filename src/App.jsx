import { useEffect, useState } from 'react'
import Header from './components/1-header/header'
import Section from './components/2-section/section'
import Projects from './components/3-main/projects'
import Contact from './components/4-contact/contact'
import Footer from './components/5-footer/footer'



function App() {
//allows to perform side effects in components
   useEffect(()=>{

  window.addEventListener("scroll", () => { 
    if(window.scrollY>300){
      setShowScrollBtn(true)
     }else{
      setShowScrollBtn(false) }
  });
 },[])




const [showScrollBtn ,setShowScrollBtn]=useState(false)



  return (
    <div id="up" className="container">
    <Header  />
    {/* < div className="divider" /> */}
    <Section />
    < div  className="divider" />
    <Projects />
    < div  className="divider" />
    <Contact />
    < div className="divider" />
    <Footer />
    
     
    <a style={{opacity:showScrollBtn? 1:0 ,transition:"1s"}} href='#up'>
    <button className='icon-keyboard_arrow_up scroll2Top'></button>
    </a>

    </div>
  )
}

export default App;
