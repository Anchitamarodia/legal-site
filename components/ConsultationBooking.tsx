
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Clock, IndianRupee, Users, 
  Video, MapPin, Phone, Edit3, Plus, 
  ChevronRight, MoreHorizontal, LayoutGrid 
} from 'lucide-react';
import { cn } from '../utils/cn';

const STATS = [
  { label: "Today's Consultations", value: "3", icon: <Calendar size={22} />, color: "text-blue-600 bg-blue-50" },
  { label: "This Week", value: "12", icon: <Clock size={22} />, color: "text-orange-600 bg-orange-50" },
  { label: "Revenue (Week)", value: "₹24,500", icon: <IndianRupee size={22} />, color: "text-amber-600 bg-amber-50" },
  { label: "New Clients", value: "5", icon: <Users size={22} />, color: "text-green-600 bg-green-50" },
];

const CONSULTATIONS = [
  {
    id: 1,
    client: "Rajesh Kumar",
    type: "Property Dispute Consultation",
    time: "Tomorrow • 10:30 AM",
    mode: "Video Call",
    price: "₹2,000",
    caseId: "CS-2024-001",
    status: "Confirmed",
    statusColor: "bg-[#002B5B] text-white",
    icon: <Video size={20} className="text-gray-500" />,
    actionLabel: "Join Call"
  },
  {
    id: 2,
    client: "Priya Sharma",
    type: "Corporate Law Consultation",
    time: "Jan 16 • 2:00 PM",
    mode: "In-person",
    price: "₹3,500",
    caseId: null,
    status: "Pending Payment",
    statusColor: "bg-gray-100 text-gray-500",
    icon: <MapPin size={20} className="text-gray-500" />,
    actionLabel: "View Details"
  },
  {
    id: 3,
    client: "Amit Patel",
    type: "Family Law Consultation",
    time: "Jan 17 • 4:30 PM",
    mode: "Phone Call",
    price: "₹1,500",
    caseId: "CS-2024-002",
    status: "Confirmed",
    statusColor: "bg-[#002B5B] text-white",
    icon: <Phone size={20} className="text-gray-500" />,
    actionLabel: "View Details"
  }
];

const ConsultationBooking: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Current Bookings');

  return (
    <section id="consultations" className="py-12 md:py-20 min-h-[calc(100vh-80px)] bg-[#FDFCF9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h2 className="text-5xl font-black text-[#002B5B] mb-3 tracking-tight">Consultation Booking</h2>
            <p className="text-gray-400 font-medium text-lg">Manage client consultations and availability</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="bg-white border border-gray-100 text-[#002B5B] px-6 py-3 rounded-xl font-black text-xs flex items-center gap-3 hover:bg-gray-50 transition-all shadow-sm">
              <Calendar size={18} />
              Calendar View
            </button>
            <button className="bg-[#002B5B] text-white px-6 py-3 rounded-xl font-black text-xs flex items-center gap-3 hover:bg-opacity-90 transition-all shadow-lg shadow-[#002B5B]/10">
              <Plus size={18} />
              Add Availability
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-start mb-12">
          <div className="bg-gray-100/60 p-1.5 rounded-2xl flex items-center gap-1 border border-gray-200/50">
            {['Current Bookings', 'Manage Availability', 'New Booking', 'Case Sync'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-8 py-3 rounded-xl text-xs font-black transition-all whitespace-nowrap",
                  activeTab === tab 
                    ? "bg-white text-[#002B5B] shadow-lg shadow-gray-200/50" 
                    : "text-gray-400 hover:text-gray-600"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm flex items-center gap-6"
            >
              <div className={cn("p-4 rounded-2xl", stat.color)}>
                {stat.icon}
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-2xl font-black text-[#002B5B]">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Consultations Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm"
        >
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-black text-[#002B5B]">Upcoming Consultations</h3>
            <button className="text-[11px] font-black text-gray-400 uppercase tracking-widest hover:text-[#002B5B] transition-colors flex items-center gap-1.5">
              View All
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="space-y-4">
            {CONSULTATIONS.map((consult, idx) => (
              <motion.div
                key={consult.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="flex flex-col md:flex-row items-center gap-6 p-6 border border-gray-50 rounded-3xl hover:bg-gray-50/50 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center">
                  {consult.icon}
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
                    <h4 className="text-lg font-black text-[#002B5B]">{consult.client}</h4>
                    <span className={cn("px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter", consult.statusColor)}>
                      {consult.status}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-4 gap-y-1">
                    <p className="text-sm font-bold text-gray-500">{consult.type}</p>
                    <span className="hidden md:block w-1 h-1 bg-gray-200 rounded-full"></span>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{consult.time}</p>
                    <span className="hidden md:block w-1 h-1 bg-gray-200 rounded-full"></span>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{consult.mode}</p>
                    <span className="hidden md:block w-1 h-1 bg-gray-200 rounded-full"></span>
                    <p className="text-[10px] font-black text-[#002B5B] uppercase tracking-widest font-bold">{consult.price}</p>
                    {consult.caseId && (
                      <>
                        <span className="hidden md:block w-1 h-1 bg-gray-200 rounded-full"></span>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Case: {consult.caseId}</p>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="w-11 h-11 border border-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#002B5B] hover:border-[#002B5B] transition-all">
                    <Edit3 size={18} />
                  </button>
                  <button className={cn(
                    "px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all",
                    consult.actionLabel === 'Join Call' 
                      ? "bg-[#002B5B] text-white shadow-lg shadow-[#002B5B]/10 hover:bg-opacity-90" 
                      : "bg-white border border-gray-200 text-[#002B5B] hover:bg-gray-50"
                  )}>
                    {consult.actionLabel}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Empty State / Bottom Hint */}
        <div className="mt-12 p-8 bg-blue-50/30 border border-blue-100/50 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-500 text-white p-3 rounded-2xl">
              <LayoutGrid size={24} />
            </div>
            <div>
              <p className="text-base font-black text-[#002B5B]">Connect your Zoom or Google Meet</p>
              <p className="text-sm text-gray-500">Automate your video consultation links for better efficiency.</p>
            </div>
          </div>
          <button className="bg-white border border-gray-200 px-8 py-3.5 rounded-2xl font-black text-[#002B5B] text-xs uppercase tracking-widest hover:bg-gray-50 transition-all">
            Manage Integrations
          </button>
        </div>

      </div>
    </section>
  );
};

export default ConsultationBooking;
