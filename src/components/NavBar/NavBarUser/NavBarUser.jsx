import css from "./navBarUser.module.css"


const NavBarUser = ()=> {
  
    return (
        <div className={css.block}>
       
          <p className={css.logo_in_text} >User  </p> 
          <button className={css.btn_logout}> Logout</button>
      </div>
    )
}




export default NavBarUser ;