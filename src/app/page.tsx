"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TeamCardTen from '@/components/sections/team/TeamCardTen';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

const finalNavItemsForAllPages = [
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

const finalFooterColumnsForAllPages = [
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

export default function LandingPage() {
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
          navItems={finalNavItemsForAllPages}
        />
      </div>
      <div id="home" data-section="home">
        <HeroLogo
          logoText="Johnston Browns Hair Studio"
          description="Experience unparalleled style and care at Johnston Browns, Glasgow's premier destination for exquisite hairdressing. Transform your look with our expert stylists."
          buttons={[
            { text: "Book an Appointment", href: "/book-appointment" },
            { text: "View Services", href: "/#services" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/female-hairdresser-making-hairstyle-blonde-woman-beauty-salon_176420-4450.jpg"
          imageAlt="Luxurious hair salon interior with stylist"
          showDimOverlay={true}
        />
      </div>
      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Our Passion for Hair Excellence" }
          ]}
          useInvertedBackground={true}
          buttons={[
            { text: "Meet Our Team", href: "/#team" }
          ]}
        />
      </div>
      <div id="services" data-section="services">
        <FeatureCardNineteen
          title="Crafting Your Perfect Look"
          description="From classic cuts to the latest trends, our services are designed to bring your hair dreams to life with precision and artistry."
          features={[
            { tag: "Style & Cut", title: "Precision Haircuts", subtitle: "Masterful cuts tailored to your features.", description: "Our stylists are experts in creating the perfect silhouette, whether you're looking for a bold new style or a subtle refresh.", imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-does-hair-style-woman_93675-134626.jpg?_wi=2", imageAlt: "Woman getting a precision haircut" },
            { tag: "Vibrant Hues", title: "Expert Colouring", subtitle: "Transform your hair with stunning, long-lasting color.", description: "From balayage to highlights, full colour to root touch-ups, we use premium products for radiant, healthy-looking hair.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-woman-with-red-lips-unusual-hair-style-with-shadow-eyes-black-background_158538-3863.jpg", imageAlt: "Hair stylist applying hair color" },
            { tag: "Healthy Hair", title: "Rejuvenating Treatments", subtitle: "Restore shine and strength with our bespoke treatments.", description: "Indulge in deep conditioning, scalp health, and strengthening treatments designed to revitalize your hair from within.", imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-treatment-hairdresser-shop_23-2149229761.jpg", imageAlt: "Hair treatment being applied to hair" }
          ]}
          buttons={[
            { text: "Book an Appointment", href: "/book-appointment" }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="styles" data-section="styles">
        <ProductCardTwo
          title="Our Signature Styles"
          description="Explore a gallery of our most loved transformations and find inspiration for your next visit. Our stylists are masters of diverse looks."
          products={[
            { id: "1", brand: "Classic Bob", name: "Sleek & Chic", price: "From £60", rating: 5, reviewCount: "120 reviews", imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-cute-brunette-woman-model-casual-summer-clothes-with-no-makeup-isolated-gray-wall_158538-14683.jpg", imageAlt: "Sleek bob haircut" },
            { id: "2", brand: "Long Layers", name: "Natural Flow", price: "From £75", rating: 5, reviewCount: "95 reviews", imageSrc: "http://img.b2bpic.net/beautiful-woman-posing-leaves_23-2148396333.jpg", imageAlt: "Long layered hair with natural flow" },
            { id: "3", brand: "Curly Texture", name: "Voluminous Curls", price: "From £80", rating: 5, reviewCount: "88 reviews", imageSrc: "http://img.b2bpic.net/free-photo/mixed-race-black-woman-portrait-with-big-afro-hair-curly-hair-beige-background-smiling-laughing-closeup_633478-2968.jpg", imageAlt: "Woman with voluminous curly hair" },
            { id: "4", brand: "Gent's Cut", name: "Modern Fade", price: "From £45", rating: 5, reviewCount: "110 reviews", imageSrc: "http://img.b2bpic.net/free-photo/front-view-barber-shop-concept_23-2148506366.jpg", imageAlt: "Man with modern fade haircut" },
            { id: "5", brand: "Bold Colour", name: "Vibrant Transformation", price: "POA", rating: 5, reviewCount: "72 reviews", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-charming-woman-one-wonderful_1304-872.jpg", imageAlt: "Woman with vibrant red hair color" },
            { id: "6", brand: "Bridal Updo", name: "Elegant Occasion", price: "POA", rating: 5, reviewCount: "50 reviews", imageSrc: "http://img.b2bpic.net/free-photo/hairdresser-makes-models-hairstyle-bride-putting-tiara-crown_8353-8014.jpg", imageAlt: "Elegant bridal updo hairstyle" }
          ]}
          carouselMode="buttons"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="team" data-section="team">
        <TeamCardTen
          title="Meet Our Expert Stylists"
          tag="Dedicated Craftsmanship"
          membersAnimation="slide-up"
          members={[
            { id: "1", name: "Pauline Smith", imageSrc: "http://img.b2bpic.net/free-photo/cheerful-woman-visagiste-smiling-camera_23-2148113183.jpg", imageAlt: "Pauline Smith, Senior Stylist" },
            { id: "2", name: "Mark Johnson", imageSrc: "http://img.b2bpic.net/free-photo/young-man-menswear-shop-talking-phone_1303-19859.jpg", imageAlt: "Mark Johnson, Creative Director" },
            { id: "3", name: "Chloe White", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-holding-pinecone-with-star-red-wall_114579-55964.jpg", imageAlt: "Chloe White, Colour Specialist" }
          ]}
          memberVariant="card"
          useInvertedBackground={false}
        />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="'Fabulous cut by Pauline who gave great advice on restyle. I will definitely return. Truly impressed with the service and professionalism at Johnston Browns!'"
          rating={5}
          author="Rosie Rodgers"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/young-businesswomen-working-her-office_1301-6896.jpg", alt: "Sarah J." },
            { src: "http://img.b2bpic.net/free-photo/beautiful-african-american-woman-cafe_273609-5283.jpg", alt: "Michael C." },
            { src: "http://img.b2bpic.net/free-photo/portrait-smiling-young-woman-hair-stylist_23-2148113070.jpg", alt: "Emily R." },
            { src: "http://img.b2bpic.net/free-photo/optimistic-smiling-senior-woman-clasps-hands-looks-happily-wears-festive-costume-special-occasion_273609-48763.jpg", alt: "David K." },
            { src: "http://img.b2bpic.net/free-photo/bright-woman-with-wavy-purple-hair-oversized-denim-jacket-laughs-crosses-her-fingers-modern-woman-white-top-have-fun_197531-19186.jpg", alt: "Sophie L." }
          ]}
          ratingAnimation="blur-reveal"
          avatarsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>
      <div id="pricing" data-section="pricing">
        <PricingCardFive
          title="Our Service Pricing"
          description="Transparent pricing for our most popular services. Contact us for a personalized consultation and quote."
          plans={[
            { id: "cut-style", tag: "Haircut & Style", price: "From £40", period: "starting from", description: "Experience a refreshing wash, precision cut, and expert blow-dry tailored to your desired style.", button: { text: "Book Now", href: "/book-appointment" }, featuresTitle: "Services include:", features: ["Consultation", "Wash & Condition", "Precision Cut", "Blow-Dry & Style"] },
            { id: "color-highlights", tag: "Colour & Highlights", price: "From £85", period: "starting from", description: "Achieve your perfect shade with our range of colour services, including highlights, balayage, and full colour. Price varies by hair length and complexity.", button: { text: "Book Now", href: "/book-appointment" }, featuresTitle: "Services include:", features: ["Consultation", "Colour Application", "Wash & Finish", "Toner (if needed)"] },
            { id: "treatments", tag: "Hair Treatments", price: "From £35", period: "starting from", description: "Revitalize your hair with deep conditioning, strengthening treatments, or nourishing scalp therapies for ultimate health and shine.", button: { text: "Book Now", href: "/book-appointment" }, featuresTitle: "Treatments offer:", features: ["Deep Repair", "Added Shine", "Strength Boost", "Scalp Rejuvenation"] }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="faq" data-section="faq">
        <FaqSplitMedia
          faqs={[
            { id: "1", title: "How do I book an appointment?", content: "You can book an appointment online via our website, call us directly at 07377747189, or visit us in person at our studio." },
            { id: "2", title: "What are your opening hours?", content: "We are open Monday to Saturday from 9 AM to 5 PM. We are closed on Sundays." },
            { id: "3", title: "Do you offer consultations?", content: "Yes, we offer complimentary consultations for all new clients to discuss your hair goals and ensure we achieve your desired look." },
            { id: "4", title: "What payment methods do you accept?", content: "We accept all major credit and debit cards, as well as cash payments." }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/cheerful-girl-salon-hairdresser_23-2147769872.jpg"
          imageAlt="Hairdresser discussing with a client"
          mediaAnimation="opacity"
          mediaPosition="right"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our studio, services, and booking process."
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Book Your Transformation"
          title="Ready for a New Look?"
          description="Don't wait to revitalize your style. Contact Johnston Browns Hair Studio today to schedule your appointment with our talented team."
          buttons={[
            { text: "Book an Appointment", href: "/book-appointment" },
            { text: "Call Us Now", href: "tel:07377747189" },
            { text: "Email Us", href: "mailto:info@johnstonbrowns.com" },
            { text: "WhatsApp Us", href: "https://wa.me/message/UEFDBW2YGR2VP1" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Johnston Browns Hair Studio"
          columns={finalFooterColumnsForAllPages}
          copyrightText="© 2024 Johnston Browns, owned by Negin eidimohammadi. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}