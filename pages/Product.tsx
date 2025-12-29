import React from 'react';
import { Cpu, Wifi, Globe, Smartphone, Shield, Clock, Server, Layers } from 'lucide-react';

const Product: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Page Header */}
      <div className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Product & Features</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A complete tracking solution combining robust hardware with intelligent software.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Product Description */}
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What is TrackItNow?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              TrackItNow is a state-of-the-art GPS and GSM-based tracking system designed to enable users to monitor vehicles in real-time. By integrating a hardware module installed in the vehicle with a secure cloud-based dashboard, we provide instant visibility into location, speed, and status, accessible from any smartphone or computer.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Globe, title: 'Real-Time Location', desc: 'Precise GPS coordinates updated every 5 seconds for live tracking.' },
            { icon: Shield, title: 'Theft Detection', desc: 'Accelerometer-based motion detection triggers alerts when parked.' },
            { icon: Layers, title: 'Geo-Fencing', desc: 'Define virtual boundaries and receive alerts when vehicles enter or exit.' },
            { icon: Clock, title: 'Travel History', desc: 'Store and replay route history for up to 90 days.' },
            { icon: Smartphone, title: 'Multi-Device Access', desc: 'Responsive web app works perfectly on mobile, tablet, and desktop.' },
            { icon: Server, title: 'Secure Login', desc: 'Encrypted user authentication ensures only you can see your data.' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-blue-200 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Hardware & Software */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hardware */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="h-8 w-8 text-blue-400" />
                <h2 className="text-2xl font-bold">Hardware Specifications</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <div>
                    <strong className="block text-blue-100">ESP32 Microcontroller</strong>
                    <span className="text-slate-400 text-sm">Dual-core processor with low power consumption.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <div>
                    <strong className="block text-blue-100">High-Precision GPS Module</strong>
                    <span className="text-slate-400 text-sm">NEO-6M module for accurate latitude & longitude.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <div>
                    <strong className="block text-blue-100">GSM/GPRS Connectivity</strong>
                    <span className="text-slate-400 text-sm">SIM800L module for reliable data transmission.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <div>
                    <strong className="block text-blue-100">Power Management</strong>
                    <span className="text-slate-400 text-sm">Direct vehicle battery connection (12V-24V) with backup.</span>
                  </div>
                </li>
              </ul>
            </div>
            {/* Background decoration */}
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
               <Cpu className="h-64 w-64" />
            </div>
          </div>

          {/* Software */}
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 relative overflow-hidden">
            <div className="relative z-10">
               <div className="flex items-center gap-3 mb-6">
                <Wifi className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-slate-900">Software Architecture</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3"></span>
                  <div>
                    <strong className="block text-slate-800">Intuitive Web Dashboard</strong>
                    <span className="text-slate-600 text-sm">Built with React and Tailwind for a seamless experience.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3"></span>
                  <div>
                    <strong className="block text-slate-800">Cloud Database</strong>
                    <span className="text-slate-600 text-sm">Real-time database (Firebase/AWS) for instant syncing.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3"></span>
                  <div>
                    <strong className="block text-slate-800">Map Integration</strong>
                    <span className="text-slate-600 text-sm">Integrated with OpenStreetMap/Google Maps APIs.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3"></span>
                  <div>
                    <strong className="block text-slate-800">API Gateway</strong>
                    <span className="text-slate-600 text-sm">Secure RESTful endpoints for device communication.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
