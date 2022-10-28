import React, { useEffect, useState } from "react";

const ButtonBack = ({ currentPathFolder, handleClickBack }) => {
   const [isDisabled, setDisabled] = useState(true);

   useEffect(() => {

      if (currentPathFolder === "") {
         setDisabled(true);
      } else { setDisabled(false); }

   }, [currentPathFolder]);

   return (
      <button className="btn btn-inverse" href={currentPathFolder} onClick={handleClickBack} disabled={isDisabled}>Назад</button>
   );
};

export default ButtonBack;