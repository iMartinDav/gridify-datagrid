// components/Header.tsx
import React from "react";
import Logo from "./Logo";
import DarkLightModeSwitch from "./DarkLightModeSwitch";
import Navigator from "./Navigator";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4">
      <Logo />
      <Navigator />
      <DarkLightModeSwitch />
    </header>
  );
};

export default Header;
