import React from "react";

const ToolBarButton = ({ setModal, children }) => {
   return (
      <button className="btn" onClick={() => { setModal(true); }}>{children}</button>
   );
};

export default ToolBarButton;