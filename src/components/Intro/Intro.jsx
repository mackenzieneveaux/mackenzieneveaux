import "./intro.css";
// import computer from "../img/computer.png"
import Resume from "../Resume";





 const Intro = () => {
 
   
  return (
    
      <div className="i-left-wrapper">
      <h2 className="i-intro">Hello, My name is  </h2>
      <h1 className="i-name">Mackenzie Neveaux </h1>
      <div className="i-title">
        <div className="i-title-wrapper">
          <div className="i-title-item">Web Developer</div>
          <div className="i-title-item">UI/UX Designer</div>
          <p className="i-desc">
        I design and develop services for customers of all sizes, specializing
        in creating stylish, modern websites, web services and online stores.

      </p>
        </div>
        </div>
      <p className="i-desc">
        I design and develop services for customers of all sizes, specializing
        in creating stylish, modern websites, web services and online stores.

      </p>

      <div>
        <Resume>

        </Resume>
      </div>


    {/* <div className="i-right">
        <img src={computer} alt="" className="i-img" />
      </div> */}
     </div>
   

 
    
  );
 
  }
  export default Intro