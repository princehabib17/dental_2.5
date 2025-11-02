import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import * as THREE from 'three';

// 3D Molar Tooth Component
function MolarTooth() {
  const groupRef = useRef<THREE.Group>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = scrollTop / (documentHeight - windowHeight);
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate based on scroll
  useFrame((state) => {
    if (groupRef.current) {
      // Rotation based on scroll (full rotation every scroll)
      groupRef.current.rotation.y = scrollProgress * Math.PI * 4;
      groupRef.current.rotation.x = scrollProgress * Math.PI * 0.5;

      // Scale based on scroll (starts at 1, goes up to 2)
      const scale = 1 + scrollProgress * 1.5;
      groupRef.current.scale.set(scale, scale, scale);

      // Subtle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main crown body */}
      <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[1, 0.8, 1]} />
        <meshStandardMaterial color="#f8f8f8" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Rounded tops - 4 corners */}
      <mesh position={[0.25, 0.8, 0.25]} castShadow>
        <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#f8f8f8" roughness={0.3} metalness={0.1} />
      </mesh>

      <mesh position={[-0.25, 0.8, 0.25]} castShadow>
        <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#f8f8f8" roughness={0.3} metalness={0.1} />
      </mesh>

      <mesh position={[0.25, 0.8, -0.25]} castShadow>
        <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#f8f8f8" roughness={0.3} metalness={0.1} />
      </mesh>

      <mesh position={[-0.25, 0.8, -0.25]} castShadow>
        <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#f8f8f8" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Root 1 */}
      <mesh position={[0.3, -0.6, 0.3]} rotation={[0, 0, 0.1]} castShadow>
        <cylinderGeometry args={[0.15, 0.1, 1.2, 16]} />
        <meshStandardMaterial color="#e8e8e8" roughness={0.5} metalness={0.05} />
      </mesh>

      {/* Root 2 */}
      <mesh position={[-0.3, -0.6, 0.3]} rotation={[0, 0, -0.1]} castShadow>
        <cylinderGeometry args={[0.15, 0.1, 1.2, 16]} />
        <meshStandardMaterial color="#e8e8e8" roughness={0.5} metalness={0.05} />
      </mesh>

      {/* Root 3 */}
      <mesh position={[0, -0.75, -0.3]} castShadow>
        <cylinderGeometry args={[0.15, 0.1, 1.5, 16]} />
        <meshStandardMaterial color="#e8e8e8" roughness={0.5} metalness={0.05} />
      </mesh>

      {/* Groove 1 - horizontal */}
      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[0.8, 0.1, 0.05]} />
        <meshStandardMaterial color="#d8d8d8" roughness={0.7} />
      </mesh>

      {/* Groove 2 - vertical */}
      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[0.05, 0.1, 0.8]} />
        <meshStandardMaterial color="#d8d8d8" roughness={0.7} />
      </mesh>

      {/* Lighting */}
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4299e1" />
      <ambientLight intensity={0.6} />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
    </group>
  );
}

// Camera controller for following scroll
function CameraController() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = scrollTop / (documentHeight - windowHeight);
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame(({ camera }) => {
    // Move camera slightly as user scrolls
    camera.position.z = 5 - scrollProgress * 1;
    camera.position.y = scrollProgress * 2;
  });

  return null;
}

// Main Component
export default function Molar3DScroll() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const isRtl = language === 'ar';
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={containerRef}
      className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-blue-50 via-purple-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          style={{ opacity }}
          className="text-center mb-12"
        >
          <motion.h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isRtl ? 'font-arabic' : 'font-heading-en'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="gradient-text">
              {t('molar3d.title', 'Discover Perfect Dental Health')}
            </span>
          </motion.h2>
          <motion.p
            className={`text-lg text-gray-600 max-w-2xl mx-auto ${
              isRtl ? 'font-arabic' : ''
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t(
              'molar3d.subtitle',
              'Scroll to explore our advanced dental care - watch how we transform smiles with precision and care'
            )}
          </motion.p>
        </motion.div>

        {/* 3D Canvas Container */}
        <motion.div
          style={{ y }}
          className="relative w-full h-[600px] rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"
        >
          <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
            <CameraController />
            <MolarTooth />
            <fog attach="fog" args={['#f0f0f0', 5, 15]} />
          </Canvas>

          {/* Floating Guide Text */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <p className={`text-sm font-medium text-gray-700 ${isRtl ? 'font-arabic' : ''}`}>
                {t('molar3d.scrollGuide', '↓ Scroll to explore ↓')}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: t('molar3d.feature1.title', 'Precision Care'),
              desc: t(
                'molar3d.feature1.desc',
                'Advanced 3D imaging for accurate diagnosis'
              ),
              icon: '🦷',
            },
            {
              title: t('molar3d.feature2.title', 'Expert Treatment'),
              desc: t(
                'molar3d.feature2.desc',
                'State-of-the-art procedures by skilled professionals'
              ),
              icon: '⚕️',
            },
            {
              title: t('molar3d.feature3.title', 'Lasting Results'),
              desc: t(
                'molar3d.feature3.desc',
                'Beautiful, healthy smiles that last a lifetime'
              ),
              icon: '✨',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="card-hover bg-white rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  isRtl ? 'font-arabic' : 'font-heading-en'
                }`}
              >
                {feature.title}
              </h3>
              <p className={`text-gray-600 ${isRtl ? 'font-arabic' : ''}`}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
