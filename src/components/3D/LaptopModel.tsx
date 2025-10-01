import React, { useRef, useMemo, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Text, RoundedBox, Sphere, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface LaptopModelProps {
  scale?: number;
  animationSpeed?: number;
  color?: string;
}

const LaptopModel: React.FC<LaptopModelProps> = ({ 
  scale = 1, 
  animationSpeed = 0.5,
  color = "#2563eb"
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const screenGlowRef = useRef<THREE.Mesh>(null);
  const keysRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // Enhanced materials with premium finishes
  const materials = useMemo(() => ({
    base: new THREE.MeshStandardMaterial({ 
      color: color,
      metalness: 0.85,
      roughness: 0.15,
      envMapIntensity: 1.5
    }),
    baseBottom: new THREE.MeshStandardMaterial({ 
      color: new THREE.Color(color).multiplyScalar(0.7),
      metalness: 0.9,
      roughness: 0.1
    }),
    screen: new THREE.MeshStandardMaterial({ 
      color: "#0a0a0f",
      metalness: 0.95,
      roughness: 0.05,
      envMapIntensity: 2
    }),
    screenDisplay: new THREE.MeshStandardMaterial({ 
      color: "#1e3a8a",
      emissive: "#2563eb",
      emissiveIntensity: 0.6,
      metalness: 0.1,
      roughness: 0.2
    }),
    screenBezel: new THREE.MeshStandardMaterial({ 
      color: "#000000",
      metalness: 0.95,
      roughness: 0.05
    }),
    keyboard: new THREE.MeshStandardMaterial({ 
      color: "#1a1a24",
      metalness: 0.4,
      roughness: 0.5
    }),
    keys: new THREE.MeshStandardMaterial({ 
      color: "#2a2a3a",
      metalness: 0.2,
      roughness: 0.7
    }),
    trackpad: new THREE.MeshStandardMaterial({ 
      color: "#1f2937",
      metalness: 0.7,
      roughness: 0.2,
      emissive: "#1e40af",
      emissiveIntensity: 0.1
    }),
    hinge: new THREE.MeshStandardMaterial({
      color: "#18181b",
      metalness: 0.9,
      roughness: 0.1
    }),
    rubber: new THREE.MeshStandardMaterial({
      color: "#0f0f14",
      metalness: 0.1,
      roughness: 0.9
    })
  }), [color]);

  // Animation frame
  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      // Smooth floating animation
      groupRef.current.rotation.y = Math.sin(time * animationSpeed * 0.6) * 0.25;
      groupRef.current.position.y = Math.sin(time * animationSpeed) * 0.12;
      
      // Subtle tilt based on rotation
      groupRef.current.rotation.x = Math.sin(time * animationSpeed * 0.4) * 0.05;
    }

    // Screen glow pulsing
    if (screenGlowRef.current) {
      const glowMaterial = screenGlowRef.current.material as THREE.MeshStandardMaterial;
      glowMaterial.emissiveIntensity = 0.6 + Math.sin(time * 2) * 0.2;
    }

    // Subtle key animation
    if (keysRef.current && hovered) {
      keysRef.current.children.forEach((key, i) => {
        const keyMesh = key as THREE.Mesh;
        keyMesh.position.y = 0.035 + Math.sin(time * 3 + i * 0.1) * 0.003;
      });
    }
  });

  // Generate keyboard layout
  const keyboardKeys = useMemo(() => {
    const keys = [];
    const rows = [13, 13, 12, 11]; // Realistic keyboard layout
    let keyIndex = 0;

    rows.forEach((keysInRow, rowIndex) => {
      for (let col = 0; col < keysInRow; col++) {
        const x = (col - keysInRow / 2) * 0.19;
        const z = (rowIndex - 1.5) * 0.19;
        const isSpacebar = rowIndex === 3 && col >= 3 && col <= 7;
        
        keys.push({
          key: keyIndex++,
          x,
          z,
          width: isSpacebar ? 0.9 : 0.15,
          depth: 0.15
        });
        
        if (isSpacebar) col += 4; // Skip spacebar positions
      }
    });
    
    return keys;
  }, []);

  return (
    <group 
      ref={groupRef} 
      position={[0, 0, 0]} 
      scale={hovered ? scale * 1.05 : scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Bottom Base with rubber feet */}
      <RoundedBox 
        args={[3.2, 0.12, 2.1]} 
        radius={0.03} 
        smoothness={6} 
        position={[0, -0.06, 0]}
        castShadow
        receiveShadow
      >
        <primitive object={materials.baseBottom} attach="material" />
      </RoundedBox>

      {/* Rubber Feet */}
      {[[-1.3, -0.12, 0.8], [1.3, -0.12, 0.8], [-1.3, -0.12, -0.8], [1.3, -0.12, -0.8]].map((pos, i) => (
        <Sphere key={i} args={[0.04, 16, 16]} position={pos as [number, number, number]}>
          <primitive object={materials.rubber} attach="material" />
        </Sphere>
      ))}
      
      {/* Main Base/Keyboard Deck */}
      <RoundedBox 
        args={[3, 0.08, 2]} 
        radius={0.025} 
        smoothness={6} 
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      >
        <primitive object={materials.base} attach="material" />
      </RoundedBox>

      {/* Keyboard Surface */}
      <RoundedBox 
        args={[2.7, 0.015, 1.7]} 
        radius={0.015} 
        smoothness={4} 
        position={[0, 0.045, 0.15]}
      >
        <primitive object={materials.keyboard} attach="material" />
      </RoundedBox>
      
      {/* Keyboard Keys */}
      <group ref={keysRef}>
        {keyboardKeys.map(({ key, x, z, width, depth }) => (
          <RoundedBox 
            key={key}
            args={[width, 0.025, depth]} 
            radius={0.01}
            smoothness={3}
            position={[x, 0.055, z + 0.15]}
            castShadow
          >
            <primitive object={materials.keys} attach="material" />
          </RoundedBox>
        ))}
      </group>

      {/* Power Button */}
      <Sphere args={[0.03, 16, 16]} position={[1.2, 0.06, -0.75]}>
        <meshStandardMaterial 
          color="#10b981" 
          emissive="#10b981" 
          emissiveIntensity={1.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>

      {/* Status LEDs */}
      {[
        { pos: [-1.1, 0.055, -0.75], color: "#3b82f6" },
        { pos: [-1.0, 0.055, -0.75], color: "#8b5cf6" },
        { pos: [-0.9, 0.055, -0.75], color: "#f59e0b" }
      ].map((led, i) => (
        <Sphere key={i} args={[0.015, 12, 12]} position={led.pos as [number, number, number]}>
          <meshStandardMaterial 
            color={led.color}
            emissive={led.color}
            emissiveIntensity={2}
            toneMapped={false}
          />
        </Sphere>
      ))}
      
      {/* Trackpad */}
      <RoundedBox 
        args={[1, 0.015, 0.7]} 
        radius={0.015} 
        smoothness={4} 
        position={[0, 0.048, 0.85]}
      >
        <primitive object={materials.trackpad} attach="material" />
      </RoundedBox>

      {/* Trackpad Border Glow */}
      <RoundedBox 
        args={[1.02, 0.001, 0.72]} 
        radius={0.015} 
        smoothness={4} 
        position={[0, 0.049, 0.85]}
      >
        <meshStandardMaterial 
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.3}
          transparent
          opacity={0.5}
        />
      </RoundedBox>

      {/* Hinge Mechanism */}
      <RoundedBox 
        args={[3.1, 0.08, 0.08]} 
        radius={0.02}
        smoothness={4}
        position={[0, 0.5, -0.96]}
        castShadow
      >
        <primitive object={materials.hinge} attach="material" />
      </RoundedBox>

      {/* Screen Back */}
      <RoundedBox 
        args={[3, 2, 0.06]} 
        radius={0.025} 
        smoothness={6} 
        position={[0, 1.5, -1.3]} 
        rotation={[-0.15, 0, 0]}
        castShadow
        receiveShadow
      >
        <primitive object={materials.screen} attach="material" />
      </RoundedBox>

      {/* Screen Front Bezel */}
      <RoundedBox 
        args={[3, 2, 0.04]} 
        radius={0.025} 
        smoothness={6} 
        position={[0, 1.5, -1.27]} 
        rotation={[-0.15, 0, 0]}
      >
        <primitive object={materials.screenBezel} attach="material" />
      </RoundedBox>
      
      {/* Screen Display with Glow */}
      <RoundedBox 
        ref={screenGlowRef}
        args={[2.7, 1.7, 0.02]} 
        radius={0.015} 
        smoothness={4} 
        position={[0, 1.5, -1.25]} 
        rotation={[-0.15, 0, 0]}
      >
        <primitive object={materials.screenDisplay} attach="material" />
      </RoundedBox>

      {/* Webcam */}
      <Sphere args={[0.025, 16, 16]} position={[0, 2.35, -1.23]} rotation={[-0.15, 0, 0]}>
        <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
      </Sphere>

      {/* Webcam Indicator LED */}
      <Sphere args={[0.015, 12, 12]} position={[0.15, 2.35, -1.23]} rotation={[-0.15, 0, 0]}>
        <meshStandardMaterial 
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={hovered ? 2 : 0.5}
          toneMapped={false}
        />
      </Sphere>

      {/* Screen Content - App Icons Simulation */}
      <group position={[0, 1.5, -1.23]} rotation={[-0.15, 0, 0]}>
        {/* Gradient Background Effect */}
        <Box args={[2.5, 1.5, 0.001]}>
          <meshStandardMaterial 
            color="#0f172a"
            emissive="#1e3a8a"
            emissiveIntensity={0.3}
          />
        </Box>

        {/* Simulated UI Elements */}
        {[-0.6, -0.2, 0.2, 0.6].map((x, i) => (
          <RoundedBox 
            key={i}
            args={[0.25, 0.25, 0.005]} 
            radius={0.03}
            smoothness={3}
            position={[x, 0.4, 0.01]}
          >
            <meshStandardMaterial 
              color={["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"][i]}
              emissive={["#3b82f6", "#8b5cf6", "#ec4899", "#f59e0b"][i]}
              emissiveIntensity={0.5}
            />
          </RoundedBox>
        ))}

        {/* Center Content Window */}
        <RoundedBox 
          args={[2, 0.8, 0.003]} 
          radius={0.02}
          smoothness={3}
          position={[0, -0.1, 0.01]}
        >
          <meshStandardMaterial 
            color="#1e293b"
            emissive="#1e40af"
            emissiveIntensity={0.2}
          />
        </RoundedBox>
      </group>

      {/* Brand Logo on Base */}
      <Text
        position={[0, 0.055, -0.85]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.18}
        color="#60a5fa"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
        textAlign="center"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff"
        outlineWidth={0.01}
        outlineColor="#1e40af"
      >
        SHINE
      </Text>

      {/* Logo Badge on Screen */}
      <Text
        position={[0, 1.5, -1.22]}
        rotation={[-0.15, 0, 0]}
        fontSize={0.35}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
        textAlign="center"
      >
        ⚡
      </Text>

      {/* Bottom Text */}
      <Text
        position={[0, 0.055, 0.88]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.08}
        color="#6b7280"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
        textAlign="center"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff"
      >
        Premium Series
      </Text>

      {/* Ambient Particles */}
      {hovered && Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 2;
        return (
          <Sphere 
            key={i} 
            args={[0.02, 8, 8]} 
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 2) * 0.5 + 1,
              Math.sin(angle) * radius
            ]}
          >
            <meshStandardMaterial 
              color="#3b82f6"
              emissive="#3b82f6"
              emissiveIntensity={1}
              transparent
              opacity={0.6}
            />
          </Sphere>
        );
      })}
    </group>
  );
};

export default LaptopModel;