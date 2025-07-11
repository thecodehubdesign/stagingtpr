
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { MapPin, Search, Filter } from 'lucide-react';

interface Studio {
  id: string;
  name: string;
  address: string;
  phone: string;
  apparatus: string[];
  features: string[];
  image: string;
}

const StudioSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedApparatus, setSelectedApparatus] = useState<string[]>([]);

  const studios: Studio[] = [
    {
      id: 'highett',
      name: "The Pole Room Highett",
      address: "1/5 Graham Road, Highett VIC",
      phone: "(03) 9123 4567",
      apparatus: ["Pole", "Lyra", "Silks", "Hammocks"],
      features: ["Changing Rooms", "Studio Hire", "Hens Parties"],
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 'kilsyth',
      name: "The Pole Room Kilsyth",
      address: "1-3 Southfork Drive, Kilsyth VIC",
      phone: "(03) 9234 5678",
      apparatus: ["Pole", "Fly Pole"],
      features: ["Changing Rooms", "Studio Hire", "Hens Parties"],
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 'narre-warren',
      name: "The Pole Room Narre Warren",
      address: "Narre Warren VIC",
      phone: "(03) 9345 6789",
      apparatus: ["Pole", "Lyra", "Silks", "Cube"],
      features: ["Changing Rooms", "Studio Hire", "Hens Parties"],
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 'eltham',
      name: "The Pole Room Eltham",
      address: "2/38 Bridge Street, Eltham VIC",
      phone: "(03) 9456 7890",
      apparatus: ["Pole", "Hammocks", "Fly Pole"],
      features: ["Changing Rooms", "Studio Hire", "Hens Parties"],
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 'mitcham',
      name: "The Pole Room Mitcham",
      address: "2e Cochrane Street, Mitcham VIC 3132",
      phone: "(03) 9567 8901",
      apparatus: ["Pole", "Lyra", "Silks", "Cube", "Hammocks"],
      features: ["Changing Rooms", "Studio Hire", "Hens Parties"],
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 'cbd',
      name: "The Pole Room CBD",
      address: "2/333 Flinders Lane, Melbourne VIC 3000",
      phone: "(03) 9678 9012",
      apparatus: ["Pole", "Fly Pole"],
      features: ["Changing Rooms", "Studio Hire", "Hens Parties", "No Parking"],
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const apparatusOptions = ["Pole", "Lyra", "Silks", "Hammocks", "Cube", "Fly Pole"];

  const toggleApparatus = (apparatus: string) => {
    setSelectedApparatus(prev => 
      prev.includes(apparatus) 
        ? prev.filter(a => a !== apparatus)
        : [...prev, apparatus]
    );
  };

  const filteredStudios = studios.filter(studio => {
    const matchesSearch = studio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         studio.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesApparatus = selectedApparatus.length === 0 || 
                            selectedApparatus.some(apparatus => studio.apparatus.includes(apparatus));
    
    return matchesSearch && matchesApparatus;
  });

  return (
    <div className="space-y-8">
      {/* Search and Filter Section */}
      <Card className="p-6 bg-gray-800 border-gray-700">
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search by postcode or suburb..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
          </div>
          
          <div className="flex items-center space-x-4 flex-wrap">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-300">Filter by apparatus:</span>
            </div>
            <div className="flex space-x-2 flex-wrap gap-2">
              {apparatusOptions.map((apparatus) => (
                <Button
                  key={apparatus}
                  variant={selectedApparatus.includes(apparatus) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleApparatus(apparatus)}
                  className={selectedApparatus.includes(apparatus) 
                    ? "bg-fuchsia-600 hover:bg-fuchsia-700" 
                    : "border-gray-600 text-gray-300 hover:bg-gray-700"
                  }
                >
                  {apparatus}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Studios Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudios.map((studio) => (
          <Card key={studio.id} className="overflow-hidden bg-gray-800 border-gray-700 hover:shadow-lg transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={studio.image} 
                alt={studio.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">{studio.name}</h3>
              
              <div className="flex items-start space-x-2 text-gray-300 mb-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-fuchsia-400" />
                <span className="text-sm">{studio.address}</span>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  {studio.apparatus.map((apparatus) => (
                    <Badge 
                      key={apparatus}
                      className="bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30 text-xs"
                    >
                      {apparatus}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {studio.features.map((feature) => (
                    <Badge 
                      key={feature}
                      variant="outline"
                      className="text-xs border-gray-600 text-gray-300"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:from-fuchsia-600 hover:to-purple-700"
                asChild
              >
                <Link to={`/studios/${studio.id}`}>
                  View Studio
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
      
      {filteredStudios.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No studios found matching your criteria.</p>
          <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filter options.</p>
        </div>
      )}
    </div>
  );
};

export default StudioSearch;
