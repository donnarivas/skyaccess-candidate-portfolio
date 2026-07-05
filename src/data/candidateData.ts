import { Experience, Education, Project, SkillGroup, VideoSegment, JDRequirementMatch } from '../types';

// ============================================================================
// PERMANENT VIDEO EMBED CONFIGURATION (GitHub & Vercel)
// ============================================================================
// Paste your public Google Drive sharing URL or YouTube link here.
// The website will automatically parse this and embed it permanently.
// Example: "https://drive.google.com/file/d/1X-vP9tZt-y4wRREpD_ZgI5W3uS6Uu5-9/view?usp=sharing"
export const DEFAULT_VIDEO_URL = "";

export const EXPERIENCES: Experience[] = [
  {
    id: 'carey-danis',
    company: 'Carey & Danis, LLC',
    role: 'Legal Intake Coordinator',
    location: 'St. Louis, MO (Remote)',
    period: 'Jan. 2026 - Present',
    bullets: [
      'Administer nationwide intake operations supporting complex multi-district litigation, ensuring absolute compliance and highly accurate claim development in high-stakes fields.',
      'Architected and deployed a proprietary Claimant Relationship Management (CRM) website (Claimant Tracking Portal), establishing a structured digital pipeline for qualifying and tracking prospects.',
      'Enhanced organizational intake efficiency, centralized stage-by-stage visibility, and supported scalable mass tort case development.',
      'Collaborate closely with supervising attorneys to maintain strict procedural guidance, attorney-client confidentiality, and high professional standards.'
    ],
    metrics: [
      { label: 'Platform Built', value: 'CRM Portal', description: 'Custom-engineered tracking pipeline' },
      { label: 'Intake Scale', value: 'Nationwide', description: 'Multi-district litigation scope' }
    ]
  },
  {
    id: 'maserati',
    company: 'Maserati',
    role: 'Sales Consultant',
    location: 'Santa Monica, CA',
    period: 'Sept. 2024 - Jan. 2025',
    bullets: [
      'Assessed, nurtured, and closed high-intent luxury clients acquired through VIN Solutions software, maintaining premium concierge standards.',
      'Consistently generated and closed a minimum of $220,000+ in sales revenue per month, contributing to a total high-end portfolio of over $1,000,000.',
      'Conducted a strategic review of the Product Price Index (PPI), implementing optimized pricing frameworks that boosted quarterly revenue by $250,000 within the first 3 months.',
      'Prioritized client requirements to calculate underwriting risk, diminishing high-value credit and loan application risk profiles by 12.5%.',
      'Completed rigorous monthly Maserati Training (MODISCS+) to master advanced automotive engineering details and brand heritage.'
    ],
    metrics: [
      { label: 'Monthly Sales', value: '$220K+', description: 'Minimum sales closed per month' },
      { label: 'Pricing Growth', value: '+$250K', description: 'Revenue increase from PPI audit' },
      { label: 'Risk Mitigation', value: '-12.5%', description: 'Decrease in underwriting loan risk' }
    ]
  },
  {
    id: 'jared-jewelry',
    company: 'Jared The Galleria of Jewelry',
    role: 'Sales Consultant',
    location: 'Chino Hills, CA',
    period: 'Jun. 2023 - Jan. 2024',
    bullets: [
      'Achieved the annual sales objective of $15,000+ within the first three months of hire, doubling the personal sales quota by 50% to accumulate more than $30,000 in total sales revenue.',
      'Fostered trust and long-term relations with high-net-worth individuals, managing intricate luxury jewelry consultations.',
      'Completed a 14-week intensive Gemological Science International program to attain the GSI Diploma, mastering gemological equipment operations.'
    ],
    metrics: [
      { label: 'Quota Achievement', value: '200%', description: 'Doubled sales quota in first 3 months' },
      { label: 'First Quarter', value: '$30K+', description: 'Accumulated luxury sales revenue' },
      { label: 'Certification', value: 'GSI Diploma', description: 'Intensive gemology credential' }
    ]
  },
  {
    id: 'chevrolet',
    company: 'Chevrolet',
    role: 'Sales Consultant',
    location: 'Monrovia, CA',
    period: 'Aug. 2022 - Nov. 2022',
    bullets: [
      'Applied comprehensive automotive market research and deep product knowledge to close deals, increasing retail sales revenue by 10%.',
      'Capitalized on complex customer negotiations at Sierra Chevrolet, securing an average of five new high-ticket clients per month.',
      'Maintained 10% higher retention rates through targeted after-sales follow-ups and client relationship tracking.'
    ],
    metrics: [
      { label: 'Revenue Boost', value: '+10%', description: 'Sales revenue growth rate' },
      { label: 'Acquisitions', value: '5/mo', description: 'New clients acquired on average' }
    ]
  },
  {
    id: 'jcpenney',
    company: 'JCPenney',
    role: 'Sales Consultant (Fine Jewelry)',
    location: 'Arcadia, CA',
    period: 'Aug. 2021 - Dec. 2021',
    bullets: [
      'Achieved an exceptional +80% warranty attachment rate on fine jewelry during peak holiday seasonal sales, driving strong customer retention.',
      'Served as the leading product specialist and consult within the fine jewelry department, establishing excellent customer relations.',
      'Boosted fine jewelry department monthly revenue metrics by $14,050 ($2,800+ per month).'
    ],
    metrics: [
      { label: 'Warranty Attachment', value: '80%+', description: 'Attachment rate on fine jewelry' },
      { label: 'Revenue Lift', value: '+$14K', description: 'Department revenue boost' }
    ]
  },
  {
    id: 'market-source',
    company: 'Market-Source Inc.',
    role: 'Sales Consultant',
    location: 'San Francisco, CA',
    period: 'Mar. 2017 - Dec. 2017',
    bullets: [
      'Authorized and set up high volumes of luxury cellular agreements (averaging 3.5 new contracts weekly) through Tier 1 carriers.',
      'Named the "Lead Sales Consultant" in the highly competitive Southern California District due to exemplary contract closure rates and adherence to corporate compliance codes.'
    ],
    metrics: [
      { label: 'District Award', value: 'Lead Consultant', description: 'Top sales representative in SoCal' },
      { label: 'Weekly Velocity', value: '3.5 /wk', description: 'Average client acquisitions' }
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    id: 'harvard',
    institution: 'Harvard University, Extension School',
    degree: 'Continuing Education (GPA: 4.0 / 4.0)',
    location: 'Cambridge, MA',
    period: '2025',
    details: 'Advanced post-graduate coursework in high-level business analytics, executive writing, and commercial strategy.',
    gpa: '4.0',
    highlights: ['GPA: 4.0/4.0', 'Business Analytics & Commercial Strategy']
  },
  {
    id: 'georgetown',
    institution: 'Georgetown University, School of Continuing Studies',
    degree: 'Professional Certificate & Continuing Education (GPA: 4.0 / 4.0 in Communication)',
    location: 'Washington, D.C.',
    period: '2024, 2026',
    details: 'Earned the Certificate in Strategic Management (2026). Specialized in corporate communication frameworks, pipeline development, and strategic planning.',
    gpa: '4.0',
    highlights: ['Certificate in Strategic Management (2026)', 'GPA 4.0 in Communication Courses', 'Georgetown University Scholarship Award']
  },
  {
    id: 'lmu',
    institution: 'Loyola Marymount University, College of Business',
    degree: 'Continuing Education Coursework',
    location: 'Los Angeles, CA',
    period: '2024',
    details: 'Completed business development modules. Active member of the Loyola Marymount University Women\'s Volleyball Club, demonstrating team leadership.',
    highlights: ['LMU Women\'s Volleyball Club', 'Leadership and team synergy']
  },
  {
    id: 'cal-poly',
    institution: 'California State Polytechnic University, Pomona',
    degree: 'Bachelor of Science in Business Administration',
    location: 'Pomona, CA',
    period: '2023',
    details: 'Major in Marketing Management. Graduated on the Dean\'s List with a perfect GPA of 4.0 / 4.0.',
    gpa: '4.0',
    highlights: ['Dean\'s List', 'GPA: 4.0/4.0', 'Major: Marketing Management', 'Earnest Scholarship Award ($5,000.00)']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'nativity-miguel',
    title: 'Nativity Miguel Coalition Transformation & Impact Strategy',
    role: 'Digital Marketing Strategist',
    period: 'May 2026 - Present',
    description: 'Orchestrated a major branding and communication overhaul to boost stakeholder outreach and scale non-profit fundraising metrics.',
    bullets: [
      'Designed a recurring "Impact Update" newsletter expanding community engagement across 52 regional schools.',
      'Coordinated contributions from multi-campus stakeholders to drive a 80% active school participation rate in less than six months.',
      'Engineered launch plans that achieved a remarkable 35% open rate on the first edition sent to supporters.'
    ]
  },
  {
    id: 'growth-protocol',
    title: 'Strategic Enrollment Growth Protocol & A/B Marketing Analysis',
    role: 'L-EAF Lab Consultant',
    period: 'May 2026 - Present',
    description: 'Constructed scientific enrollment growth strategies for higher education career centers utilizing data analytics.',
    bullets: [
      'Designed strategic A/B testing protocols targeting student career recruitment channels to optimize engagement.',
      'Engineered dual-variable models testing professional networking vs. career-building messages to dissect student motivation.',
      'Launched an interactive Performance Portal archived in the L-EAF Recruitment Protocol Hub for real-time channel tracking.'
    ]
  },
  {
    id: 'sterilization-research',
    title: 'Legislative Research: Mandatory Sterilization Ordinances for RTO',
    role: 'Best Friends Animal Society Researcher',
    period: 'May 2026 - June 2026',
    description: 'Conducted legal research and compiled regulatory datasets to drive national animal welfare policy advocacy.',
    bullets: [
      'Conducted comparative legal research analyzing animal welfare statutes across Pacific states to verify shelter ordinances.',
      'Developed a comprehensive regulatory repository cataloging statutory citations to assist public policy experts.',
      'Deployed a custom digital showcase via the BFAS Regional Compliance Data Engine to synthesize policy data sets for public access.'
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'High-Ticket & Luxury Sales',
    skills: ['High-Ticket Negotiations', 'High Net-Worth Client Relations', 'Luxury Account Management', 'Consultative Value Selling', 'Underwriting Risk Analysis']
  },
  {
    category: 'Pipeline & CRM Systems',
    skills: ['VIN Solutions', 'CRM Website Architecture', 'Pipeline Management', 'Claimant Tracking Portals', 'Salesforce/Leads Funneling']
  },
  {
    category: 'Strategic & Analytical Acumen',
    skills: ['A/B Testing & Analysis', 'Strategic Management', 'Pricing Strategy (PPI)', 'Business Frameworks', 'Data Synthesis (Tableau, Excel)']
  },
  {
    category: 'Executive Communications',
    skills: ['Verbal & Pitch Delivery', 'Targeted Marketing Copy', 'Bilingual (Native Spanish / French Elementary)', 'Stakeholder Management', 'Client Crisis Composure']
  }
];

export const VIDEO_SEGMENTS: VideoSegment[] = [
  {
    timeStart: '0:00',
    timeEnd: '0:24',
    title: 'Introduction & Application Outlines',
    text: 'Hello, my name is Donna Rivas, and I\'m applying to your organization, SkyAccess, for the position of Charter Sales Associate. With my application, I submit two individual questions. The first being: why do I want to work for an organization such as SkyAccess? And, what would I bring to your organization?',
    iconName: 'PlaneTakeoff'
  },
  {
    timeStart: '0:24',
    timeEnd: '1:09',
    title: 'Why SkyAccess & Strong Role Alignment',
    text: 'For the very first question: why do I want to work for an organization such as SkyAccess? First and foremost, I strongly believe that SkyAccess is one of the most competitive, top-leading private aviation firms in the industry. Additionally, I strongly believe that I\'m well-qualified for the position.',
    iconName: 'Award',
    relatedExpId: 'market-source'
  },
  {
    timeStart: '1:09',
    timeEnd: '1:46',
    title: 'Proven High-Ticket Luxury Track Record',
    text: 'I have vast experience in sales, accumulating over $300,000 in revenue for major organizations such as Maserati, Jared the Gallery of Jewelry, and Chevrolet, among many others. At my time at Maserati, I accumulated over $200,000 of revenue for the organization, negotiated and closed contracts. Additionally, for Jared the Gallery of Jewelry, I doubled my sales quota of $15,000 annual revenue within the first three months of hire by approximately over $29,000.',
    iconName: 'DollarSign',
    relatedExpId: 'maserati'
  },
  {
    timeStart: '1:46',
    timeEnd: '2:05',
    title: 'District Sales Leadership Recognition',
    text: 'While my time at Market-Source, I was named one of the top leading sales consultants in the Southern District. Therefore, I strongly believe I would be an immense asset to SkyAccess.',
    iconName: 'TrendingUp',
    relatedExpId: 'market-source'
  },
  {
    timeStart: '2:05',
    timeEnd: '2:47',
    title: 'Academic Acumen & Strategic frameworks',
    text: 'Furthermore, for the second question: what do I plan to bring to your organization? In my most recent academic career, I have attained a Strategic Management certificate from Georgetown University. This certificate has allowed me to amplify my business acumen and understand the business frameworks that are at play while developing a pipeline of clients.',
    iconName: 'GraduationCap'
  },
  {
    timeStart: '2:47',
    timeEnd: '3:08',
    title: 'Closing: Ready for Immediate Impact',
    text: 'Therefore, I strongly believe that I would be an immense asset to your organization and would love to further interview if necessary for your organization, SkyAccess. Thank you so much for your time, and I look forward to hearing from you.',
    iconName: 'CheckCircle'
  }
];

export const JD_MATCHES: JDRequirementMatch[] = [
  {
    requirement: 'Manage charter flight requests from first inquiry through confirmed booking',
    category: 'do',
    howDonnaMatches: 'Mastered high-velocity client acquisition and structured funnel tracking.',
    donnaEvidence: 'Developed proprietary CRM tracking pipeline for Carey & Danis to qualify and track prospects. Managed incoming luxury inquiries at Maserati and JCPenney, executing fast client conversions.',
    iconName: 'FolderKanban'
  },
  {
    requirement: 'Lead client conversations with confidence, clarity, and control in time-sensitive situations',
    category: 'do',
    howDonnaMatches: 'Proven legal and luxury client intake leader. Outstanding communications degree and training.',
    donnaEvidence: 'Acquired a perfect 4.0 GPA in Georgetown communication courses. Administered nationwide intake operations for complex litigation, counseling clients through sensitive, high-intensity scenarios with absolute composure.',
    iconName: 'MessageSquareText'
  },
  {
    requirement: 'Coordinate directly with operators on aircraft availability, pricing, and timing',
    category: 'do',
    howDonnaMatches: 'Strong analytical background in strategic pricing indexes and operator negotiations.',
    donnaEvidence: 'Conducted a comprehensive Product Price Index (PPI) adjustment for Maserati, managing pricing models that increased overall revenue by $250,000 in Q1.',
    iconName: 'BadgePercent'
  },
  {
    requirement: 'A track record closing high-touch, time-sensitive sales',
    category: 'look',
    howDonnaMatches: 'Over $300k+ in documented luxury, high-ticket retail and account sales.',
    donnaEvidence: 'Closed $220k+ monthly sales for Maserati. Doubled her Jared jewelry quota within her first 3 months by delivering bespoke consultations to high-net-worth buyers.',
    iconName: 'Milestone'
  },
  {
    requirement: 'Strong negotiation skills and exceptional attention to detail',
    category: 'look',
    howDonnaMatches: 'Completed intensive scientific appraisals and complex contractual deals.',
    donnaEvidence: 'Trained in a 14-week intensive Gemological Science International program. Negotiated contractual car offers, loan applications, and legal intake files with zero-tolerance error rates.',
    iconName: 'SearchCode'
  },
  {
    requirement: 'Comfort operating with incomplete information and changing variables',
    category: 'look',
    howDonnaMatches: 'Strategic management expert who operates dual-variable marketing tests and risk modeling.',
    donnaEvidence: 'Earned Georgetown Certificate in Strategic Management. Engineered dual-variable research frameworks for L-EAF Lab and computed underwriting risks to diminish lending exposure by 12.5%.',
    iconName: 'Network'
  },
  {
    requirement: 'Bonus: private aviation, charter brokerage, or CRM experience',
    category: 'look',
    howDonnaMatches: 'Exemplary multi-CRM operator and custom portal architect.',
    donnaEvidence: 'Expert CRM practitioner (VIN Solutions, Salesforce, and custom CRM systems). Personally designed and launched a Claimant Relationship Management website to standardize lead qualification pipelines.',
    iconName: 'UserCheck'
  }
];
