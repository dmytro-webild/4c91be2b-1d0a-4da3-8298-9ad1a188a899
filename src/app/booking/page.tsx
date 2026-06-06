"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

const commonNavItems = [
  { name: "Home", id: "/" },
  { name: "About", id: "/#about" },
  { name: "Services", id: "/#services" },
  { name: "Styles", id: "/#styles" },
  { name: "Team", id: "/#team" },
  { name: "Testimonials", id: "/#testimonials" },
  { name: "Pricing", id: "/#pricing" },
  { name: "FAQ", id: "/#faq" },
  { name: "Booking", id: "/booking" },
  { name: "Contact", id: "/#contact" }
];

const commonFooterColumns = [
  { title: "Services", items: [{ label: "Haircuts", href: "/#services" }, { label: "Colouring", href: "/#services" }, { label: "Treatments", href: "/#services" }, { label: "Styling", href: "/#styles" }] },
  { title: "About Us", items: [{ label: "Our Story", href: "/#about" }, { label: "Our Team", href: "/#team" }, { label: "Testimonials", href: "/#testimonials" }, { label: "FAQs", href: "/#faq" }] },
  { title: "Contact", items: [
    { label: "Book Online", href: "/booking" },
    { label: "Call Us", href: "tel:07377747189" },
    { label: "WhatsApp", href: "https://wa.me/message/UEFDBW2YGR2VP1" },
    { label: "Email Us", href: "mailto:negin.eydimohammadi@gmail.com" },
    { label: "Our Location", href: "https://maps.app.goo.gl/YourGoogleMapsLink" },
    { label: "Instagram", href: "https://www.instagram.com/mohamadinegin56/" }
  ] }
];

export default function BookingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="small"
      sizing="mediumLarge"
      background="aurora"
      cardStyle="gradient-mesh"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Johnston Browns"
          navItems={commonNavItems}
        />
      </div>

      <main className="min-h-screen py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Book Your Appointment</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Use our integrated booking system below to schedule your next visit with ease. Choose your preferred service, stylist, and time slot.
        </p>
        <div className="w-full max-w-4xl bg-card p-6 rounded-lg shadow-xl border border-border">
          {/* Placeholder for your booking system embed code */}
          <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%', height: 0 }}>
            {/* Replace this iframe with your actual booking system embed code */}
            <iframe
              src="https://example.com/your-booking-system-embed-url" // **CRITICAL: Replace with actual booking system URL**
              title="Online Booking System"
              className="absolute top-0 left-0 w-full h-full border-0 rounded-md"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              loading="lazy"
            ></iframe>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            For assistance or specific requests, please contact us directly at <a href="tel:07377747189" className="text-primary-cta hover:underline">07377747189</a>.
          </p>
        </div>
      </main>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Johnston Browns Hair Studio"
          columns={commonFooterColumns}
          copyrightText="© 2024 Johnston Browns, owned by Negin eidimohammadi. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}