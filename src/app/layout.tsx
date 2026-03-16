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
    "Senior Data Engineer with 6+ years building distributed data platforms, streaming pipelines, and lakehouse architecture on AWS and GCP. Specialising in PySpark, Databricks, Kafka, Snowflake, dbt, and Delta Lake.",
  keywords: ["Senior Data Engineer | Apache Spark · Kafka · Databricks · Snowflake · AWS · GCP","Databricks","PySpark","Apache Kafka","Snowflake","BigQuery","Delta Lake","Apache Airflow","AWS","GCP","Vasudev Rao","Data Engineer India","Data Engineering Blog"],
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
        {/* Ambient orbs — Phosphor Cyan + Iris Violet */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <div className="orb w-[900px] h-[900px] top-[-300px] left-[-300px]"
            style={{ background: "radial-gradient(circle, rgba(0,242,255,0.05) 0%, rgba(196,181,253,0.02) 55%, transparent 70%)" }} />
          <div className="orb w-[700px] h-[700px] bottom-[0%] right-[-200px]"
            style={{ background: "radial-gradient(circle, rgba(196,181,253,0.04) 0%, rgba(0,242,255,0.02) 55%, transparent 70%)" }} />
          <div className="orb w-[450px] h-[450px] top-[45%] right-[12%]"
            style={{ background: "radial-gradient(circle, rgba(245,166,35,0.02) 0%, transparent 70%)" }} />
        </div>
        {/* Dot grid */}
        <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0,
          backgroundImage: "radial-gradient(circle, rgba(0,242,255,0.045) 1px, transparent 1px)",
          backgroundSize: "48px 48px" }} />
        <div className="relative" style={{ zIndex: 1 }}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
