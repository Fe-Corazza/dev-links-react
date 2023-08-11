import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";
import SocialLinks from "../components/socialLinks/socialLinks";
import Footer from "../components/footer/footer";

import "./App.css";

import imgDarkMode from "../img/avatar.jpg";
import imgLightMode from "../img/avatar-light.jpg";

const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);
  const toggleMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
  const imgAlt = isLightMode ? "Imagem no modo Claro" : "Imagem no modo Escuro";

  return (
    <div>
      <div id="App" className={isLightMode ? "light" : ""}>
        <div id="container"> 
          <Profile imgSrc={imgSrc} imgAlt={imgAlt}>
            @Fe_Corazza
          </Profile>
          <Switch mode={toggleMode} infoButton={isLightMode} />
          <div id="links">
            <ul>
              <Links link={"https://github.com"}>GitHub</Links>
              <Links link={"https://www.instagram.com/fe_corazza/"}>
                Instagram
              </Links>
              <Links link={"https://www.tiktok.com/@fe_corazza"}>Tik Tok</Links>
              <Links link={"https://twitter.com/fe_corazza"}>Twitter</Links>
            </ul>
          </div>
          <div id="sociallinks">
            <SocialLinks href={"#"} icon={"logo-github"} />
            <SocialLinks href={"#"} icon={"logo-instagram"} />
            <SocialLinks href={"#"} icon={"logo-tiktok"} />
            <SocialLinks href={"#"} icon={"logo-twitter"} />
          </div>
          <Footer link={"#"}>@Fe_Corazza</Footer>
        </div>
      </div>
    </div>
  );
};

export default App;
