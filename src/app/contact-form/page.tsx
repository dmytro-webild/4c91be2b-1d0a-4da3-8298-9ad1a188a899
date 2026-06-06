"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

const newCommonNavItems = [
  { name: "Home", id: "/" },
  { name: "About", id: "/#about" },
  { name: "Services", id: "/#services" },
  { name: "Styles", id: "/#styles" },
  { name: "Team", id: "/#team" },
  { name: "Testimonials", id: "/#testimonials" },
  { name: "Pricing", id: "/#pricing" },
  { name: "FAQ", id: "/#faq" },
  { name: "Book Appointment", id: "/book-appointment" },
  { name: "Contact Us", id: "/contact-form" }
];

const newCommonFooterColumns = [
  { title: "Services", items: [{ label: "Haircuts", href: "/#services" }, { label: "Colouring", href: "/#services" }, { label: "Treatments", href: "/#services" }, { label: "Styling", href: "/#styles" }] },
  { title: "About Us", items: [{ label: "Our Story", href: "/#about" }, { label: "Our Team", href: "/#team" }, { label: "Testimonials", href: "/#testimonials" }, { label: "FAQs", href: "/#faq" }] },
  { title: "Contact", items: [
    { label: "Book Online", href: "/book-appointment" },
    { label: "Contact Form", href: "/contact-form" },
    { label: "Call Us", href: "tel:07377747189" },
    { label: "WhatsApp", href: "https://wa.me/message/UEFDBW2YGR2VP1" },
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
          navItems={newCommonNavItems}
        />
      </div>
      <div id="contact-form-page" data-section="contact-form-page">
        <ContactSplitForm
          title="Book Your Appointment"
          description="Fill out the form below to schedule your visit to Johnston Browns Hair Studio. We look forward to seeing you!"
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

      {/* NEW SECTION: Dedicated Booking Service Embed */}
      <div id="booking-service-embed" data-section="booking-service-embed" className="py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">Schedule Your Visit</h2>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mb-12">
          Use our dedicated online booking system below to find an available slot and confirm your appointment instantly.
        </p>
        <div className="w-full max-w-4xl bg-card rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
          {/* Placeholder for your actual booking system embed code */}
          <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%', height: 0 }}>
            <iframe
              src="https://example.com/your-booking-service-embed-url" // Replace with your actual booking system URL (e.g., Calendly, Setmore, etc.)
              title="Dedicated Online Booking System"
              className="absolute top-0 left-0 w-full h-full border-0 rounded-md"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              loading="lazy"
            ></iframe>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            For direct assistance, please call us at <a href="tel:07377747189" className="text-primary-cta hover:underline">07377747189</a>.
          </p>
        </div>
      </div>

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
