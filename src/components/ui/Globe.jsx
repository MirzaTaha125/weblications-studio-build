import { useEffect, useRef, useState } from "react";
import GlobeGl from "react-globe.gl";

export function Globe({ className }) {
  const globeRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });

  useEffect(() => {
    // Auto-rotate
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
      globeRef.current.controls().enableZoom = false;
    }
    
    const handleResize = () => {
      const parent = document.getElementById('globe-parent');
      if (parent) {
        setDimensions({
          width: parent.offsetWidth,
          height: parent.offsetHeight
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="globe-parent" className={`relative flex items-center justify-center w-full h-full ${className}`}>
      <GlobeGl
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        atmosphereColor="#078AF5"
        atmosphereAltitude={0.3}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        
        // Connectivity Arcs
        arcsData={[
          { startLat: 31.52, startLng: 74.35, endLat: 40.71, endLng: -74.00, color: ['#078AF5', '#ffffff'] }, 
          { startLat: 51.50, startLng: -0.12, endLat: 35.67, endLng: 139.65, color: ['#078AF5', '#ffffff'] }, 
          { startLat: 24.86, startLng: 67.00, endLat: 51.50, endLng: -0.12, color: ['#078AF5', '#ffffff'] }, 
          { startLat: -33.86, startLng: 151.20, endLat: 31.52, endLng: 74.35, color: ['#078AF5', '#ffffff'] },
        ]}
        arcColor="color"
        arcDashLength={0.5}
        arcDashGap={0.3}
        arcDashAnimateTime={1500}
        arcStroke={0.8}

        // Points
        pointsData={[
          { lat: 31.52, lng: 74.35, size: 0.2, color: '#078AF5', name: 'Lahore' },
          { lat: 24.86, lng: 67.00, size: 0.2, color: '#078AF5', name: 'Karachi' },
          { lat: 40.71, lng: -74.00, size: 0.2, color: '#078AF5', name: 'New York' },
          { lat: 51.50, lng: -0.12, size: 0.2, color: '#078AF5', name: 'London' },
          { lat: 35.67, lng: 139.65, size: 0.2, color: '#078AF5', name: 'Tokyo' },
        ]}
        pointAltitude={0.05}
        pointRadius={0.8}
        pointColor="color"
      />
    </div>
  );
}
