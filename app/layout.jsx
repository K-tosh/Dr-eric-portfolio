import { Inter, Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import 'bootstrap/dist/css/bootstrap.css';
import '@icon/icofont/icofont.css';
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"



const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});
const Header = dynamic(() => import('@/components/Header/Header'))
const Footer = dynamic(() => import('@/components/Footer/Footer'))
const WhatsAppFloat = dynamic(() => import('@/components/WhatsAppFloat/WhatsAppFloat'))
const SmoothScroll = dynamic(() => import('@/components/SmoothScroll/SmoothScroll'))



export const metadata = {
  title: "Dr. Eric Lugaya Musanyi - Licensed Clinical Officer | Home & Virtual Consultations",
  description: "Professional clinical care by Dr. Eric Musanyi, Licensed Clinical Officer with 5+ years experience. Specializing in Neurological, ENT & Infectious Disease care. Home visits & virtual consultations available in Nairobi, Kenya.",
  keywords: "Clinical Officer Nairobi, Home Doctor Visits Kenya, Virtual Medical Consultation, Neurological Care, ENT Specialist, Infectious Disease Management, Silvad Calvary Hospital, AfyaHub Clinic, Medical Home Care Kenya",
  author: "Dr. Eric Lugaya Musanyi",
  robots: "index, follow",
  openGraph: {
    title: "Dr. Eric Lugaya Musanyi - Licensed Clinical Officer",
    description: "Professional medical care at your doorstep. Home visits, virtual consultations, and specialized clinical services in Nairobi, Kenya.",
    type: "website",
    locale: "en_KE",
    site_name: "Dr. Eric Musanyi Medical Practice",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Eric Lugaya Musanyi - Clinical Officer",
    description: "Professional medical care at your doorstep in Nairobi, Kenya",
  },
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
    "medical-license": "Kenya Medical Practitioners Board",
    "service-area": "Nairobi, Kenya",
    "emergency-contact": "+254-91-674-164",
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#007bff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/eric.ico" />
        <link rel="canonical" href="https://drericsmusanyi.co.ke" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data for Medical Professional */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Dr. Eric Lugaya Musanyi Medical Practice",
              "description": "Licensed Clinical Officer providing home visits and virtual consultations",
              "url": "https://drericsmusanyi.co.ke",
              "telephone": "+254-91-674-164",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "KE",
                "addressLocality": "Nairobi"
              },
              "medicalSpecialty": ["Neurology", "ENT", "Infectious Disease"],
              "availableService": [
                {
                  "@type": "MedicalProcedure",
                  "name": "Home Medical Consultation"
                },
                {
                  "@type": "MedicalProcedure", 
                  "name": "Virtual Medical Consultation"
                }
              ]
            })
          }}
        />
      </head>
      <body className={poppins.className}>
        <Header />
        <div>
          {children}
        </div>
        <Footer />
        <WhatsAppFloat />
        <SmoothScroll />
        <Analytics />
      </body>
    </html>
  );
}
