"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

const newCommonNavItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/" },
  { name: "Services", href: "/" },
  { name: "Styles", href: "/" },
  { name: "Team", href: "/" },
  { name: "Testimonials", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "FAQ", href: "/" },
  { name: "Book Appointment", href: "/book-appointment" },
  { name: "Contact Us", href: "/contact-form" }
];

const newCommonFooterColumns = [
  { title: "Services", items: [{ label: "Haircuts", href: "/" }, { label: "Colouring", href: "/" }, { label: "Treatments", href: "/" }, { label: "Styling", href: "/" }] },
  { title: "About Us", items: [{ label: "Our Story", href: "/" }, { label: "Our Team", href: "/" }, { label: "Testimonials", href: "/" }, { label: "FAQs", href: "/" }] },
  { title: "Contact", items: [
    { label: "Book Online", href: "/book-appointment" },
    { label: "Contact Form", href: "/contact-form" },
    { label: "Call Us", href: "tel:07377747189" },
    { label: "WhatsApp", href: "https://wa.me/message/UEFDBW2YGR2VP1" },
    { label: "Branch 1", href: "https://maps.app.goo.gl/YourGoogleMapsLink" },
    { label: "Branch 2", href: "https://maps.app.goo.gl/HgPG6jJqap3yYa1RA?g_st=ic" },
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
        <NavbarDropdown
          logo="Johnston Browns"
          navItems={newCommonNavItems}
          ctaButton={{ text: "Book Now", href: "/book-appointment" }}
        />
      </div>

      <main className="min-h-screen py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Book Your Appointment</h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          Use our integrated booking system below to schedule your next visit with ease. Choose your preferred service, stylist, and time slot.
        </p>
        <div className="w-full max-w-4xl bg-card p-6 rounded-lg shadow-xl border border-border">
          <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%', height: 0 }}>
            <iframe
              src="https://example.com/your-booking-system-embed-url"
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
          columns={newCommonFooterColumns}
          copyrightText="© 2024 Johnston Browns, owned by Negin eidimohammadi. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}