import { useState } from "react";
import Profile from "../components/profile/profile";

import "./App.css";

import imgDarkMode from "../img/avatar.jpg";
import imgLightMode from "../img/avatar-light.jpg";


const App = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode ? "Imagem no modo Claro" : "Imagem no modo Escuro";

  return (
    <div>
      <Profile imgSrc={imgSrc} imgAlt={imgAlt}>
        @ProfCastello
      </Profile>
    </div>
  );
};

export default App;
