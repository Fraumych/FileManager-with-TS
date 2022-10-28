import React, { useState } from "react";
import ContentFile from "./ContentFiles/ContentFile";
import ContentFolder from "./ContentFiles/ContentFolder";
import Style from "./ListFolder.module.css";
import ButtonContext from "./ContentFiles/Button/ButtonContext";

const ListFolder = ({ handleClick, listFolder }) => {

   const [contextMenuButton, setContextMenuButton] = useState();

   const [contextList, setContextList] = useState(false);

   return (
      <>
         {listFolder.entries.map((item, index) => {
            return (

               <tr key={index}
                  onMouseEnter={() => {
                     setContextMenuButton(item.id);
                  }}
                  onMouseLeave={() => {
                     setContextMenuButton(null);
                     setContextList(false);
                  }}>

                  <td className={Style.InputColumn}> <input type="checkbox" name={item.name} id={item.name} /></td>

                  <td>
                     <div className={Style.FilesColumn}>
                        {item[".tag"] === "folder" ?
                           <>
                              <ContentFolder item={item} handleClick={handleClick} />
                              <ButtonContext item={item} contextMenuButton={contextMenuButton}
                                 setContextList={setContextList} contextList={contextList} index={index} />
                           </>
                           :
                           <>
                              <ContentFile item={item} />
                              <ButtonContext item={item} contextMenuButton={contextMenuButton}
                                 setContextList={setContextList} contextList={contextList} index={index} />
                           </>
                        }
                     </div>
                  </td>

                  <td> {item.size}</td>

                  <td>{item["client_modified"] ? item["client_modified"].replace(/[\\T\\Z]/g, " ") : "--"}</td>
               </tr>
            );
         })}
      </>
   );
};

export default ListFolder;