
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useState } from "react";
function App() {
  const [user, setUser] = useState(null);
    return (
    <BrowserRouter basename="/admin_ui">
      <Routes  >
        <Route path="/list" element={<Home user={user} />}/>
        <Route path="/" element={<Signin setUser={setUser} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
