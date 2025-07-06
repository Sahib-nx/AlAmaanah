import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const Hero = () => {
  const mountRef = useRef(null);
  const animationRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      isMobile ? 60 : 75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Enhanced lighting for better visibility
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Create professional building wireframe
    const buildingGroup = new THREE.Group();
    
    // Main building structure - larger and more visible
    const buildingGeometry = new THREE.BoxGeometry(6, 8, 4);
    const edges = new THREE.EdgesGeometry(buildingGeometry);
    const buildingMaterial = new THREE.LineBasicMaterial({ 
      color: 0x1E3A8A, 
      linewidth: 2,
      transparent: true,
      opacity: 0.9
    });
    const buildingWireframe = new THREE.LineSegments(edges, buildingMaterial);
    buildingWireframe.position.set(0, 4, 0);
    buildingGroup.add(buildingWireframe);

    // Building floors - horizontal lines
    for (let i = 1; i <= 7; i++) {
      const floorGeometry = new THREE.PlaneGeometry(6, 4);
      const floorEdges = new THREE.EdgesGeometry(floorGeometry);
      const floorMaterial = new THREE.LineBasicMaterial({ 
        color: 0xF59E0B, 
        transparent: true,
        opacity: 0.7
      });
      const floor = new THREE.LineSegments(floorEdges, floorMaterial);
      floor.position.set(0, i * 1.1, 0);
      floor.rotation.x = -Math.PI / 2;
      buildingGroup.add(floor);
    }

    // Construction crane - more visible and professional
    const craneGroup = new THREE.Group();
    
    // Crane base
    const craneBaseGeometry = new THREE.CylinderGeometry(0.8, 1.2, 2, 8);
    const craneBaseEdges = new THREE.EdgesGeometry(craneBaseGeometry);
    const craneMaterial = new THREE.LineBasicMaterial({ 
      color: 0xF59E0B,
      linewidth: 3,
      transparent: true,
      opacity: 0.9
    });
    const craneBase = new THREE.LineSegments(craneBaseEdges, craneMaterial);
    craneBase.position.set(10, 1, 8);
    craneGroup.add(craneBase);
    
    // Crane tower
    const craneTowerGeometry = new THREE.CylinderGeometry(0.3, 0.3, 16, 8);
    const craneTowerEdges = new THREE.EdgesGeometry(craneTowerGeometry);
    const craneTower = new THREE.LineSegments(craneTowerEdges, craneMaterial);
    craneTower.position.set(10, 8, 8);
    craneGroup.add(craneTower);
    
    // Crane arm
    const craneArmGeometry = new THREE.BoxGeometry(12, 0.5, 0.5);
    const craneArmEdges = new THREE.EdgesGeometry(craneArmGeometry);
    const craneArm = new THREE.LineSegments(craneArmEdges, craneMaterial);
    craneArm.position.set(10, 15, 8);
    craneGroup.add(craneArm);

    // Blueprint-style grid - more visible
    const gridSize = isMobile ? 20 : 30;
    const gridDivisions = isMobile ? 20 : 30;
    const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x1E3A8A, 0x1E3A8A);
    gridHelper.material.opacity = 0.4;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // Add architectural elements
    const archGroup = new THREE.Group();
    
    // Foundation outline
    const foundationGeometry = new THREE.PlaneGeometry(8, 6);
    const foundationEdges = new THREE.EdgesGeometry(foundationGeometry);
    const foundationMaterial = new THREE.LineBasicMaterial({ 
      color: 0x1E3A8A,
      linewidth: 2,
      transparent: true,
      opacity: 0.8
    });
    const foundation = new THREE.LineSegments(foundationEdges, foundationMaterial);
    foundation.rotation.x = -Math.PI / 2;
    foundation.position.set(0, 0.1, 0);
    archGroup.add(foundation);

    scene.add(buildingGroup);
    scene.add(craneGroup);
    scene.add(archGroup);

    // Professional floating elements
    const elementGeometry = new THREE.BufferGeometry();
    const elementCount = isMobile ? 30 : 50;
    const positions = new Float32Array(elementCount * 3);
    const colors = new Float32Array(elementCount * 3);
    
    for (let i = 0; i < elementCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = Math.random() * 15 + 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
      
      // Alternate between blue and orange
      const color = Math.random() > 0.5 ? new THREE.Color(0x1E3A8A) : new THREE.Color(0xF59E0B);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    elementGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    elementGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const elementMaterial = new THREE.PointsMaterial({ 
      size: isMobile ? 0.05 : 0.08,
      transparent: true,
      opacity: 0.8,
      vertexColors: true
    });
    const elements = new THREE.Points(elementGeometry, elementMaterial);
    scene.add(elements);

    // Camera positioning - optimized for mobile
    if (isMobile) {
      camera.position.set(0, 8, 15);
      camera.lookAt(0, 4, 0);
    } else {
      camera.position.set(12, 10, 16);
      camera.lookAt(0, 4, 0);
    }

    // Animation loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      
      // Smooth building rotation
      buildingGroup.rotation.y = Math.sin(time * 0.1) * 0.3;
      
      // Crane rotation
      craneGroup.rotation.y = time * 0.2;
      
      // Floating elements
      elements.rotation.y += 0.003;
      elements.position.y = Math.sin(time * 0.5) * 0.5;
      
      // Smooth camera movement
      if (!isMobile) {
        camera.position.x = 12 + Math.sin(time * 0.15) * 2;
        camera.position.z = 16 + Math.cos(time * 0.15) * 2;
        camera.lookAt(0, 4, 0);
      } else {
        camera.position.x = Math.sin(time * 0.1) * 1;
        camera.lookAt(0, 4, 0);
      }
      
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, [isMobile]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 overflow-hidden">
      {/* Three.js Canvas Background */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 font-['Poppins'] leading-tight">
            <span className="block opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
              We Build Dreams
            </span>
            <span className="block text-[#F59E0B] opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards]">
              Into Homes
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-['Inter'] leading-relaxed opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
            Expert civil engineering solutions for residential construction, home buying consultation, 
            and property development. Your vision, our expertise, exceptional results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center opacity-0 animate-[fadeInUp_1s_ease-out_0.8s_forwards]">
            <button
              onClick={() => scrollToSection('services')}
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl font-['Inter'] inline-flex items-center space-x-2"
            >
              <span>Explore Services</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 font-['Inter']"
            >
              Get Free Quote
            </button>
          </div>

          {/* Professional Feature Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
            <div className="bg-transparent border border-[#F59E0B] border-opacity-30 rounded-xl p-6 hover:border-[#F59E0B] hover:border-opacity-100 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:bg-[#F59E0B] hover:bg-opacity-10">
              <div className="text-[#F59E0B] text-4xl mb-4">⚡</div>
              <h3 className="text-[#F59E0B] font-semibold text-xl mb-3 font-['Poppins']">Professional</h3>
              <p className="text-white font-['Inter']">Licensed civil engineers with 15+ years of construction experience</p>
            </div>
            <div className="bg-transparent border border-[#F59E0B] border-opacity-30 rounded-xl p-6 hover:border-[#F59E0B] hover:border-opacity-100 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:bg-[#F59E0B] hover:bg-opacity-10">
              <div className="text-[#F59E0B] text-4xl mb-4">🎯</div>
              <h3 className="text-[#F59E0B] font-semibold text-xl mb-3 font-['Poppins']">Expert</h3>
              <p className="text-white font-['Inter']">Specialized in residential construction and property development</p>
            </div>
            <div className="bg-transparent border border-[#F59E0B] border-opacity-30 rounded-xl p-6 hover:border-[#F59E0B] hover:border-opacity-100 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:bg-[#F59E0B] hover:bg-opacity-10">
              <div className="text-[#F59E0B] text-4xl mb-4">📊</div>
              <h3 className="text-[#F59E0B] font-semibold text-xl mb-3 font-['Poppins']">Analysis</h3>
              <p className="text-white font-['Inter']">Comprehensive structural analysis and project feasibility studies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
    </section>
  );
};

export default Hero;