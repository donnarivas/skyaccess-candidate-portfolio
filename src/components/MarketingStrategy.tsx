import { useState } from 'react';
import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';

interface MarketingStrategyProps {
  onClose: () => void;
}

export default function MarketingStrategy({ onClose }: MarketingStrategyProps) {
  const [activePhase, setActivePhase] = useState<'p1' | 'p2' | 'p3'>('p1');

  const objectiveBookings = '150 - 200';

  const demographics = [
    {
      title: 'High-Net-Worth Individuals (HNWIs)',
      subtitle: 'Net Worth $5M+ | Elite Private Travelers',
      icon: 'Award',
      description: 'Discerning leisure and family travelers seeking absolute privacy, bespoke flight concierge services, and seamless luxury transfers.',
      tactics: [
        'Personalized empty-leg matching alerts via custom CRM profiles.',
        'Luxury partnership referrals (fine jewelry, elite private clubs, premium resorts).',
        'Direct relationship mapping following luxury-client brand principles (Inside LVMH).'
      ]
    },
    {
      title: 'Corporate C-Suite & Executives',
      subtitle: 'SMEs | Corporate Relocation & Rapid Ingress',
      icon: 'Briefcase',
      description: 'Time-critical business leaders who view private charter services as productivity machines and strategic assets.',
      tactics: [
        'Establishing pre-negotiated corporate shuttle programs and block-hour agreements.',
        'Targeted outbound outreach utilizing Strategic Management pipeline metrics.',
        'Positioning regional empty-legs as flexible alternative business commutes.'
      ]
    },
    {
      title: 'Regional Leisure & High-Class Sport Teams',
      subtitle: 'Luxury Group Charters | Sports & Entertainment',
      icon: 'Globe',
      description: 'Regional entertainment agencies, specialized event organizers, and elite athletic coordinators looking for coordinated transportation.',
      tactics: [
        'Niche group charter coordination with bespoke hospitality arrangements.',
        'Custom digital landing experiences optimized for specific premium travel cohorts.',
        'Prompt event-driven booking triggers aligned with peak travel calendars.'
      ]
    }
  ];

  const phases = {
    p1: {
      id: 'p1',
      title: 'Phase 1: Days 0 - 30',
      label: 'Setup, Segmentation & Core Mapping',
      icon: 'Calendar',
      summary: 'Establish structural sales frameworks, optimize CRM infrastructure, and conduct precise customer segment profiling.',
      actionItems: [
        {
          title: 'CRM Pipeline Calibration',
          desc: 'Audit and adapt digital CRM systems (VIN Solutions, Salesforce, and custom platforms) to house regional HNWI profiles.'
        },
        {
          title: 'Demographic Relationship Mapping',
          desc: 'Extract target corporate lists and execute regional stakeholder identification across Southern California (San Bernardino, Chino, Inland Empire).'
        },
        {
          title: 'Value Proposition Refinement',
          desc: 'Infuse Georgetown Certificate in Strategic Management models into sales pitches, emphasizing risk mitigation and efficiency.'
        }
      ],
      kpi: '100% CRM alignment & 150+ vetted executive contacts compiled.',
      focus: 'Foundational Infrastructure & List Building'
    },
    p2: {
      id: 'p2',
      title: 'Phase 2: Days 31 - 60',
      label: 'Multi-Channel Outreach & Pipeline Seeding',
      icon: 'Network',
      summary: 'Launch highly personalized outreach campaigns, secure regional strategic partnerships, and capture early charter inquiries.',
      actionItems: [
        {
          title: 'Direct Strategic Outreach',
          desc: 'Initiate highly customized warm outreach to our vetted contact lists, focusing on consultative value-selling and custom flight options.'
        },
        {
          title: 'Premium Brand Cross-Partnerships',
          desc: 'Establish referral networks with luxury concierge partners, fine jewelry boutiques, and private clubs to cross-pollinate HNW clients.'
        },
        {
          title: 'Empty-Leg Optimization Campaign',
          desc: 'Broadcast last-minute charter vacancies and empty-leg opportunities to responsive regional buyer cohorts at attractive pricing.'
        }
      ],
      kpi: '30+ active sales conversations initiated & first 15 target bookings secured.',
      focus: 'Pipeline Growth & Outbound Velocity'
    },
    p3: {
      id: 'p3',
      title: 'Phase 3: Days 61 - 90',
      label: 'Booking Acceleration & Loyalty Loops',
      icon: 'TrendingUp',
      summary: 'Maximize flight conversion, scale bulk agreements (block hours), and turn one-off fliers into lifelong brand advocates.',
      actionItems: [
        {
          title: 'Corporate Block-Hour Programs',
          desc: 'Pitch bulk-booked private flying packages to corporate entities, stabilizing immediate cash-flow and booking reliability.'
        },
        {
          title: 'The Inside LVMH After-Sales Loop',
          desc: 'Execute exquisite after-sales check-ins to build retention rates of 10% higher than industry average through relationship tracking.'
        },
        {
          title: 'Referral Engine Launch',
          desc: 'Offer exclusive group incentives and member flight rewards to clients who refer other high-profile travelers.'
        }
      ],
      kpi: 'Achieving consistent run-rate of 15+ bookings per month towards the 150-200 annual target.',
      focus: 'Customer Lifetime Value & Scale'
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-brand-red selection:text-white relative overflow-hidden py-12 px-6 sm:px-8 lg:px-16"
    >
      {/* Premium Ambient Background Blur Orbs (Glass Edit Theme) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-zinc-800/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Navigation Bar / Return Header */}
        <div className="flex items-center justify-between mb-16 border-b border-zinc-800 pb-6">
          <button
            onClick={onClose}
            className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors cursor-pointer group bg-zinc-900/50 border border-zinc-800 px-4 py-2.5 rounded-sm"
          >
            <LucideIcon name="ChevronLeft" size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Executive Portfolio</span>
          </button>
          
          <div className="flex items-center gap-2 text-right">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">SkyAccess Strategic Playbook</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-16 text-left max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-mono uppercase tracking-[0.2em] mb-6 font-bold">
            <LucideIcon name="Target" size={14} />
            <span>Strategic Sales Directive</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight">
            High-Impact <span className="font-semibold text-brand-red">Go-To-Market</span> & CRM Playbook
          </h1>
          <p className="text-zinc-400 mt-6 text-base sm:text-lg font-sans leading-relaxed">
            A specialized strategic management layout engineered to build, nurture, and accelerate Donna Aseret Rivas' sales pipeline. Crafted to consistently meet and exceed the high-value annual performance targets of SkyAccess.
          </p>
        </div>

        {/* Core Objective Banner - HIGH END GLASS DESIGN */}
        <div className="mb-16 p-8 sm:p-10 rounded-sm bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-brand-red/5 to-transparent pointer-events-none" />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl text-left">
              <span className="text-xs font-mono text-brand-red uppercase tracking-widest font-semibold block mb-2">INTEGRATED ANNUAL TARGET</span>
              <h2 className="font-display text-2xl sm:text-3xl font-light tracking-tight text-white leading-tight">
                Achieving Sustainable Flight Bookings Velocity
              </h2>
              <p className="text-zinc-400 mt-3 text-xs sm:text-sm font-sans leading-relaxed">
                By aligning luxury consultative sales stamina (perfected in fine jewelry boutiques) with Georgetown business frameworks, this strategy directly targets high-value private aviation contracts to solidify regional market dominance.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 sm:p-8 rounded-sm text-center lg:text-right min-w-[280px] w-full lg:w-auto shadow-xl">
              <div className="text-4xl sm:text-5xl md:text-6xl font-mono font-medium text-white tracking-tight">
                {objectiveBookings}
              </div>
              <div className="text-[11px] font-mono text-brand-red font-bold uppercase tracking-[0.2em] mt-2.5">
                Charter Bookings / Year
              </div>
              <div className="text-[10px] text-zinc-500 font-mono mt-1">
                Primary Tactical Sales Goal
              </div>
            </div>
          </div>
        </div>

        {/* Target Demographics - Bento Style Cards with Glass */}
        <div className="mb-20">
          <div className="text-left mb-10">
            <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] font-semibold mb-2">TARGET SEGMENTS</h3>
            <h2 className="text-2xl sm:text-3xl font-display font-light text-white tracking-tight">
              Demographic Focus Profiles
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demographics.map((demo, idx) => (
              <div
                key={idx}
                className="p-6 rounded-sm bg-white/5 backdrop-blur-md border border-white/10 hover:border-brand-red/30 transition-all duration-300 flex flex-col justify-between shadow-lg text-left hover:-translate-y-1"
              >
                <div>
                  <div className="p-3 bg-brand-red/10 border border-brand-red/20 text-brand-red rounded-sm inline-block mb-4">
                    <LucideIcon name={demo.icon} size={18} />
                  </div>
                  <h4 className="font-sans font-semibold text-white text-base tracking-tight mb-1">{demo.title}</h4>
                  <p className="text-[10px] font-mono text-brand-red uppercase tracking-wider font-semibold mb-4">{demo.subtitle}</p>
                  <p className="text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed mb-6">{demo.description}</p>
                </div>
                
                <div className="border-t border-zinc-800/60 pt-4">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-wider block mb-2 font-bold">TACTICAL APPROACHES:</span>
                  <ul className="space-y-2 text-xs text-zinc-300 font-sans">
                    {demo.tactics.map((tactic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-brand-red font-bold mt-0.5">•</span>
                        <span>{tactic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 0-90 Day Plan Timeline - INTERACTIVE GLASS VIEW */}
        <div className="mb-20">
          <div className="text-left mb-10">
            <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] font-semibold mb-2">ROADMAP</h3>
            <h2 className="text-2xl sm:text-3xl font-display font-light text-white tracking-tight">
              Interactive 0 - 90 Day Strategic Plan
            </h2>
            <p className="text-zinc-400 mt-2.5 text-xs sm:text-sm font-sans max-w-2xl">
              Click the phases below to explore the chronological objectives, actionable tactics, and measurable KPIs assigned to each 30-day block.
            </p>
          </div>

          {/* Interactive Phase Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {(Object.keys(phases) as Array<keyof typeof phases>).map((key) => {
              const phase = phases[key];
              const isSelected = activePhase === key;
              return (
                <button
                  key={key}
                  onClick={() => setActivePhase(key)}
                  className={`p-5 rounded-sm border transition-all duration-300 text-left cursor-pointer relative overflow-hidden flex items-center justify-between shadow-md ${
                    isSelected
                      ? 'bg-brand-red/10 border-brand-red text-white'
                      : 'bg-white/5 border-white/10 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-bold block mb-1 ${isSelected ? 'text-brand-red' : 'text-zinc-500'}`}>
                      {phase.title}
                    </span>
                    <span className="font-sans font-bold text-sm sm:text-base leading-tight block">
                      {phase.focus}
                    </span>
                  </div>
                  <LucideIcon name={phase.icon} className={isSelected ? 'text-brand-red' : 'text-zinc-500'} size={20} />
                  
                  {isSelected && (
                    <div className="absolute left-0 top-0 w-1 h-full bg-brand-red" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive Panel Content with Glassmorphic effects */}
          <div className="p-8 rounded-sm bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl text-left relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row gap-8 lg:items-start justify-between relative z-10">
              
              {/* Left Column: Core Focus & Action Items */}
              <div className="flex-1 max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-brand-red/10 border border-brand-red/20 text-brand-red rounded-sm">
                    <LucideIcon name={phases[activePhase].icon} size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-brand-red font-bold uppercase tracking-widest">{phases[activePhase].title}</span>
                    <h3 className="text-xl sm:text-2xl font-sans font-semibold text-white tracking-tight mt-0.5">{phases[activePhase].label}</h3>
                  </div>
                </div>
                
                <p className="text-zinc-300 text-sm sm:text-base font-sans leading-relaxed mb-8">
                  {phases[activePhase].summary}
                </p>

                <div className="space-y-6">
                  {phases[activePhase].actionItems.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red font-mono text-[10px] font-bold mt-0.5 flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-sans font-semibold text-white">{item.title}</h4>
                        <p className="text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Goal/KPI & Strategic alignment details */}
              <div className="w-full lg:w-[320px] bg-zinc-950/60 border border-zinc-800 p-6 rounded-sm shadow-xl flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-4 font-bold">PHASE KPI DELIVERABLE:</span>
                  <div className="flex items-start gap-2 text-zinc-200">
                    <LucideIcon name="CheckCircle" className="text-brand-red flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-xs font-sans leading-relaxed font-semibold">{phases[activePhase].kpi}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800/80">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block mb-3 font-bold">ACADEMIC ALIGNMENT:</span>
                  <div className="p-3 bg-zinc-900/50 rounded-sm border border-zinc-800 text-[11px] font-sans text-zinc-400 leading-normal">
                    This block utilizes Georgetown University Strategy concepts (pipeline frameworks and risk management parameters) to ensure corporate efficiency and continuous pipeline visibility.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footnote / Call to Action to explore further */}
        <div className="p-8 sm:p-10 rounded-sm bg-gradient-to-r from-zinc-950 to-zinc-900 border border-zinc-800 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-full bg-brand-red/5 rounded-full blur-2xl pointer-events-none" />
          <h3 className="font-display text-xl sm:text-2xl font-light text-white tracking-tight mb-3">
            Ready to Accelerate Your Sales Velocity?
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm font-sans max-w-xl mx-auto mb-6 leading-relaxed">
            Let's discuss this 0-90 day playbook and target profiles in detail. Schedule a strategic consultation or invite Donna to an interview.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-sm text-xs font-mono font-bold uppercase tracking-wider text-white bg-brand-red hover:bg-brand-red-hover cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
            >
              Back to Portfolio
            </button>
            <button
              onClick={() => {
                onClose();
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 150);
              }}
              className="px-6 py-3 rounded-sm text-xs font-mono font-bold uppercase tracking-wider text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 cursor-pointer transition-all duration-200"
            >
              Contact Me Directly
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
