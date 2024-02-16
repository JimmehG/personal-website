import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import { random } from 'maath';
import { Group } from 'three';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Stars = (props: any) => {
   const groupRef = useRef<Group>(null);
   const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }));

   useFrame((_state, delta) => {
      if (groupRef.current) {
         groupRef.current.rotation.x -= delta / 10;
         groupRef.current.rotation.y -= delta / 15;
      }
   });

   return (
      <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
         <Points positions={sphere} stride={3} frustumCulled {...props}>
            <PointMaterial transparent color="#f272c8" size={0.002} sizeAttenuation={true} depthWrite={false} />
         </Points>
      </group>
   );
};

const StarsCanvas = () => {
   return (
      <div className="w-full h-auto absolute inset-0 z-[-1]">
         <Canvas className="!touch-pan-y" camera={{ position: [0, 0, 1] }}>
            <Suspense fallback={null}>
               <Stars />
            </Suspense>

            <Preload all />
         </Canvas>
      </div>
   );
};

export default StarsCanvas;
