import { Component } from "react";
import "./Main.css";
import { Routes, Route, useParams } from "react-router-dom";
import Scripts from "./Scripts/Scripts";
import Community from "./Community/Community";
import NotFound from "./NotFound/NotFound";
import Home from "./Home/Home";
import AdminPage from "./AdminPage/AdminPage";
import ScriptPage from "./ScriptPage/ScriptPage";

class Main extends Component {
  render() {
    return (
      //Class Name = "ObjectName-Importantace-type"
      <div className="app-sub-item main-main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Scripts"
            element={
              <Scripts scriptsArray={this.props.scriptsArray} />
            }
          />
          <Route
            path="/Scripts/:pageNumber"
            element={
              <Scripts scriptsArray={this.props.scriptsArray} />
            }
          />
          <Route exact path="/Scripts/:id/:name" element={<ScriptPage scriptsArray={this.props.scriptsArray}/>}/>
          <Route path="/Community" element={<Community />} />
          {/* <Route
            path="/Do/Not/Tell/Anyone/About/This/Admin/Page"
            element={<AdminPage />}
          /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default Main;
