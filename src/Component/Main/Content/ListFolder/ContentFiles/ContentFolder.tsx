import React from "react";
import Style from "./ContentFolder.module.css";

interface FolderProps {
   handleClick: (e: React.MouseEvent<HTMLAnchorElement>, folderPath: string) => void,
   item: {
      name: string,
      "path_display": string
   }
};

const ContentFolder: React.FC<FolderProps> = ({ item, handleClick }) => {
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