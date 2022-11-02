import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APIContext } from "../APIrequest";
import Toolbar from "../Component/Main/ToolBar/Toolbar";
import BreadCrumbs from "../Component/Main/BreadCrumbs/Breads";
import ListFolder from "../Component/Main/Content/ListFolder/ListFolder";
import { UserContext } from "../UserStore";
import Style from "./File.module.css";

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
//id: string, name: string, size: number, "client_modified": string
const File: React.FC = () => {
   const { Authorization, getListFolder, accountName } = useContext(APIContext);
   const { isAuth, setIsAuth, setUserName, setUserPhoto } = useContext(UserContext);
   const navigate = useNavigate();

   const [listFolder, setListFolder] = useState<listFolderData>({ entries: [] });

   const [pathFolder, setPathFolder] = useState("");


   useEffect(() => {
      if (!isAuth) {
         if (new URLSearchParams(window.location.search).get("code")) {
            Authorization().then(res => {
               localStorage.setItem("isAuth", "true");
               setIsAuth(true);
               localStorage.setItem("token", res.data.access_token);
            }).then(() => {
               getListFolder("").then(
                  res => {
                     setListFolder(res.data);
                  });
               accountName().then(data => {
                  localStorage.setItem("userName", data.data.name.familiar_name);
                  localStorage.setItem("userPhoto", data.data.profile_photo_url);
                  setUserName(data.data.name.familiar_name);
                  setUserPhoto(data.data.profile_photo_url);
               });
            });
         } navigate("/");

      } else {
         getListFolder("").then(
            res => {
               setListFolder(res.data);

            }).catch(() => {
               localStorage.setItem("isAuth", "false");
               setIsAuth(false);
               localStorage.removeItem("userName");
               localStorage.removeItem("userPhoto");
               localStorage.removeItem("token");
               navigate("/");
            }
            );
      }


   }, []);
   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, folderPath: string) => {
      e.preventDefault();
      getListFolder(folderPath).then(res => {
         setPathFolder(folderPath);
         setListFolder(res.data);
      });
   };

   return (
      <>
         <Toolbar />
         <BreadCrumbs pathFolder={pathFolder} setPathFolder={setPathFolder} setListFolder={setListFolder} />

         <table className="table table-bordered">
            <thead>
               <tr>
                  <th><input type="checkbox" /></th>
                  <th>Имя</th>
                  <th>Размер</th>
                  <th>Дата изменения</th>
               </tr>

            </thead>
            {listFolder.entries.length > 0 ?
               <tbody>
                  <ListFolder listFolder={listFolder} handleClick={handleClick} /></tbody>
               :
               <tbody>
                  <tr>
                     <th colSpan={4}><h5 className={Style.FolderEmpty}>Папка пуста</h5></th>
                  </tr>
               </tbody>
            }
         </table>
      </>);
};

export default File;