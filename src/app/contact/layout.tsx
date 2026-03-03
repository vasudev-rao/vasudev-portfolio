import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Vasudev Rao",
  description: "Get in touch with Vasudev Rao — Senior Data Engineer available for senior and staff-level data engineering roles, consulting, and freelance data platform projects.",
  keywords: ["Contact Vasudev Rao", "Hire Data Engineer", "Senior Data Engineer Available", "Data Engineering Consulting", "Bengaluru Data Engineer"],
  alternates: { canonical: "https://vasudevarao.com/contact" },
  openGraph: {
    type: "website",
    url: "https://vasudevarao.com/contact",
    title: "Contact Vasudev Rao — Senior Data Engineer",
    description: "Available for senior data engineering roles and consulting. Get in touch.",
    siteName: "Vasudev Rao",
  },
  twitter: {
    card: "summary",
    title: "Contact Vasudev Rao — Senior Data Engineer",
    description: "Available for senior data engineering roles and consulting.",
    creator: "@vasudevarao",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
