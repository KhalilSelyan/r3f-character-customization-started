import { useContext } from "react";
import { CharacterAnimationsContext } from "../contexts/CharacterAnimations";

export const useCharacterAnimations = () => {
  return useContext(CharacterAnimationsContext);
};
