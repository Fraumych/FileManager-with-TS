import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./utils/AppRouter";

import UserStore from "./UserStore";
import Footer from "./Component/Footer/Footer";
import Headers from "./Component/Headers/Headers";
import Style from "./App.module.css";

import { APIrequest } from "./APIrequest";

const App: React.FC = () => {
   return (
      <UserStore>
         <APIrequest>
            <BrowserRouter>
               <Headers />
               <div className={`container ${Style.Main}`}>
                  <AppRouter />
               </div>
               <Footer />
            </BrowserRouter>
         </APIrequest>
      </UserStore>

   );
};

export default App;
