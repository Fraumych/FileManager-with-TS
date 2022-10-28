import React, { useState } from "react";
import Modal from "./Modal";
import ToolBarButton from "./ToolBarButton";
import Style from "./ToolBar.module.css";

const Toolbar = () => {
   const [modalActive, setModalActive] = useState(false);


   return (
      <>
         <div className={`btn-group ${Style.ToolBarList}`}>
            <ToolBarButton setModal={setModalActive}>Копировать</ToolBarButton>
            <ToolBarButton setModal={setModalActive}>Вырезать</ToolBarButton>
            <ToolBarButton setModal={setModalActive}>Удалить</ToolBarButton>
            <ToolBarButton setModal={setModalActive}>Скачать</ToolBarButton>
         </div>

         <Modal active={modalActive} setActive={setModalActive} />
      </>
   );
};

export default Toolbar;