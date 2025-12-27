
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, Plus, Calendar as CalendarIcon, 
  ChevronLeft, ChevronRight, MapPin, User, 
  Clock, CheckCircle2, MoreHorizontal, Info
} from 'lucide-react';
import { cn } from '../utils/cn';

const CourtCalendar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Calendar View');

  // January 2024 data
  // Jan 1st 2024 was a Monday (index 1)
  const daysInMonth = 31;
  const startDay = 1; // 0 for Sun, 1 for Mon...
  const calendarDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const paddingDays = Array.from({ length: startDay }, (_, i) => null);
  
  const eventDays = [15, 16, 18];
  const activeDay = 14;

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section id="court-calendar" className="py-12 md:py-20 min-h-[calc(100vh-80px)] bg-[#FDFCF9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h2 className="text-5xl font-black text-[#002B5B] mb-3 tracking-tight">Court Calendar</h2>
            <p className="text-gray-400 font-medium text-lg">Manage hearings, deadlines and court schedules</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="bg-white border border-gray-100 text-[#002B5B] px-6 py-3 rounded-xl font-black text-xs flex items-center gap-3 hover:bg-gray-50 transition-all shadow-sm">
              <Bell size={18} />
              Reminders
            </button>
            <button className="bg-[#002B5B] text-white px-6 py-3 rounded-xl font-black text-xs flex items-center gap-3 hover:bg-opacity-90 transition-all shadow-lg shadow-[#002B5B]/10">
              <Plus size={18} />
              Schedule Hearing
            </button>
          </div>
        </div>

        {/* Sub-Tabs */}
        <div className="flex justify-start mb-16">
          <div className="bg-gray-100/60 p-1.5 rounded-2xl flex items-center gap-1 border border-gray-200/50">
            {['Calendar View', 'Upcoming Hearings', 'Reminders', 'Court Sync'].map((tab) => (
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

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          
          {/* Main Calendar Column */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[32px] border border-gray-100 p-10 shadow-sm"
            >
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-3xl font-black text-[#002B5B]">January 2024</h3>
                <div className="flex items-center bg-gray-50 p-1 rounded-xl">
                  <button className="px-4 py-2 text-xs font-black text-gray-500 hover:text-[#002B5B] transition-all">
                    <ChevronLeft size={16} />
                  </button>
                  <button className="px-6 py-2 text-xs font-black text-[#002B5B] bg-white rounded-lg shadow-sm">
                    Today
                  </button>
                  <button className="px-4 py-2 text-xs font-black text-gray-500 hover:text-[#002B5B] transition-all">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Grid Header */}
              <div className="grid grid-cols-7 gap-4 mb-6">
                {weekDays.map(day => (
                  <div key={day} className="text-center text-[10px] font-black text-gray-300 uppercase tracking-[0.2em]">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-x-4 gap-y-6">
                {paddingDays.map((_, i) => (
                  <div key={`padding-${i}`} className="aspect-square"></div>
                ))}
                {calendarDays.map(day => {
                  const isEvent = eventDays.includes(day);
                  const isActive = day === activeDay;

                  return (
                    <motion.div 
                      key={day}
                      whileHover={{ scale: 1.05 }}
                      className={cn(
                        "aspect-square rounded-2xl flex flex-col items-center justify-center relative cursor-pointer transition-all border",
                        isActive ? "bg-[#002B5B] border-[#002B5B] text-white shadow-xl shadow-[#002B5B]/10" : 
                        isEvent ? "bg-[#F97316]/5 border-[#F97316]/20 text-[#002B5B]" : 
                        "bg-white border-transparent text-gray-700 hover:bg-gray-50"
                      )}
                    >
                      <span className="text-sm font-black">{day}</span>
                      {isEvent && !isActive && (
                        <div className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-[#F97316]"></div>
                      )}
                      {isActive && (
                        <div className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-white"></div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Today's Schedule */}
              <div className="mt-16 pt-10 border-t border-gray-50">
                <h4 className="text-xl font-black text-[#002B5B] mb-6">Today's Schedule</h4>
                <div className="space-y-4">
                  <div className="bg-gray-50/80 rounded-2xl p-6 flex items-center justify-between group hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#F97316]"></div>
                      <div>
                        <p className="text-sm font-black text-[#002B5B]">Client consultation</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">11:00 AM</p>
                      </div>
                    </div>
                    <button className="text-gray-300 hover:text-[#002B5B] transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>

                  <div className="bg-gray-50/80 rounded-2xl p-6 flex items-center justify-between group hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div>
                        <p className="text-sm font-black text-[#002B5B]">Document review deadline</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">4:00 PM</p>
                      </div>
                    </div>
                    <button className="text-gray-300 hover:text-[#002B5B] transition-colors">
                      <MoreHorizontal size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            {/* Next Hearing Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm"
            >
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-lg font-black text-[#002B5B]">Next Hearing</h4>
                <div className="bg-[#F97316]/10 p-2 rounded-xl text-[#F97316]">
                  <Clock size={18} />
                </div>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#002B5B]">
                    <CalendarIcon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#002B5B]">Tomorrow, 10:30 AM</p>
                    <p className="text-[10px] font-bold text-gray-400">Scheduled Time</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#002B5B]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#002B5B]">Delhi High Court</p>
                    <p className="text-[10px] font-bold text-gray-400">Location</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-[#002B5B]">
                    <User size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#002B5B]">Hon. Justice Sharma</p>
                    <p className="text-[10px] font-bold text-gray-400">Presiding Officer</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#002B5B] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-lg shadow-[#002B5B]/10">
                View Details
              </button>
            </motion.div>

            {/* Court Statistics Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[32px] border border-gray-100 p-8 shadow-sm"
            >
              <h4 className="text-lg font-black text-[#002B5B] mb-8">Court Statistics</h4>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-6 border-b border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-xs font-bold text-gray-500">This Week</span>
                  </div>
                  <span className="text-sm font-black text-[#002B5B]">3 hearings</span>
                </div>

                <div className="flex items-center justify-between pb-6 border-b border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-xs font-bold text-gray-500">This Month</span>
                  </div>
                  <span className="text-sm font-black text-[#002B5B]">12 hearings</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                    <span className="text-xs font-bold text-gray-500">Success Rate</span>
                  </div>
                  <span className="text-sm font-black text-[#22C55E]">78%</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-2xl flex items-center gap-3">
                <Info size={16} className="text-gray-400" />
                <p className="text-[9px] font-bold text-gray-400 leading-relaxed uppercase tracking-wider">
                  Data reflects resolved cases from the past 12 months.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CourtCalendar;
