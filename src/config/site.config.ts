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
  description: 'Full Stack Developer open to full-time roles - specializing in scalable SaaS platforms, AI systems, admin dashboards, and production-grade backend architectures.',
  about:
    'Full Stack Engineer based in Bangalore, India. I build scalable SaaS platforms, AI-powered systems (RAG pipelines, LLM integrations), complex admin dashboards, and production-grade backend architectures. Open to full-time roles, remote teams, and selective product collaborations.',
    author_img: 'https://res.cloudinary.com/dlkawkuca/image/upload/ar_1:1,c_auto,g_auto,w_500/r_max/babu-profile_moqpjd',
    author_full_img: 'https://res.cloudinary.com/dlkawkuca/image/upload/v1758203782/profile-full_vb18vp.png',
    pdf_download: 'https://res.cloudinary.com/dlkawkuca/image/upload/v1778574373/Babu_Angi_software_developer_atvcg4.pdf',
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
    { label: 'Projects', href: '/#projects' },
    { label: 'Strengths', href: '/#services' },
    { label: 'Stack', href: '/#stack' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ],
  
  seo: {
    title: 'Babu Angi',
    description: 'Full Stack Developer open to full-time engineering roles in SaaS, AI systems, dashboards, and backend architecture.',
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

type MetadataOptions = Partial<Metadata> & {
  path?: string;
  imageAlt?: string;
};

function absoluteUrl(pathOrUrl = '/') {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `https://${siteConfig.domain}${path}`;
}

export function buildMetadata(overrides: MetadataOptions = {}): Metadata {
  const { seo, siteName, domain } = siteConfig;
  const { path, imageAlt, ...metadataOverrides } = overrides;
  const canonical = absoluteUrl(path ?? seo.canonical ?? '/');
  const title = metadataOverrides.title ?? seo.title;
  const description = metadataOverrides.description ?? seo.description;
  const image = seo.image ? absoluteUrl(seo.image) : undefined;

  const base: Metadata = {
    title,
    description,
    applicationName: siteName,
    keywords: seo.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.links.website }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    category: 'technology',
    metadataBase: new URL(`https://${domain}`),
    alternates: { canonical },
    robots: {
      index: seo.robots !== 'noindex',
      follow: seo.robots !== 'nofollow',
      googleBot: {
        index: seo.robots !== 'noindex',
        follow: seo.robots !== 'nofollow',
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: imageAlt ?? seo.imageAlt,
            },
          ]
        : [],
      type: seo.type ?? 'website',
      locale: seo.locale,
    },
    twitter: {
      card: seo.twitterCard ?? 'summary_large_image',
      title,
      description,
      images: image ? [image] : [],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    icons: {
      icon: [{ url: '/brand-flame.svg', type: 'image/svg+xml' }],
      shortcut: ['/brand-flame.svg'],
      apple: [{ url: '/brand-flame.svg', type: 'image/svg+xml' }],
    },
    other: {
      'theme-color': seo.themeColor,
      'og:image:alt': imageAlt ?? seo.imageAlt,
    },
  } as Metadata;

  return { ...base, ...metadataOverrides };
}

export type { Metadata };
