import { useContext } from "react";
import { CharacterCustomizationContext } from "../contexts/CharacterCustomizationContext";

export const useCharacterCustomizations = () => {
  return useContext(CharacterCustomizationContext);
};
