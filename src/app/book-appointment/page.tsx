"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarFloating from '@/components/ui/NavbarFloating';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

const finalNavItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Styles", href: "/#styles" },
  { name: "Team", href: "/#team" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Pricing", href: "/#pricing" },
  { name: "FAQ", href: "/#faq" },
  { name: "Book Appointment", href: "/book-appointment" },
  { name: "Contact Us", href: "/contact-form" }
];

const finalFooterColumns = [
  { title: "Services", items: [{ label: "Haircuts", href: "/#services" }, { label: "Colouring", href: "/#services" }, { label: "Treatments", href: "/#services" }, { label: "Styling", href: "/#styles" }] },
  { title: "About Us", items: [{ label: "Our Story", href: "/#about" }, { label: "Our Team", href: "/#team" }, { label: "Testimonials", href: "/#testimonials" }, { label: "FAQs", href: "/#faq" }] },
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
        <NavbarFloating
          logo="Johnston Browns"
          navItems={finalNavItems}
          ctaButton={{ text: "Book Now", href: "/book-appointment" }}
        />
      </div>
      <div id="book-appointment-page" data-section="book-appointment-page">
        <ContactSplitForm
          title="Book Your Appointment"
          description="Fill out the form below to schedule your visit to Johnston Browns Hair Studio. We look forward to seeing you! Your booking request will be securely forwarded to our team via email, and we will contact you shortly to confirm."
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
          imageSrc="http://img.b2bpic.net/free-photo/hairdresser-does-hair-style-woman_93675-134626.jpg?_wi=1"
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
          columns={finalFooterColumns}
          copyrightText="© 2024 Johnston Browns, owned by Negin eidimohammadi. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}