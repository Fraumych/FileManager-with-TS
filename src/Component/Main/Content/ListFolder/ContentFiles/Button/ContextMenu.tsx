import React, { useContext } from "react";
import { APIContext } from "../../../../../../APIrequest";
import Style from "./Context.module.css";

interface ContextMenuListProps {
   itemName: string,
   itemPath: string
}

const ContextMenuList: React.FC<ContextMenuListProps> = ({ itemName, itemPath }) => {

   const { deleteList } = useContext(APIContext);

   const deleteFile = (itemPath: string) => {
      deleteList(itemPath);
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