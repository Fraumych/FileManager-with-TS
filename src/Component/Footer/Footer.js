import React from "react";
import Style from "./Footer.module.css";

const Footer = () => {

   return (
      <>
         <footer className={Style.footer} >
            <div className={`container ${Style.info}`}>
               <section className={Style.creators}>
                  <div>
                     <p>Создано компанией</p>
                     <p className={Style.name}>HTML group </p></div>
               </section>
            </div>
         </footer>
      </>

   );
};

export default Footer;