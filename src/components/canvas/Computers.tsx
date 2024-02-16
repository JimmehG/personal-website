import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

interface ComputerProps {
   isMobile: boolean;
}

const Computers: React.FC<ComputerProps> = ({ isMobile }) => {
   const computer = useGLTF('./rtj4d_wireframe_with_glass_orb/scene.gltf');

   return (
      <mesh>
         <primitive
            object={computer.scene}
            scale={isMobile ? 5 : 7}
            position={isMobile ? [0, -1, 0] : [0, -1.25, 0]}
            rotation={[-0.01, -0.2, -0.1]}
         />
      </mesh>
   );
};

const ComputersCanvas = () => {
   const [isMobile, setIsMobile] = useState<boolean>(false);

   useEffect(() => {
      // Add a listener for changes to the screen size
      const mediaQuery = window.matchMedia('(max-width: 500px)');

      // Set the initial value of the `isMobile` state variable
      setIsMobile(mediaQuery.matches);

      // Define a callback function to handle changes to the media query
      const handleMediaQueryChange = (event: { matches: boolean | ((prevState: boolean) => boolean) }) => {
         setIsMobile(event.matches);
      };

      // Add the callback function as a listener for changes to the media query
      mediaQuery.addEventListener('change', handleMediaQueryChange);

      // Remove the listener when the component is unmounted
      return () => {
         mediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
   }, []);

   return (
      <Canvas
         className="important-touch-pan-y"
         frameloop="demand"
         shadows
         dpr={[1, 2]}
         camera={{ position: [20, 0, 0], fov: 25 }}
         gl={{ preserveDrawingBuffer: true }}
      >
         <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
               autoRotate={true}
               enableZoom={false}
               maxPolarAngle={Math.PI / 2}
               minPolarAngle={Math.PI / 2}
            />
            <Computers isMobile={isMobile} />
         </Suspense>

         <Preload all />
      </Canvas>
   );
};

export default ComputersCanvas;
