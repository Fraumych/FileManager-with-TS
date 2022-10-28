import React from "react";
import "./Modal.css";

const Modal = ({ active, setActive }) => {

   return (
      <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
         <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <h1>Не реализовано</h1>
            <button className="btn btn-primary button-1" onClick={() => setActive(false)}>Ок</button>
         </div>
      </div >
   );
};

export default Modal;