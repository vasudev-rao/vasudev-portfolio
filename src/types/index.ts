export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
  year: number;
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
