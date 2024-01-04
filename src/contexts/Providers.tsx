import React from "react";
import { CharacterAnimationsProvider } from "./CharacterAnimations";
import { CharacterCustomizationProvider } from "./CharacterCustomizationContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CharacterAnimationsProvider>
      <CharacterCustomizationProvider>
        {children}
      </CharacterCustomizationProvider>
    </CharacterAnimationsProvider>
  );
};

export default Providers;
