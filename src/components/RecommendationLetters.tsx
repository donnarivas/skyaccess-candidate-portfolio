import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Calendar, Mail, Phone, Award, Quote, X, ExternalLink, GraduationCap, Sparkles, Building2, User } from 'lucide-react';

interface Letter {
  id: string;
  author: string;
  title: string;
  institution: string;
  institutionSub?: string;
  location: string;
  date: string;
  contactEmail?: string;
  contactPhone?: string;
  category: 'sales' | 'strategy' | 'client';
  relationship: string;
  keyQuote: string;
  highlightTraits: string[];
  fullText: string[];
  letterheadColor: {
    bg: string;
    border: string;
    accent: string;
    text: string;
    badgeBg: string;
  };
  logoText: string;
  signatureStyle: string;
}

const recommendationLetters: Letter[] = [
  {
    id: 'megan-good',
    author: 'Megan C. Good, PhD',
    title: 'Assistant Professor',
    institution: 'California State Polytechnic University, Pomona',
    institutionSub: 'College of Business Administration, Dept. of International Business & Marketing',
    location: 'Pomona, California 91768',
    date: 'March 22, 2024',
    contactEmail: 'mcgood@cpp.edu',
    contactPhone: '(909) 869-2400',
    category: 'sales',
    relationship: 'Professional Selling Professor & Project Advisor',
    keyQuote: 'Donna completed my Professional Selling course... skills such as strategic critical thinking and unsupervised problem-solving were premium tools honed... and will be a great fit for the Sales Consultancy position.',
    highlightTraits: ['Professional Selling Success', 'High-Pressure Communication', 'Tenacity', 'Strategic Critical Thinking'],
    logoText: 'CalPolyPomona',
    signatureStyle: 'font-serif text-2xl italic tracking-wide text-blue-900 font-bold',
    letterheadColor: {
      bg: 'bg-emerald-50/50',
      border: 'border-emerald-200',
      accent: 'text-emerald-700',
      text: 'text-emerald-900',
      badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    fullText: [
      "This letter will serve as a recommendation for Donna Rivas. I have known Donna since 2022 while she pursued a Bachelor of Science in Business Administration (BSBA) degree at Cal Poly Pomona, with a major focus in Marketing Management.",
      "Donna completed my Professional Selling course, which provided her a thorough introduction to various strategic revenue generating tactics that apply to her interests in business management and sales. I worked closely with her while I supervised a rigorous real-world project and was impressed with her tenacity and ability to perform and communicate under pressure.",
      "Donna's class performance reflected a mature individual who was committed to learning and maximizing her classroom experience. While interacting with others, she was always prepared to discuss and share her ideas with those around her. These excellent communication skills not only indicated her strengths in effectively collaborating with others, but also reflected her strengths in her preparation (which I found to be excellent). Importantly, her peers were receptive to Donna's insights, and it is clear that they respected both her perspectives and her professional methods of delivery in and out of the classroom.",
      "Moreover, many of the assignments and exams required extensive critical thinking and the ability to project outcomes that individuals and /or organizations would experience based on decisions made in the framework of professional business-to-business sales. As a result, skills such as strategic critical thinking and unsupervised problem-solving were premium tools honed within this dynamic environment. Donna performed very well in these areas and will be a great fit for the Sales Consultancy position with your organization, to which she applied.",
      "As a final point, Donna demonstrated the quality of her character every day on campus and in professional environments, with a high degree of accountability to her learning and a strong work ethic in her responsibilities.",
      "In conclusion, I have confidence she is a trustworthy person of the highest integrity and I highly recommend Donna Rivas. If you have any questions, feel free to contact me."
    ]
  },
  {
    id: 'john-corso',
    author: 'John A. Corso, D.P.A.',
    title: 'Faculty Member',
    institution: 'Georgetown University',
    institutionSub: 'School of Continuing Studies',
    location: 'Washington, DC 20001',
    date: 'March 16, 2026',
    contactEmail: 'John.Corso@georgetown.edu',
    contactPhone: '(301) 529-9446',
    category: 'strategy',
    relationship: 'Strategic Management Professor',
    keyQuote: 'She was my student in the Professional Certificate in Strategic Management program... showing persuasive analytical and communication skills in presenting her portion of the American Express capstone project.',
    highlightTraits: ['Georgetown Strategic Frameworks', 'Persuasive Analysis', 'American Express Capstone', 'Personal Responsibility'],
    logoText: 'GEORGETOWN UNIVERSITY',
    signatureStyle: 'font-serif text-3xl italic tracking-tight text-blue-950',
    letterheadColor: {
      bg: 'bg-blue-50/50',
      border: 'border-blue-200',
      accent: 'text-blue-800',
      text: 'text-blue-950',
      badgeBg: 'bg-blue-50 text-blue-800 border-blue-200'
    },
    fullText: [
      "It is with great pleasure that I endorse Ms. Donna Rivas for a sales consultant position.",
      "Donna is my former strategic management student at Georgetown University's School of Continuing Studies in Washington, DC. She was my student in the Professional Certificate in Strategic Management program at Georgetown, especially showing persuasive analytical and communication skills in presenting her portion of the American Express capstone project.",
      "Her insight and thoughtful classroom contributions were consistently edifying to the class as a whole and enriching to the general program at the school. Donna is a person of character and intellect with a high sense of personal responsibility. I have no doubt she will prove to be an asset to any position to which she accedes.",
      "If I can assist you or Ms. Rivas at any time, please don't hesitate to reach out to me."
    ]
  },
  {
    id: 'anne-taieb',
    author: 'Anne Taieb',
    title: 'Senior Lecturer',
    institution: 'Harvard Extension School',
    institutionSub: 'Department of Foreign Languages (French)',
    location: 'Cambridge, Massachusetts',
    date: 'December 5, 2025',
    contactEmail: 'ataieb@g.harvard.edu',
    category: 'client',
    relationship: 'Advanced French Lecturer',
    keyQuote: 'What sets her apart is her dedication to personal growth and her natural interpersonal skills... especially valuable in the travel and luxury automotive industry, where client interaction, discretion, and professionalism are essential.',
    highlightTraits: ['Luxury Industry Suitability', 'Attentive & Discretion-Minded', 'Cultural Curiosity', 'Interpersonal Skills'],
    logoText: 'HARVARD EXTENSION SCHOOL',
    signatureStyle: 'font-sans text-3xl font-light italic text-red-800 border-b border-red-100 pb-1',
    letterheadColor: {
      bg: 'bg-red-50/50',
      border: 'border-red-200',
      accent: 'text-red-700',
      text: 'text-red-900',
      badgeBg: 'bg-red-50 text-red-700 border-red-200'
    },
    fullText: [
      "I am pleased to recommend Donna Rivas, whom I had the opportunity to teach in Elementary French E1b during the Spring 2025 at Harvard Extension School. From the very beginning of the course, she distinguished herself as a motivated, engaged, and reliable student—qualities that I believe will make her an excellent addition to your team.",
      "In my class, she consistently demonstrated a strong work ethic and a genuine enthusiasm for learning. She approached each assignment thoughtfully, actively participated in discussions, and regularly sought feedback to improve her skills. Her ability to communicate clearly, collaborate effectively with classmates, and maintain a positive and professional attitude was evident throughout the semester.",
      "What sets her apart is her dedication to personal growth and her natural interpersonal skills. She is self-assured and attentive - traits that are especially valuable in the travel and luxury automotive industry, where client interaction, discretion, and professionalism are essential. She is also culturally curious and open-minded, showing a real interest in languages and international contexts, which I believe will serve her well in a global-facing role.",
      "I am confident that Donna Rivas will bring enthusiasm and a strong sense of responsibility to any professional setting. She contributed positively to our classroom environment, and I have no doubt that she will bring the same energy and commitment to her work with your company.",
      "Please feel free to contact me if you need any additional information."
    ]
  },
  {
    id: 'gary-steinberg',
    author: 'Gary Steinberg',
    title: 'Adjunct Professor',
    institution: 'Georgetown University',
    institutionSub: 'School of Continuing Studies, Strategic Management Certificate',
    location: 'Washington, DC 20001',
    date: 'March 15, 2026',
    contactEmail: 'gas34@georgetown.edu',
    category: 'strategy',
    relationship: 'Adjunct Professor of Strategy',
    keyQuote: "Ms. Rivas' in-depth case study evaluations of industry leaders underscored her ability to synthesize high-level data into actionable business intelligence... leveraging her background in finance.",
    highlightTraits: ['Data-Driven Intelligence', 'Strategic Foresight', 'Analytical Precision', 'Finance Integration'],
    logoText: 'GEORGETOWN SCS',
    signatureStyle: 'font-serif text-3xl italic tracking-widest text-slate-900',
    letterheadColor: {
      bg: 'bg-slate-50/50',
      border: 'border-slate-200',
      accent: 'text-slate-700',
      text: 'text-slate-900',
      badgeBg: 'bg-slate-50 text-slate-700 border-slate-200'
    },
    fullText: [
      "Donna Rivas excelled as a member of our Georgetown University, School of Continuing Studies, Certificate Program in Strategic Management. Ms. Rivas demonstrated an outstanding understanding of business management and strategic management concepts and approaches. She also demonstrated excellent analytical and communications skills and the ability to work in a team environment during group exercises.",
      "As she progressed through the program, she cultivated a professional philosophy centered on analytical precision and strategic foresight. Her academic tenure, highlighted by intensive research in Strategic Management, has equipped her with the frameworks necessary to evaluate complex corporate structures and drive operational excellence. During our program, Ms. Rivas' in-depth case study evaluations of industry leaders, underscored her ability to synthesize high-level data into actionable business intelligence. Her class exercises also demonstrated her ability to leverage her background in finance and strategic planning to provide disciplined, data-driven support to a forward-thinking leadership team.",
      "Based on her outstanding performance in our program, I would strongly recommend Ms. Rivas for a position in your organization."
    ]
  },
  {
    id: 'paul-sarmas',
    author: 'Paul Sarmas, Ph.D.',
    title: 'Professor of Finance',
    institution: 'California State Polytechnic University, Pomona',
    institutionSub: 'College of Business Administration, Finance, Real Estate & Law',
    location: 'Pomona, California 91768',
    date: 'May 11, 2023',
    contactEmail: 'psarmas@cpp.edu',
    contactPhone: '(909) 869-2405',
    category: 'sales',
    relationship: 'Finance Advisor & Professor',
    keyQuote: "Donna's sales experience at Sierra Chevrolet is evidence of her dedication and work ethic... ability to manage projects, handle responsibility, and dedicate energy.",
    highlightTraits: ['Corporate Sales Experience', 'Managerial Finance', 'Project Leadership', 'Exceptional Motivation'],
    logoText: 'CAL POLY POMONA',
    signatureStyle: 'font-serif text-2xl italic text-zinc-800',
    letterheadColor: {
      bg: 'bg-amber-50/50',
      border: 'border-amber-200',
      accent: 'text-amber-700',
      text: 'text-amber-900',
      badgeBg: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    fullText: [
      "Miss Donna Rivas has been my student and advisee for about a year. Miss Rivas's performance in the managerial Finance (FRL 3000) course has been good. I find her to be a good student with strong abilities and academic aptitude. She has the initiative and motivation that exceeds most requirements.",
      "Miss Rivas is often a leader in class discussions, and her comments are insightful and well thought-out. Donna has shown great enthusiasm and willingness to learn new concepts in the field of finance. Even though her primary academic focus is marketing, she continuously seeks to explore the use of financial tools in marketing management.",
      "Miss Rivas has proved to be diligent, conscientious, and very personable. Donna's sales experience at Sierra Chevrolet is evidence of her dedication and work ethic. Donna's ability to manage projects, handle responsibility, and dedicate time and energy to the assignments at hand distinguishes her from other young candidates. She will add diversity and will be a valuable asset to your operation.",
      "Taking into consideration her dedication, determination, and motivation, I have no reservations concerning her success in the field of marketing and sales. I believe that Miss Donna Rivas will be a successful member of your team. I hope you will seriously consider her employment application. If I can be of further assistance, please do not hesitate to contact me."
    ]
  },
  {
    id: 'kylie-rose',
    author: 'KylieRose Melville',
    title: 'Senior Manager, Lifesaving Programs',
    institution: 'Best Friends Animal Society',
    institutionSub: 'Los Angeles Lifesaving Center',
    location: 'Los Angeles, California 91345',
    date: 'April 4, 2022',
    contactEmail: 'kylierosem@bestfriends.org',
    contactPhone: '(818) 643-3989 ext. 114',
    category: 'client',
    relationship: 'Volunteer Supervisor & Lifesaving Center Lead',
    keyQuote: 'Animal welfare is an industry where emotions are often running high and our receptionists are at the frontlines. Donna proved to be a quick study... and helped us provide exceptional customer service.',
    highlightTraits: ['Frontline Customer Service', 'Crisis Reception Care', 'Empathy & Patience', 'Pandemic Pressure Resilience'],
    logoText: 'Best Friends SAVE THEM ALL',
    signatureStyle: 'font-sans text-xl italic font-bold text-orange-600',
    letterheadColor: {
      bg: 'bg-orange-50/50',
      border: 'border-orange-200',
      accent: 'text-orange-600',
      text: 'text-orange-950',
      badgeBg: 'bg-orange-50 text-orange-600 border-orange-200'
    },
    fullText: [
      "It is my pleasure to recommend Donna Rivas to you.",
      "I am KylieRose Melville, Senior Manager of Lifesaving Programs with Best Friends Animal Society – Los Angeles. I have ten years of experience in animal welfare and have worked with a large number of volunteers during that time. Donna is one who stands out for her hard work and dedication.",
      "As a volunteer with Best Friends, Donna has taken on the challenging role of serving as a receptionist for us, starting during the global pandemic. This position is one that presented a challenge on many levels and Donna rose to the occasion easily.",
      "Animal welfare is an industry where emotions are often running high and our receptionists are at the frontlines of it. Compassion and patience are integral to the work we do as an organization and Donna has exemplified that even in the face of all of the challenges that the changing landscape of the pandemic presented. Donna proved to be a quick study and picked up our policies and procedures with ease. Over the past year she has helped us provide exceptional customer service to all members of the public who reach out to us looking for help or information.",
      "We are all incredibly grateful for to have had the chance to work with Donna . If you need any more information, please do not hesitate to contact me."
    ]
  }
];

export default function RecommendationLetters() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'sales' | 'strategy' | 'client'>('all');
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);

  const filteredLetters = recommendationLetters.filter(
    (letter) => activeCategory === 'all' || letter.category === activeCategory
  );

  return (
    <section id="recommendations" className="py-24 bg-zinc-50 border-t border-zinc-200 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-red/5 border border-brand-red/10 text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-red">
            <Award size={12} />
            <span>Executive Endorsements</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-zinc-950 mt-5 tracking-tight leading-none">
            Letters of <span className="font-medium text-brand-red">Recommendation</span>
          </h2>
          <p className="text-zinc-600 mt-4 text-sm sm:text-base font-sans leading-relaxed">
            Six comprehensive endorsements from academic mentors, strategic professors, and directors highlighting Donna's strategic sales precision, customer success empathy, and executive accountability.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Endorsements (6)' },
            { id: 'sales', label: 'Sales & Negotiations' },
            { id: 'strategy', label: 'Strategy & Analytics' },
            { id: 'client', label: 'Luxury Client Relations' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer border ${
                activeCategory === cat.id
                  ? 'bg-brand-red text-white border-brand-red shadow-sm'
                  : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-zinc-950'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Letter Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredLetters.map((letter) => (
              <motion.div
                key={letter.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedLetter(letter)}
                className="bg-white border border-zinc-200 p-6 rounded-sm shadow-sm hover:shadow-md hover:border-brand-red/25 transition-all duration-300 flex flex-col justify-between cursor-pointer group relative"
              >
                {/* Accent corner line */}
                <div className="absolute top-0 left-0 w-12 h-1 bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity rounded-tl-sm" />

                <div>
                  {/* Institution Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-sm border ${letter.letterheadColor.badgeBg}`}>
                      {letter.logoText.split(' ')[0]}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono">{letter.date.split(',')[1] || letter.date}</span>
                  </div>

                  {/* Pull Quote */}
                  <div className="relative mb-5">
                    <Quote className="text-zinc-100 absolute -top-2 -left-2 h-10 w-10 -z-0 transform -scale-x-100" />
                    <p className="text-xs text-zinc-700 italic font-sans leading-relaxed relative z-10 pl-2">
                      "{letter.keyQuote}"
                    </p>
                  </div>

                  {/* Highlights tags */}
                  <div className="flex flex-wrap gap-1 mb-6">
                    {letter.highlightTraits.slice(0, 3).map((trait, i) => (
                      <span key={i} className="text-[9px] font-mono px-2 py-0.5 bg-zinc-50 border border-zinc-100 text-zinc-500 rounded-sm">
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sender Info Footer */}
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-3 mt-auto">
                  <div className="min-w-0">
                    <h4 className="font-sans font-semibold text-xs text-zinc-900 group-hover:text-brand-red transition-colors truncate">
                      {letter.author}
                    </h4>
                    <p className="text-[10px] text-zinc-500 truncate mt-0.5">
                      {letter.title} • <span className="font-medium">{letter.institution.split(' ')[0]}</span>
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-sm bg-zinc-50 border border-zinc-200 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <FileText size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Action Suggestion */}
        <div className="text-center mt-12">
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">
            💡 Click any card above to view full official letterheads & contact details.
          </p>
        </div>

        {/* FULL LETTER MODAL OVERLAY */}
        <AnimatePresence>
          {selectedLetter && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-sm overflow-y-auto"
              onClick={() => setSelectedLetter(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25 }}
                className="bg-white rounded-sm shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-zinc-200 relative text-left"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Modal Controls Bar */}
                <div className="sticky top-0 right-0 left-0 bg-zinc-50/95 backdrop-blur-sm border-b border-zinc-200 px-6 py-4 flex items-center justify-between z-20">
                  <div className="flex items-center gap-2">
                    <FileText className="text-brand-red" size={16} />
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold text-zinc-700">
                      Official Letter of Recommendation
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => window.print()}
                      className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider rounded-sm bg-white hover:bg-zinc-100 border border-zinc-200 text-zinc-600 transition-colors cursor-pointer hidden sm:block"
                    >
                      Print/Save PDF
                    </button>
                    <button
                      onClick={() => setSelectedLetter(null)}
                      className="p-1 rounded-sm hover:bg-zinc-200 text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>

                {/* THE STATIONERY PAPER */}
                <div className="p-8 sm:p-12 md:p-16 font-sans text-zinc-800 leading-relaxed relative bg-white selection:bg-brand-red/10">
                  
                  {/* LETTERHEAD BANNER */}
                  <div className={`p-6 border-b-2 ${selectedLetter.letterheadColor.border} ${selectedLetter.letterheadColor.bg} rounded-sm mb-10`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        {/* Institution Large Title */}
                        <div className={`font-display text-lg sm:text-xl font-bold tracking-tight uppercase ${selectedLetter.letterheadColor.text}`}>
                          {selectedLetter.logoText}
                        </div>
                        {selectedLetter.institutionSub && (
                          <div className="text-[10px] sm:text-xs text-zinc-500 font-mono mt-1 font-medium">
                            {selectedLetter.institutionSub}
                          </div>
                        )}
                        <div className="text-[10px] text-zinc-400 font-sans mt-0.5">
                          {selectedLetter.location}
                        </div>
                      </div>
                      
                      {/* Stylized Badge Shield */}
                      <div className="self-start md:self-auto flex items-center gap-2">
                        <div className={`w-10 h-10 rounded-sm border flex items-center justify-center text-lg font-bold font-display ${selectedLetter.letterheadColor.badgeBg}`}>
                          {selectedLetter.institution.charAt(0)}
                        </div>
                        <div className="text-left">
                          <div className="text-[9px] font-mono uppercase tracking-widest text-zinc-400">Credentials</div>
                          <div className="text-[10px] font-mono font-bold text-zinc-600">Verified Direct</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Date & Addressee */}
                  <div className="mb-8">
                    <span className="text-xs text-zinc-400 font-mono block mb-4">{selectedLetter.date}</span>
                    <h5 className="font-sans font-bold text-xs text-zinc-800 uppercase tracking-wider">
                      {selectedLetter.id === 'paul-sarmas' ? 'Dear General Manager:' : 'To Whom It May Concern,'}
                    </h5>
                  </div>

                  {/* Core Letter Body */}
                  <div className="space-y-5 text-sm sm:text-base text-zinc-700 font-light leading-relaxed">
                    {selectedLetter.fullText.map((paragraph, idx) => (
                      <p key={idx} className="indent-0 sm:indent-8 first:indent-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* SIGN-OFF & SIGNATURE */}
                  <div className="mt-12 pt-8 border-t border-zinc-100">
                    <span className="text-xs text-zinc-400 font-mono block mb-2">Respectfully,</span>
                    
                    {/* Hand-signed graphic signature block */}
                    <div className="my-3 py-1 pl-4 border-l border-zinc-100 select-none">
                      <span className={selectedLetter.signatureStyle}>
                        {selectedLetter.author.replace(', PhD', '').replace(', DPA', '').replace(', Ph.D.', '')}
                      </span>
                    </div>

                    <div className="mt-3">
                      <h6 className="font-sans font-semibold text-xs text-zinc-900">{selectedLetter.author}</h6>
                      <p className="text-[11px] text-zinc-500 font-sans mt-0.5">
                        {selectedLetter.title}
                      </p>
                      <p className="text-[10px] text-zinc-400 font-sans">
                        {selectedLetter.institution}
                      </p>
                    </div>
                  </div>

                  {/* VERIFIABLE CONTACT FOOTER */}
                  <div className="mt-12 p-4 rounded-sm bg-zinc-50 border border-zinc-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white rounded-sm border border-zinc-200 text-brand-red">
                        <User size={14} />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest leading-none">Contact Reference</div>
                        <div className="text-xs font-sans font-semibold text-zinc-700 mt-0.5">{selectedLetter.author}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500">
                      {selectedLetter.contactEmail && (
                        <a
                          href={`mailto:${selectedLetter.contactEmail}`}
                          className="flex items-center gap-1.5 hover:text-brand-red transition-colors"
                        >
                          <Mail size={12} />
                          <span>{selectedLetter.contactEmail}</span>
                        </a>
                      )}
                      {selectedLetter.contactPhone && (
                        <a
                          href={`tel:${selectedLetter.contactPhone}`}
                          className="flex items-center gap-1.5 hover:text-brand-red transition-colors"
                        >
                          <Phone size={12} />
                          <span>{selectedLetter.contactPhone}</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
