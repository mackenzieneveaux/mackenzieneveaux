import "./splash.css"
import wave from "../video/wave.mp4"

 const Splash = () => {
return (
<div className="hero-box">
< div className="hero-header">
<video autoPlay loop muted>      
 <source src={wave} type="video/mp4"  />     
  </video>
  < div className= "hero-text-box">
  <div className="content">         
  {/* <h1 className="hero-heading"> ' You must be shapeless, formless, like water.' - Bruce Lee</h1> 
   <p className="hero-text">Flow on with Mackenzie Neveaux's creative projects</p> */}
 </div> 
</div>
</div>
</div>
   

        )
        }
        

export default Splash

