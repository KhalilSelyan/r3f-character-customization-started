import { OrbitControls } from "@react-three/drei";
import { useCharacterCustomizations } from "../hooks/useCharacterCustomizations";
import { useFrame } from "@react-three/fiber";

const CameraControls = () => {
  const { cameraMode, setCameraMode } = useCharacterCustomizations();

  useFrame(({ camera }) => {
    if (cameraMode === "HEAD") {
      camera.position.set(0, 1.5, 0);
    } else if (cameraMode === "TOP") {
      camera.position.set(0, 5, 0);
    } else if (cameraMode === "BOTTOM") {
      camera.position.set(0, -5, 0);
    } else {
      return;
    }
  });

  return <OrbitControls />;
};

export default CameraControls;
