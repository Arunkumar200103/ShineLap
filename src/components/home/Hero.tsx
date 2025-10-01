import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Sparkles, Cloud, Stars } from '@react-three/drei';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ShoppingBag, Wrench, Award, TrendingUp, Clock, Headphones } from 'lucide-react';

// Futuristic Laptop 3D Model
function FuturisticLaptop() {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.15;
      groupRef.current.position.y = Math.cos(t * 0.4) * 0.08;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <group 
        ref={groupRef}
        onPointerOver={() => setHovered(true)} 
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        {/* Main Laptop Body */}
        <mesh position={[0, -0.4, 0]} castShadow>
          <boxGeometry args={[3.5, 0.15, 2.2]} />
          <meshStandardMaterial 
            color={hovered ? "#6366F1" : "#18181B"} 
            metalness={0.9} 
            roughness={0.1} 
            emissive={hovered ? "#6366F1" : "#000000"}
            emissiveIntensity={hovered ? 0.3 : 0}
          />
        </mesh>

        {/* Screen */}
        <mesh position={[0, 0.7, -1]} rotation={[-0.3, 0, 0]} castShadow>
          <boxGeometry args={[3.5, 2.2, 0.08]} />
          <meshStandardMaterial color="#18181B" metalness={0.95} roughness={0.05} />
        </mesh>

        {/* Screen Display (glowing) */}
        <mesh position={[0, 0.7, -0.96]} rotation={[-0.3, 0, 0]}>
          <planeGeometry args={[3.2, 2]} />
          <meshStandardMaterial 
            color="#4F46E5" 
            emissive="#8B5CF6" 
            emissiveIntensity={1.2}
            toneMapped={false}
          />
        </mesh>

        {/* Holographic Elements */}
        <mesh position={[0, 0.7, -0.9]} rotation={[-0.3, 0, 0]}>
          <planeGeometry args={[2.8, 1.6]} />
          <meshStandardMaterial 
            color="#60A5FA" 
            transparent 
            opacity={0.3}
            emissive="#60A5FA"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Keyboard Deck */}
        <mesh position={[0, -0.32, 0.3]}>
          <boxGeometry args={[3.2, 0.02, 1.8]} />
          <meshStandardMaterial color="#27272A" metalness={0.7} roughness={0.3} />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, -0.31, 0.8]}>
          <boxGeometry args={[1.2, 0.02, 0.8]} />
          <meshStandardMaterial color="#3B82F6" metalness={0.8} roughness={0.2} emissive="#3B82F6" emissiveIntensity={0.2} />
        </mesh>

        {/* LED Indicators */}
        {[-1.3, -1, -0.7].map((x, i) => (
          <mesh key={i} position={[x, -0.3, -0.9]}>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshStandardMaterial 
              color={i === 0 ? "#10B981" : i === 1 ? "#3B82F6" : "#F59E0B"} 
              emissive={i === 0 ? "#10B981" : i === 1 ? "#3B82F6" : "#F59E0B"}
              emissiveIntensity={2}
            />
          </mesh>
        ))}

        {/* Floating Particles Around Laptop */}
        <Sparkles count={50} scale={4} size={2} speed={0.3} color="#8B5CF6" />
      </group>
    </Float>
  );
}

// Rotating Geometric Shapes
function GeometricShapes() {
  const group1 = useRef();
  const group2 = useRef();
  const group3 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group1.current) group1.current.rotation.x = group1.current.rotation.y = t * 0.3;
    if (group2.current) group2.current.rotation.x = group2.current.rotation.z = t * 0.2;
    if (group3.current) group3.current.rotation.y = group3.current.rotation.z = t * 0.4;
  });

  return (
    <>
      <mesh ref={group1} position={[-5, 2, -3]}>
        <octahedronGeometry args={[0.8]} />
        <meshStandardMaterial color="#3B82F6" wireframe transparent opacity={0.3} />
      </mesh>
      <mesh ref={group2} position={[5, -1, -4]}>
        <torusGeometry args={[0.6, 0.2, 16, 32]} />
        <meshStandardMaterial color="#8B5CF6" wireframe transparent opacity={0.3} />
      </mesh>
      <mesh ref={group3} position={[3, 3, -5]}>
        <icosahedronGeometry args={[0.7]} />
        <meshStandardMaterial color="#06B6D4" wireframe transparent opacity={0.3} />
      </mesh>
    </>
  );
}

// Error Boundary
class ThreeErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">💻</div>
            <p className="text-gray-400">3D content unavailable</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Animated Service Card
function ServiceCard({ icon: Icon, title, description, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative group cursor-pointer"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-3xl border border-gray-700 group-hover:border-gray-600 transition-all backdrop-blur-sm">
        <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center text-sm text-blue-400 font-medium">
          <span>Learn more</span>
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

// Main Hero Component
export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 20);
    mouseY.set((clientY / innerHeight - 0.5) * 20);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-black"></div>
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl"
        />
        <motion.div
          style={{ x: useTransform(mouseX, (x) => -x), y: useTransform(mouseY, (y) => -y) }}
          className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl"
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-block"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center gap-2 px-5 py-2.5 bg-gray-900 border border-gray-700 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-white">Next-Gen Technology Available</span>
                </div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-none">
                <span className="block text-white mb-2">Welcome to</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                  Shine Laptops
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-xl sm:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Premium laptop solutions powered by innovation. 
              <span className="text-white font-semibold"> Expert sales & professional services</span> for the modern digital world.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl text-white font-bold text-lg overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <ShoppingBag className="w-6 h-6" />
                  Explore Products
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-transparent border-2 border-gray-700 hover:border-gray-500 rounded-2xl text-white font-bold text-lg hover:bg-gray-900 transition-all flex items-center justify-center gap-2"
              >
                <Wrench className="w-6 h-6" />
                View Services
              </motion.button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {[
                { value: '25+', label: 'Expert Team' },
                { value: '1250+', label: 'Services' },
                { value: '8', label: 'Locations' },
                { value: '3500+', label: 'Happy Clients' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="text-center p-4 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-gray-700 transition-all"
                >
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - 5 columns (3D Scene) */}
          <div className="lg:col-span-5 h-[400px] sm:h-[500px] lg:h-[700px]">
            <ThreeErrorBoundary>
              <Suspense fallback={
                <div className="flex items-center justify-center h-full">
                  <div className="relative">
                    <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <div className="absolute inset-0 w-24 h-24 border-4 border-purple-500 border-b-transparent rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
                  </div>
                </div>
              }>
                <Canvas
                  camera={{ position: [0, 0, 8], fov: 50 }}
                  shadows
                  dpr={[1, 2]}
                >
                  {/* Lighting */}
                  <ambientLight intensity={0.2} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                  <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} color="#8B5CF6" />
                  <pointLight position={[0, 5, 5]} intensity={0.5} color="#3B82F6" />

                  {/* 3D Content */}
                  <FuturisticLaptop />
                  <GeometricShapes />
                  <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                  {/* Controls */}
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={1}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 3.5}
                  />

                  <Suspense fallback={null}>
                    <Environment preset="night" />
                  </Suspense>
                </Canvas>
              </Suspense>
            </ThreeErrorBoundary>
          </div>
        </div>

        {/* Service Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
        >
         
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-700 group-hover:border-gray-600 rounded-full flex justify-center p-1.5 transition-colors">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}