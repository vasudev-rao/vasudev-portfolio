import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Guard: Node.js on some systems gets a broken localStorage polyfill injected.
// This patch prevents "localStorage.getItem is not a function" during SSR.
if (typeof globalThis !== "undefined" && typeof globalThis.localStorage === "undefined") {
  (globalThis as any).localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    length: 0,
    key: () => null,
  };
} else if (typeof globalThis !== "undefined" && globalThis.localStorage !== null && typeof (globalThis as any).localStorage?.getItem !== "function") {
  (globalThis as any).localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    length: 0,
    key: () => null,
  };
}

export const metadata: Metadata = {
  title: {
    default: "Vasudev Rao — Senior Data Engineer",
    template: "%s | Vasudev Rao",
  },
  description:
    "Senior Data Engineer with 6+ years building large-scale data platforms, real-time streaming systems, and AI-ready pipelines using Databricks, PySpark, Snowflake, Delta Lake, AWS, GCP, Airflow, and Kafka.",
  keywords: ["Senior Data Engineer","Databricks","PySpark","Apache Kafka","Snowflake","BigQuery","Delta Lake","Apache Airflow","AWS","GCP","Vasudev Rao","Data Engineer India","Data Engineering Blog"],
  authors: [{ name: "Vasudev Rao", url: "https://vasudevarao.com" }],
  metadataBase: new URL("https://vasudevarao.com"),
  alternates: { canonical: "https://vasudevarao.com" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vasudevarao.com",
    siteName: "Vasudev Rao",
    title: "Vasudev Rao — Senior Data Engineer",
    description: "Senior Data Engineer building large-scale data platforms, streaming systems, and lakehouses on AWS, GCP, and Databricks.",
    images: [{ url: "https://vasudevarao.com/og-image.png", width: 1200, height: 630, alt: "Vasudev Rao — Senior Data Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vasudev Rao — Senior Data Engineer",
    description: "Senior Data Engineer building large-scale data platforms, streaming systems, and lakehouses.",
    creator: "@vasudevarao",
    images: ["https://vasudevarao.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ?? "",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise bg-canvas text-ink antialiased min-h-screen">
        {/* Global ambient orbs — navy indigo theme */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <div className="orb w-[800px] h-[800px] top-[-250px] left-[-250px]"
            style={{ background: "radial-gradient(circle, rgba(79,142,247,0.07) 0%, rgba(123,94,167,0.04) 50%, transparent 70%)" }} />
          <div className="orb w-[600px] h-[600px] bottom-[5%] right-[-150px]"
            style={{ background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, rgba(79,142,247,0.03) 50%, transparent 70%)" }} />
          <div className="orb w-[400px] h-[400px] top-[40%] right-[20%]"
            style={{ background: "radial-gradient(circle, rgba(79,142,247,0.04) 0%, transparent 70%)" }} />
        </div>
        {/* Grid */}
        <div className="fixed inset-0 grid-bg pointer-events-none" style={{ zIndex: 0 }} />
        <div className="relative" style={{ zIndex: 1 }}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
