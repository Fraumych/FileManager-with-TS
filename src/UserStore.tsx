import React, { createContext, PropsWithChildren, useState } from "react";

interface ValueUser {
   isAuth: boolean,
   userName: string,
   userPhoto: string,
   setIsAuth: React.Dispatch<React.SetStateAction<boolean>>,
   setUserName: React.Dispatch<React.SetStateAction<string>>,
   setUserPhoto: React.Dispatch<React.SetStateAction<string>>
}
export const UserContext = createContext({} as ValueUser);

const UserStore: React.FC<PropsWithChildren> = ({ children }) => {
   const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") === "true");
   const [userName, setUserName] = useState("");
   const [userPhoto, setUserPhoto] = useState("");

   return (
      <UserContext.Provider value={{ isAuth, setIsAuth, userName, setUserName, userPhoto, setUserPhoto }}>{children}</UserContext.Provider>
   );
};

export default UserStore;














//export default class UserStore {
//   constructor() {
//      this._isAuth = false
//      this._user = {}
//      makeAutoObservable(this)
//   }



//   setIsAuth(bool) {
//      this._isAuth = bool
//   }

//   setUser(user) {
//      this._user = user
//   }

//   get isAuth() {
//      return this._isAuth
//   }

//   get User() {
//      return this._user
//   }
//}





