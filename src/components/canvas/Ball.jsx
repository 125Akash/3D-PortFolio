// Import necessary React and three.js libraries
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

// Import the Loader component (assuming it's defined in "../Loader")
import CanvasLoader from "../Loader";

// Ball component representing a floating ball with a decal
const Ball = (props) => {
  // Load the texture for the decal using useTexture
  const [decal] = useTexture([props.imgUrl]);

  return (
    // Wrap the ball mesh with the Float component for floating effect
    <Float speed={1.75} rotationIntensity={1} floatIntensity={1}>
      {/* Set up lighting for the scene */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />

      {/* Create the mesh representing the ball */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* Use icosahedronGeometry for the ball geometry */}
        <sphereGeometry args={[1]} />

        {/* Set up the material for the ball */}
        <meshStandardMaterial
          color="#D2F7F2"
          roughness={5}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        {/* Apply the decal to the ball using the Decal component */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.75}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// BallCanvas component representing the canvas with a floating ball
const BallCanvas = ({ icon }) => {
  return (
    // Create the Canvas component for the three.js scene
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Use Suspense for handling asynchronous loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Enable orbit controls for the scene */}
        <OrbitControls enableZoom={false} />

        {/* Render the Ball component with the specified icon */}
        <Ball imgUrl={icon} />
      </Suspense>

      {/* Use Preload to preload assets */}
      <Preload all />
    </Canvas>
  );
};

// Export the BallCanvas component as the default export
export default BallCanvas;
