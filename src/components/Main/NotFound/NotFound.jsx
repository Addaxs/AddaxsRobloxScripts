import { Component } from "react";
import "./NotFound.css";
import Button from "../../Others/Button/Button"
import { Typewriter, Cursor } from 'react-simple-typewriter'
class NotFound extends Component {
  render() {
    return (
      //Class Name = "ObjectName-Importantace-type"
      <div className="notfound-main-container">
        <div className="notfound-title">Page Not Found</div>
        <div className="notfound-description">The page you're looking for <Typewriter cursorStyle="))" words={["is not found.", "is moved." , "doesn't exist"]} loop={-1} delaySpeed={1000} typeSpeed={200} /><Cursor/><br/><br/></div>
       
       
       <div className="notfound-home-btn">
       <Button name="Go to Home" to="/Scripts" internal/>         
        </div> 
      
      </div>
    );
  }
}

export default NotFound;
