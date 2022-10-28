import React, { useContext } from "react";
import { APIContext } from "../../../../../../APIrequest";
import Style from "./Context.module.css";

const ContextMenuList = ({ itemName, itemPath }) => {

   const { deleteList } = useContext(APIContext);

   const deleteFile = (itemPath) => {
      deleteList(itemPath).then(alert("Файл удален"))
         .then(window.location.reload());
   };

   return (
      <div className={Style.ContextMenu}>
         <p className={Style.ItemName}>{itemName}</p>
         <div className={Style.ContextList}>
            <button className={`btn ${Style.ItemList}`}>Изменить</button>
            <button className={`btn ${Style.ItemList}`} onClick={() => { deleteFile(itemPath); }}>Удалить</button>
            <button className={`btn ${Style.ItemList}`}>Добавить</button>
         </div>
      </div>
   );
};
export default ContextMenuList;