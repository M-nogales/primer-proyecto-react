import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const jsx = <h1> test jsx en react</h1>
const jsx_valid = (
  <>
    <p>tsdfsef</p>
    <p>tsdfsef</p>
    {/* efusknrgkjsrg
srgmskrdgmñlsrg */}
    <p>tsdfsef</p>
  </>
);
const jsx_valid2 = (
  <div>
    <p>tsdfsef</p>
    <p>tsdfsef</p>
    <p>tsdfsef</p>
  </div>
);
const camelCase = (
  <div className="myDivClass">
    {/* no podemos usar <></> */}
    <p>camelCase</p>
  </div>
);
const DemoComponent = function() {
  return (
    <div>
      <p className="myDivClass2">heufhashenfanef</p>
    </div>
  );
};
class Kitten extends React.Component{
  constructor(props){
    super(props);
  }
  renders(){
    return (<h1>Hola gato</h1>);
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  [jsx_valid, jsx_valid2, camelCase,DemoComponent()]

  // jsx
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
const jsx_challenge = (
  <div>
    <ol>fuhseifsefjksf</ol>
    <ol>fuhseifsefjksf</ol>
  </div>
);

const challenge = ReactDOM.createRoot(
  document.getElementById("challenge-node")
);
challenge.render(jsx_challenge);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
