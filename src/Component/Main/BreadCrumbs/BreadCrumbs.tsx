import React, { useContext, useEffect, useState } from "react";
import { APIContext } from "../../../APIrequest";
import ButtonBack from "./ButtonBack";
import Style from "./Breads.module.css";
import { IListFolder } from "../../../models/Files/IListFolder";

interface BreadCrumbsProps {
   pathFolder: string,
   setPathFolder: React.Dispatch<React.SetStateAction<string>>,
   setListFolder: (value: React.SetStateAction<IListFolder[]>) => void
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ pathFolder, setPathFolder, setListFolder }) => {

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
      getListFolder(pathBack).then(res => {
         setPathFolder(pathBack);
         setListFolder(res.data.entries);
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