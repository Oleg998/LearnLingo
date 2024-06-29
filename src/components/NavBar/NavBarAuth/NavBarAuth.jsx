import css from "./navbar-auth.module.css";
import sprite from "../../../helpers/img/symbol-defs.svg";
import { Link } from "react-router-dom";

const NavBarAuth = () => {
  return (
    <div className={css.block}>
      <Link to="/register" >
      <div className={css.block_log_in}>  <svg className={css.logo_in}> 
          <use href={`${sprite}#log-in`}>  </use>
        </svg> 
        <p className={css.logo_in_text} >Log in  </p>  </div>
       
      </Link>
      <Link
        to="/login"
        className={css.registration}
      >
        Registration{" "}
      </Link>
    </div>
  );
};

export default NavBarAuth;
