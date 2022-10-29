import React, { useContext } from "react";
import { UserContext } from "../../../UserStore";
import { useNavigate } from "react-router-dom";
import Style from "./AuthInfo.module.css";


const AuthInfo = () => {
   const { isAuth, setIsAuth, userName, userPhoto } = useContext(UserContext);
   const navigate = useNavigate();


   const handleLogOut = (e) => {
      e.preventDefault();
      localStorage.setItem("isAuth", false);
      setIsAuth(false);
      localStorage.removeItem("token");
      navigate("/");
   };

   return (
      <div className={Style.AuthInfo}>
         {isAuth ?
            <>
               <h4 className={Style.UserName}>Здравствуйте, {userName} <img className={Style.UserLogo} src={userPhoto} alt="UserLogo" /></h4>
               <button className={`btn ${Style.ButtonExit}`} onClick={handleLogOut}>Выход</button>
            </>
            :
            null}
      </div>
   );
};

export default AuthInfo;