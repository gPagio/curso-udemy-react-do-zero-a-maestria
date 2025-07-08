import "./App.css";

// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
