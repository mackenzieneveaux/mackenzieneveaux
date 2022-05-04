import React from "react";
import "./footer.css";
import { FaGithub, FaLinkedinIn} from "react-icons/fa";


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
 
          <div className="col">
        
              

 <div class="flex-container">

<div class="flex-child magenta">


  < a href="https://github.com/mackenzieneveaux" target={"_blank"} rel="noreferrer" >  <FaGithub size="2em" color="white"/>
    </a>
    
   
 
 
</div>

<div class="flex-child">



<ul>
  


  < a href="https://www.linkedin.com/in/mackenzie-neveaux-962916200/" target={"_blank"} rel="noreferrer" >  <FaLinkedinIn size="2em" color="white"/>
    </a>


</ul> 






 
</div>
</div>
  </div>
        
          
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy; Copyright 2022 Mackenzie Neveaux
          </p>
        </div>
      </div>
    
    </div>



  );
}

export default Footer;