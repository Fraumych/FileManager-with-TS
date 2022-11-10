import React, { useState } from "react";
import Modal from "../ModalWindow/Modal";
import ToolBarButton from "./ToolBarButton";
import Style from "./ToolBar.module.css";

const Toolbar: React.FC = () => {
   const [modalActive, setModalActive] = useState(false);


   return (
      <>
         <div className={`btn-group ${Style.ToolBarList}`}>
            <ToolBarButton setModalActive={setModalActive}>Копировать</ToolBarButton>
            <ToolBarButton setModalActive={setModalActive}>Вырезать</ToolBarButton>
            <ToolBarButton setModalActive={setModalActive}>Удалить</ToolBarButton>
            <ToolBarButton setModalActive={setModalActive}>Скачать</ToolBarButton>
         </div>

         <Modal modalActive={modalActive} setModalActive={setModalActive}>
            <h1>Не реализовано</h1>
            <button className="btn btn-primary button-1" onClick={() => setModalActive(false)}>Ок</button>
         </Modal>
      </>
   );
};

export default Toolbar;