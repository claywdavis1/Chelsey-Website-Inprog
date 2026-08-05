export type NavBarLink = {
  title: string;
  url: string;
  external?: boolean;
};

export type SocialLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
};

export type Identity = {
  name: string;
  logo: string;
  email: string;
};

export type SEOInfo = {
  title: string;
  description: string;
  image: string;
};

export type HomePageContent = {
  seo: SEOInfo;
  role: string;
  title: string;
  description: string;
  features: {
    title: string;
    description: string;
    image: {
      url: string;
      alt: string;
    };
    button: {
      title: string;
      url: string;
      external?: boolean;
    };
  }[];
  
};

export type AboutPageContent = {
  seo: SEOInfo;
  subtitle: string;
  sections: {
    heading?: string;
    subheading?: string;
    paragraphs: string[];
    image?: {
      url: string;
      alt: string;
    };
  }[];
};


export type ServicesPageContent = {
  seo: SEOInfo;
  subtitle: string;
  description: string;
  services: {
    heading: string;
    description: string;
    items?: string[];
  }[];
  button: {
    title: string;
    url: string;
    external?: boolean;
  };
};

export type ContactPageContent = {
  seo: SEOInfo;
  subtitle: string;
  description: string;
  /** Where form submissions are delivered. */
  recipient: string;
  /** Must be an address on a domain verified with Resend. */
  sender: string;
  submitLabel: string;
  successMessage: string;
  errorMessage: string;
};

export type NofoPageContent = {
  seo: SEOInfo;
  subtitle: string;
  sections: {
    heading: string;
    url: string;
    external?: boolean;
    text: string;
  }[];
};

export type BlogPageContent = {
  seo: SEOInfo;
  subtitle: string;
};
