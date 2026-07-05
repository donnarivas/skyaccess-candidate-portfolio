import { motion } from 'motion/react';
import { EDUCATIONS, PROJECTS } from '../data/candidateData';
import LucideIcon from './LucideIcon';

export default function AcademicSection() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="academia" className="py-24 px-6 sm:px-8 lg:px-16 bg-white border-b border-zinc-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono text-brand-red uppercase tracking-[0.3em] bg-brand-red/5 px-3.5 py-1 rounded-sm border border-brand-red/20 font-semibold">
            Intellectual Rigor & Research
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-zinc-950 mt-5 tracking-tight">
            Academic Acumen & Strategic Analysis
          </h2>
          <p className="text-zinc-600 mt-4 text-sm font-sans leading-relaxed">
            Donna's business and communication competencies are backed by a perfect{' '}
            <span className="text-brand-red font-semibold">4.0 GPA academic career</span> spanning elite institutions, coupled with hands-on research and digital transformation initiatives.
          </p>
        </div>

        {/* Big Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT SIDE: ACADEMIC CREDENTIALS (7/12 width) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-2 font-medium">
              <LucideIcon name="GraduationCap" size={14} className="text-brand-red" />
              <span>Elite Institutions & Credentials</span>
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-6"
            >
              {EDUCATIONS.map((edu) => (
                <motion.div
                  variants={cardVariants}
                  key={edu.id}
                  className="bg-zinc-50 p-6 rounded-sm border border-zinc-200 hover:border-brand-red/30 transition-all duration-300 group shadow-sm hover:shadow-md"
                >
                  {/* Card Header Container */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-sm bg-white border border-zinc-200 text-brand-red mt-1 flex-shrink-0">
                        <LucideIcon name="GraduationCap" size={20} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                          {edu.period} • {edu.location}
                        </span>
                        <h4 className="font-sans font-medium text-zinc-900 text-base sm:text-lg mt-1 group-hover:text-brand-red transition-colors leading-snug">
                          {edu.institution}
                        </h4>
                      </div>
                    </div>

                    {edu.gpa && (
                      <div className="self-start sm:self-auto px-3 py-1 rounded-sm bg-brand-red/5 border border-brand-red/20 font-mono text-xs text-brand-red font-bold uppercase tracking-wider whitespace-nowrap">
                        GPA {edu.gpa}
                      </div>
                    )}
                  </div>

                  {/* Card Content body aligned with title on larger screens */}
                  <div className="sm:pl-16">
                    <p className="text-sm font-sans font-semibold text-zinc-700 mt-1 break-words">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-zinc-600 font-sans mt-3 leading-relaxed break-words">
                      {edu.details}
                    </p>

                    {/* Highlights */}
                    {edu.highlights && (
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {edu.highlights.map((hl, i) => (
                          <span
                             key={i}
                             className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-white border border-zinc-200 text-zinc-500 break-words"
                          >
                            {hl}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE: STRATEGIC RESEARCH PROJECTS (5/12 width) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-2 font-medium">
              <LucideIcon name="FolderKanban" size={14} className="text-brand-red" />
              <span>Applied Strategic Projects</span>
            </h3>

            <div className="space-y-6">
              {PROJECTS.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="bg-white p-6 rounded-sm border border-zinc-200 hover:border-brand-red/20 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-mono text-brand-red uppercase tracking-[0.2em] bg-brand-red/5 px-2.5 py-0.5 rounded-sm border border-brand-red/25 font-semibold">
                      {proj.period}
                    </span>
                    <span className="text-xs text-zinc-400 font-sans">{proj.role}</span>
                  </div>

                  <h4 className="font-sans font-medium text-zinc-900 text-base tracking-tight leading-snug">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed font-sans">
                    {proj.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {proj.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-600 font-sans leading-relaxed">
                        <span className="text-brand-red mt-1 font-mono text-[10px]">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Awards & Honors highlight box */}
            <div className="p-6 rounded-sm bg-zinc-50 border border-zinc-200 relative overflow-hidden text-left">
              <div className="absolute right-4 top-4 text-zinc-100">
                <LucideIcon name="Award" size={48} />
              </div>
              <h4 className="font-mono text-xs font-bold tracking-[0.25em] text-brand-red uppercase">
                Academic Distinctions
              </h4>
              <p className="text-xs text-zinc-600 font-sans mt-2 leading-relaxed">
                Recruited into prestigious fellowships and recognized for scholastic excellence:
              </p>
              <ul className="mt-3 space-y-2 font-sans text-xs text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 flex-shrink-0" />
                  <span>Georgetown University Scholarship Award</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 flex-shrink-0" />
                  <span>Earnest Scholarship Award ($5,000.00) — Cal Poly Pomona</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
