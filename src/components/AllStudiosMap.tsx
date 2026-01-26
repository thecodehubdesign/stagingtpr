import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Studio } from '@/data/studios';

interface AllStudiosMapProps {
  studios: Studio[];
  onStudioSelect?: (studioId: string) => void;
}

const AllStudiosMap = ({ studios, onStudioSelect }: AllStudiosMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const overlaysRef = useRef<google.maps.OverlayView[]>([]);
  const loaderRef = useRef<Loader | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Add pulse animation styles
    const styleId = 'pulse-animation-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .pulse-marker {
          position: absolute;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .pulse-dot {
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #a855f7, #ec4899);
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.6);
          cursor: pointer;
          pointer-events: auto;
          position: relative;
          z-index: 2;
        }
        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 24px;
          height: 24px;
          background: rgba(168, 85, 247, 0.4);
          border-radius: 50%;
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .pulse-ring-2 {
          animation-delay: 0.5s;
        }
        .pulse-ring-3 {
          animation-delay: 1s;
        }
      `;
      document.head.appendChild(style);
    }

    // Initialize the Google Maps API loader
    if (!loaderRef.current) {
      loaderRef.current = new Loader({
        apiKey: "AIzaSyCB-aXCL1WEr0j9T0jaJTOc6SL7M-QzLM4",
        version: "weekly",
        libraries: ["places"]
      });
    }

    // Load the Google Maps API and initialize the map
    loaderRef.current.load().then(() => {
      if (!mapRef.current) return;

      // Initialize the map centered to show all Melbourne studios
      const map = new google.maps.Map(mapRef.current, {
        zoom: 10,
        center: { lat: -37.85, lng: 145.15 },
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#1a1a2e" }]
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#ffffff" }]
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#000000" }, { lightness: 13 }]
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#000000" }]
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#144b53" }, { lightness: 14 }, { weight: 1.4 }]
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#08304b" }]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#0c4152" }, { lightness: 5 }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#000000" }]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#0b434f" }, { lightness: 25 }]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [{ color: "#000000" }]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry.stroke",
            stylers: [{ color: "#0b3d51" }, { lightness: 16 }]
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#000000" }]
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ color: "#146474" }]
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#021019" }]
          }
        ]
      });

      mapInstanceRef.current = map;

      // Create custom overlay class for pulsing markers
      class PulseOverlay extends google.maps.OverlayView {
        private position: google.maps.LatLng;
        private div: HTMLDivElement | null = null;
        private studio: Studio;
        private infoWindow: google.maps.InfoWindow;

        constructor(position: google.maps.LatLng, studio: Studio, infoWindow: google.maps.InfoWindow) {
          super();
          this.position = position;
          this.studio = studio;
          this.infoWindow = infoWindow;
        }

        onAdd() {
          this.div = document.createElement('div');
          this.div.className = 'pulse-marker';
          this.div.innerHTML = `
            <div class="pulse-ring"></div>
            <div class="pulse-ring pulse-ring-2"></div>
            <div class="pulse-ring pulse-ring-3"></div>
            <div class="pulse-dot"></div>
          `;

          const dot = this.div.querySelector('.pulse-dot') as HTMLElement;
          if (dot) {
            dot.addEventListener('click', () => {
              // Close all other info windows first
              google.maps.event.trigger(map, 'click');
              this.infoWindow.setPosition(this.position);
              this.infoWindow.open(map);
            });
          }

          const panes = this.getPanes();
          panes?.overlayMouseTarget.appendChild(this.div);
        }

        draw() {
          if (!this.div) return;
          const overlayProjection = this.getProjection();
          const pos = overlayProjection.fromLatLngToDivPixel(this.position);
          if (pos) {
            this.div.style.left = pos.x + 'px';
            this.div.style.top = pos.y + 'px';
          }
        }

        onRemove() {
          if (this.div) {
            this.div.parentNode?.removeChild(this.div);
            this.div = null;
          }
        }
      }

      // Add markers and overlays for each studio
      studios.forEach((studio) => {
        const position = new google.maps.LatLng(studio.lat, studio.lng);

        // Create info window
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="color: #000; padding: 16px; font-family: Inter, sans-serif; max-width: 280px; text-align: center;">
              <h3 style="margin: 0 0 8px 0; font-weight: bold; font-size: 18px; color: #1a1a1a;">${studio.name}</h3>
              <p style="margin: 0 0 12px 0; color: #666; font-size: 14px;">${studio.address}</p>
              <a href="/studios/${studio.id}" 
                 style="display: inline-block; padding: 10px 24px; background: linear-gradient(to right, #a855f7, #ec4899); 
                        color: white; text-decoration: none; border-radius: 9999px; font-weight: 600; font-size: 14px;
                        box-shadow: 0 4px 14px rgba(168, 85, 247, 0.4); transition: transform 0.2s;"
                 onmouseover="this.style.transform='scale(1.05)'"
                 onmouseout="this.style.transform='scale(1)'"
              >
                View Location
              </a>
            </div>
          `
        });

        // Create pulsing overlay
        const overlay = new PulseOverlay(position, studio, infoWindow);
        overlay.setMap(map);
        overlaysRef.current.push(overlay);
      });

      // Close info windows when clicking on the map
      map.addListener('click', () => {
        // Info windows auto-close when a new one opens
      });

    }).catch((error) => {
      console.error('Error loading Google Maps:', error);
    });

    return () => {
      // Clean up overlays
      overlaysRef.current.forEach(overlay => overlay.setMap(null));
      overlaysRef.current = [];
      
      // Clean up markers
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];
      
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, [studios, onStudioSelect]);

  return (
    <div ref={mapRef} className="w-full h-full" />
  );
};

export default AllStudiosMap;
