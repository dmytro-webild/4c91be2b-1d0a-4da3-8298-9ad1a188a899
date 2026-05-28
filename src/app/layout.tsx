import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Johnston Browns Hair Studio | Expert Hairdressing in Glasgow',
  description: 'Discover top-tier hairdressing services at Johnston Browns Hair Studio in Glasgow. From stylish cuts to vibrant colors, our expert stylists bring your vision to life.',
  openGraph: {
    "title": "Johnston Browns Hair Studio | Expert Hairdressing in Glasgow",
    "description": "Discover top-tier hairdressing services at Johnston Browns Hair Studio in Glasgow. From stylish cuts to vibrant colors, our expert stylists bring your vision to life.",
    "url": "https://johnstonbrowns.com",
    "siteName": "Johnston Browns Hair Studio",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/female-hairdresser-making-hairstyle-blonde-woman-beauty-salon_176420-4450.jpg",
        "alt": "Johnston Browns Hair Studio interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Johnston Browns Hair Studio | Expert Hairdressing in Glasgow",
    "description": "Discover top-tier hairdressing services at Johnston Browns Hair Studio in Glasgow. From stylish cuts to vibrant colors, our expert stylists bring your vision to life.",
    "images": [
      "http://img.b2bpic.net/free-photo/female-hairdresser-making-hairstyle-blonde-woman-beauty-salon_176420-4450.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const lato = Lato({
  variable: "--font-lato",  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
