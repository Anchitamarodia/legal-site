
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, Search, ChevronDown, Filter, 
  Download, Edit2, FileText, Plus,
  TrendingUp, Clock, Wallet, BarChart3,
  MoreVertical
} from 'lucide-react';
import { cn } from '../utils/cn';

const BILLING_STATS = [
  { label: 'Total Revenue', value: '₹5,450', change: '+12%', sub: 'from last month', icon: <CreditCard size={20} />, trend: 'up' },
  { label: 'Billable Hours', value: '11h', change: '+8%', sub: 'from last month', icon: <Clock size={20} />, trend: 'up' },
  { label: 'Pending Amount', value: '₹3,100', change: '2 pending', sub: 'pending invoices', icon: <TrendingUp size={20} />, trend: 'neutral' },
  { label: 'Average Rate', value: '₹495', change: 'per hour', sub: '', icon: <BarChart3 size={20} />, trend: 'neutral' },
];

const BILLING_ENTRIES = [
  { date: 'Jan 15, 2024', client: 'ABC Corporation', description: 'Contract review and legal consultation', hours: '3.5h', rate: '₹500', amount: '₹1,750', status: 'Paid' },
  { date: 'Jan 14, 2024', client: 'John Smith', description: 'Property dispute consultation', hours: '2h', rate: '₹450', amount: '₹900', status: 'Pending' },
  { date: 'Jan 12, 2024', client: 'XYZ Ltd', description: 'Employment law advisory', hours: '4h', rate: '₹550', amount: '₹2,200', status: 'Overdue' },
  { date: 'Jan 10, 2024', client: 'Sarah Wilson', description: 'Divorce proceedings consultation', hours: '1.5h', rate: '₹400', amount: '₹600', status: 'Paid' },
];

const BillingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Time Entries');

  return (
    <div className="py-12 bg-[#FDFCF9] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div>
            <h2 className="text-4xl font-black text-[#002B5B] mb-2 tracking-tight">Billing & Time Log</h2>
            <p className="text-gray-400 font-medium">Track billable hours and manage invoices</p>
          </div>
          <button className="bg-[#002B5B] text-white px-8 py-4 rounded-2xl font-black text-sm flex items-center gap-2 hover:shadow-xl transition-all shadow-lg shadow-[#002B5B]/10 active:scale-95">
            <Plus size={18} />
            Add Time Entry
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {BILLING_STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm group hover:border-[#002B5B]/10 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{stat.label}</span>
                <div className="text-gray-300 group-hover:text-[#002B5B] transition-colors">
                  {stat.icon}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-[#002B5B] mb-2">{stat.value}</span>
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "text-[10px] font-black uppercase",
                    stat.trend === 'up' ? 'text-green-500' : 'text-gray-400'
                  )}>
                    {stat.change}
                  </span>
                  <span className="text-[10px] font-bold text-gray-300">{stat.sub}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm mb-12">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by client or description..."
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl pl-12 pr-6 py-4 text-sm outline-none focus:border-[#002B5B] transition-all"
              />
            </div>
            <div className="flex gap-4">
              <button className="bg-white border border-gray-100 rounded-2xl px-6 py-4 text-xs font-black text-gray-600 flex items-center gap-4 hover:border-[#002B5B] transition-all">
                All Clients
                <ChevronDown size={14} className="text-gray-400" />
              </button>
              <button className="bg-white border border-gray-100 rounded-2xl px-6 py-4 text-xs font-black text-gray-600 flex items-center gap-4 hover:border-[#002B5B] transition-all">
                <Filter size={14} className="text-gray-400" />
                More Filters
              </button>
            </div>
          </div>
        </div>

        {/* Entries Table Section */}
        <div className="bg-white rounded-[32px] border border-gray-100 overflow-hidden shadow-sm">
          <div className="p-8 border-b border-gray-50 flex justify-between items-center">
             <div className="flex bg-gray-100/80 p-1 rounded-2xl">
               {['Time Entries', 'Invoices', 'Reports'].map(tab => (
                 <button
                   key={tab}
                   onClick={() => setActiveTab(tab)}
                   className={cn(
                     "px-6 py-2.5 rounded-xl text-xs font-black transition-all",
                     activeTab === tab ? "bg-white text-[#002B5B] shadow-sm" : "text-gray-400"
                   )}
                 >
                   {tab}
                 </button>
               ))}
             </div>
          </div>

          <div className="p-8">
            <h3 className="text-xl font-black text-[#002B5B] mb-8">Billing Entries</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-50">
                    <th className="text-left pb-6 px-4">Date</th>
                    <th className="text-left pb-6 px-4">Client</th>
                    <th className="text-left pb-6 px-4">Description</th>
                    <th className="text-left pb-6 px-4">Hours</th>
                    <th className="text-left pb-6 px-4">Rate</th>
                    <th className="text-left pb-6 px-4">Amount</th>
                    <th className="text-left pb-6 px-4">Status</th>
                    <th className="text-right pb-6 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {BILLING_ENTRIES.map((entry, idx) => (
                    <tr key={idx} className="group hover:bg-gray-50/50 transition-colors">
                      <td className="py-6 px-4 text-sm font-bold text-gray-600">{entry.date}</td>
                      <td className="py-6 px-4 text-sm font-black text-[#002B5B]">{entry.client}</td>
                      <td className="py-6 px-4 text-sm text-gray-400 max-w-xs truncate">{entry.description}</td>
                      <td className="py-6 px-4 text-sm font-bold text-gray-500">{entry.hours}</td>
                      <td className="py-6 px-4 text-sm font-bold text-gray-500">{entry.rate}</td>
                      <td className="py-6 px-4 text-sm font-black text-[#002B5B]">{entry.amount}</td>
                      <td className="py-6 px-4">
                        <span className={cn(
                          "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter",
                          entry.status === 'Paid' ? 'bg-[#002B5B] text-white' :
                          entry.status === 'Pending' ? 'bg-gray-100 text-gray-400' :
                          'bg-red-50 text-red-500'
                        )}>
                          {entry.status}
                        </span>
                      </td>
                      <td className="py-6 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2.5 rounded-xl border border-gray-100 text-gray-400 hover:text-[#002B5B] hover:border-[#002B5B] transition-all">
                            <Edit2 size={14} />
                          </button>
                          <button className="p-2.5 rounded-xl border border-gray-100 text-gray-400 hover:text-[#002B5B] hover:border-[#002B5B] transition-all">
                            <FileText size={14} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BillingPage;
