import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Contact TrackItNow</h1>
          <p className="text-xl text-slate-300">Have questions? We're here to help.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Form */}
          <div className="p-8 md:p-12 md:w-2/3">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="john@example.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                <select id="subject" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white">
                  <option>General Inquiry</option>
                  <option>Sales & Pricing</option>
                  <option>Technical Support</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition flex items-center justify-center gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details Sidebar */}
          <div className="bg-slate-50 p-8 md:p-12 md:w-1/3 border-l border-slate-100 flex flex-col justify-center">
             <div className="space-y-8">
               <div>
                 <h3 className="font-bold text-slate-900 mb-4 text-lg">Contact Information</h3>
                 <div className="space-y-4">
                   <div className="flex items-start gap-3 text-slate-600">
                     <Mail className="h-5 w-5 text-blue-600 mt-1" />
                     <span>support@trackitnow.com<br/>sales@trackitnow.com</span>
                   </div>
                   <div className="flex items-start gap-3 text-slate-600">
                     <Phone className="h-5 w-5 text-blue-600 mt-1" />
                     <span>+1 (555) 123-4567<br/>Mon-Fri 9am-6pm</span>
                   </div>
                   <div className="flex items-start gap-3 text-slate-600">
                     <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                     <span>123 Tech Park Blvd<br/>Innovation City, ST 12345</span>
                   </div>
                 </div>
               </div>

               <div className="pt-8 border-t border-slate-200">
                 <h3 className="font-bold text-slate-900 mb-4 text-lg">FAQ</h3>
                 <p className="text-sm text-slate-600 mb-3">
                   <strong>Do you offer international shipping?</strong><br/>
                   Yes, we ship our hardware modules globally.
                 </p>
                 <p className="text-sm text-slate-600">
                   <strong>Is there a monthly fee?</strong><br/>
                   Yes, we have a small subscription fee for cloud data storage and SIM connectivity.
                 </p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
