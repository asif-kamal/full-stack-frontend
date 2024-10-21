import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./layout/NavBar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterUser from "./users/RegisterUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/users" element={<Home />} />
          <Route exact path="/users/register" element={<RegisterUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
