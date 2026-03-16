export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
  year: number;
  impact?: string;
  impactColor?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  content?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
