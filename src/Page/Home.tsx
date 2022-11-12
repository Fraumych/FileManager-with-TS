import React, { useContext, useEffect } from "react";
import { UserContext } from "../UserStore";
import Style from "./Login.module.css";
import { APIContext } from "../APIrequest";
import File from "../Component/Main/File";


const Home: React.FC = () => {
   const { Authorization } = useContext(APIContext);
   const { isAuth, setIsAuth } = useContext(UserContext);
   const base = window.location.origin;
   // eslint-disable-next-line quotes
   const urlAuth = `https://www.dropbox.com/1/oauth2/authorize?client_id=xnumlhdrd6w4xcb&response_type=code&token_access_type=offline&redirect_uri=${base}/&state=<CSRF token>`;
   useEffect(() => {
      if (!isAuth) {
         if (new URLSearchParams(window.location.search).get("code")) {
            Authorization().then(res => {

               localStorage.setItem("isAuth", "true");
               setIsAuth(true);
               localStorage.setItem("token", res.data.access_token);
            });
         }
      }
   }, []);

   return (
      <>{isAuth ?
         <File />
         :
         <div className={`well form-search ${Style.LoginForm}`}>
            <h3>Вход</h3>
            <a href={urlAuth} className={`btn btn-inverse ${Style.LoginButton}`}>Войти через DropBox</a>
         </div>}</>);
};


export default Home;