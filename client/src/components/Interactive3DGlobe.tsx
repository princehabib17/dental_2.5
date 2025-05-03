import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/context/LanguageContext';
import * as THREE from 'three';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const Interactive3DGlobe: React.FC = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);
  const markersRef = useRef<{ saudi: THREE.Mesh | null; philippines: THREE.Mesh | null; }>({ saudi: null, philippines: null });
  const flightPathRef = useRef<THREE.Line | null>(null);
  const planeRef = useRef<THREE.Mesh | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  // Set up the scene
  useEffect(() => {
    if (!canvasRef.current || sceneRef.current) return;

    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / (window.innerHeight * 0.7), 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      antialias: true,
      alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight * 0.7);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Create globe
    const textureLoader = new THREE.TextureLoader();
    const globeGeometry = new THREE.SphereGeometry(2, 64, 64);
    
    // Earth texture with visible countries and oceans
    const globeMaterial = new THREE.MeshPhongMaterial({
      map: textureLoader.load('/earth_texture.jpg'),
      bumpMap: textureLoader.load('/earth_bump.jpg'),
      bumpScale: 0.05,
      specularMap: textureLoader.load('/earth_specular.jpg'),
      shininess: 5
    });
    
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);
    globeRef.current = globe;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    // Create Saudi Arabia marker (red)
    const saudiGeometry = new THREE.SphereGeometry(0.08, 32, 32);
    const saudiMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const saudiMarker = new THREE.Mesh(saudiGeometry, saudiMaterial);
    
    // Position based on latitude/longitude (rough approximation)
    // Saudi Arabia: ~25°N, 45°E
    const saudiLat = 25 * (Math.PI / 180);
    const saudiLon = 45 * (Math.PI / 180);
    saudiMarker.position.set(
      2 * Math.cos(saudiLat) * Math.sin(saudiLon),
      2 * Math.sin(saudiLat),
      2 * Math.cos(saudiLat) * Math.cos(saudiLon)
    );
    scene.add(saudiMarker);
    markersRef.current.saudi = saudiMarker;

    // Create Philippines marker (green)
    const philGeometry = new THREE.SphereGeometry(0.08, 32, 32);
    const philMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const philMarker = new THREE.Mesh(philGeometry, philMaterial);
    
    // Philippines: ~13°N, 122°E
    const philLat = 13 * (Math.PI / 180);
    const philLon = 122 * (Math.PI / 180);
    philMarker.position.set(
      2 * Math.cos(philLat) * Math.sin(philLon),
      2 * Math.sin(philLat),
      2 * Math.cos(philLat) * Math.cos(philLon)
    );
    scene.add(philMarker);
    markersRef.current.philippines = philMarker;

    // Create flight path curve
    const curvePath = [];
    for (let i = 0; i <= 50; i++) {
      const t = i / 50;
      // Interpolate between Saudi Arabia and Philippines with a slight arc
      const lat = saudiLat * (1 - t) + philLat * t;
      const lon = saudiLon * (1 - t) + philLon * t;
      // Add height to the arc for curvature
      const arcHeight = Math.sin(t * Math.PI) * 0.5;
      
      curvePath.push(new THREE.Vector3(
        (2 + arcHeight) * Math.cos(lat) * Math.sin(lon),
        (2 + arcHeight) * Math.sin(lat),
        (2 + arcHeight) * Math.cos(lat) * Math.cos(lon)
      ));
    }

    const flightCurve = new THREE.CatmullRomCurve3(curvePath);
    const flightGeometry = new THREE.BufferGeometry().setFromPoints(flightCurve.getPoints(100));
    const flightMaterial = new THREE.LineBasicMaterial({ color: 0x00ffff, linewidth: 2 });
    const flightPath = new THREE.Line(flightGeometry, flightMaterial);
    scene.add(flightPath);
    flightPathRef.current = flightPath;

    // Create airplane (simplified as small cone)
    const planeGeometry = new THREE.ConeGeometry(0.05, 0.2, 8);
    const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    // Start at Saudi Arabia position
    plane.position.copy(saudiMarker.position);
    scene.add(plane);
    planeRef.current = plane;

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / (window.innerHeight * 0.7);
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight * 0.7);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    let rotationSpeed = 0.001;
    const animate = () => {
      if (!globeRef.current || !cameraRef.current || !rendererRef.current) return;
      
      // Rotate the globe slowly
      globeRef.current.rotation.y += rotationSpeed;
      
      // Render scene
      rendererRef.current.render(sceneRef.current!, cameraRef.current);
      
      // Continue animation loop
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle scroll-based animations
  useEffect(() => {
    if (!inView || !cameraRef.current || !globeRef.current || !planeRef.current) return;
    
    // Create scroll listener
    const handleScroll = () => {
      if (!containerRef.current || !cameraRef.current || !globeRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const scrollProgress = 1 - (containerRect.bottom / window.innerHeight);
      const cameraZoom = 5 - scrollProgress * 2; // Zoom in as we scroll
      
      // Animate the camera position
      gsap.to(cameraRef.current.position, {
        z: Math.max(2.5, cameraZoom),
        duration: 0.5,
        ease: "power2.out"
      });
      
      // Rotate globe based on scroll
      gsap.to(globeRef.current.rotation, {
        y: scrollProgress * Math.PI * 2,
        duration: 0.8,
        ease: "power1.out"
      });
      
      // Move the plane along the path based on scroll
      if (planeRef.current && flightPathRef.current) {
        // Start animation at 10% and complete at 90% of the scroll
        const flightProgress = Math.min(1, Math.max(0, (scrollProgress - 0.1) / 0.8));
        
        if (flightProgress > 0 && flightProgress < 1) {
          // Get point along curve
          const flightCurve = new THREE.CatmullRomCurve3(
            (flightPathRef.current.geometry as THREE.BufferGeometry)
              .getAttribute('position').array as unknown as THREE.Vector3[]
          );
          const point = flightCurve.getPoint(flightProgress);
          
          // Update plane position
          planeRef.current.position.copy(point);
          
          // Orient the plane along the path
          if (flightProgress < 0.99) {
            const nextPoint = flightCurve.getPoint(flightProgress + 0.01);
            planeRef.current.lookAt(nextPoint);
          }
          
          // Scale up when in middle of flight
          const scaleFactor = 1 + Math.sin(flightProgress * Math.PI) * 0.5;
          planeRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
          
          // Make plane visible during flight
          planeRef.current.visible = true;
        } else {
          // Hide plane when not in flight
          planeRef.current.visible = false;
        }
      }
    };

    // Initial call and event setup
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [inView]);

  return (
    <div 
      ref={(el) => {
        if (el) {
          containerRef.current = el;
          inViewRef(el);
        }
      }}
      className="relative h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-blue-900"
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 h-full flex flex-col justify-center items-center text-white">
        <h2 
          className={`text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-300 to-teal-200 bg-clip-text text-transparent ${isRtl ? 'font-arabic' : 'font-heading-en'}`}
        >
          Connecting Continents Through Smiles
        </h2>
        
        <p 
          className={`text-xl md:text-2xl text-center mb-12 max-w-3xl ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}
        >
          From Saudi Arabia to the Philippines, experience world-class dental care at Arevalo Dental Clinic in Makati
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl w-full">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
            <h3 className={`text-2xl font-bold mb-4 text-blue-300 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
              Saudi Arabia
            </h3>
            <p className={`text-gray-200 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
              Our valued clients from Saudi Arabia and the Gulf region choose Arevalo Dental Clinic for our exceptional dental expertise and personalized care that respects their cultural preferences.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">
            <h3 className={`text-2xl font-bold mb-4 text-teal-300 ${isRtl ? 'font-arabic' : 'font-heading-en'}`}>
              Makati, Philippines
            </h3>
            <p className={`text-gray-200 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
              Located in the heart of Makati's business district, our premier dental clinic offers state-of-the-art technology and internationally-trained dentists specializing in cosmetic and restorative procedures.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className={`text-lg animate-pulse text-blue-200 ${isRtl ? 'font-arabic rtl-toggle' : 'font-body-en'}`}>
            Scroll to explore our global connection
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interactive3DGlobe;