import { Component } from "react";
import './Script.css';
import Button from "../../../Others/Button/Button";
class Script extends Component {
  render() { 
    function removeSpaces(str){
      return str.replace(/\s/g, '')
    } 
    return (//Class Name = "ObjectName-Importantace-type"
    <div className="script-main-container">
     <img className="script-image" src={this.props.image} alt={`${this.props.name} thumbnail.`} />
      <div className="script-sub-container">
      <div className="script-title">{this.props.Title}</div>
      <div className="script-description">{this.props.Description}</div>
      <Button name="Download Script" to={this.props.index+"/"+removeSpaces(this.props.Title)} internal /> 
      
      </div>
      
      
    </div>
    );
  }
}
 
export default Script;