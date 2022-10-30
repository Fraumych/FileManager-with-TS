import React, { useEffect, useState } from "react";

interface ButtonBackProps {
   currentPathFolder: string,
   handleClickBack: () => void
}

const ButtonBack: React.FC<ButtonBackProps> = ({ currentPathFolder, handleClickBack }) => {
   const [isDisabled, setDisabled] = useState(true);

   useEffect(() => {

      if (currentPathFolder === "") {
         setDisabled(true);
      } else { setDisabled(false); }

   }, [currentPathFolder]);

   return (
      <button className="btn btn-inverse" onClick={handleClickBack} disabled={isDisabled}>Назад</button>
   );
};

export default ButtonBack;