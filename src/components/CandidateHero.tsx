import { motion } from 'motion/react';
import LucideIcon from './LucideIcon';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  onOpenStrategy?: () => void;
}

export default function CandidateHero({ onScrollToSection, onOpenStrategy }: HeroProps) {
  const quickStats = [
    { label: 'High-Ticket Sales', value: '$300K+', icon: 'DollarSign', desc: 'Maserati, Chevrolet, Jared' },
    { label: 'Academic Excellence', value: 'GPA 4.0', icon: 'GraduationCap', desc: 'Harvard, Georgetown, Cal Poly' },
    { label: 'CRM Development', value: 'Portal Architect', icon: 'FolderKanban', desc: 'Custom lead pipeline deployer' },
    { label: 'Communication GPA', value: '4.0', icon: 'MessageSquareText', desc: 'Georgetown advanced courses' },
  ];

  return (
    <section id="hero" className="relative overflow-hidden py-24 px-6 sm:px-8 lg:px-16 border-b border-zinc-200 bg-white">
      {/* Decorative background grid and flight line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-red/10 to-transparent" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* SkyAccess Perfect Candidate Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-brand-red/5 border border-brand-red/25 text-brand-red text-xs font-mono mb-8 tracking-wider uppercase"
        >
          <LucideIcon name="Plane" className="animate-pulse-subtle" size={14} />
          <span>Charter Sales Associate Applicant</span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
        </motion.div>

        {/* Title / Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-zinc-950 max-w-4xl leading-tight"
        >
          Donna Aseret Rivas
        </motion.h1>

        {/* Subtitle / Pitch Statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-3xl leading-relaxed font-sans"
        >
          High-performing sales consultant and strategic management specialist, mapping a{' '}
          <span className="text-brand-red font-semibold">perfect 100% qualifications match</span> for{' '}
          <span className="text-zinc-950 font-bold">SkyAccess</span>. Combining luxury high-ticket sales leadership with elite, triple-4.0 GPA academic credentials.
        </motion.p>

        {/* Key CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => onScrollToSection('academia')}
            className="px-8 py-4 rounded-sm font-bold text-xs uppercase tracking-[0.25em] text-white bg-brand-red hover:bg-brand-red-hover shadow-lg shadow-brand-red/10 transition-all duration-200 cursor-pointer flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <LucideIcon name="GraduationCap" size={16} />
            <span>Explore Academic Acumen</span>
          </button>
          <button
            onClick={() => onScrollToSection('recommendations')}
            className="px-8 py-4 rounded-sm font-bold text-xs uppercase tracking-[0.25em] text-zinc-800 bg-zinc-50 border border-zinc-200 hover:bg-zinc-100 hover:border-zinc-300 transition-all duration-200 cursor-pointer flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
          >
            <LucideIcon name="Award" size={16} className="text-brand-red" />
            <span>Explore Endorsements</span>
          </button>
          <button
            onClick={() => onScrollToSection('contact')}
            className="px-8 py-4 rounded-sm font-medium text-zinc-600 hover:text-zinc-900 transition-all duration-200 cursor-pointer flex items-center gap-2"
          >
            <span>Book an Interview</span>
            <LucideIcon name="ChevronRight" size={16} className="text-brand-red" />
          </button>
        </motion.div>

        {/* Micro Dashboard / Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 min-[450px]:grid-cols-2 lg:grid-cols-4 gap-4 w-full"
        >
          {quickStats.map((stat, i) => (
            <div
              key={i}
              className="bg-white border border-zinc-200 text-left p-4 sm:p-6 rounded-sm relative group overflow-hidden transition-all duration-300 hover:border-brand-red/30 hover:bg-zinc-50/30 shadow-sm hover:shadow-md"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-red/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 sm:p-2.5 rounded-sm bg-zinc-50 border border-zinc-200 text-brand-red flex-shrink-0">
                  <LucideIcon name={stat.icon} size={18} />
                </div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider leading-none">{stat.label}</span>
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-zinc-900 tracking-tight break-words">{stat.value}</div>
              <div className="text-xs text-zinc-500 mt-1.5 font-sans leading-normal break-words">{stat.desc}</div>
            </div>
          ))}
        </motion.div>

        {/* Executive Sales Objective Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 w-full p-6 sm:p-8 rounded-sm bg-zinc-950 text-white text-left relative overflow-hidden shadow-xl border border-zinc-800"
        >
          {/* Decorative background visual lines or gradients */}
          <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-brand-red/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 right-12 w-32 h-32 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-brand-red/15 border border-brand-red/30 text-[10px] font-mono uppercase tracking-[0.2em] text-brand-red mb-4 font-bold">
                <LucideIcon name="Target" size={12} />
                <span>Annual Sales Target</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-light tracking-tight text-white">
                Forward-Looking Objective for <span className="font-semibold text-brand-red">SkyAccess</span>
              </h3>
              <p className="text-zinc-400 mt-2.5 text-xs sm:text-sm font-sans leading-relaxed">
                Aiming to leverage advanced Strategic Management framework concepts and a proven luxury retail sales stamina to establish, nurture, and secure high-value client flight bookings.
              </p>
            </div>
            
            {/* Target Metric Callout */}
            <div className="bg-zinc-900/90 border border-zinc-800 p-6 rounded-sm text-center md:text-right flex-shrink-0 w-full md:w-auto">
              <div className="text-3xl sm:text-4xl md:text-5xl font-mono font-medium text-white tracking-tight">
                150 - 200
              </div>
              <div className="text-[10px] font-mono text-brand-red font-bold uppercase tracking-[0.2em] mt-1.5 leading-none">
                Charter Bookings / Year
              </div>
              <div className="text-[10px] text-zinc-500 font-mono mt-2 leading-none">
                Targeted Annual Sales Objective
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Playbook Launcher Card with Glass edit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 w-full p-6 rounded-sm bg-white/45 backdrop-blur-md border border-zinc-200/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg hover:border-brand-red/30 hover:bg-white/60 transition-all duration-300 group"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 rounded-sm bg-brand-red/10 border border-brand-red/20 text-brand-red">
              <LucideIcon name="Sparkles" size={18} className="animate-pulse" />
            </div>
            <div>
              <h4 className="font-sans font-semibold text-zinc-950 text-sm sm:text-base leading-tight">
                Strategic 0-90 Day Marketing Playbook
              </h4>
              <p className="text-xs text-zinc-500 mt-1 font-sans">
                Explore the tactical roadmap and demographic segmentation designed to secure the 150 - 200 booking target.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenStrategy}
            className="w-full sm:w-auto px-6 py-3 rounded-sm text-xs font-mono font-bold uppercase tracking-wider text-white bg-brand-red hover:bg-brand-red-hover cursor-pointer shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            Launch Playbook →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
