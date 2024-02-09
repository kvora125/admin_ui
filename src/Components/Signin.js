import logo from "../logo.svg";
import { useEffect, useState, useMemo } from "react";
import { fetchMembers } from "../Services/fetchMembers";
import SearchBar from "./SearchBar";
import UserTable from "./UserTable";
import Pagination from "./Pagination";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useLocation, useNavigate} from "react-router-dom"
function Signin({setUser}) {
  const [username,setUsername]=useState(null);
  const navigate=useNavigate();
  return (
    <>
      <div className="signIn" >
        <label for="username">Username</label>
        <input name="username" id="username" value={username} onChange={e=>setUsername(e?.target?.value)} />
        <br/>
        <button onClick={()=>{
          setUser(username);
          navigate("/list");
          }}>Sign In</button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Signin;
