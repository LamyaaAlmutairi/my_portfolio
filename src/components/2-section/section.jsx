import React from 'react';
import './section.css'
import Lottie from "lottie-react";
import devAnimation from "../../../public/animation/developer.json"
import { motion } from 'framer-motion';


const Section=()=>{
    return(
      <section id="contact" className="my-Section  flex"> 
        <div className="left-section ">
        
        <div className="avatar flex">
            <motion.img 
           initial={{transform: "scale(0)"}}
           animate={{transform:" scale(1)"}}
           transition={{damping:6 , type:"spring"}}
            
            src="../public/images/logo-modified.png"  className="logo" alt="logo"/>
            <div className="icon-verified"></div>
        </div>
        <motion.h1 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
        
        className="title">Front-End developer</motion.h1>
        <p className="subTitle"> Lamyaa Almutairi,software engineering student with a focus on front-end development.I love building user-friendly, responsive websites and solving technical challenges., I’m constantly learning about performance optimization and new web technologies
        </p>
        <div className="icons-container flex">
            <div className="icon icon-x"></div>
            {/* <div className="icon icon-instagram"></div> */}
            <a href='https://www.linkedin.com/in/lamyaa-almutairi-7b4646273/' target='_blank'><div className="icon icon-linkedin-square"></div></a>
            <a href='https://github.com/LamyaaAlmutairi' target='_blank'><div className="icon icon-github"></div></a>
        </div>

        </div>
        <div className="right-section animation "><Lottie
                className='send-animation' 
                animationData={devAnimation} 
                style={{height:355,alignSelf:"center"}}/></div>


      </section>


    );
}

export default Section;