import React, { createContext, useState } from "react";

export const UserContext = createContext();


const UserStore = ({ children }) => {
   const [isAuth, setIsAuth] = useState(() => {
      if (localStorage.getItem("isAuth") === "true") {
         return true;
      } else { return false; }
   });

   return (
      <UserContext.Provider value={{ isAuth, setIsAuth }}>{children}</UserContext.Provider>
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





