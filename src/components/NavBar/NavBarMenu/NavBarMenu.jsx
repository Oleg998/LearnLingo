import React from "react";
import { NavLink } from "react-router-dom";
import css from "./navBarMenu.module.css";

const MainMenu = () => {
  return (
    <>
     <ul className={css.header_nav_block}>
      <li>
        <NavLink to= "/" className={css.header_nav}>Home</NavLink>
      </li>
      <li>
        <NavLink to= "/teachers" className={css.header_nav}>Teachers</NavLink>
      </li>
    </ul>
 
    </>
   
  );
};

export default MainMenu;
