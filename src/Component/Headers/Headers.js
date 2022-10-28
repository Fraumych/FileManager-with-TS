import React from "react";
import AuthInfo from "./AuthInfo/AuthInfo";
import Style from "./Headers.module.css";


const Headers = () => {

   return (
      <>
         <header className={Style.header}>
            <div className="container">
               <section className={`navbar ${Style.navbar}`}>
                  <div>
                     <h1 className={Style.siteName}>FileManager.com</h1>
                  </div>
                  <AuthInfo />
               </section>
            </div>
         </header>
      </>
   );
};

export default Headers;