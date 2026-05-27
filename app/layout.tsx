import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { ThemeProvider } from '@/components/ui/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vasudevarao.com'),
  title: 'Vasudevarao | Senior Data Engineer',
  description:
    'Senior Data Engineer with 6+ years of experience building scalable data pipelines and distributed systems. Expert in Spark, Databricks, Kafka, and real-time data processing.',
  keywords: [
    'Data Engineer',
    'Spark',
    'Databricks',
    'Kafka',
    'AWS',
    'ETL',
    'Big Data',
    'PySpark',
    'Python',
    'Delta Lake',
    'Streaming',
  ],
  authors: [{ name: 'Vasudev Rao' }],
  creator: 'Vasudev Rao',
  publisher: 'Vasudev Rao',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Vasudevarao | Senior Data Engineer',
    description:
      'Senior Data Engineer with 6+ years of experience building scalable data pipelines and distributed systems.',
    type: 'website',
    url: 'https://vasudevarao.com',
    siteName: 'Vasudev Rao Portfolio',
    locale: 'en_US',
    images: [
      {
        url: '/images/profile.png',
        width: 1200,
        height: 630,
        alt: 'Vasudev Rao - Senior Data Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vasudevarao | Senior Data Engineer',
    description:
      'Senior Data Engineer with 6+ years of experience building scalable data pipelines and distributed systems.',
    images: ['/images/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Vasudev Rao',
    jobTitle: 'Senior Data Engineer',
    description:
      'Senior Data Engineer with 6+ years of experience building scalable data pipelines and distributed systems.',
    url: 'https://vasudevarao.com',
    image: 'https://vasudevarao.com/images/profile.png',
    sameAs: [
      'https://github.com/vasudev-rao',
      'https://linkedin.com/in/vasudevarao',
    ],
    knowsAbout: [
      'Apache Spark',
      'PySpark',
      'Apache Kafka',
      'Databricks',
      'Delta Lake',
      'Snowflake',
      'BigQuery',
      'Data Engineering',
      'Real-time Streaming',
      'AWS',
      'GCP',
      'Python',
      'dbt',
      'Data Architecture',
    ],
    alumniOf: {
      '@type': 'Organization',
      name: 'Data Engineering',
    },
  }

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Default Dark Mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');

                  // Always default to dark mode first
                  var theme =
                    stored === 'dark' || stored === 'light'
                      ? stored
                      : 'dark';

                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className="bg-[#dde4f0] dark:bg-[#070a10] text-gray-900 dark:text-white transition-colors duration-300">
        
        {/* Cursor Glow Outer */}
        <div
          id="cursor-glow-outer"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9999,
            transform: 'translate(-50%, -50%)',
            border: '1.5px solid rgba(96,165,250,0.6)',
            boxShadow:
              '0 0 12px rgba(96,165,250,0.3), 0 0 30px rgba(59,130,246,0.15)',
            transition:
              'opacity 0.3s ease, width 0.2s ease, height 0.2s ease',
            opacity: 0,
          }}
        />

        {/* Cursor Dot */}
        <div
          id="cursor-glow-dot"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9999,
            transform: 'translate(-50%, -50%)',
            background: 'rgba(147,197,253,0.9)',
            boxShadow:
              '0 0 8px rgba(96,165,250,0.8), 0 0 20px rgba(59,130,246,0.5)',
            transition: 'opacity 0.3s ease',
            opacity: 0,
          }}
        />

        {/* Background Glow */}
        <div
          id="cursor-glow-bg"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 1,
            transform: 'translate(-50%, -50%)',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.07) 0%, rgba(59,130,246,0.03) 50%, transparent 70%)',
            transition: 'opacity 0.3s ease',
            opacity: 0,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var outer = document.getElementById('cursor-glow-outer');
                var dot = document.getElementById('cursor-glow-dot');
                var bg = document.getElementById('cursor-glow-bg');

                var mouseX = window.innerWidth / 2;
                var mouseY = window.innerHeight / 2;

                var outerX = mouseX;
                var outerY = mouseY;

                var bgX = mouseX;
                var bgY = mouseY;

                var visible = false;

                document.addEventListener('mousemove', function(e) {
                  mouseX = e.clientX;
                  mouseY = e.clientY;

                  if (!visible) {
                    visible = true;
                    outer.style.opacity = '1';
                    dot.style.opacity = '1';
                    bg.style.opacity = '1';
                  }

                  dot.style.left = mouseX + 'px';
                  dot.style.top = mouseY + 'px';
                });

                document.addEventListener('mouseleave', function() {
                  visible = false;
                  outer.style.opacity = '0';
                  dot.style.opacity = '0';
                  bg.style.opacity = '0';
                });

                document.addEventListener('mouseover', function(e) {
                  var el = e.target;

                  if (
                    el &&
                    (el.tagName === 'A' ||
                      el.tagName === 'BUTTON' ||
                      el.closest('a') ||
                      el.closest('button'))
                  ) {
                    outer.style.width = '60px';
                    outer.style.height = '60px';
                    outer.style.borderColor = 'rgba(147,197,253,0.8)';
                    outer.style.boxShadow =
                      '0 0 20px rgba(96,165,250,0.5),0 0 50px rgba(59,130,246,0.25)';
                    dot.style.opacity = '0';
                  }
                });

                document.addEventListener('mouseout', function(e) {
                  var el = e.target;

                  if (
                    el &&
                    (el.tagName === 'A' ||
                      el.tagName === 'BUTTON' ||
                      el.closest('a') ||
                      el.closest('button'))
                  ) {
                    outer.style.width = '40px';
                    outer.style.height = '40px';
                    outer.style.borderColor = 'rgba(96,165,250,0.6)';
                    outer.style.boxShadow =
                      '0 0 12px rgba(96,165,250,0.3),0 0 30px rgba(59,130,246,0.15)';
                    dot.style.opacity = '1';
                  }
                });

                function animate() {
                  outerX += (mouseX - outerX) * 0.12;
                  outerY += (mouseY - outerY) * 0.12;

                  outer.style.left = outerX + 'px';
                  outer.style.top = outerY + 'px';

                  bgX += (mouseX - bgX) * 0.06;
                  bgY += (mouseY - bgY) * 0.06;

                  bg.style.left = bgX + 'px';
                  bg.style.top = bgY + 'px';

                  requestAnimationFrame(animate);
                }

                animate();
              })();
            `,
          }}
        />

        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}