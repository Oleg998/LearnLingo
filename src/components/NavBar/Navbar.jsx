import NavBarAuth from "./NavBarAuth/NavBarAuth.jsx";
import MainMenu from "./NavBarMenu/NavBarMenu.jsx";
import css from "./navbar.module.css";
import { Link } from "react-router-dom";
import NavBarUser from "./NavBarUser/NavBarUser.jsx"
import {RxHamburgerMenu} from "react-icons/rx"; 
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
const Navbar = () => {
  const [ nav , setNav]= useState(false)
  const isLogin = false
  return (
    <div className={css.conteiner}>      
      <nav className={css.nav_list}>
        <Link className={css.flag_link}>
          <div className={css.flag_circle}>
            <div className={css.blue}></div>
            <div className={css.yellow}></div>
          </div>
          <span className={css.text}>LearnLingo</span>
        </Link>
      </nav>
      
      <MainMenu />
      <div onClick={()=>setNav(!nav)}className={css.mb_btn}> 
        {nav ?  <IoMdClose size={36} /> :  < RxHamburgerMenu  size={36}/>  }
      
     
       </div>
       <div  className={nav? [css.burger, css.active].join(" "):[css.burger]} >{isLogin ? <NavBarUser /> : <NavBarAuth /> } </div>
      
    
    </div>
  );
};

export default Navbar;
