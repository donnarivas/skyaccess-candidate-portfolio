import LucideIcon from './LucideIcon';

export default function FooterCTA() {
  return (
    <footer id="contact" className="py-20 px-6 sm:px-8 lg:px-16 bg-zinc-50 border-t border-zinc-200 text-center scroll-mt-16">
      <div className="max-w-4xl mx-auto">
        
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-mono text-brand-red uppercase tracking-[0.3em] bg-brand-red/5 px-3.5 py-1 rounded-sm border border-brand-red/20 font-semibold">
            Direct Inquiry
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-zinc-950 mt-5 tracking-tight max-w-xl">
            Connect with Donna Aseret Rivas
          </h2>
          <p className="text-zinc-600 mt-4 text-sm font-sans leading-relaxed max-w-2xl">
            Ready to bring strategic value, high-ticket negotiations, and perfect CRM alignments to the SkyAccess team. Reach out directly via the channels below.
          </p>

          {/* Direct Contact Cards Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
            <a
              href="mailto:Dar159@georgetown.edu"
              className="flex items-center gap-4 p-5 rounded-sm bg-white border border-zinc-200 hover:border-brand-red/30 hover:bg-zinc-50/50 shadow-xs transition-all duration-200 group"
            >
              <div className="p-3 rounded-sm bg-zinc-50 border border-zinc-200 text-brand-red group-hover:text-brand-red/80">
                <LucideIcon name="Mail" size={18} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Email Address</div>
                <div className="text-sm font-sans font-semibold text-zinc-800 group-hover:text-brand-red transition-colors break-all">
                  Dar159@georgetown.edu
                </div>
              </div>
            </a>

            <a
              href="tel:4244781969"
              className="flex items-center gap-4 p-5 rounded-sm bg-white border border-zinc-200 hover:border-brand-red/30 hover:bg-zinc-50/50 shadow-xs transition-all duration-200 group"
            >
              <div className="p-3 rounded-sm bg-zinc-50 border border-zinc-200 text-brand-red group-hover:text-brand-red/80">
                <LucideIcon name="Phone" size={18} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Mobile Phone</div>
                <div className="text-sm font-sans font-semibold text-zinc-800 group-hover:text-brand-red transition-colors">
                  (424) 478-1969
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/donna-rivas-authentic-url"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-sm bg-white border border-zinc-200 hover:border-brand-red/30 hover:bg-zinc-50/50 shadow-xs transition-all duration-200 group"
            >
              <div className="p-3 rounded-sm bg-zinc-50 border border-zinc-200 text-brand-red group-hover:text-brand-red/80">
                <LucideIcon name="Linkedin" size={18} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">LinkedIn Profile</div>
                <div className="text-sm font-sans font-semibold text-zinc-800 group-hover:text-brand-red transition-colors flex items-center gap-1.5">
                  <span>donna-rivas-authentic-url</span>
                  <LucideIcon name="ExternalLink" size={12} className="text-zinc-400 group-hover:text-brand-red" />
                </div>
              </div>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center items-center gap-4 w-full">
            <div className="flex items-center gap-3 p-4 px-6 rounded-sm bg-zinc-100/50 border border-zinc-200/80 shadow-xs">
              <div className="p-2 rounded-sm bg-white border border-zinc-200 text-zinc-400">
                <LucideIcon name="MapPin" size={16} />
              </div>
              <div className="text-left">
                <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">Current Location</div>
                <div className="text-xs font-sans font-semibold text-zinc-800">San Bernardino, CA</div>
              </div>
            </div>
          </div>
        </div>

        {/* Outer footer link line */}
        <div className="mt-20 pt-8 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © 2026 Donna Aseret Rivas. All Rights Reserved. Built as a candidate proposal website for SkyAccess.
          </div>
          <div className="flex gap-4">
            <a href="https://www.skyaccess.com" target="_blank" rel="noreferrer" className="hover:text-brand-red font-medium">
              skyaccess.com
            </a>
            <span>•</span>
            <span className="font-mono text-[10px] font-semibold">VERIFIED 100% PERFECT CANDIDATE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
