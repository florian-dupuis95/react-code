import React from "react";
import logo from "./logo.svg";

function App() {
  const [valeur, setvaleur] = React.useState(0);
  const [ynov, setynov] = React.useState("hELLO");

  // Quand le composant est modifier
  React.useEffect(() => {
    console.log("test");
  });
  // Quand la valeur ynov est modifier
  React.useEffect(() => {
    console.log("on update ynov");
  }, [ynov]);
  // Quand le component est creer
  React.useEffect(() => {
    console.log("on create component");
  }, []);
  return (
    <div className="App">
      <h1
        onClick={() => {
          setvaleur(valeur + 1);
        }}
      >
        {valeur}
      </h1>
      <h2
        onClick={() => {
          setynov("hELLXXXXXX");
        }}
      >
        {ynov}
      </h2>
    </div>
  );
}

export default App;