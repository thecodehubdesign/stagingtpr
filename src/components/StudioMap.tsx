import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MapPin, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface StudioLocation {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  phone?: string;
  apparatus: string[];
}
const StudioMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const loaderRef = useRef<Loader | null>(null);
  const markersRef = useRef<{
    [key: string]: google.maps.Marker;
  }>({});
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);
  const [selectedStudio, setSelectedStudio] = useState<string | null>(null);
  const navigate = useNavigate();
  const locations: StudioLocation[] = [{
    id: 'highett',
    name: "The Pole Room Highett",
    address: "1/5 Graham Road, Highett VIC",
    lat: -37.9398,
    lng: 145.0432,
    phone: "(03) 9123 4567",
    apparatus: ["Pole", "Aerials"]
  }, {
    id: 'kilsyth',
    name: "The Pole Room Kilsyth",
    address: "1-3 Southfork Drive, Kilsyth VIC",
    lat: -37.8197,
    lng: 145.3116,
    phone: "(03) 9234 5678",
    apparatus: ["Pole"]
  }, {
    id: 'narre-warren',
    name: "The Pole Room Narre Warren",
    address: "Narre Warren VIC",
    lat: -38.0267,
    lng: 145.3028,
    phone: "(03) 9345 6789",
    apparatus: ["Pole", "Aerials"]
  }, {
    id: 'eltham',
    name: "The Pole Room Eltham",
    address: "2/38 Bridge Street, Eltham VIC",
    lat: -37.7137,
    lng: 145.1440,
    phone: "(03) 9456 7890",
    apparatus: ["Pole"]
  }, {
    id: 'mitcham',
    name: "The Pole Room Mitcham",
    address: "2e Cochrane Street, Mitcham VIC 3132",
    lat: -37.8183,
    lng: 145.2044,
    phone: "(03) 9567 8901",
    apparatus: ["Pole", "Aerials"]
  }, {
    id: 'cbd',
    name: "The Pole Room CBD",
    address: "2/333 Flinders Lane, Melbourne VIC 3000",
    lat: -37.8162,
    lng: 144.9646,
    phone: "(03) 9678 9012",
    apparatus: ["Pole"]
  }];
  const handleStudioSelect = (studioId: string) => {
    setSelectedStudio(studioId);
    const marker = markersRef.current[studioId];
    if (marker && mapInstanceRef.current) {
      // Center map on selected studio
      mapInstanceRef.current.panTo(marker.getPosition()!);
      mapInstanceRef.current.setZoom(15);

      // Show info window with improved styling and Go to Studio button
      if (infoWindowRef.current) {
        const studio = locations.find(l => l.id === studioId);
        if (studio) {
          infoWindowRef.current.setContent(`
            <div style="color: #000; padding: 16px; font-family: Inter, sans-serif; max-width: 280px; min-width: 240px;">
              <h3 style="margin: 0 0 12px 0; font-weight: 600; color: #1a1a1a; font-size: 16px; line-height: 1.4;">${studio.name}</h3>
              <div style="margin-bottom: 8px;">
                <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.4; display: flex; align-items: flex-start;">
                  <span style="margin-right: 6px; color: #ec4899;">📍</span>
                  ${studio.address}
                </p>
              </div>
              ${studio.phone ? `
                <div style="margin-bottom: 8px;">
                  <p style="margin: 0; color: #666; font-size: 14px; display: flex; align-items: center;">
                    <span style="margin-right: 6px; color: #ec4899;">📞</span>
                    ${studio.phone}
                  </p>
                </div>
              ` : ''}
              <div style="margin-bottom: 12px;">
                <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                  ${studio.apparatus.map(item => `
                    <span style="font-size: 12px; padding: 4px 8px; background: rgba(236, 72, 153, 0.1); color: #ec4899; border-radius: 12px; font-weight: 500;">
                      ${item}
                    </span>
                  `).join('')}
                </div>
              </div>
              <button 
                onclick="window.handleGoToStudio('${studio.id}')"
                style="
                  width: 100%; 
                  background: linear-gradient(135deg, #ec4899, #8b5cf6); 
                  color: white; 
                  border: none; 
                  padding: 10px 16px; 
                  border-radius: 8px; 
                  font-weight: 600; 
                  font-size: 14px; 
                  cursor: pointer; 
                  transition: all 0.2s ease;
                  font-family: Inter, sans-serif;
                "
                onmouseover="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 4px 12px rgba(236, 72, 153, 0.3)'"
                onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'"
              >
                Go to Studio
              </button>
            </div>
          `);
          infoWindowRef.current.open(mapInstanceRef.current, marker);
        }
      }
    }
  };
  const handleViewStudio = (studioId: string) => {
    navigate(`/studios/${studioId}`);
  };
  useEffect(() => {
    // Add global function for the info window button
    (window as any).handleGoToStudio = handleViewStudio;
    return () => {
      delete (window as any).handleGoToStudio;
    };
  }, []);
  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize the Google Maps API loader
    if (!loaderRef.current) {
      loaderRef.current = new Loader({
        apiKey: "AIzaSyCB-aXCL1WEr0j9T0jaJTOc6SL7M-QzLM4",
        version: "weekly",
        libraries: ["places"]
      });
    }

    // Load the Google Maps API and then initialize the map
    loaderRef.current.load().then(() => {
      if (!mapRef.current) return;

      // Initialize the map with a broader view to show all locations
      const map = new google.maps.Map(mapRef.current, {
        zoom: 10,
        center: {
          lat: -37.8136,
          lng: 145.0632
        },
        // Center of Melbourne
        styles: [{
          featureType: "all",
          elementType: "geometry",
          stylers: [{
            color: "#1a1a2e"
          }]
        }, {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [{
            color: "#ffffff"
          }]
        }, {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [{
            color: "#000000"
          }, {
            lightness: 13
          }]
        }, {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [{
            color: "#000000"
          }]
        }, {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{
            color: "#144b53"
          }, {
            lightness: 14
          }, {
            weight: 1.4
          }]
        }, {
          featureType: "landscape",
          elementType: "all",
          stylers: [{
            color: "#08304b"
          }]
        }, {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{
            color: "#0c4152"
          }, {
            lightness: 5
          }]
        }, {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [{
            color: "#000000"
          }]
        }, {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{
            color: "#0b434f"
          }, {
            lightness: 25
          }]
        }, {
          featureType: "road.arterial",
          elementType: "geometry.fill",
          stylers: [{
            color: "#000000"
          }]
        }, {
          featureType: "road.arterial",
          elementType: "geometry.stroke",
          stylers: [{
            color: "#0b3d51"
          }, {
            lightness: 16
          }]
        }, {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [{
            color: "#000000"
          }]
        }, {
          featureType: "transit",
          elementType: "all",
          stylers: [{
            color: "#146474"
          }]
        }, {
          featureType: "water",
          elementType: "all",
          stylers: [{
            color: "#021019"
          }]
        }]
      });
      mapInstanceRef.current = map;

      // Create shared info window
      infoWindowRef.current = new google.maps.InfoWindow();

      // Add markers for each location
      locations.forEach(location => {
        const marker = new google.maps.Marker({
          position: {
            lat: location.lat,
            lng: location.lng
          },
          map: map,
          title: location.name,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: selectedStudio === location.id ? '#f97316' : '#ec4899',
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2
          }
        });
        markersRef.current[location.id] = marker;

        // Add click listener to marker
        marker.addListener('click', () => {
          handleStudioSelect(location.id);
        });
      });
    }).catch(error => {
      console.error('Error loading Google Maps:', error);
    });
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update marker colors when selection changes
  useEffect(() => {
    Object.entries(markersRef.current).forEach(([studioId, marker]) => {
      marker.setIcon({
        path: google.maps.SymbolPath.CIRCLE,
        scale: 12,
        fillColor: selectedStudio === studioId ? '#f97316' : '#ec4899',
        fillOpacity: 1,
        strokeColor: '#ffffff',
        strokeWeight: 2
      });
    });
  }, [selectedStudio]);
  return <div className="relative w-full">
      {/* Map Container */}
      <div className="w-full h-96 rounded-lg overflow-hidden border border-fuchsia-500/30 relative">
        <div ref={mapRef} className="w-full h-full" />
        
        {/* Desktop Studio List Overlay - positioned on the right */}
        <div className="hidden lg:block absolute top-4 right-4 w-80 h-80 bg-gray-900/95 backdrop-blur-sm rounded-lg border border-fuchsia-500/30">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-white font-semibold text-sm">Studio Locations</h3>
            <p className="text-gray-400 text-xs mt-1">Click to view details</p>
          </div>
          
          <ScrollArea className="h-64">
            <div className="p-2">
              {locations.map(location => <Card key={location.id} className={`p-3 mb-2 cursor-pointer transition-all hover:bg-gray-700/50 ${selectedStudio === location.id ? 'bg-fuchsia-500/20 border-fuchsia-500/50' : 'bg-gray-800/50 border-gray-700'}`} onClick={() => handleStudioSelect(location.id)}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white text-sm font-medium truncate">
                        {location.name}
                      </h4>
                      <div className="flex items-start mt-1">
                        <MapPin className="w-3 h-3 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300 text-xs ml-1 leading-tight">
                          {location.address}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {location.apparatus.map((item, index) => <span key={index} className="text-xs px-2 py-0.5 bg-fuchsia-500/20 text-fuchsia-300 rounded">
                            {item}
                          </span>)}
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="ml-2 h-8 w-8 p-0 text-fuchsia-400 hover:text-white hover:bg-fuchsia-500/20" onClick={e => {
                  e.stopPropagation();
                  handleViewStudio(location.id);
                }}>
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>)}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Mobile Studio List - positioned below the map */}
      <div className="lg:hidden mt-6">
        <div className="bg-gray-900/95 backdrop-blur-sm rounded-lg border border-fuchsia-500/30">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-white font-semibold text-sm">Studio Locations</h3>
            <p className="text-gray-400 text-xs mt-1">Search by Postcode, Aparatus, Program.</p>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            <div className="p-2">
              {locations.map(location => <Card key={location.id} className={`p-3 mb-2 cursor-pointer transition-all hover:bg-gray-700/50 ${selectedStudio === location.id ? 'bg-fuchsia-500/20 border-fuchsia-500/50' : 'bg-gray-800/50 border-gray-700'}`} onClick={() => handleStudioSelect(location.id)}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white text-sm font-medium truncate">
                        {location.name}
                      </h4>
                      <div className="flex items-start mt-1">
                        <MapPin className="w-3 h-3 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300 text-xs ml-1 leading-tight">
                          {location.address}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {location.apparatus.map((item, index) => <span key={index} className="text-xs px-2 py-0.5 bg-fuchsia-500/20 text-fuchsia-300 rounded">
                            {item}
                          </span>)}
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="ml-2 h-8 w-8 p-0 text-fuchsia-400 hover:text-white hover:bg-fuchsia-500/20" onClick={e => {
                  e.stopPropagation();
                  handleViewStudio(location.id);
                }}>
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default StudioMap;