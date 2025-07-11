
import { useEffect, useRef } from 'react';

interface StudioLocation {
  name: string;
  address: string;
  lat: number;
  lng: number;
  phone?: string;
}

const StudioMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  const locations: StudioLocation[] = [
    {
      name: "The Pole Room Mitcham",
      address: "2e Cochrane Street, Mitcham VIC 3132",
      lat: -37.8183,
      lng: 145.2044,
      phone: "(03) 9123 4567"
    },
    {
      name: "The Pole Room Melbourne CBD",
      address: "2/333 Flinders Lane, Melbourne VIC 3000",
      lat: -37.8162,
      lng: 144.9646,
      phone: "(03) 9234 5678"
    }
  ];

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize the map
    const map = new google.maps.Map(mapRef.current, {
      zoom: 11,
      center: { lat: -37.8136, lng: 145.0632 }, // Center between both locations
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

    // Add markers for each location
    locations.forEach((location) => {
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: '#ec4899',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2
        }
      });

      // Create info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="color: #000; padding: 8px; font-family: Inter, sans-serif;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold; color: #1a1a1a;">${location.name}</h3>
            <p style="margin: 0 0 4px 0; color: #666;">${location.address}</p>
            ${location.phone ? `<p style="margin: 0; color: #666;">${location.phone}</p>` : ''}
          </div>
        `
      });

      // Add click listener to marker
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden border border-fuchsia-500/30">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default StudioMap;
