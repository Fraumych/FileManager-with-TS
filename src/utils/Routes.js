import File from "../Page/File";
import Login from "../Page/Login";
import { LOGIN_ROUTE, FILE_ROUTE } from "./const";

export const publicRoutes = [
   {
      path: LOGIN_ROUTE,
      Component: Login
   },
   {
      path: FILE_ROUTE,
      Component: File
   },
];
