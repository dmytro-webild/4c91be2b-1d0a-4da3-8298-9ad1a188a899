"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
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
  { name: "Contact", id: "/contact-form" }
];

const commonFooterColumns = [
  { title: "Services", items: [{ label: "Haircuts", href: "/#services" }, { label: "Colouring", href: "/#services" }, { label: "Treatments", href: "/#services" }, { label: "Styling", href: "/#styles" }] },
  { title: "About Us", items: [{ label: "Our Story", href: "/#about" }, { label: "Our Team", href: "/#team" }, { label: "Testimonials", href: "/#testimonials" }, { label: "FAQs", href: "/#faq" }] },
  { title: "Contact", items: [
    { label: "Book Online", href: "/contact-form" }, 
    { label: "Call Us", href: "tel:07377747189" }, 
    { label: "WhatsApp", href: "https://wa.me/07377747189" },
    { label: "Our Location", href: "https://maps.app.goo.gl/YourGoogleMapsLink" },
    { label: "Instagram", href: "https://www.instagram.com/mohamadinegin56/" }
  ] }
];

export default function ContactFormPage() {
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
      <div id="contact-form-page" data-section="contact-form-page">
        <ContactSplitForm
          title="Book Your Appointment"
          description="Fill out the form below to schedule your visit to Johnston Browns Hair Studio. We look forward to seeing you!"
          tag="Schedule Now"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "preferredDate", type: "text", placeholder: "Preferred Date (DD/MM/YYYY)", required: false },
            { name: "preferredTime", type: "text", placeholder: "Preferred Time (e.g., 2:00 PM)", required: false }
          ]}
          textarea={{ name: "message", placeholder: "Tell us about your desired service or any special requests.", rows: 5, required: false }}
          buttonText="Submit Booking Request"
          mediaPosition="right"
          imageSrc="http://img.b2bpic.net/free-photo/hairdresser-does-hair-style-woman_93675-134626.jpg"
          imageAlt="Hairdresser styling client's hair"
          useInvertedBackground={false}
          onSubmit={(data) => {
            console.log("Booking request submitted:", data);
            alert("Thank you for your booking request! We will contact you shortly to confirm.");
          }}
        />
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