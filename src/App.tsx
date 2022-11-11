import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserStore from "./UserStore";
import Footer from "./Component/Footer/Footer";
import Headers from "./Component/Headers/Headers";
import Style from "./App.module.css";

import APIrequest from "./APIrequest";
import Home from "./Page/Home";

const App: React.FC = () => {
   return (
      <UserStore>
         <APIrequest>
            <BrowserRouter>
               <Headers />
               <main className={`container ${Style.Main}`}>
                  <Routes>
                     <Route key={"/"} path={"/"} element={<Home />} />
                  </Routes>
               </main>
               <Footer />
            </BrowserRouter>
         </APIrequest>
      </UserStore>

   );
};

export default App;
