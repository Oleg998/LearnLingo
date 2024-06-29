import NavBarAuth from "./NavBarAuth/NavBarAuth.jsx";
import MainMenu from "./NavBarMenu/NavBarMenu.jsx";
import css from "./navbar.module.css";
import { Link } from "react-router-dom";
import NavBarUser from "./NavBarUser/NavBarUser.jsx"


const Navbar = () => {
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

      {isLogin ? <NavBarUser/> : <NavBarAuth/> }
    
    </div>
  );
};

export default Navbar;
