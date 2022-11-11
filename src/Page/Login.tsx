import React, { useContext, useEffect } from "react";
import { UserContext } from "../UserStore";
import { useNavigate } from "react-router-dom";
import Style from "./Login.module.css";


const Login: React.FC = () => {
   const navigate = useNavigate();

   const { isAuth } = useContext(UserContext);

   const urlAuth = "https://www.dropbox.com/1/oauth2/authorize?client_id=xnumlhdrd6w4xcb&response_type=code&token_access_type=offline&redirect_uri=https://fraumych.github.io/&state=<CSRF token>";

   useEffect(() => {
      if (isAuth) {
         navigate("/file");
      }
   });

   return (

      <div className={`well form-search ${Style.LoginForm}`}>
         <h3>Вход</h3>
         <a href={urlAuth} className={`btn btn-inverse ${Style.LoginButton}`}>Войти через DropBox</a>
      </div>

   );
};


export default Login;