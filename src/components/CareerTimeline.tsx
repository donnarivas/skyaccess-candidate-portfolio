import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../data/candidateData';
import LucideIcon from './LucideIcon';

interface CareerTimelineProps {
  activeExperienceId: string | null;
}

export default function CareerTimeline({ activeExperienceId }: CareerTimelineProps) {
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Highlighting is done reactively via activeExperienceId props; auto-scrolling is disabled to ensure video playback does not move the page.

  return (
    <section id="career-history" className="py-24 px-6 sm:px-8 lg:px-16 bg-zinc-50 border-b border-zinc-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-[10px] font-mono text-brand-red uppercase tracking-[0.3em] bg-brand-red/5 px-3.5 py-1 rounded-sm border border-brand-red/20 font-semibold">
            Professional Tenure
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-zinc-950 mt-5 tracking-tight">
            High-Performance Sales Track Record
          </h2>
          <p className="text-zinc-600 mt-4 text-sm font-sans leading-relaxed">
            Over $300,000+ in luxury portfolio revenue. Specialized in managing complex client negotiations, auditing strategic price frameworks, and establishing CRM qualification systems.
          </p>
        </div>

        {/* Timeline Line & Cards Layout */}
        <div className="relative border-l-2 border-zinc-200 ml-4 sm:ml-6 space-y-12">
          
          {EXPERIENCES.map((exp, index) => {
            const isActive = activeExperienceId === exp.id;

            return (
              <div
                key={exp.id}
                ref={(el) => {
                  cardRefs.current[exp.id] = el;
                }}
                className="relative pl-8 sm:pl-10 text-left transition-all duration-300"
              >
                {/* Timeline Bullet Node */}
                <div
                  className={`absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all duration-500 z-10 ${
                    isActive
                      ? 'bg-brand-red border-white scale-125 shadow-lg shadow-brand-red/30'
                      : 'bg-white border-zinc-300'
                  }`}
                />

                {/* Main Card Container */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`rounded-sm p-6 sm:p-8 transition-all duration-500 border ${
                    isActive
                      ? 'bg-brand-red/[0.01] border-brand-red shadow-lg shadow-brand-red/5'
                      : 'bg-white border-zinc-200 hover:border-brand-red/20 shadow-sm hover:shadow-md'
                  }`}
                >
                  {/* Top Row: Title & Metadata */}
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block mb-1">
                        {exp.period} • {exp.location}
                      </span>
                      <h3 className="font-sans font-semibold text-zinc-900 text-lg sm:text-xl tracking-tight flex items-center gap-2">
                        <span>{exp.role}</span>
                        <span className="text-zinc-400 font-normal">at</span>
                        <span className="text-brand-red font-bold">{exp.company}</span>
                      </h3>
                    </div>

                    {/* Active highlight status badge */}
                    {isActive && (
                      <span className="self-start inline-flex items-center gap-1 px-3 py-1 rounded-sm bg-brand-red/5 border border-brand-red/25 text-brand-red text-[10px] font-mono uppercase tracking-[0.2em] animate-pulse font-semibold">
                        <LucideIcon name="Play" size={10} />
                        <span>Active Video Segment</span>
                      </span>
                    )}
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-3 mb-8">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600 font-sans leading-relaxed">
                        <span className="text-brand-red mt-1.5 font-mono text-xs flex-shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* BOTTOM ROW: KEY EMPIRICAL METRICS */}
                  <div className="grid grid-cols-1 min-[450px]:grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-100">
                    {exp.metrics.map((metric, i) => (
                      <div key={i} className="p-3 sm:p-4 rounded-sm bg-zinc-50 border border-zinc-200 text-left shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="text-lg sm:text-xl md:text-2xl font-mono font-medium text-zinc-900 tracking-tight break-words">
                            {metric.value}
                          </div>
                          <div className="text-[10px] font-mono text-brand-red font-bold uppercase tracking-wider mt-0.5 break-words">
                            {metric.label}
                          </div>
                        </div>
                        {metric.description && (
                          <div className="text-[10px] text-zinc-500 font-sans mt-1.5 leading-relaxed break-words">
                            {metric.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                </motion.div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
