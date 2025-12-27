
import React, { Suspense, useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import DocumentVault from './components/DocumentVault';
import CourtCalendar from './components/CourtCalendar';
import AiAssistantPage from './components/AiAssistantPage';
import ConsultationBooking from './components/ConsultationBooking';
import LegalAiHub from './components/LegalAiHub';
import UpdatesAndEducation from './components/UpdatesAndEducation';
import LegalInsightsBlog from './components/LegalInsightsBlog';
import ReferralBoard from './components/ReferralBoard';
import FeaturesSolutions from './components/FeaturesSolutions';
import AiAssistant from './components/AiAssistant';
import ResearchPage from './components/ResearchPage';
import CaseAnalysisPage from './components/CaseAnalysisPage';
import BillingPage from './components/BillingPage';
import { Button } from './components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export type ViewType = 'home' | 'docs' | 'calendar' | 'ai-assistant' | 'consultations' | 'research' | 'analysis' | 'billing' | 'referrals';

interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-4xl font-black text-[#002B5B] mb-4">Oops! Something went wrong.</h1>
          <p className="text-gray-500 mb-8">We've encountered a platform error. Our team has been notified.</p>
          <Button onClick={() => window.location.reload()}>Reload Platform</Button>
        </div>
      );
    }
    return this.props.children;
  }
}


const Footer = React.memo(() => (
  <footer className="bg-white border-t border-gray-100 py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="bg-[#002B5B] p-2 rounded-lg">
          <div className="w-5 h-5 border-2 border-white rounded-md"></div>
        </div>
        <span className="text-[#002B5B] font-black text-xl tracking-tighter">Yugality</span>
      </div>
      <div className="flex gap-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
        <a href="#" className="hover:text-[#002B5B] transition-colors">Privacy</a>
        <a href="#" className="hover:text-[#002B5B] transition-colors">Terms</a>
        <a href="#" className="hover:text-[#002B5B] transition-colors">Cookies</a>
        <a href="#" className="hover:text-[#002B5B] transition-colors">Help</a>
      </div>
      <p className="text-gray-400 text-xs font-bold">© 2024 YUGALITY INC. ALL RIGHTS RESERVED.</p>
    </div>
  </footer>
));

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const handleNavigate = useCallback((view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            <HowItWorks />
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading Intelligence...</div>}>
              <LegalAiHub />
            </Suspense>
            <UpdatesAndEducation />
            <LegalInsightsBlog />
            <div id="referral-board"><ReferralBoard /></div>
            <FeaturesSolutions />
            <section className="max-w-7xl mx-auto px-6 py-32">
              <div className="bg-[#002B5B] rounded-[48px] p-16 md:p-24 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#F7941D]/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#006837]/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative z-10">
                  <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">Ready to Simplify<br/>Your Legal Journey?</h2>
                  <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">Join thousands of users who have found peace of mind with Yugality's streamlined legal platform.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" variant="secondary">Get Started Now</Button>
                    <Button size="lg" variant="ghost" className="text-white border border-white/20 hover:bg-white/10">Contact Sales</Button>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      case 'docs': return <DocumentVault />;
      case 'calendar': return <CourtCalendar />;
      case 'ai-assistant': return <AiAssistantPage />;
      case 'consultations': return <ConsultationBooking />;
      case 'research': return <ResearchPage />;
      case 'analysis': return <CaseAnalysisPage />;
      case 'billing': return <BillingPage />;
      case 'referrals': return <ReferralBoard />;
      default: return <Hero />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen selection:bg-[#F7941D]/30 selection:text-[#002B5B]">
        <Navbar onNavigate={handleNavigate} currentView={currentView} />
        <main>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: currentView === 'home' ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: currentView === 'home' ? 0 : -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
        <AiAssistant />
      </div>
    </ErrorBoundary>
  );
};

export default App;
