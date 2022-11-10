import React, { useContext, useState } from "react";
import { APIContext } from "../../../../../../APIrequest";
import Modal from "../../../../ModalWindow/Modal";
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

   const [modalActive, setModalActive] = useState(false);

   return (
      <div className={Style.ContextMenu}>
         <p className={Style.ItemName}>{itemName}</p>
         <div className={Style.ContextList}>
            <button className={`btn ${Style.ItemList}`} onClick={() => { setModalActive(true); }}>Добавить</button>
            <button className={`btn ${Style.ItemList}`} onClick={() => { deleteFile(itemPath); }}>Удалить</button>
            <button className={`btn ${Style.ItemList}`} onClick={() => { setModalActive(true); }}>Добавить</button>
         </div>
         <Modal modalActive={modalActive} setModalActive={setModalActive}>
            <h1>Не реализовано</h1>
            <button className="btn btn-primary button-1" onClick={() => setModalActive(false)}>Ок</button>
         </Modal>
      </div>
   );
};
export default ContextMenuList;