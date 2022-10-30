import React from "react";
import ContextMenuList from "./ContextMenu";
import Style from "./Button.module.css";

interface ButtonContextProps {
   index: number,
   item: {
      id: string,
      name: string,
      "path_display": string
   },
   contextMenuButton: string,
   setContextList: React.Dispatch<React.SetStateAction<boolean>>,
   contextList: boolean
}

const ButtonContext: React.FC<ButtonContextProps> = ({ item, contextMenuButton, setContextList, contextList, index }) => {
   return (
      <div className={Style.Position}>
         {item.id === contextMenuButton ?
            <div className={Style.PositionMenu}>
               <button className={`btn ${Style.Button}`} id={index + ""}
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