import { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import * as THREE from 'three';

// 3D Molar Tooth Component - Simplified
function MolarTooth() {
  const groupRef = useRef<THREE.Group>(null);

  // Animate based on scroll and time
  useFrame((state) => {
    if (groupRef.current) {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollY / maxScroll, 1);

      // Rotation based on scroll
      groupRef.current.rotation.y = scrollProgress * Math.PI * 4;
      groupRef.current.rotation.x = Math.sin(scrollProgress * Math.PI) * 0.3;

      // Scale based on scroll (1x to 2.5x)
      const scale = 1 + scrollProgress * 1.5;
      groupRef.current.scale.set(scale, scale, scale);

      // Floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#60a5fa" />
      <spotLight
        position={[0, 15, 5]}
        angle={0.5}
        penumbra={1}
        intensity={2}
        castShadow
      />

      <group ref={groupRef}>
        {/* Main crown - box shape */}
        <mesh position={[0, 0.4, 0]} castShadow receiveShadow>
          <boxGeometry args={[1, 0.8, 1]} />
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.2}
            metalness={0.1}
          />
        </mesh>

        {/* Crown top bumps - 4 spheres at corners */}
        <mesh position={[0.25, 0.8, 0.25]} castShadow>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
        </mesh>

        <mesh position={[-0.25, 0.8, 0.25]} castShadow>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
        </mesh>

        <mesh position={[0.25, 0.8, -0.25]} castShadow>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
        </mesh>

        <mesh position={[-0.25, 0.8, -0.25]} castShadow>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
        </mesh>

        {/* Root 1 - front left */}
        <mesh position={[0.3, -0.6, 0.3]} rotation={[0, 0, 0.15]} castShadow>
          <cylinderGeometry args={[0.12, 0.08, 1.2, 12]} />
          <meshStandardMaterial color="#f5f5f5" roughness={0.4} />
        </mesh>

        {/* Root 2 - front right */}
        <mesh position={[-0.3, -0.6, 0.3]} rotation={[0, 0, -0.15]} castShadow>
          <cylinderGeometry args={[0.12, 0.08, 1.2, 12]} />
          <meshStandardMaterial color="#f5f5f5" roughness={0.4} />
        </mesh>

        {/* Root 3 - back center */}
        <mesh position={[0, -0.75, -0.3]} castShadow>
          <cylinderGeometry args={[0.12, 0.08, 1.5, 12]} />
          <meshStandardMaterial color="#f5f5f5" roughness={0.4} />
        </mesh>

        {/* Chewing surface grooves */}
        <mesh position={[0, 0.85, 0]}>
          <boxGeometry args={[0.7, 0.08, 0.04]} />
          <meshStandardMaterial color="#e8e8e8" />
        </mesh>

        <mesh position={[0, 0.85, 0]}>
          <boxGeometry args={[0.04, 0.08, 0.7]} />
          <meshStandardMaterial color="#e8e8e8" />
        </mesh>
      </group>
    </>
  );
}

// Loading fallback
function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading 3D Model...</p>
      </div>
    </div>
  );
}

// Main Component
export default function Molar3DScroll() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const isRtl = language === 'ar';
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  // Check WebGL support
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

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
          {hasWebGL ? (
            <Suspense fallback={<LoadingFallback />}>
              <Canvas
                shadows
                camera={{ position: [0, 0, 5], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
              >
                <MolarTooth />
              </Canvas>
            </Suspense>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🦷</div>
                <h3 className="text-2xl font-bold mb-2">3D Dental Care</h3>
                <p className="text-gray-600">
                  Advanced 3D visualization (WebGL not supported on this device)
                </p>
              </div>
            </div>
          )}

          {/* Floating Guide Text */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
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
