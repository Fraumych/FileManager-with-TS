import React from "react";
import File from "../Page/File";
import Login from "../Page/Login";
import { LOGIN_ROUTE, FILE_ROUTE } from "./const";

interface publicRoutesP {
   path: string,
   Component: React.FC
}

export const publicRoutes: publicRoutesP[] = [
   {
      path: LOGIN_ROUTE,
      Component: Login
   },
   {
      path: FILE_ROUTE,
      Component: File
   },
];
