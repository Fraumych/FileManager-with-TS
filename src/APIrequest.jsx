import React, { createContext } from "react";
import axios from "axios";

export const APIContext = createContext({});

export const APIrequest = ({ children }) => {

   const ax = axios.create({
      baseURL: "https://api.dropboxapi.com",
      headers: {
         Authorization: `Bearer ${localStorage.getItem("token")}`,
         "Content-Type": "application/json"
      }
   });

   const Authorization = () => {
      let token = new URLSearchParams(window.location.search).get("code");

      return ax.post("/oauth2/token", `code=${token}&grant_type=authorization_code&redirect_uri=http://localhost:3000/file`, {
         headers: {
            Authorization: "Basic eG51bWxoZHJkNnc0eGNiOmJ1bnhycTBqNXM4bHlzMw==",
            "Content-Type": "application/x-www-form-urlencoded"
         },
      });
   };

   const accountName = () => {
      return ax.post("/2/users/get_current_account");
   };

   const getListFolder = (path = "") => {
      return ax.post("/2/files/list_folder", {
         "include_deleted": false,
         "include_has_explicit_shared_members": false,
         "include_media_info": false,
         "include_mounted_folders": true,
         "include_non_downloadable_files": true,
         "path": path,
         "recursive": false,
      });
   };

   const deleteList = (path) => {
      return ax.post("/2/files/delete_v2", {
         "path": path,
      });
   };

   return (
      <APIContext.Provider value={{ Authorization, accountName, getListFolder, deleteList }}>{children}</APIContext.Provider>
   );
};