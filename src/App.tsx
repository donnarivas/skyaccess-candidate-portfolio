import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CandidateHero from './components/CandidateHero';
import AcademicSection from './components/AcademicSection';
import CareerTimeline from './components/CareerTimeline';
import SkillsBento from './components/SkillsBento';
import RecommendationLetters from './components/RecommendationLetters';
import FooterCTA from './components/FooterCTA';
import LucideIcon from './components/LucideIcon';
import MarketingStrategy from './components/MarketingStrategy';

export default function App() {
  const [activeExperienceId, setActiveExperienceId] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState('hero');
  const [showStrategyPage, setShowStrategyPage] = useState(false);

  // Sync scroll positions with header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      const sections = ['academia', 'career-history', 'skills', 'recommendations', 'contact'];
      let currentSection = 'hero';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveNav(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleVideoSegmentClick = (experienceId?: string) => {
    if (experienceId) {
      setActiveExperienceId(experienceId);
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg text-zinc-800 font-sans selection:bg-brand-red selection:text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showStrategyPage ? (
          <motion.div
            key="strategy-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MarketingStrategy
              onClose={() => {
                setShowStrategyPage(false);
                window.scrollTo({ top: 0 });
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* FIXED PREMIUM NAVIGATION HEADER */}
            <header
              className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
                scrolled
                  ? 'py-4 bg-white/70 backdrop-blur-md border-zinc-200/40 shadow-xs'
                  : 'py-6 bg-transparent border-transparent'
              }`}
            >
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 flex items-center justify-between">
                
                {/* Logo Brand Title */}
                <div
                  onClick={() => handleScrollToSection('hero')}
                  className="flex items-center gap-2.5 cursor-pointer select-none group"
                >
                  <div className="w-8 h-8 rounded-sm bg-brand-red flex items-center justify-center text-white shadow-md shadow-brand-red/15 group-hover:scale-105 transition-all duration-200">
                    <LucideIcon name="Plane" size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-sans font-medium text-zinc-900 tracking-wide group-hover:text-brand-red transition-colors">
                      Donna Aseret Rivas
                    </div>
                    <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest leading-none mt-0.5">
                      SkyAccess Candidate
                    </div>
                  </div>
                </div>

                {/* Desktop Nav Items */}
                <nav className="hidden lg:flex items-center gap-6">
                  {[
                    { id: 'academia', label: 'Academic Acumen' },
                    { id: 'career-history', label: 'Sales History' },
                    { id: 'skills', label: 'Skills Inventory' },
                    { id: 'recommendations', label: 'Endorsements' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleScrollToSection(item.id)}
                      className={`text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer relative py-1 ${
                        activeNav === item.id ? 'text-brand-red font-medium' : 'text-zinc-500 hover:text-zinc-900'
                      }`}
                    >
                      <span>{item.label}</span>
                      {activeNav === item.id && (
                        <motion.div
                          layoutId="activeNavLine"
                          className="absolute bottom-0 left-0 w-full h-px bg-brand-red"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  ))}
                </nav>

                {/* CTA: Contact / Interview */}
                <div>
                  <button
                    onClick={() => handleScrollToSection('contact')}
                    className="px-4 py-2 rounded-sm text-xs font-mono font-semibold uppercase tracking-wider text-white bg-brand-red hover:bg-brand-red-hover transition-colors cursor-pointer flex items-center gap-1.5 shadow-sm"
                  >
                    <LucideIcon name="UserCheck" size={12} />
                    <span>Invite to Interview</span>
                  </button>
                </div>

              </div>
            </header>

            {/* CORE SECTIONS */}
            <main>
              
              {/* HERO SECTION */}
              <CandidateHero
                onScrollToSection={handleScrollToSection}
                onOpenStrategy={() => {
                  setShowStrategyPage(true);
                  window.scrollTo({ top: 0 });
                }}
              />

              {/* INTELLECTUAL & RESEARCH SHOWCASE */}
              <AcademicSection />

              {/* TENURE & PERFORMANCE RECORDS */}
              <CareerTimeline activeExperienceId={activeExperienceId} />

              {/* SKILLS BENTO GRID */}
              <SkillsBento />

              {/* LETTERS OF RECOMMENDATION SECTION */}
              <RecommendationLetters />

              {/* CONTACT / CTA SCHEDULER */}
              <FooterCTA />

            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
