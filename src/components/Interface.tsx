import { Affix, Button, Group, Stack } from "@mantine/core";
import { useCharacterAnimations } from "../hooks/useCharacterAnimations";
import { CameraModes } from "../contexts/CharacterCustomizationContext";
import { useCharacterCustomizations } from "../hooks/useCharacterCustomizations";

const Interface = () => {
  const { animations, animationIndex, setAnimationIndex } =
    useCharacterAnimations();

  const { cameraMode, setCameraMode } = useCharacterCustomizations();
  return (
    <>
      <Affix position={{ top: 50, right: 20 }}>
        <Group>
          {Object.values(CameraModes).map((mode) => (
            <Button
              key={mode}
              variant={mode === cameraMode ? "filled" : "light"}
              onClick={() => {
                setCameraMode(mode);
              }}
            >
              {mode}
            </Button>
          ))}
        </Group>
      </Affix>
      <Affix position={{ bottom: 50, right: 20 }}>
        <Stack>
          {animations.map((animation, index) => (
            <Button
              key={animation}
              variant={index === animationIndex ? "filled" : "light"}
              onClick={() => setAnimationIndex(index)}
            >
              {animation}
            </Button>
          ))}
        </Stack>
      </Affix>
    </>
  );
};

export default Interface;
