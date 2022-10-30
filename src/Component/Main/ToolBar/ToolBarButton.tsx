import React from "react";

interface ToolBarButtonProps {
   setModal: React.Dispatch<React.SetStateAction<boolean>>,
   children: React.ReactNode
};

const ToolBarButton: React.FC<ToolBarButtonProps> = ({ setModal, children }) => {
   return (
      <button className="btn" onClick={() => { setModal(true); }}>{children}</button>
   );
};

export default ToolBarButton;