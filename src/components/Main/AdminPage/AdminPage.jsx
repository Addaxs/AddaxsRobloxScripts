// import { Component } from "react";
// import "./AdminPage.css";
// import {database} from '../../../firebaseConfig'
// import { doc, setDoc } from "firebase/firestore"; 

// // Add a new document in collection "cities"


// class AdminPage extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       buttonName: "Submit Script"
//     }
//   }

//   SubmitHandler(e) {
//     //Prevent the page from Reloading
//     e.preventDefault()
    
//     //Get the form Element
//     // const form = document.querySelector("form.adminpage-sub-container")
  
//     /*Only the description will be present in the document.
//     script name will be the document's name so we will not store it in the document because it is it's name.
//     we can use document's name as a script name.
//     this will also prevent duplication of scripts.  
//     // */    
//     // const documentToBeWritten ={}
    
//     // for (let i = 0; i < 1000; i++) {
//     //   documentToBeWritten[`${Math.random()}${Math.random}`] = {
//     //     description:"This is fala fala fala",
//     //     d_name:"Falaaaa"
//     //   }
      
//     // }
//     /*
//     Template
//     setDoc(doc(database,collection,document),{data: Object})
//     */
//   //  this.setState({buttonName: "Submitting...."})
//   //   setDoc(doc(database, "scripts", form.name.value),documentToBeWritten )
//   //   .then(()=>{
//   //     this.setState({buttonName: "Submitted!"}).then(
//   //       setTimeout(()=>{
//   //         this.setState({buttonName: "Submit Script"})
//   //         form.reset()
        
//   //       },1000)
//   //     )
      
//   //   })
   

//   }
  

//   render() {

//     return (
      
//       //Class Name = "ObjectName-Importantace-type"
//       <div className="adminpage-main-container">
//         <div className="adminpage-title">Admin</div>
//         <form className="adminpage-sub-container" onSubmit={(e)=>this.SubmitHandler(e)}>
//         <div className="adminpage-sub-container-item">
//             <div className="adminpage-sub-container-item-title">Title:</div>
//             <input
//               type="text"
//               required
//               name="name"
//               placeholder="Script Name"
//             />
//           </div>
//           <div className="adminpage-sub-container-item">
//             <div className="adminpage-sub-container-item-title">Download Name:</div>
//             <input
//               type="text"
//               required
//               name="downloadname"
//               placeholder="Download Name"
//             />
//           </div>
//           <div className="adminpage-sub-container-item">
//             <div className="adminpage-sub-container-item-title">Description:</div>
//             <textarea required name="description" placeholder="Explain the script..." rows="5"></textarea>
//           </div>

//           <div className="adminpage-sub-container-item">
//             <button
//               className="admin-page-submitBtn"
//             >
//               {this.state.buttonName}
//             </button>
//           </div>
//         </form >
//       </div>
//     );
//   }
// }

// export default AdminPage;
