import { Component } from "react";
import "./Navbar.css";
import { NavLink} from "react-router-dom";
import addax_logo from "../../assets/images/logo-transparent.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Varaibles Here
      navbarMenuStatus: false,
    };
  }
  //State Update Function this.setState({this.state: Object})
  render() {
    const nav_menuBtn_Handler = () => {
      //Change the State of Navbar status on click
      // display: navbar status is true? then display flex otherwise none. 
      this.setState({navbarMenuStatus: !this.state.navbarMenuStatus})
      console.log("NAVBAR----")
      console.log(this)
      console.log("----------")
      //Update Root Varaible in Css to handle the navbar change events.
        document.documentElement.style.setProperty('--navbar-items-display', this.state.navbarMenuStatus
        ? "flex"
        : "none");
    };

    return (
      <div className="nav-main-container">
        <span className="nav-logo">
          <img
            className="nav-logo-image"
            src={addax_logo}
            alt="Addax Roblox Scripts"
          />
          <span className="nav-logo-text">Addax Roblox Scripts</span>
          <button
            className="nav-logo-menu_btn"
            onClick={() => {
              nav_menuBtn_Handler();
            }}
          >
            ☰
          </button>
        </span>
        <span className="nav-sub-container">
          <NavLink className="nav-item" to={"/Scripts"}>Scripts</NavLink>
          <NavLink className="nav-item" to={"/Community"}>Community</NavLink>
          <span className="nav-item">Social</span>
        </span>
      </div>
    );
  }
}

export default Navbar;
