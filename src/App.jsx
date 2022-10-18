import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import DestinationPageRoutes from "./Routes/DestinationPageRoutes";
import CrewPageRoutes from "./Routes/CrewPageRoutes";
import TechnologyPageRoutes from "./Routes/TechnologyPageRoutes";
import { createContext, useState } from "react";

export const MenuContextStatus = createContext();

function App() {
 
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <MenuContextStatus.Provider value={[ isOpen, setIsOpen ]}>
        <Routes>
          <Route path="/space_tourism" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/destinations/*" element={<DestinationPageRoutes />} />
          <Route path="/crew/*" element={<CrewPageRoutes />} />
          <Route path="/technology/*" element={<TechnologyPageRoutes />} />
        </Routes>
      </MenuContextStatus.Provider>
    </div>
  );
}

export default App;
