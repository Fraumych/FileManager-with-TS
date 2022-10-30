import React, { useContext, useEffect, useState } from "react";
import { APIContext } from "../../../APIrequest";
import ButtonBack from "./ButtonBack";
import Style from "./Breads.module.css";

interface listFolderData {
   entries: {
      id: string,
      name: string,
      size: number,
      "client_modified": string,
      ".tag": string,
      "path_display": string
   }[]
}

interface BreadCrumbsProps {
   pathFolder: string,
   setPathFolder: React.Dispatch<React.SetStateAction<string>>,
   setListFolder: (value: React.SetStateAction<listFolderData>) => void
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
         setListFolder(res.data);
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