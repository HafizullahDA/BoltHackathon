import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, Float, Torus, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  return (
    <Stars 
      radius={100} 
      depth={50} 
      count={7000}
      factor={4} 
      saturation={1}
      fade 
      speed={1.5}
    />
  );
};

const FloatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh
        ref={meshRef}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial 
          color="#00f5ff"
          opacity={0.3}
          transparent
          wireframe
        />
      </mesh>
    </Float>
  );
};

const FloatingRing = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={2}
      floatIntensity={1}
    >
      <mesh
        ref={meshRef}
      >
        <Torus args={[1.5, 0.2, 16, 100]}>
          <meshPhongMaterial
            color="#00f5ff"
            opacity={0.3}
            transparent
            wireframe
          />
        </Torus>
      </mesh>
    </Float>
  );
};

const FloatingSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
      meshRef.current.rotation.y += 0.02;
    }
  });

  return (
    <Float
      speed={1}
      rotationIntensity={1}
      floatIntensity={1}
    >
      <mesh
        ref={meshRef}
      >
        <Sphere args={[1, 32, 32]}>
          <meshPhongMaterial
            color="#00f5ff"
            opacity={0.2}
            transparent
            wireframe
          />
        </Sphere>
      </mesh>
    </Float>
  );
};

export const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <ParticleField />
      <group position={[-3, 0, 0]}>
        <FloatingCube />
      </group>
      <group position={[3, 0, 0]}>
        <FloatingCube />
      </group>
      <group position={[0, 3, 0]}>
        <FloatingRing />
      </group>
      <group position={[0, -2, 0]}>
        <FloatingSphere />
      </group>
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}; 