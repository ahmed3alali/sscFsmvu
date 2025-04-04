import { AdminPanel } from '@/pages/AdminPanel';
import Login from '@/pages/Login';
import { RootState } from '@/Redux/store';
import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';


const LoginProtection = () => {
  
const isAuthenticated = useSelector((state: RootState)=>state.auth.isAuthenticated);

const navigate = useNavigate();

useEffect(()=>{

if (isAuthenticated) {
    navigate("/admin");
}

},[isAuthenticated,navigate]);

return isAuthenticated ? <AdminPanel/> : <Login/>




};

export default LoginProtection