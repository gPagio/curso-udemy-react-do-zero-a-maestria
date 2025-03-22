import "./App.css";

import MyForm from "./components/MyForm";

function App() {
  return (
    <>
      <h2>Forms</h2>
      <MyForm user={{ name: "Josias", email: "josias@josias.josias"}}></MyForm>
    </>
  );
}

export default App;
