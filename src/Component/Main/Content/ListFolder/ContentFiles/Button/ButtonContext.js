import React from "react";
import ContextMenuList from "./ContextMenu";
import Style from "./Button.module.css";

const ButtonContext = ({ item, contextMenuButton, setContextList, contextList, index }) => {
   return (
      <div className={Style.Position}>
         {item.id === contextMenuButton ?
            <div className={Style.PositionMenu}>
               <button className={`btn ${Style.Button}`} id={index}
                  onClick={() => setContextList(() => {
                     if (contextList) {
                        return false;
                     } else {
                        return true;
                     }
                  })}
               >Ещё
               </button>
               {contextList ?
                  <ContextMenuList itemName={item.name} itemPath={item.path_display} />
                  :
                  null}
            </div>
            :
            null}
      </div>
   );
};

export default ButtonContext;