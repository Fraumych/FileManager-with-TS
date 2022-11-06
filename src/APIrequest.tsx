import React, { createContext, PropsWithChildren } from "react";
import axios, { AxiosResponse } from "axios";
import { ListResponse } from "./models/Files/ListResponse";
import { IUser } from "./models/Files/IUser";
import { IAuth } from "./models/Auth/IAuth";

interface ValueAPI {
   Authorization: () => Promise<AxiosResponse<IAuth>>,
   accountName: () => Promise<AxiosResponse<IUser>>,
   getListFolder: (path: string) => Promise<AxiosResponse<ListResponse>>,
   deleteList: (path: string) => void
}

export const APIContext = createContext({} as ValueAPI);

const APIrequest: React.FC<PropsWithChildren> = ({ children }) => {

   const axAuth = axios.create({
      baseURL: "https://api.dropboxapi.com",
   });

   const axData = axios.create({
      baseURL: "https://api.dropboxapi.com",
   });

   axData.interceptors.request.use((config) => {
      config.headers!.authorization = `Bearer ${localStorage.getItem("token")}`;
      return config;
   });

   const Authorization = (): Promise<AxiosResponse<IAuth>> => {
      let token = new URLSearchParams(window.location.search).get("code");

      return axAuth.post("/oauth2/token", `code=${token}&grant_type=authorization_code&redirect_uri=http://localhost:3000/file`, {
         headers: {
            Authorization: "Basic eG51bWxoZHJkNnc0eGNiOmJ1bnhycTBqNXM4bHlzMw==",
            "Content-Type": "application/x-www-form-urlencoded"
         },
      });
   };

   const accountName = (): Promise<AxiosResponse<IUser>> => {
      return axData.post<IUser>("/2/users/get_current_account");
   };

   const getListFolder = (path: string = ""): Promise<AxiosResponse<ListResponse>> => {
      return axData.post<ListResponse>("/2/files/list_folder", {
         "include_deleted": false,
         "include_has_explicit_shared_members": false,
         "include_media_info": false,
         "include_mounted_folders": true,
         "include_non_downloadable_files": true,
         "path": path,
         "recursive": false,
      });
   };

   const deleteList = (path: string) => {
      return axData.post("/2/files/delete_v2", {
         "path": path,
      }).then(() => alert("Файл удален"))
         .then(() => window.location.reload());
   };

   return (
      <APIContext.Provider value={{ Authorization, accountName, getListFolder, deleteList }}>{children}</APIContext.Provider>
   );
};

export default APIrequest;