import React from "react";
import { BrowserRouter } from "react-router-dom";
import UserStore from "./UserStore";
import AppRouter from "./utils/AppRouter";
import Footer from "./Component/Footer/Footer";
import Headers from "./Component/Headers/Headers";
import Style from "./App.module.css";

import APIrequest from "./APIrequest";

const App: React.FC = () => {
   return (
      <UserStore>
         <APIrequest>
            <BrowserRouter>
               <Headers />
               <main className={`container ${Style.Main}`}>
                  <AppRouter />
               </main>
               <Footer />
            </BrowserRouter>
         </APIrequest>
      </UserStore>

   );
};

export default App;
