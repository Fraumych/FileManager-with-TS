import React from "react";
import Style from "./ContentFile.module.css";

interface FileProps {
   item: { name: string }
};

const ContentFile: React.FC<FileProps> = ({ item }) => {
   return (
      <p className={Style.FileName}>
         <span className={`icon-file ${Style.PositionIcon}`} />
         {item.name}
      </p>
   );
};

export default ContentFile;