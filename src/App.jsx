 import { useContext } from "react";
 import Intro from "./components/Intro/Intro";
import Splash from "./components/Splash/Splash";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Footer from "./components/footer";
// import Resume from "./components/Resume";



const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Splash />
      <Intro/>
      <Portfolio/>
      <Contact />
      <Footer/>
      {/* <Resume/> */}
   
    </div>
  );
};

export default App;

