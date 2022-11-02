import React, { useContext } from "react";
import { UserContext } from "../../../UserStore";
import { useNavigate } from "react-router-dom";
import Style from "./AuthInfo.module.css";


const AuthInfo: React.FC = () => {
   const { isAuth, setIsAuth, userName, userPhoto } = useContext(UserContext);
   const navigate = useNavigate();


   const handleLogOut = (e: React.MouseEvent) => {
      e.preventDefault();
      localStorage.setItem("isAuth", "false");
      setIsAuth(false);
      localStorage.removeItem("userName");
      localStorage.removeItem("userPhoto");
      localStorage.removeItem("token");
      navigate("/");
   };

   return (
      <div className={Style.AuthInfo}>
         {isAuth && <>
            <h4 className={Style.UserName}>Здравствуйте, {userName} <img className={Style.UserLogo} src={userPhoto} alt="UserLogo" /></h4>
            <button className={`btn ${Style.ButtonExit}`} onClick={handleLogOut}>Выход</button>
         </>}
      </div>
   );
};

export default AuthInfo;