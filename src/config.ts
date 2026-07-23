import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ServicesPageContent,
  ContactPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Public Impact Partners LLC",
  logo: "/logo-color.webp",
  email: "chelsey@publicimpactpartners.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
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
    url: "https://www.linkedin.com/in/chelsey-mandell",
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
  title: "Public Impact Partners",
  role: "Strategic Consulting for Mission-Driven Organizations",
  description: `
  Public Impact Partners provides trusted guidance and practical tools to help mission-driven organizations turn priorities into progress. We support nonprofits, local governments, states, Continuums of Care, and other community-focused groups.`,
  features: [
    {
      title: "Specialized Services",
      description: `Whether you are managing complex initiatives, launching a program, pursuing new funding, or communicating your mission, our customizable services are here to help.`,
      image: {
        url: "/Image 1 - Laptop.svg",
        alt: "",
      },
      button: {
        title: "Explore Our Services",
        url: "/services",
      },
    },
    {
      title: "Trusted Partners",
      description: `We partner with organizations at every stage of growth. No matter the size or complexity of the work, we are committed to helping you succeed.`,
      image: {
        url: "/Image 2 - Grow.svg",
        alt: "",
      },
      button: {
        title: "Learn About Us",
        url: "/about",
      },
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
  subtitle: "Mission-Driven Consulting",
  sections: [
    {
      paragraphs: [
        `Public Impact Partners helps mission-driven organizations strengthen programs, build organizational capacity,  and achieve sustainable results. We partner with nonprofits, local and state governments, Continuums of Care, and other community-focused organizations to solve challenges.`,
        `As a boutique consulting firm, we believe consulting should make your work easier—not more complicated. We tailor our approach to your goals and capacity, delivering support that fits your organization. Whether you need strategic guidance or hands-on project leadership, we work alongside your team to develop effective solutions and keep your work moving forward.`,
        `We focus on program development, project management, operational improvements, funding strategy, and organizational capacity building. We specialize in homelessness and housing programs, with expertise in the funding, partnerships, and systems that shape homelessness response systems.`
      ],
    },
    {
      heading: "Leadership",
      subheading: "Chelsey Mandell, Managing Director",
      paragraphs: [
        `Chelsey founded Public Impact Partners to help mission-driven organizations achieve their goals. With experience spanning nonprofits, governments, and community coalitions, she helps organizations balance immediate demands with long-term goals.`,
        `Before launching Public Impact Partners, Chelsey spent 11 years implementing homelessness and housing initiatives. She has developed housing-focused programs, delivered street outreach and shelter services, led fundraising and communications, and built partnerships across sectors. As Director of Development for a grassroots nonprofit, she secured the organization's first housing vouchers, increased philanthropic and government funding nearly ninefold, and helped grow the organization into a regional leader. She later managed nearly $40 million in homelessness response and prevention grants for the State of Colorado, where her work informed peer learning resources for the U.S. Department of Housing and Urban Development (HUD).`,
        `Chelsey holds a Master of Public Administration with a concentration in Social Policy from the University of Washington, where she completed a competitive graduate program with HUD and was selected for a full-time position. She has served on multiple Continuum of Care governing boards, including her current role with the Southeastern Virginia Homeless Coalition. Chelsey is based in Anchorage, Alaska.`,

      ],
      image: {
        url: "/headshot_cropped.jpeg",
        alt: "Chelsey Mandell, founder of Public Impact Partners",
      },
    },
  ],
};

// Services (/services)
export const servicesPageContent: ServicesPageContent = {
  seo: {
    title: "Services | Public Impact Partners",
    description:
      "Strategic consulting services for nonprofits, local governments, and Continuums of Care.",
    image: identity.logo,
  },
  subtitle: "What We Offer",
  description: `Mission-driven organizations are constantly balancing immediate priorities with long-term goals. We bring structure and momentum to that work. We partner with our clients to plan, manage, and strengthen complex initiatives across homelessness and housing, as well as broader nonprofit and public sector efforts. Whether you need support for a specific project or an ongoing consulting partner, we are here to help.`,
  services: [
    {
      heading: "Fractional Staffing and Operational Support",
      description: `Sometimes organizations need an experienced professional who can step in and keep the work moving—but they do not need another full-time employee. We serve as a trusted extension of your team, taking ownership of ongoing responsibilities or key initiatives so your staff can focus on other strategic priorities. Sample services include:`,
      items: [
        "Project management, from scope of work development through close-out",
        "Consultant and contractor oversight",
        "Monitoring planning and implementation support",
        "Group facilitation",
        "Monthly, quarterly, and annual reporting activities",
        "Operational leadership or support for special initiatives",
      ],
    },
    {
      heading: "Grant Preparation, Writing, and Management",
      description: `Finding and managing grants is a core part of mission-driven work, but can be time-consuming. We make the process more manageable by supporting the full grant lifecycle, from identifying opportunities and developing proposals to managing the award. Sample services include:`,
      items: [
        "Grant readiness and pre-award planning",
        "Funding opportunity research",
        "Proposal development",
        "Grant writing, editing, and template development",
        "Post-award grant management and compliance support",
        "Reporting and performance tracking",
      ],
    },
    {
      heading: "Program Design and Development",
      description: `Developing or expanding programs requires thoughtful planning and execution. We help organizations design effective approaches and prepare for implementation. Sample services include:`,
      items: [
        "Research and best practice reviews",
        "Program design",
        "Staffing plans",
        "Implementation planning",
        "Funding strategy",
        "Policies and procedures development",
      ],
    },
    {
      heading: "Capacity Building",
      description: `When staff have the knowledge, tools, and support they need, they spend less time responding to preventable challenges and more time focused on their mission. We deliver training, technical assistance, and organizational support tailored to your needs. Sample services include:`,
      items: [
        "Staff, leadership, and board onboarding",
        "Volunteer training plans",
        "Written guides and toolkit development",
      ],
    },
    {
      heading: "Homelessness Response System Consulting",
      description: `Partnerships, programs, community conditions, funding structures, and operational realities shape homelessness response systems. We help organizations strengthen their homelessness efforts through knowledge-building, planning, and implementation support. Sample services include:`,
      items: [
        "Program design",
        "Training on best practices and program models",
        "Technical assistance, including written product development",
        "Policies, procedures, and written standards development",
        "Program messaging and communications",
        "Funding strategy",
      ],
    },
    {
      heading:
        "Federal Funding: U.S. Department of Housing and Urban Development (HUD) Program Implementation",
      description: `Federal funding creates real opportunities. It also brings complex requirements. We help applicants, recipients, subrecipients, and Continuums of Care strengthen compliance, improve program implementation, and build effective systems for HUD-funded programs. We specialize in Emergency Solutions Grants (ESG) and Continuum of Care (CoC) programs. Sample services include:`,
      items: [
        "ESG and CoC planning and implementation",
        "End-to-end Notice of Funding Opportunity (NOFO) support for CoCs",
        "Federal grant management training and technical assistance",
        "Internal compliance reviews",
        "Policies, procedures, and written standards development",
        "Risk management and monitoring activities",
        "Internal process improvements",
      ],
    },
    {
      heading: "Customized Consulting and Special Projects",
      description: `Our team brings experience across a wide range of additional work, from developing budgeting tools for childcare providers to planning special events. Whether you have a specific project in mind or a challenge you need help solving, we're here to support you.`,
    },
  ],
  button: {
    title: "Contact Us",
    url: "/contact",
  },
};

// Contact (/contact)
export const contactPageContent: ContactPageContent = {
  seo: {
    title: "Contact | Public Impact Partners",
    description:
      "Get in touch with Public Impact Partners about your organization's work.",
    image: identity.logo,
  },
  subtitle: "Contact",
  description: `Reach out to us using the contact form below.`,
  recipient: identity.email,
  sender: "Public Impact Partners <website@publicimpactpartners.com>",
  submitLabel: "Send Message",
  successMessage:
    "Thank you for reaching out. Your message has been sent and we will be in touch soon.",
  errorMessage:
    "Something went wrong sending your message. Please try again, or email us directly at {identity.email}.",
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
