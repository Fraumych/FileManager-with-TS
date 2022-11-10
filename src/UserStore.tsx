import React, { createContext, useState, Dispatch } from "react";

const ValueUser: {
   isAuth: boolean,
   userName: string,
   userPhoto: string,
   setIsAuth: Dispatch<boolean>,
   setUserName: Dispatch<string>,
   setUserPhoto: Dispatch<string>
} = {
   isAuth: false,
   userName: "",
   userPhoto: "",
   setIsAuth: () => null,
   setUserName: () => null,
   setUserPhoto: () => null
};

export const UserContext = createContext(ValueUser);

const UserStore: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth") === "true");
   const [userName, setUserName] = useState(localStorage.getItem("userName")!);
   const [userPhoto, setUserPhoto] = useState(localStorage.getItem("userPhoto")!);

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





