import type { Metadata } from 'next';

export type SocialLink = {
  label: string;
  url: string;
  icon?: string; // name for icon library if needed later
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export interface SiteConfig {
  siteName: string;
  domain: string;
  description: string;

  about: string;
  keywords: string[];
  ogImage: string;
  twitterHandle: string;
  author: string;
  author_img:string;
  author_full_img:string;
  pdf_download:string;

  theme: {
    default: 'light' | 'dark';
    allowSystem: boolean;
  };
  links: {
    website: string;
    github: string;
    linkedin: string;
    tips: string;
    email: string;
    contactMail: string;
  };
  social: SocialLink[];
  navigation: NavItem[];
  seo: {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  image?: string; // default og image
  imageAlt?: string;
  locale?: string;
  type?: string;
  twitterCard?: string;
  robots?: string;
  themeColor?: string;
  };
}

export const siteConfig: SiteConfig = {
  siteName: "Babu Angi",
  // siteName: "Babu Angi | Developer Portfolio",
  domain: "babuangi.com",
  author: "Babu Angi",
  description: 'Full Stack developer creating useful & delightful web experiences. Exploring ML & AI.',
 about:
    'I am a Full Stack developer who loves creating new things. I spend my spare time building free apps & tools, and I am currently diving into Machine Learning & AI to expand my problem‑solving toolkit. Always open to collaboration & new challenges.',
    author_img: 'https://res.cloudinary.com/dlkawkuca/image/upload/ar_1:1,c_auto,g_auto,w_500/r_max/babu-profile_moqpjd',
    author_full_img: 'https://res.cloudinary.com/dlkawkuca/image/upload/v1758203782/profile-full_vb18vp.png',
    pdf_download: 'https://res.cloudinary.com/dlkawkuca/image/upload/v1758392090/BabuAngi-FullStackDeveloper_gv1okt.pdf',
    keywords: [
    'Babu Angi',
    'Full Stack Developer',
    'Portfolio',
    'Web Developer',
    'Next.js',
    'TypeScript',
    'React',
    'JavaScript',
    'TailwindCSS',
    'shadcn/ui',
    'Framer Motion',
    'Machine Learning',
    'AI'
  ],
   ogImage: '/og.png',
  // ogImage: "https://babuangi.com/og-image.jpg",

  twitterHandle: '@babuangi',

  theme: {
    default: 'dark',
    allowSystem: true,
  },

    links: {
    website: 'https://babuangi.com',
    github: 'https://github.com/babuangi',
    linkedin: 'https://www.linkedin.com/in/babuangi/',
    tips: 'https://pay.babuangi.com',
    email: 'mailto:contact@babuangi.com',
    contactMail: 'contact@babuangi.com',
  },

  social: [
    { label: 'GitHub', url: 'https://github.com/babuangi', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/feed/', icon: 'linkedin' },
    { label: 'Website', url: 'https://babuangi.com', icon: 'globe' },
    { label: 'Tip', url: 'https://pay.babuangi.com', icon: 'coffee' },
  ],
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Posts', href: '/posts' },
    { label: 'Chat', href: '/chat' },
    { label: 'Contact', href: '/contact' }
  ],
  
  seo: {
    title: 'Babu Angi',
    description: 'Full Stack developer creating useful & delightful web experiences. Exploring ML & AI.',
    keywords: [
      'Babu Angi',
      'Full Stack Developer',
      'Portfolio',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'shadcn/ui',
      'Framer Motion',
      'Machine Learning',
      'AI'
    ],
    canonical: 'https://babuangi.com',
    image: '/og.png',
    imageAlt: "Babu Angi - Full Stack Developer",
    locale: 'en-US',
    type: 'website',
    twitterCard: 'summary_large_image',
    robots: 'index,follow',
    themeColor: '#0f172a',
  },

  // url: "#",
  //   url: "https://babuangi.com",
  // logoIcon:
  //   "https://res.cloudinary.com/dbfvcn3f6/image/upload/v1692357294/assets/naman-logo.png",
  // keywords: [
  //   "Naman Barkiya",
  //   "Full Stack Developer",
  //   "Web Developer Portfolio",
  //   "Next.js portfolio template",
  //   "React portfolio template",
  //   "Developer portfolio template",
  //   "Portfolio website template",
  //   "Next.js template",
  //   "Modern portfolio website",
  //   "Frontend developer portfolio",
  //   "Full stack developer portfolio",
  //   "Open source portfolio template",
  //   "Web developer portfolio template",
  //   "Responsive portfolio template",
  //   "React.js portfolio",
  //   "Tailwind CSS portfolio",
  //   "Developer showcase template",
  //   "Free portfolio template",
  //   "Next.js 13 template",
  //   "Shadcn UI template",
  //   "Career timeline template",
  //   "Portfolio with dark mode",
  //   "GitHub portfolio template",
  // ],
};

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const { seo, siteName, domain } = siteConfig;

  const base: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.links.website }],
    metadataBase: new URL(`https://${domain}`),
    alternates: { canonical: seo.canonical ?? `https://${domain}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical ?? `https://${domain}`,
      siteName,
      images: seo.image ? [seo.image] : [],
      type: seo.type ?? 'website',
      locale: seo.locale,
    },
    twitter: {
      card: seo.twitterCard ?? 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: seo.image ? [seo.image] : [],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    other: {
      robots: seo.robots,
      'theme-color': seo.themeColor,
      'og:image:alt': seo.imageAlt,
    },
  } as Metadata;

  return { ...base, ...overrides };
}

export type { Metadata };
