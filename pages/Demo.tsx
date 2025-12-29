import React, { useState, useEffect } from 'react';
import { Play, Pause, RefreshCw, Car, Truck, Bike, Navigation, Signal, Battery, Clock } from 'lucide-react';
import { VehicleData } from '../types';

// Simple map visualization component using HTML Canvas/SVG
const DemoMap: React.FC<{ vehicles: VehicleData[] }> = ({ vehicles }) => {
  return (
    <div className="relative w-full h-[500px] bg-slate-200 rounded-xl overflow-hidden shadow-inner border border-slate-300">
      {/* Abstract Map Background */}
      <div className="absolute inset-0 opacity-30">
         {/* Grid lines */}
         <div className="w-full h-full" style={{ 
             backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
         }}></div>
         {/* Simulated roads */}
         <svg className="absolute inset-0 w-full h-full stroke-slate-400 stroke-[8] fill-none">
            <path d="M0,250 C100,250 150,150 250,150 S 400,350 500,350 S 700,200 800,200" />
            <path d="M300,0 L300,500" />
            <path d="M600,0 L600,500" />
         </svg>
      </div>

      {/* Vehicles */}
      {vehicles.map((v) => (
        <div 
          key={v.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-linear flex flex-col items-center"
          style={{ left: `${v.lng}%`, top: `${v.lat}%` }}
        >
          <div className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full mb-1 shadow-md whitespace-nowrap">
            {v.id}
          </div>
          <div className={`p-2 rounded-full shadow-lg border-2 border-white ${v.status === 'Moving' ? 'bg-blue-600' : 'bg-red-500'}`}>
            <Navigation className={`h-5 w-5 text-white transform ${v.status === 'Moving' ? 'rotate-45' : 'rotate-0'}`} />
          </div>
           {/* Pulse Effect */}
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
        </div>
      ))}

      {/* Map Controls (Visual Only) */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
         <div className="bg-white p-2 rounded shadow text-slate-600 hover:text-blue-600 cursor-pointer">+</div>
         <div className="bg-white p-2 rounded shadow text-slate-600 hover:text-blue-600 cursor-pointer">-</div>
      </div>
    </div>
  );
};

const Demo: React.FC = () => {
  // Simulated State
  const [vehicles, setVehicles] = useState<VehicleData[]>([
    { id: 'TRK-001', speed: 45, lat: 30, lng: 20, status: 'Moving', battery: 92 },
    { id: 'CAR-105', speed: 0, lat: 70, lng: 60, status: 'Stopped', battery: 85 },
    { id: 'FLT-022', speed: 62, lat: 40, lng: 75, status: 'Moving', battery: 74 },
  ]);
  const [isPlaying, setIsPlaying] = useState(true);

  // Simulation Logic
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setVehicles(prev => prev.map(v => {
        if (v.status === 'Stopped') return v;
        
        // Simple random movement
        let newLat = v.lat + (Math.random() - 0.5) * 5;
        let newLng = v.lng + (Math.random() - 0.5) * 5;
        
        // Keep in bounds
        newLat = Math.max(10, Math.min(90, newLat));
        newLng = Math.max(10, Math.min(90, newLng));

        return {
          ...v,
          lat: newLat,
          lng: newLng,
          speed: Math.floor(Math.random() * 30 + 30) // Random speed 30-60
        };
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const selectedVehicle = vehicles[0]; // Just showing details for first vehicle for simplicity

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <h1 className="text-3xl font-bold text-slate-900">Live Demo Dashboard</h1>
            <p className="text-slate-500 mt-2">Experience the real-time tracking interface capabilities.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Map Area */}
          <div className="lg:col-span-2 space-y-4">
             <div className="bg-white p-1 rounded-2xl shadow-sm border border-slate-200">
                <DemoMap vehicles={vehicles} />
             </div>
             
             {/* Playback Controls */}
             <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-medium transition"
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      {isPlaying ? 'Pause Updates' : 'Resume Updates'}
                    </button>
                    <span className="text-sm text-slate-500 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Live Connection
                    </span>
                </div>
                <button className="text-slate-400 hover:text-blue-600">
                  <RefreshCw className="h-5 w-5" />
                </button>
             </div>
          </div>

          {/* Info Panel / Sidebar */}
          <div className="space-y-6">
            
            {/* Selected Vehicle Card */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
               <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
                  <h3 className="font-bold">Vehicle Details</h3>
                  <span className="bg-blue-500 px-2 py-0.5 rounded text-xs">Connected</span>
               </div>
               <div className="p-6">
                 <div className="flex items-center gap-4 mb-6">
                   <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
                     <Car className="h-8 w-8 text-slate-700" />
                   </div>
                   <div>
                     <h2 className="text-2xl font-bold text-slate-900">{selectedVehicle.id}</h2>
                     <p className="text-slate-500 text-sm">Toyota Hilux • 2022</p>
                   </div>
                 </div>

                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                        <Navigation className="h-3 w-3" /> SPEED
                      </div>
                      <div className="text-xl font-bold text-slate-900">{selectedVehicle.speed} <span className="text-xs font-normal">km/h</span></div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                        <Battery className="h-3 w-3" /> BATTERY
                      </div>
                      <div className="text-xl font-bold text-slate-900">{selectedVehicle.battery}%</div>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg col-span-2">
                       <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                        <Signal className="h-3 w-3" /> STATUS
                      </div>
                      <div className="flex items-center justify-between">
                         <span className="text-slate-900 font-medium">{selectedVehicle.status}</span>
                         <span className="text-xs text-slate-400">Last update: Just now</span>
                      </div>
                    </div>
                 </div>
               </div>
            </div>

            {/* Use Cases List */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-4">Common Use Cases</h3>
              <ul className="space-y-4">
                 {[
                   { title: 'Personal Security', icon: Car, desc: 'Protect your family car from theft.' },
                   { title: 'Fleet Management', icon: Truck, desc: 'Monitor delivery trucks and routes.' },
                   { title: 'Bike Rentals', icon: Bike, desc: 'Track rental assets within city limits.' },
                 ].map((u, i) => (
                   <li key={i} className="flex items-start gap-3">
                     <div className="mt-1">
                       <u.icon className="h-5 w-5 text-blue-500" />
                     </div>
                     <div>
                       <h4 className="font-medium text-slate-900 text-sm">{u.title}</h4>
                       <p className="text-xs text-slate-500">{u.desc}</p>
                     </div>
                   </li>
                 ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
