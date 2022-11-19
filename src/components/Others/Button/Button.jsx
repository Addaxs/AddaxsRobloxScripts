import { Component } from "react";
import "./Button.css";
import { Link } from "react-router-dom";
class Button extends Component {
  render() {
    return (
      //Class Name = "ObjectName-Importantace-type"
     this.props.internal ? 
     //If the internal prop is present the the link will be 
     //routed internally using react-router-dom link component
     <Link style={{ textDecoration: 'none' }} to={this.props.to}>
      <div
        className="button-main-container">
        {this.props.name}
      </div>
      </Link>:
      //Else link will be routed using the button
      <div
        className="button-main-container"
        onClick={()=>{window.open(this.props.to, "_blank")}}>
        {this.props.name}
      </div>
       
    );
  }
}

export default Button;
