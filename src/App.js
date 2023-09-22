import React from "react";
import ReactDOM from "react-dom/client";

// importing Body
import Body from './Components/Body.js';


// importing Footer
import Footer from './Components/Footer.js'; 





// this is default import 
import * as Obj from './Components/Title.js';
const rootElement = document.getElementById('root');










const App_layout=()=>{
    return (
<React.Fragment>
 
    <Obj.Header_components></Obj.Header_components>
    <Body></Body>
    <Footer></Footer>
    <React.Fragment>
      <h1>this is testing h1</h1>
    </React.Fragment>
</React.Fragment>
    )
}


const root = ReactDOM.createRoot(rootElement);


root.render(<App_layout/>)