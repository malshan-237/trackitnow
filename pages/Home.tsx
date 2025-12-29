import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ShieldCheck, Zap, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Map background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              TrackItNow – <span className="text-blue-400">Smart Vehicle Tracking</span> System
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Real-time GPS tracking, theft prevention, and intelligent monitoring for vehicles and assets. Stay connected to your fleet from anywhere in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/demo" className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition md:text-lg shadow-lg shadow-blue-900/50">
                View Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/product" className="inline-flex justify-center items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-200 hover:bg-slate-800 transition md:text-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to secure your assets
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
              Comprehensive control and visibility over your vehicles with our advanced technology stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Real-Time Tracking',
                desc: 'Live vehicle position on map with 5-second updates.',
                icon: MapPin,
                color: 'text-blue-600',
                bg: 'bg-blue-50'
              },
              {
                title: 'Anti-Theft Alerts',
                desc: 'Instant SMS and app notifications for unauthorized movement.',
                icon: ShieldCheck,
                color: 'text-green-600',
                bg: 'bg-green-50'
              },
              {
                title: 'Geo-Fencing',
                desc: 'Create custom safe zones and get alerted on entry/exit.',
                icon: Globe,
                color: 'text-purple-600',
                bg: 'bg-purple-50'
              },
              {
                title: 'Cloud Dashboard',
                desc: 'Access historical data and reports from any device.',
                icon: Zap,
                color: 'text-orange-600',
                bg: 'bg-orange-50'
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition duration-300">
                <div className={`w-12 h-12 ${feature.bg} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TrackItNow */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Why Choose TrackItNow?</h2>
              <p className="text-lg text-slate-600 mb-8">
                We combine industrial-grade hardware with user-friendly software to provide the most reliable tracking solution on the market.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Designed for 99.9% uptime and accuracy',
                  'Easy 3-wire installation for any vehicle',
                  'End-to-end encrypted secure data transmission',
                  '24/7 Customer support and warranty'
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <Link to="/how-it-works" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center">
                  See how it works <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e47a71e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Dashboard Preview" 
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative blob */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Take control of your vehicle security today</h2>
          <p className="text-blue-100 text-lg mb-8">Join thousands of satisfied users who trust TrackItNow for their peace of mind.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-slate-50 transition transform hover:-translate-y-1"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
