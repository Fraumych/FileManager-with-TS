import React, { Dispatch } from "react";

interface ToolBarButtonProps {
   setModalActive: Dispatch<boolean>,
   children: React.ReactNode
};

const ToolBarButton: React.FC<ToolBarButtonProps> = ({ setModalActive, children }) => {
   return (
      <button className="btn" onClick={() => { setModalActive(true); }}>{children}</button>
   );
};

export default ToolBarButton;