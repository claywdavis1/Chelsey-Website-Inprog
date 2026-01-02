import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Public Impact Partners",
  logo: "/logo-color.webp",
  email: "chelsey@publicimpactpartners.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "Email",
    url: "mailto:chelsey@publicimpactpartners.com",
    icon: "mdi:email",
  },
  {
    title: "LinkedIn",
    url: "https://github.com/TimWitzdam",
    icon: "mdi:linkedin",
    external: true,
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Public Impact Partners",
    description:
      "Home page.",
    image: identity.logo,
  },
  role: "Public Sector and Homelessness Consulting",
  description: `
Thanks for visiting Public Impact Partners. Our website is in progress -- please check back soon! In the meantime, contact chelsey@publicimpactpartners.com with inquiries.`,
  socialLinks: socialLinks,
  links: [
    {
      title: "About",
      url: "/about",
    },{
      title: "Services",
      url: "/services",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Public Impact Partners",
    description:
      `Public Impact Partners.`,
    image: identity.logo,
  },
  subtitle: "Public Impact Partners",
  about: {
    description: `
Thanks for visiting Public Impact Partners. Our website is in progress -- please check back soon! In the meantime, contact chelsey@publicimpactpartners.com with inquiries. `, // Markdown is supported
    // image_l: {
    //   url: "/demo-1.jpg",
    //   alt: "Left Picture",
    // },
    // image_r: {
    //   url: "/demo-1.jpg",
    //   alt: "Right Picture",
    // },
  },
  // work: {
  //   description: `I've been in a variety of roles working to end homelessness.`, // Markdown is supported
  //   items: [
  //     {
  //       title: "Capacity-Building Contractor & Special Projects Manager",
  //       company: {
  //         name: "Office of Homeless Initiatives",
  //         image: "/dola-logo.webp",
  //         url: "https://doh.colorado.gov",
  //       },
  //       date: "2023 - 2024",
  //     },
  //     {
  //       title: "Program Manager",
  //       company: {
  //         name: "Office of Homeless Initiatives",
  //         image: "/dola-logo.webp",
  //         url: "https://doh.colorado.gov",
  //       },
  //       date: "2021 - 2023",
  //     },
  //     {
  //       title: "Homeless Programs Specialist",
  //       company: {
  //         name: "Office of Homeless Initiatives",
  //         image: "/dola-logo.webp",
  //         url: "https://doh.colorado.gov",
  //       },
  //       date: "2020 - 2021",
  //     },
  //     {
  //       title: "Community Planning & Development Representative",
  //       company: {
  //         name: "U.S. Department of Housing and Urban Development",
  //         image: "/hud-logo.webp",
  //         url: "https://www.hud.gov",
  //       },
  //       date: "2019 - 2020",
  //     },
  //     {
  //       title: "Director of Development",
  //       company: {
  //         name: "Homeward Alliance",
  //         image: "/hwa-logo.webp",
  //         url: "https://www.homewardalliance.org",
  //       },
  //       date: "2014 - 2018",
  //     },
  //     {
  //       title: "Employment Advocate",
  //       company: {
  //         name: "Homeward Alliance",
  //         image: "/hwa-logo.webp",
  //         url: "https://www.homewardalliance.org",
  //       },
  //       date: "2014",
  //     },
  //   ],
  // },
  
  // education: {
  //   description: `I've been in a variety of roles working to end homelessness.`, // Markdown is supported
  //   items: [
  //     {
  //       title: "Evans School of Public Policy & Governance, University of Washington",
  //       company: {
  //         name: "Master of Public Administration - Social Policy",
  //         image: "/dola-logo.webp",
  //         url: "https://doh.colorado.gov",
  //       },
  //       date: "2023 - 2024",
  //     },
  //     {
  //       title: "Colorado Statue University",
  //       company: {
  //         name: "Bachelor of Arts - Social Work",
  //         image: "/dola-logo.webp",
  //         url: "https://doh.colorado.gov",
  //       },
  //       date: "2021 - 2023",
  //     },
      
  //   ],
  // },

  // connect: {
  //   description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
  //   links: socialLinks,
  // },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Services | Public Impact Partners",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
    {
      title: "Project 1",
      description: "Project 1 Description",
      image: "/demo-2.jpg",
      year: "2024",
      url: "https://github.com/TimWitzdam",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Tim Witzdam",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
