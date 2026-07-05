import { motion } from 'motion/react';
import { SKILL_GROUPS } from '../data/candidateData';
import LucideIcon from './LucideIcon';

export default function SkillsBento() {
  const tools = [
    { name: 'VIN Solutions', desc: 'Luxury Auto CRM' },
    { name: 'Tableau', desc: 'Data Analytics' },
    { name: 'LexisNexis', desc: 'Legal Research' },
    { name: 'R Studio', desc: 'Statistical Modeling' },
    { name: 'GitHub / Vercel', desc: 'Digital Deployment' },
    { name: 'Excel / Outlook', desc: 'Advanced Comms/Spreadsheets' },
  ];

  return (
    <section id="skills" className="py-24 px-6 sm:px-8 lg:px-16 bg-zinc-50/50 border-b border-zinc-200 scroll-mt-16 relative overflow-hidden">
      {/* Ambient background glassmorphism glows */}
      <div className="absolute top-1/4 left-1/12 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono text-brand-red uppercase tracking-[0.3em] bg-brand-red/5 px-3.5 py-1 rounded-sm border border-brand-red/20 font-semibold">
            Competencies & Tools
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-zinc-950 mt-5 tracking-tight">
            Donna's Professional Skill Inventory
          </h2>
          <p className="text-zinc-600 mt-4 text-sm font-sans leading-relaxed">
            Highly multi-faceted candidate. Explore her categorized sales techniques, executive communication tools, CRM software proficiencies, and professional certificates.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* COLUMN 1-8: CORE SALES & SYSTEMS GROUP (8 cols total, 2x2 grid layout) */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SKILL_GROUPS.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white/40 backdrop-blur-md p-5 rounded-sm border border-zinc-200/60 flex flex-col justify-between shadow-sm hover:border-brand-red/30 hover:bg-white/60 transition-all duration-300"
              >
                <div>
                  <h4 className="font-mono text-xs font-bold tracking-wider text-zinc-900 mb-4 flex items-center gap-2 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                    <span>{group.category}</span>
                  </h4>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-sans px-2.5 py-1 rounded-sm bg-white/75 border border-zinc-200/60 text-zinc-700 hover:border-brand-red/20 transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-[0.2em] mt-5 block font-medium">
                  Category #0{idx + 1}
                </span>
              </motion.div>
            ))}
          </div>

          {/* COLUMN 9-12: TOOLS SUITE (4 cols wide, highly condensed and glassy) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 bg-white/40 backdrop-blur-md p-5 rounded-sm border border-zinc-200/60 flex flex-col justify-between shadow-sm hover:border-brand-red/30 hover:bg-white/60 transition-all duration-300"
          >
            <div>
              <h4 className="font-mono text-xs font-bold tracking-wider text-zinc-900 mb-3 flex items-center gap-2 uppercase">
                <LucideIcon name="Code" className="text-brand-red" size={14} />
                <span>Software & CRM Suite</span>
              </h4>
              <p className="text-[11px] text-zinc-500 font-sans leading-relaxed mb-3">
                Active practitioner with data & relational sales systems:
              </p>

              {/* Condensed 2-column grid of tools */}
              <div className="grid grid-cols-2 gap-2">
                {tools.map((tool, i) => (
                  <div key={i} className="p-2 rounded-sm bg-white/60 border border-zinc-200/50 flex flex-col justify-center shadow-xs">
                    <span className="text-[11px] font-sans font-semibold text-zinc-800 truncate">{tool.name}</span>
                    <span className="text-[9px] font-mono text-zinc-400 mt-0.5 truncate">{tool.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-[0.2em] mt-5 block font-medium">
              Systems Integration
            </span>
          </motion.div>

          {/* LOWER ROW - CERTIFICATIONS (6 cols, compact) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-6 bg-white/40 backdrop-blur-md p-5 rounded-sm border border-zinc-200/60 text-left flex flex-col justify-between shadow-sm hover:border-brand-red/30 hover:bg-white/60 transition-all duration-300"
          >
            <div>
              <h4 className="font-mono text-xs font-bold tracking-wider text-zinc-900 uppercase mb-3 flex items-center gap-2">
                <LucideIcon name="Award" className="text-brand-red" size={14} />
                <span>Licenses & Professional Credentials</span>
              </h4>

              <div className="space-y-2">
                {[
                  { title: 'Certificate in Strategic Management', issuer: 'Georgetown University', year: '2026' },
                  { title: 'Inside LVMH Certificate (Luxury Brand)', issuer: 'LVMH Group', year: '2024' },
                  { title: 'GSI Graduate Diploma (Gemology Science)', issuer: 'GSI', year: '2024' },
                ].map((cert, i) => (
                  <div key={i} className="px-3 py-1.5 rounded-sm bg-white/60 border border-zinc-200/50 flex items-center justify-between gap-3 shadow-xs hover:border-brand-red/20 transition-all duration-300">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="p-1 rounded-sm bg-brand-red/5 text-brand-red flex-shrink-0">
                        <LucideIcon name="Award" size={11} />
                      </div>
                      <span className="text-xs font-medium text-zinc-800 truncate">{cert.title}</span>
                    </div>
                    <span className="text-[9px] font-mono text-zinc-400 bg-zinc-50 px-1.5 py-0.5 rounded-sm border border-zinc-200/40 flex-shrink-0">
                      {cert.issuer} • {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-[0.2em] mt-5 block font-medium">
              Certified Credentials
            </span>
          </motion.div>

          {/* LOWER ROW - BILINGUAL ADVANTAGE & ENGAGEMENT (6 cols, compact & glass progress) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-6 bg-white/40 backdrop-blur-md p-5 rounded-sm border border-zinc-200/60 text-left flex flex-col justify-between shadow-sm hover:border-brand-red/30 hover:bg-white/60 transition-all duration-300"
          >
            <div>
              <h4 className="font-mono text-xs font-bold tracking-wider text-zinc-900 uppercase mb-3 flex items-center gap-2">
                <LucideIcon name="Globe" className="text-brand-red" size={14} />
                <span>Bilingual & Composure Advantage</span>
              </h4>
              
              <p className="text-[11px] text-zinc-500 font-sans leading-relaxed mb-3">
                Native bilingual fluency to facilitate fluid, rapid account closures with international operators and HNW travelers.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-2.5 rounded-sm bg-white/60 border border-zinc-200/50 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-800">Spanish</span>
                    <span className="text-[9px] font-mono font-bold text-brand-red">NATIVE</span>
                  </div>
                  <div className="w-full bg-zinc-200/40 h-1 mt-2.5 rounded-full overflow-hidden">
                    <div className="bg-brand-red h-full w-full" />
                  </div>
                </div>

                <div className="p-2.5 rounded-sm bg-white/60 border border-zinc-200/50 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-800">French</span>
                    <span className="text-[9px] font-mono font-bold text-zinc-500">ELEMENTARY</span>
                  </div>
                  <div className="w-full bg-zinc-200/40 h-1 mt-2.5 rounded-full overflow-hidden">
                    <div className="bg-zinc-400 h-full w-1/3" />
                  </div>
                </div>
              </div>
            </div>

            <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-[0.2em] mt-5 block font-medium">
              Global Relations
            </span>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
