import Register from "./components/pages/auth/Register";
import Login from "./components/pages/auth/Login";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      {/* <Register/> */}
      <Navbar/>

      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
