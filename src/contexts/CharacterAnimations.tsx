import { createContext, useState } from "react";

type ContextType = {
  animationIndex: number;
  setAnimationIndex: React.Dispatch<React.SetStateAction<number>>;
  animations: string[];
  setAnimations: React.Dispatch<React.SetStateAction<string[]>>;
};

export const CharacterAnimationsContext = createContext<ContextType>({
  animationIndex: 0,
  setAnimationIndex: () => {},
  animations: [],
  setAnimations: () => {},
});

export const CharacterAnimationsProvider = (props: {
  children: React.ReactNode;
}) => {
  const { children } = props;
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animations, setAnimations] = useState<string[]>([]);

  return (
    <CharacterAnimationsContext.Provider
      value={{
        animationIndex,
        setAnimationIndex,
        animations,
        setAnimations,
      }}
    >
      {children}
    </CharacterAnimationsContext.Provider>
  );
};
