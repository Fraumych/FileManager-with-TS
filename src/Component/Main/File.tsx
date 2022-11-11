import React, { useContext, useEffect, useState } from "react";
import { APIContext } from "../../APIrequest";
import Toolbar from "./ToolBar/Toolbar";
import BreadCrumbs from "./BreadCrumbs/BreadCrumbs";
import ListFolder from "./Content/ListFolder/ListFolder";
import { UserContext } from "../../UserStore";
import Style from "./File.module.css";
import { IListFolder } from "../../models/Files/IListFolder";

const File: React.FC = () => {
   const { getListFolder, accountName } = useContext(APIContext);
   const { setUserName, setUserPhoto } = useContext(UserContext);

   const [listFolder, setListFolder] = useState<IListFolder[]>([]);

   const [pathFolder, setPathFolder] = useState("");

   useEffect(() => {

      getListFolder("").then(
         res => {
            setListFolder(res.data.entries);
         });

      accountName().then(data => {
         localStorage.setItem("userName", data.data.name.familiar_name);
         localStorage.setItem("userPhoto", data.data.profile_photo_url);
         setUserName(data.data.name.familiar_name);
         setUserPhoto(data.data.profile_photo_url);
      });


   }, []);

   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, folderPath: string) => {
      e.preventDefault();
      getListFolder(folderPath).then(res => {
         setPathFolder(folderPath);
         setListFolder(res.data.entries);
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
            {listFolder.length > 0 ?
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