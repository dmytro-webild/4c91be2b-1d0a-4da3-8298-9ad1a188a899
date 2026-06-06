"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import React from 'react';

const commonNavItems = [
  { name: "Home", id: "/" },
  { name: "About", id: "/#about" },
  { name: "Services", id: "/#services" },
  { name: "Styles", id: "/#styles" },
  { name: "Team", id: "/#team" },
  { name: "Testimonials", id: "/#testimonials" },
  { name: "Pricing", id: "/#pricing" },
  { name: "FAQ", id: "/#faq" },
  { name: "Book Appointment", id: "/book-appointment" }
];

const commonFooterColumns = [
  { title: "Services", items: [{ label: "Haircuts", href: "/#services" }, { label: "Colouring", href: "/#services" }, { label: "Treatments", href: "/#services" }, { label: "Styling", href: "/#styles" }] },
  { title: "About Us", items: [{ label: "Our Story", href: "/#about" }, { label: "Our Team", href: "/#team" }, { label: "Testimonials", href: "/#testimonials" }, { label: "FAQs", href: "/#faq" }] },
  { title: "Contact", items: [
    { label: "Book Online", href: "/book-appointment" },
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

      <div id="booking-section" data-section="booking-section" className="py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">Book Your Appointment</h1>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mb-12">
          Select a service and time that works best for you. Our online booking system is simple and secure.
        </p>
        <div className="w-full max-w-4xl bg-card rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
          {/* Calendly embed code will go here */}
          {/* Example Calendly Inline Embed */}
          <div className="calendly-inline-widget" data-url="https://calendly.com/your-calendly-username/30min" style={{ minWidth: '320px', height: '700px' }}></div>
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
          {/* Replace 'https://calendly.com/your-calendly-username/30min' with your actual Calendly event link */}
        </div>
      </div>

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