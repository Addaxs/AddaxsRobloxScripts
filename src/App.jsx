import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import OtherScripts from "./components/OtherScripts/OtherScripts";
import scripts from "./scriptsData.json";
function App() {

  return (
    <div className="app-main-container">
      <Navbar />
      <div className="app-sub-container">
        <Main scriptsArray={scripts.array}/>
        <div className="app-sub-item app-others-container">
          <OtherScripts />
        </div>
      </div>
    </div>
  );
}

export default App;
