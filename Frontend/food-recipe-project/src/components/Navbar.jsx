import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import InputForm from './inputForm';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdFoodBank } from "react-icons/md";

export default function Navbar() {
  const [isSidebar, setIsSidebar] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  let token=localStorage.getItem("token")
  const [isLogin,setIsLogin]=useState(token? false:true)
  let user=JSON.parse(localStorage.getItem("user"))

  useEffect(()=>{
    setIsLogin(token ? false:true)
  },[token])

  const checkLogin=()=>{
    if(token){
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      setIsLogin(true)
    }
    else{
      setIsOpen(true)
    }
  }
  const checkSidebar=()=>{
    setIsSidebar(true)
  }

return (
    <>
      <header>
      <Link to="/"><MdFoodBank className='food'/></Link>
        <ul>
          <li><Link to="/"><b>Flavorful Culinary</b></Link></li>
          <li className='hide'><Link to="/">Home</Link></li>
          <li className='hide' onClick={()=>isLogin && setIsOpen(true)}><Link to={ !isLogin ? "/myRecipe" : "/"}>My Recipe</Link></li>
          <li className='hide' onClick={()=>isLogin && setIsOpen(true)}><Link to={ !isLogin ? "/favRecipe" : "/"}>Favorites</Link></li>
          <li className='hide' onClick={checkLogin}><Link>{(isLogin)? "Login" : "Logout"}{" "}{user?.email ? user?.email.split('@')[0] : ""}</Link></li>
          <li className='show' onClick={checkSidebar}><FiMenu /></li>
        </ul>
        {(isSidebar)? (<ul onClick={()=>setIsSidebar(pre=>!pre)} className='sidebar'>
          <li><IoClose /></li>
          <li><Link to="/">Home</Link></li>
          <li onClick={()=>isLogin && setIsOpen(true)}><Link to={ !isLogin ? "/myRecipe" : "/"}>My Recipe</Link></li>
          <li onClick={()=>isLogin && setIsOpen(true)}><Link to={ !isLogin ? "/favRecipe" : "/"}>Favorites</Link></li>
          <li onClick={checkLogin}><Link><p className='login'>{(isLogin)? "Login" : "Logout"}{" "}{user?.email ? user?.email.split('@')[0] : ""}</p></Link></li>
        </ul>):""}
      </header>
      { (isOpen) && <Modal onClose={()=>setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)} /></Modal>}
      </>
  );
}
