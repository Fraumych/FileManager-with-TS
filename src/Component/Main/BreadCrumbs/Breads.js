import React, { useContext, useEffect, useState } from "react";
import { APIContext } from "../../../APIrequest";
import ButtonBack from "./ButtonBack";
import Style from "./Breads.module.css";


const BreadCrumbs = ({ pathFolder, setPathFolder, setListFolder }) => {

   const { getListFolder } = useContext(APIContext);
   const [pathBack, setPathBack] = useState("");
   const [pathCrumbs, setPathCrumbs] = useState("");

   let path = pathFolder;

   useEffect(() => {
      if (path !== "") {
         let pathPop = path.split("/");
         setPathCrumbs(pathPop.join(" > "));

         pathPop.pop();
         setPathBack(pathPop.join("/"));
      } else {
         let pathPop = path.split("/");
         setPathCrumbs(pathPop.join(" > "));
      }
   }, [path]);

   const handleClickBack = () => {
      getListFolder(pathBack).then(result => {
         setPathFolder(pathBack);
         setListFolder(result.data);
      });

   };

   return (
      <div className={Style.BreadCrumbs}>
         <ButtonBack currentPathFolder={pathFolder} handleClickBack={handleClickBack} />

         <h4 className={Style.pathCrumbs}>
            Home {pathCrumbs}</h4>
      </div>
   );
};

export default BreadCrumbs;        