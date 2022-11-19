import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ScriptPage.css";
function ScriptPage(props) {
  // function removeSpaces(str) {
  //   return str.replace(/\s/g, "");
  // }
  const { id } = useParams();
  const currScript = props.scriptsArray[parseFloat(id)];
  useEffect(()=>{
    const scriptbox = document.getElementById("scriptpage-scriptbox-#0")
  scriptbox.onclick = ()=>{
    let script = scriptbox.innerText
    scriptbox.style.pointerEvents = "none"
    scriptbox.innerText = "Script Copied!"
    navigator.clipboard.writeText(script)
    
    
    
    setTimeout(() => {
      scriptbox.innerText = script
      scriptbox.style.pointerEvents = "auto"
    }, 750);
  }
  })
  
  return (
    //Class Name = "ObjectName-Importantace-type"

    <div className="scriptpage-main-container">
      <div className="scriptpage-section-1">
        <img
          className="scriptpage-image"
          src={currScript.image}
          alt={`${currScript.name} Banner.`}
        />
        <div className="scriptpage-sub-section-1">
          <div className="scriptpage-scriptname">{currScript.name}</div>
          <div className="scriptpage-game-title">Game</div>
          <div className="scriptpage-game">{currScript.of_game}</div>
          <div className="scriptpage-credits-title">By</div>
          <div className="scriptpage-credits">{currScript.credits}</div>

          <div className="scriptpage-description-title">Description</div>
          <div className="scriptpage-description">{currScript.description}</div>
        </div>
      </div>
      <div className="scriptpage-section-2">
        <div className="scriptpage-how-to-title">How To Use Script</div>
        <ol className="scriptpage-how-to-steps">
          <li className="scriptpage-how-to-step">Open Executor</li>
          <li className="scriptpage-how-to-step">Inject/Attach Executor</li>
          <li className="scriptpage-how-to-step">Click on Script To Copy</li>
          <li className="scriptpage-how-to-step">
            Paste the Script in Executor
          </li>
          <li className="scriptpage-how-to-step">Execute the Script</li>
        </ol>
        <div className="scriptpage-scriptbox-container">
          <div className="scriptpage-scriptbox-title">Script</div>
          <div className="scriptpage-scriptbox" id="scriptpage-scriptbox-#0">{`loadstring(game:HttpGet("https://raw.githubusercontent.com/Addaxs/Addaxs/master/scripts/${currScript.d_name}", true))()`}</div>
        </div>
      </div>
    </div>
  );
}

export default ScriptPage;
