import "./contact.css"
 import pink from "../img/pink.png"
import phone from "../img/phone.png"
import mail from "../img/mail.png"
import address from "../img/address.png"
// import { useContext, useRef, useState } from "react"
// import emailjs from "emailjs-com";
import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context"



// const Contact = () => {
//     const formRef = useRef()
//     const [done, setDone] = useState(false)
//     const theme =  useContext(ThemeContext);
//     const darkMode = theme.state.darkMode;


//     const handleSubmit = (e)=>{
//       e.perventDefault();
//       emailjs
//       .sendForm(
//       "service_mackenzieneveaux", 
//      "template_oemwkk9", 
//       formRef.current, "AYUvEiUN1AF2yXq5M", 
//       )
//       .then((result) => {
//           console.log(result.text);
//           setDone(true)
//       }, 
//       (error) => {
//           console.log(error.text);
//       }
//       );
//   };
   
export const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
     const theme =  useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      'service_mackenzieneveaux',
       'template_oemwkk9',
        formRef.current,'AYUvEiUN1AF2yXq5M'
         )
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, 
      (error) => {
          console.log(error.text);
      }
      );
  };



  return (
<div>
 
  <div className="c-bg">
      <img src={pink} alt="" className="c-bg" /></div>

    <div className="c">
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="c-icon" />
              281-619-6476
            </div>
            
            <div className="c-info-item">
              <img className="c-icon" src={mail} alt="" />
              mackenzieneveaux@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={address} alt="" />
              Houston, TX
            </div>
          </div>
        </div>
      
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b>  Want to create something awesome or just get in touch? Message Me.
          </p>
          <form ref={formRef} onSubmit={sendEmail}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="email" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            {/* <button>Submit</button> */}
            <input style={{backgroundColor: darkMode && "#333"}} type="submit" value="Send" /> 
            {done && "Thank you..."} 
          </form>
         


{/* <form ref={formRef} onSubmit={sendEmail}>
      <label>Name</label>
      <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder="Name" name="user_name" />

          <label>Subject</label>
          <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />

      <label>Email</label>
      <input style={{backgroundColor: darkMode && "#333"}}  type="email" placeholder="Email" name="user_email" />

      <label>Message</label>
      <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
      

      <input type="submit" value="Send" />
      {done && "Thank you..."}
    </form> */}

  </div>

        </div>
        
      </div>
    </div>

 
  );




  
  
};

export default Contact