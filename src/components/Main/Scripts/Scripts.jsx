import { Component } from "react";
import "./Scripts.css";
import Script from "./Script/Script";
class Scripts extends Component {
  constructor() {
    super();
    this.state = {
      //Varaibles Here
      pageNumber: 0,
    };
  }

  Pagination = (incrementOrDecrement)=>{
  
    const next = document.getElementById("scripts-pagination-next-#0")
    const prev = document.getElementById('scripts-pagination-prev-#0')
  const nextVisibility = (page)=>{
    next.style.visibility = page*10 + 10 < this.props.scriptsArray.length ? "visible" : "hidden"
    prev.style.visibility = "visible"
  
  }
  
  const prevVisibility = (page)=>{
    prev.style.visibility = page > 0 ? "visible" : "hidden"  
    next.style.visibility = "visible"
  }
  if(incrementOrDecrement < 0){
    //Prev Button Pressed
      this.setState({'pageNumber': this.state.pageNumber+incrementOrDecrement}, ()=>{prevVisibility(this.state.pageNumber)})   
  }else{
    //Next Button Pressed
      this.setState({'pageNumber': this.state.pageNumber+incrementOrDecrement}, ()=>{nextVisibility(this.state.pageNumber)}) 
  }


}
    
  render() {
    return (
      //Class Name = "ObjectName-Importantace-type"
      <div className="scripts-main-container">
        <div className="scripts-title">Scripts</div>
        <div className="scripts-title-desc">
          Scripts of More than 100+ Roblox Games
        </div>
        <div className="scripts-sub-container" id="scripts-sub-container-#0">
          {/* <Script
            Title="Booga Booga 2020 Hub"
            Description="Booga Booga Hybrid Kill All, One-Hit All Resources, Animals, Sharks and Buildings And More! Made By INF3rnal_H3ir."
            Download_Link="https://inf3rnalexploits.web.app/luascripts/Q3e417Pm84E93818c5A1k42F91o8Z2kE38m7Y5oA3p13.lua"
          /> */}
          {this.props.scriptsArray.slice(this.state.pageNumber*10, 10+this.state.pageNumber*10).map((scriptData, index) => (
            <Script
              key={scriptData.name + Math.random()}
              Title={scriptData.name}
              Description={scriptData.description}
              image={scriptData.image}
              index={`${index}`}
            />
          ))}
        </div>
        <div className="scripts-pagination">
          <button
            className="scripts-pagination-prev"
            id="scripts-pagination-prev-#0"
            onClick={()=>{this.Pagination(-1)}}
          >
            ◀◀
          </button>
          <div className="scripts-pagination-curr">Page Number <br/>◀ {this.state.pageNumber} ▶</div>
          <button
            className="scripts-pagination-next"
            id="scripts-pagination-next-#0"
            onClick={()=>{this.Pagination(1)}}
          >
            ▶▶
          </button>
        </div>
      </div>
    );
  }
}

export default Scripts;
