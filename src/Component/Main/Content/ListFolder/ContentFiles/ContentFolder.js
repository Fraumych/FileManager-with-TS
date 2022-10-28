import React from "react";
import Style from "./ContentFolder.module.css";

const ContentFolder = ({ item, handleClick }) => {
   const pathHref = window.location.pathname;

   return (
      <a className={Style.FolderName} href={`${pathHref}${item.path_display}`}
         onClick={(event) => {
            handleClick(event, item.path_display);
         }}>
         <span className={`icon-folder-open ${Style.PositionIcon}`} />
         {item.name}
      </a>
   );
};

export default ContentFolder;