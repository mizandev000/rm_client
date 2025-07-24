import ServiceFaq from "@/components/faq/ServiceFaq";
import Header from "@/components/header";
import IntersectionAnimationWrapper from "@/components/IntersectionAnimationWrapper";
import HelpFast from "@/components/service/HelpFast";
import LongDistanceMovingContent from "@/components/service/LongDistanceMovingContent";

import PageSection from "@/components/service/PageSection";

import WhyChoose from "@/components/service/WhyChoose";
import Title from "@/components/Title";

const chooseData = [
  {
    id: 1,
    title: "Nationwide Coverage",
    details: "We move you anywhere in New Zealand — North or South Island.",
  },
  {
    id: 2,
    title: "Real-Time Tracking",
    details: "Stay informed with updates on your shipment.",
  },
  {
    id: 3,
    title: "Careful Packing & Loading",
    details:
      "We ensure long-haul safety with expert packing and vehicle loading.",
  },
  {
    id: 4,
    title: "Flexible Scheduling",
    details: "Choose your date and time — we’ll handle the logistics.",
  },
  {
    id: 4,
    title: "Affordable Packages",
    details: "Competitive pricing tailored to distance and load size.",
  },
];
const faqData = [
  {
    id: 1,
    title: "Do you provide packing materials for long moves?",
    sub_title:
      "Yes! We offer high-quality boxes, wrap, and packing supplies upon request.",
  },
  {
    id: 2,
    title: "How do you calculate pricing for long distance moving?",
    sub_title:
      "Cost depends on distance, load size, and services needed. Contact us for a custom quote.",
  },
  {
    id: 3,
    title: "How far in advance should I book a long distance move?",
    sub_title:
      "We recommend booking at least 7–10 days ahead to secure your preferred date.",
  },
  {
    id: 4,
    title: "What’s the cheapest way to move long distance in NZ?",
    sub_title:
      "Booking with RM Moving Express! We offer customized long-distance moving packages to fit your needs and budget.",
  },
  {
    id: 5,
    title: ". Do you offer tracking for long distance moves?",
    sub_title:
      "Yes, we keep you updated throughout the journey for full peace of mind.",
  },
  {
    id: 6,
    title: "Are your long distance movers insured?",
    sub_title:
      " Yes, your belongings are covered during transit, and we offer optional comprehensive insurance.",
  },
];

export const metadata = {
  title: "Long Distance Moving Services | RM Moving Express",
  description:
    "Need to move far? Our long distance moving services are fast, safe, and affordable. Book your stress-free move now with expert help!",
  openGraph: {
    title: "Long Distance Moving Services | RM Moving Express",
    description:
      "Need to move far? Our long distance moving services are fast, safe, and affordable. Book your stress-free move now with expert help!",
    url: "http://rmmovingexpress.com/service/long-distance-moving",
    siteName: "Rm Moving Express",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Best long distance moving services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Long Distance Moving Services | RM Moving Express",
    description:
      "Need to move far? Our long distance moving services are fast, safe, and affordable. Book your stress-free move now with expert help!",
    images: ["/cover.png"],
  },
  metadataBase: new URL("http://rmmovingexpress.com"),
};

export default function LongDistanceMoving() {
  return (
    <IntersectionAnimationWrapper>
      <Header />
      <PageSection
        page_title="Long Distance Moving Services"
        page_sub_title="Planning a move across cities or islands? Moving Express offers reliable and cost-effective long distance moving services across New Zealand."
      />
      <LongDistanceMovingContent />
      <WhyChoose
        choose_title="What You Get with Our Long Distance Service"
        choose_subtitle="Reliable cross-country moving without the hassle or high costs.
 We ensure your items arrive safely, no matter the distance."
        chooseData={chooseData}
      />
      <HelpFast
        title="Planning a Long Distance Move?"
        description="Don’t let the distance stress you out! RM Moving Express offers fast, secure, and affordable long-distance moving services across New Zealand.
Our experienced team handles everything from packing to delivery, ensuring your belongings arrive safely, no matter the distance."
      />
      <Title title="Faqs" subtitle="Long Distance Moving" />
      <ServiceFaq faqsData={faqData} />
    </IntersectionAnimationWrapper>
  );
}
