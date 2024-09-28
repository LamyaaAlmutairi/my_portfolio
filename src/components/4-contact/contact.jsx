import React from 'react';
import './contact.css'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json"
import contactAnimation from "../../../public/animation/email.json"

const Contact = () => {
    const [state, handleSubmit] = useForm("mldrvrqb");


    return (
        <div  className="contact-container">
            <h1 className="contact-title">
                <span className="icon-envelope"></span>
                Contact Me
            </h1>

            <div style={{justifyContent:"space-between"}}className=" flex">
                <form onSubmit={handleSubmit} >
                    <div className='flex'>
                        <label htmlFor="email" >Email Address:</label>
                        <input required type="email" name="email" id="email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className="flex" style={{ marginTop: "30px" }}>
                        <label htmlFor="message" >Your Message:</label>
                        <textarea required name="message" id="message"></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button className="send" disabled={state.submitting}>{state.submitting?"Sending..":"Send"}</button>
                    {state.succeeded&&(<p className="flex"style={{marginTop:20 ,color:"rgb(82, 82, 91)",fontSize:"16px"}}>
                         <Lottie loop={false}style={{height:"55px",alignSelf:"center"}} animationData={doneAnimation} />Your message has been sent successfully</p>)}

                </form>
                <div className=" contact-animation"><Lottie
                className='send-animation' 
                animationData={contactAnimation} 
                style={{height:355,alignSelf:"center"}}
                
                />
            </div>


            </div>


        </div>


    );
}

export default Contact;