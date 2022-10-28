import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../UserStore";
import { APIContext } from "../../../APIrequest";
import { useNavigate } from "react-router-dom";
import Style from "./AuthInfo.module.css";


const AuthInfo = () => {
   const [userName, setUserName] = useState("");
   const [userPhoto, setUserPhoto] = useState();
   const { accountName } = useContext(APIContext);
   const { isAuth, setIsAuth } = useContext(UserContext);
   const navigate = useNavigate();

   useEffect(() => {

      if (isAuth) {
         accountName().then(data => {
            setUserName(data.data.name.familiar_name);
            setUserPhoto(data.data.profile_photo_url);
         }).catch(() => {
            navigate("/");
            localStorage.clear();
            window.location.reload();
         });
      }
   }, []);

   const handleLogOut = (e) => {
      e.preventDefault();
      setIsAuth(localStorage.setItem("isAuth", false));
      localStorage.clear();
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