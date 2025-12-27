
import React from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { ViewType } from '../App';
import { cn } from '../utils/cn';

interface NavbarProps {
  onNavigate: (view: ViewType) => void;
  currentView: ViewType;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const handleNavClick = (id: string) => {
    // Direct mapping of nav IDs to view types
    const viewMap: Record<string, ViewType> = {
      'docs': 'docs',
      'calendar': 'calendar',
      'ai': 'ai-assistant',
      'consults': 'consultations',
      'research': 'research',
      'analysis': 'analysis',
      'billing': 'billing',
      'referrals': 'referrals'
    };

    if (viewMap[id]) {
      onNavigate(viewMap[id]);
    } else {
      onNavigate('home');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Left: Logo */}
      <button 
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
      >
        <div className="bg-[#002B5B] p-2 rounded-lg">
          <div className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">Y</span>
          </div>
        </div>
        <span className="text-[#002B5B] font-black text-xl tracking-tighter">Yugality</span>
      </button>

      {/* Center: Menu Items */}
      <div className="hidden lg:flex items-center gap-4 xl:gap-6 overflow-x-auto no-scrollbar">
        {NAV_ITEMS.map((item) => {
          const isActive = (item.id === currentView) || 
                           (item.id === 'docs' && currentView === 'docs') || 
                           (item.id === 'calendar' && currentView === 'calendar') ||
                           (item.id === 'ai' && currentView === 'ai-assistant') ||
                           (item.id === 'consults' && currentView === 'consultations') ||
                           (item.id === 'research' && currentView === 'research') ||
                           (item.id === 'analysis' && currentView === 'analysis') ||
                           (item.id === 'billing' && currentView === 'billing') ||
                           (item.id === 'referrals' && currentView === 'referrals');
          return (
            <button 
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                "flex items-center gap-1.5 transition-all whitespace-nowrap px-3 py-1.5 rounded-full shrink-0",
                isActive 
                  ? "bg-[#002B5B]/5 text-[#002B5B] font-bold" 
                  : "text-gray-500 hover:text-[#002B5B]"
              )}
            >
              <span className={cn("transition-opacity", isActive ? "opacity-100" : "opacity-60")}>
                {item.icon}
              </span>
              <span className="text-[11px] xl:text-xs font-semibold uppercase tracking-wider">{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4 shrink-0">
        <button className="hidden sm:flex items-center gap-1 text-xs font-bold text-gray-600 hover:text-gray-900">
          <Globe size={16} />
          EN
          <ChevronDown size={14} />
        </button>
        <button className="hidden sm:block text-xs font-bold text-[#002B5B] hover:opacity-80">Log In</button>
        <button className="bg-[#002B5B] text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-opacity-90 transition-all shadow-md">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
