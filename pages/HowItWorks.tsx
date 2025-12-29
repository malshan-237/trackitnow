import React from 'react';
import { Satellite, Cpu, Radio, Server, Monitor, Lock, ShieldCheck, Wifi } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Page Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">How TrackItNow Works</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A simple, reliable, and efficient process connecting your vehicle to the cloud.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Step Flow */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-slate-100 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {[
              { icon: Satellite, title: 'GPS Signal', desc: 'Module receives satellite signals to determine precise location.' },
              { icon: Cpu, title: 'Processing', desc: 'Microcontroller processes coordinates and vehicle status data.' },
              { icon: Radio, title: 'Transmission', desc: 'Data is encrypted and sent via GSM/4G network.' },
              { icon: Server, title: 'Cloud Storage', desc: 'Server receives, validates, and stores data securely.' },
              { icon: Monitor, title: 'Visualization', desc: 'You see the live location on your dashboard instantly.' },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-white p-4">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Flow Diagram */}
        <div className="mt-24 bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-200">
          <h2 className="text-2xl font-bold text-center text-slate-900 mb-12">Technical Data Flow</h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Vehicle Unit */}
            <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center w-full lg:w-auto">
              <div className="text-blue-600 font-bold mb-4 uppercase tracking-wider text-sm">Vehicle Unit</div>
              <div className="space-y-2">
                <div className="p-3 bg-slate-100 rounded">GPS Receiver</div>
                <div className="h-6 w-0.5 bg-slate-300 mx-auto"></div>
                <div className="p-3 bg-blue-50 border border-blue-100 rounded font-semibold">ESP32 Controller</div>
                <div className="h-6 w-0.5 bg-slate-300 mx-auto"></div>
                <div className="p-3 bg-slate-100 rounded">GSM Modem</div>
              </div>
            </div>

            {/* Connection Arrow */}
            <div className="flex flex-col items-center text-slate-400">
              <span className="text-xs font-semibold mb-1">GPRS / 4G</span>
              <div className="flex items-center">
                <div className="h-0.5 w-8 lg:w-16 bg-slate-300"></div>
                <Radio className="h-6 w-6 mx-2" />
                <div className="h-0.5 w-8 lg:w-16 bg-slate-300"></div>
              </div>
            </div>

            {/* Cloud Server */}
            <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center w-full lg:w-auto">
              <div className="text-purple-600 font-bold mb-4 uppercase tracking-wider text-sm">Cloud Backend</div>
              <div className="space-y-2">
                <div className="p-3 bg-slate-100 rounded">MQTT Broker / API</div>
                <div className="h-6 w-0.5 bg-slate-300 mx-auto"></div>
                <div className="p-3 bg-purple-50 border border-purple-100 rounded font-semibold">Database</div>
                <div className="h-6 w-0.5 bg-slate-300 mx-auto"></div>
                <div className="p-3 bg-slate-100 rounded">Analytics Engine</div>
              </div>
            </div>

            {/* Connection Arrow */}
            <div className="flex flex-col items-center text-slate-400">
              <span className="text-xs font-semibold mb-1">HTTPS / WSS</span>
              <div className="flex items-center">
                <div className="h-0.5 w-8 lg:w-16 bg-slate-300"></div>
                <Wifi className="h-6 w-6 mx-2" />
                <div className="h-0.5 w-8 lg:w-16 bg-slate-300"></div>
              </div>
            </div>

            {/* User App */}
            <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center w-full lg:w-auto">
              <div className="text-green-600 font-bold mb-4 uppercase tracking-wider text-sm">Client App</div>
              <div className="space-y-2">
                 <div className="p-3 bg-green-50 border border-green-100 rounded font-semibold">Web Dashboard</div>
                 <div className="h-6 w-0.5 bg-slate-300 mx-auto"></div>
                 <div className="p-3 bg-slate-100 rounded">User Interface</div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
             <Lock className="h-8 w-8 text-blue-600 flex-shrink-0" />
             <div>
               <h3 className="font-bold text-lg mb-2">Encrypted Data</h3>
               <p className="text-slate-600 text-sm">All transmission between the device and cloud is encrypted using SSL/TLS protocols.</p>
             </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
             <ShieldCheck className="h-8 w-8 text-blue-600 flex-shrink-0" />
             <div>
               <h3 className="font-bold text-lg mb-2">Secure Auth</h3>
               <p className="text-slate-600 text-sm">Enterprise-grade authentication system prevents unauthorized access to your vehicle data.</p>
             </div>
          </div>
          <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
             <Server className="h-8 w-8 text-blue-600 flex-shrink-0" />
             <div>
               <h3 className="font-bold text-lg mb-2">Reliable Uptime</h3>
               <p className="text-slate-600 text-sm">Hosted on top-tier cloud infrastructure guaranteeing 99.9% availability.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
