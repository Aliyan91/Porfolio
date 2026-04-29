export interface Project {
  id: string;
  category: string;
  year: string;
  title: string;
  strapline: string;
  summary: string;
  detail: string;
  outcomes: string[];
  stack: string[];
  linkLabel: string;
  linkHref: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
}

export interface Education {
  school: string;
  degree: string;
  meta: string;
  dates: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ContactLink {
  label: string;
  href: string;
}

export interface FocusArea {
  label: string;
  title: string;
  text: string;
}

export interface HeroStat {
  label: string;
  value: string;
}

export const portfolioData = {
  profile: {
    name: 'Mohammad Aliyan',
    role: 'MERN / PERN Developer',
    heroTitle: 'I build full-stack web applications with secure authentication, dashboard workflows, and clean user experiences.',
    heroIntro: 'Full-stack developer based in Lahore with hands-on experience across React, Next.js, Node.js, Express, PostgreSQL, MongoDB, and Prisma ORM. I enjoy turning complex business logic into responsive interfaces and reliable backend systems.',
    availability: 'Township, Lahore | Open to full-time and freelance opportunities',
    heroHighlights: [
      'Currently working as a Full-Stack Developer at CowBoy Technologies.',
      'Experience with JWT, Google OAuth, Twilio OTP verification, REST APIs, and Prisma ORM.',
      'Built financial systems, learning platforms, dashboards, gaming platforms, and e-commerce flows.'
    ],
    heroSignals: ['JWT Security', 'Prisma ORM', 'Twilio OTP', 'Dashboard Systems'],
    heroStats: [
      { label: 'Current focus', value: 'Financial systems' },
      { label: 'Preferred stack', value: 'PERN + MERN' },
      { label: 'Built around', value: 'Auth, APIs, admin' }
    ] as HeroStat[],
    focusAreas: [
      {
        label: 'Full Stack',
        title: 'MERN and PERN delivery',
        text: 'I build end-to-end applications using React, Node.js, Express, PostgreSQL, MongoDB, and Prisma with a focus on maintainable product flows.'
      },
      {
        label: 'Security',
        title: 'Authentication and integrations',
        text: 'My recent work includes JWT authentication, Google OAuth login, Twilio OTP verification, and third-party API integrations.'
      },
      {
        label: 'Product UI',
        title: 'Dashboards and admin panels',
        text: 'I like building responsive interfaces for data-heavy products, from client dashboards to internal admin systems with real-time updates.'
      }
    ] as FocusArea[],
    experience: [
      {
        role: 'Full-Stack Developer (MERN / PERN)',
        company: 'CowBoy Technologies',
        location: 'Islamabad',
        dates: 'Feb 2025 - Present',
        bullets: [
          'Developing scalable full-stack applications using PostgreSQL, Prisma ORM, Express, React, and Node.js.',
          'Working on an Account Change System with complex financial flows, channel balances, and transaction management.',
          'Implemented JWT authentication and Google OAuth for secure user access.',
          'Integrated third-party services including Twilio OTP verification and external financial APIs.',
          'Designed dashboards and admin panels with dynamic, real-time data updates.'
        ]
      },
      {
        role: 'React Developer',
        company: 'Supportiyo',
        location: 'Lahore',
        dates: 'Oct 2024 - Dec 2024',
        bullets: [
          'Designed interactive and responsive client dashboards using React, Tailwind CSS, and Chart.js.',
          'Focused on dynamic, user-friendly interfaces with clear data presentation.',
          'Connected frontend applications to backend services using Axios-based API integration.'
        ]
      }
    ] as Experience[],
    education: [
      {
        school: 'University of Central Punjab, Lahore',
        degree: 'Bachelors in Computer Science',
        meta: 'Major: Web Application Development',
        dates: 'Oct 2021 - Jul 2025'
      },
      {
        school: 'KIPS College, Lahore',
        degree: 'Intermediate (F.Sc in Pre-Engineering)',
        meta: 'Pre-engineering track',
        dates: 'Aug 2019 - Aug 2021'
      }
    ] as Education[],
    skillGroups: [
      {
        title: 'Frontend',
        items: ['React.js', 'Next.js', 'Tailwind CSS', 'Responsive UI', 'Chart.js', 'Axios']
      },
      {
        title: 'Backend & Data',
        items: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Prisma ORM', 'REST APIs']
      },
      {
        title: 'Auth & Integrations',
        items: ['JWT', 'Google OAuth', 'Twilio', 'Third-party APIs', 'Admin panels', 'Dashboard workflows']
      }
    ] as SkillGroup[],
    contactLinks: [
      { label: 'Email', href: 'mailto:aliyanamir184@gmail.com' },
      { label: 'Phone', href: 'tel:+923274515607' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammad-a-194794283/' }
    ] as ContactLink[]
  },
  projects: [
    {
      id: 'account-change-system',
      category: 'PERN',
      year: '2025 - Present',
      title: 'Account Change System',
      strapline: 'Financial transaction platform',
      summary: 'Built a financial transaction system with real-time balance tracking and complex reconciliation logic.',
      detail: 'This project reflects my current full-stack work on finance-related product logic. It includes channel balance handling, transaction management, JWT-based access control, and integration work across backend services.',
      outcomes: [
        'Handled complex financial flows and reconciliation logic.',
        'Added JWT authentication and role-based access control.',
        'Optimized data access patterns with Prisma ORM.'
      ],
      stack: ['PostgreSQL', 'Prisma ORM', 'Express', 'React', 'Node.js', 'JWT', 'OAuth', 'Twilio'],
      linkLabel: 'Get in touch about this work',
      linkHref: '#contact'
    },
    {
      id: 'online-learning-platform',
      category: 'PERN',
      year: '2025',
      title: 'Online Learning Platform',
      strapline: 'LMS with admin workflows',
      summary: 'Developed a full-featured learning platform with course management, user enrollment, and an admin panel.',
      detail: 'The LMS project highlights my experience with larger user-facing platforms. It combines responsive frontend work with secure authentication, media integrations, and multi-role product flows.',
      outcomes: [
        'Built course management, enrollment, and admin capabilities.',
        'Implemented JWT and Google OAuth authentication.',
        'Created a responsive UI with React and Tailwind CSS.'
      ],
      stack: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'OAuth'],
      linkLabel: 'Talk about platform development',
      linkHref: '#contact'
    },
    {
      id: 'online-games-platform',
      category: 'PERN',
      year: '2025',
      title: 'Online Games Platform',
      strapline: 'Gaming portal and APIs',
      summary: 'Created a platform where admins can post HTML5 games and users can play them through a scalable web interface.',
      detail: 'This project pushed more on session handling, backend API design, and performance under frequent user interaction. It is a useful example of how I approach product logic beyond standard CRUD workflows.',
      outcomes: [
        'Built scalable backend APIs for game sessions.',
        'Supported real-time style state updates for gameplay flows.',
        'Improved performance for high-frequency user interaction.'
      ],
      stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'API design'],
      linkLabel: 'Discuss product backend work',
      linkHref: '#contact'
    },
    {
      id: 'ecommerce-website',
      category: 'MERN',
      year: '2024',
      title: 'E-Commerce Website',
      strapline: 'Customer-facing commerce flow',
      summary: 'Built a complete e-commerce website with product management, cart functionality, and checkout flow.',
      detail: 'The e-commerce build is a straightforward example of my ability to create customer-facing product experiences with clear navigation, reusable components, and practical data flow from catalog to checkout.',
      outcomes: [
        'Covered product listing, cart, and checkout flows.',
        'Combined frontend polish with backend product handling.',
        'Strengthened practical MERN-stack delivery experience.'
      ],
      stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Commerce UI'],
      linkLabel: 'Connect about MERN projects',
      linkHref: '#contact'
    }
  ] as Project[]
};
