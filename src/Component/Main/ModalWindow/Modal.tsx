import React, { Dispatch } from "react";
import Style from "./Modal.module.css";

interface ModalProps {
   modalActive: boolean,
   setModalActive: Dispatch<boolean>
   children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ modalActive, setModalActive, children }) => {

   return (
      <div className={modalActive ? `${Style.modal} ${Style.active}` : `${Style.modal}`} onClick={() => setModalActive(false)}>
         <div className={`${Style.modal_content}`} onClick={(e) => e.stopPropagation()}>
            {children}
         </div>
      </div >
   );
};

export default Modal;