import { createContext, useState } from "react";

type ContextType = {
  cameraMode: CameraModes;
  setCameraMode: React.Dispatch<React.SetStateAction<CameraModes>>;
};

export const CameraModes = {
  FREE: "FREE",
  HEAD: "HEAD",
  TOP: "TOP",
  BOTTOM: "BOTTOM",
} as const;

type CameraModes = (typeof CameraModes)[keyof typeof CameraModes];

export const CharacterCustomizationContext = createContext<ContextType>({
  cameraMode: "FREE",
  setCameraMode: () => {},
});

export const CharacterCustomizationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cameraMode, setCameraMode] = useState<CameraModes>("FREE");

  return (
    <CharacterCustomizationContext.Provider
      value={{
        cameraMode,
        setCameraMode,
      }}
    >
      {children}
    </CharacterCustomizationContext.Provider>
  );
};
