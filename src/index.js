import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//añadido para importar componente Welcome
import Welcome from "./components/Welcome";
// añadido para importar TypesOfFruit, anidación de componentes
import TypesOfFood from './components/food/TypesOfFood'
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const jsx = <h1> test jsx en react</h1>
const jsx_valid = (
  <>
    <p>jsx_valid</p>
    <p>jsx_valid</p>
    {/* efusknrgkjsrg
srgmskrdgmñlsrg */}
    <p>jsx_valid</p>
  </>
);
const jsx_valid2 = (
  <div>
    <p>jsx_valid2</p>
    <p>jsx_valid2</p>
    <p>jsx_valid2</p>
  </div>
);
const camelCase = (
  <div className="myDivClass">
    {/* no podemos usar <></> */}
    <p>camelCase</p>
  </div>
);
const jsx_challenge = (
  <div>
    <ol>jsx_challenge</ol>
    <ol>jsx_challenge</ol>
  </div>
);

const challenge = ReactDOM.createRoot(
  document.getElementById("challenge-node")
);
challenge.render(jsx_challenge);
//creación de un componente final react parte 2
const DemoComponent = function () {
  return (
    <div>
      <p className="myDivClass2">
        DemoComponent,DemoComponent,DemoComponent,DemoComponent
      </p>
    </div>
  );
};
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Hola gato</h1>;
  }
}
// parent component
const ChildComponent = () => {
  return (
    <div>
      <p> I am the child</p>
    </div>
  );
};
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  [
    jsx_valid,
    jsx_valid2,
    camelCase,
    DemoComponent(),
    new Kitten().render(),
    new ParentComponent().render(),
    //exportación de un componente de react
    // si no añades user en esta nomenclatura no funca
    Welcome(), 
    <Welcome user='Mark'/>,
    <TypesOfFood />
  ]
  // jsx
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
