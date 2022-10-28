import React from "react";
import Style from "./ContentFile.module.css";

const ContentFile = ({ item }) => {
   return (
      <p className={Style.FileName}>
         <span className={`icon-file ${Style.PositionIcon}`} />
         {item.name}
      </p>
   );
};

export default ContentFile;