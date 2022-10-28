import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { APIContext } from "../APIrequest";
import Toolbar from "../Component/Main/ToolBar/Toolbar";
import BreadCrumbs from "../Component/Main/BreadCrumbs/Breads";
import ListFolder from "../Component/Main/Content/ListFolder/ListFolder";
import { UserContext } from "../UserStore";
import Style from "./File.module.css";

const File = () => {
   const { Authorization, getListFolder } = useContext(APIContext);
   const { isAuth } = useContext(UserContext);
   const navigate = useNavigate();

   const [listFolder, setListFolder] = useState(
      {
         entries: [],
      });

   const [pathFolder, setPathFolder] = useState("");


   useEffect(() => {
      if (!isAuth) {

         Authorization().then(res => {
            localStorage.setItem("isAuth", true);
            localStorage.setItem("token", res.data.access_token);
         }).then(() => { window.location.reload(); })
            .catch(() => {
               navigate("/");
               localStorage.clear();
               window.location.reload();
            });
      }

      if (isAuth) getListFolder().then(
         res => {
            setListFolder(res.data);
         }).catch(() => {
            navigate("/");
            localStorage.clear();
            window.location.reload();
         });
   }, []);

   const handleClick = (e, folderPath) => {
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