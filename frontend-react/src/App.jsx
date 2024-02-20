import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./sections/Register";
import Login from "./sections/Login";

function App() 
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App