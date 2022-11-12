import React, { useContext, useState } from "react";
import { APIContext } from "../../../../../../APIrequest";
import Modal from "../../../../ModalWindow/Modal";
import Style from "./Context.module.css";

interface ContextMenuListProps {
   itemName: string,
   itemPath: string
}

const ContextMenuList: React.FC<ContextMenuListProps> = ({ itemName, itemPath }) => {
   const { deleteList, createFolder } = useContext(APIContext);

   const [folderName, setFolderName] = useState("");

   const deleteFile = (itemPath: string) => {
      deleteList(itemPath);
   };


   const [modalActive, setModalActive] = useState(false);

   return (
      <div className={Style.ContextMenu}>
         <p className={Style.ItemName}>{itemName}</p>

         <div className={Style.ContextList}>
            <button className={`btn ${Style.ItemList}`} onClick={() => { setModalActive(true); }}>Создать Папку</button>
            <button className={`btn ${Style.ItemList}`} onClick={() => { deleteFile(itemPath); }}>Удалить</button>
         </div>

         <Modal modalActive={modalActive} setModalActive={setModalActive}>
            <input placeholder="Введите имя папки" value={folderName} onChange={(e) => setFolderName(e.target.value)} />
            <div style={{ display: "flex", justifyContent: "end" }}>
               <button style={{ marginRight: "5px" }} className="btn btn-danger button-1" onClick={() => setModalActive(false)}>Отмена</button>
               <button className="btn btn-primary button-1"
                  onClick={() => {
                     createFolder(itemPath, folderName);
                     setModalActive(false);
                  }}>Создать</button>
            </div>
         </Modal>
      </div>
   );
};
export default ContextMenuList;