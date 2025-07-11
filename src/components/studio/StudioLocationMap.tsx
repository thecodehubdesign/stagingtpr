
import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Studio } from '@/data/studios';

interface StudioLocationMapProps {
  studio: Studio;
}

const StudioLocationMap = ({ studio }: StudioLocationMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const loaderRef = useRef<Loader | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize the Google Maps API loader
    if (!loaderRef.current) {
      loaderRef.current = new Loader({
        apiKey: "YOUR_GOOGLE_MAPS_API_KEY", // User needs to replace this
        version: "weekly",
        libraries: ["places"]
      });
    }

    // Load the Google Maps API and then initialize the map
    loaderRef.current.load().then(() => {
      if (!mapRef.current) return;

      // Initialize the map centered on the studio
      const map = new google.maps.Map(mapRef.current, {
        zoom: 15,
        center: { lat: studio.lat, lng: studio.lng },
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

      // Add marker for the studio
      const marker = new google.maps.Marker({
        position: { lat: studio.lat, lng: studio.lng },
        map: map,
        title: studio.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 15,
          fillColor: '#ec4899',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 3
        }
      });

      // Create info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="color: #000; padding: 12px; font-family: Inter, sans-serif; max-width: 250px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #1a1a1a;">${studio.name}</h3>
            <p style="margin: 0 0 4px 0; color: #666;">${studio.address}</p>
            <p style="margin: 0 0 4px 0; color: #666;">${studio.phone}</p>
            <p style="margin: 0; color: #ec4899; font-weight: 500;">${studio.apparatus.join(' & ')}</p>
          </div>
        `
      });

      // Add click listener to marker
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      // Open info window by default
      infoWindow.open(map, marker);
    }).catch((error) => {
      console.error('Error loading Google Maps:', error);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, [studio]);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Find <span className="gradient-text">Our Location</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Easy to find with convenient parking and public transport access.
          </p>
        </div>

        <div className="w-full h-96 rounded-lg overflow-hidden border border-fuchsia-500/30">
          <div ref={mapRef} className="w-full h-full" />
        </div>
        
        <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> You need to replace "YOUR_GOOGLE_MAPS_API_KEY" with your actual Google Maps API key 
            for the map to display properly. Get your API key from the Google Cloud Console.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudioLocationMap;
