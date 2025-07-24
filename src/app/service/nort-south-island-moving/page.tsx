import ServiceFaq from "@/components/faq/ServiceFaq";
import Header from "@/components/header";
import IntersectionAnimationWrapper from "@/components/IntersectionAnimationWrapper";
import HelpFast from "@/components/service/HelpFast";
import NortSouthIslandMovingContent from "@/components/service/NortSouthIslandMovingContent";

import PageSection from "@/components/service/PageSection";

import WhyChoose from "@/components/service/WhyChoose";
import Title from "@/components/Title";

const chooseData = [
  {
    id: 1,
    title: "Coastal Transport Coordination",
    details: "We handle ferry schedules and inter-island transfers seamlessly.",
  },
  {
    id: 2,
    title: "Safe & Secure Transit",
    details: "Proper packing and insured service for long-distance moves.",
  },
  {
    id: 3,
    title: "Dedicated Move Manager",
    details: "One point of contact for stress-free coordination.",
  },
  {
    id: 4,
    title: "Flexible Delivery Options",
    details: "Choose door-to-door or depot-based delivery.",
  },
  {
    id: 5,
    title: "Reliable Timing",
    details: "Your items arrive on schedule — no delays.",
  },
];

const faqData = [
  {
    id: 1,
    title: "Do you arrange inter-island ferry transport?",
    sub_title: "Yes, we coordinate all necessary ferry bookings and logistics.",
  },
  {
    id: 2,
    title: "Can I send only a few items between islands?",
    sub_title:
      "Yes, we handle both full house moves and partial or small-load transfers.",
  },
  {
    id: 3,
    title: "Is there a delivery timeline guarantee?",
    sub_title:
      "We provide an estimated timeframe and stay in contact throughout the move.",
  },
  {
    id: 4,
    title: "How long does inter-island moving usually take?",
    sub_title:
      "Most moves take 2–4 days depending on the ferry schedule and destination.",
  },
  {
    id: 5,
    title: "Can I add extra items last-minute?",
    sub_title:
      "We’ll do our best to accommodate extra items—just let us know as early as possible.",
  },
  {
    id: 6,
    title: "Is inter-island moving expensive?",
    sub_title:
      "Not with us! We provide affordable rates with transparent ferry and fuel fees included.",
  },
];

export const metadata = {
  title: "North & South Island Moving Made Easy Today | professional moves",
  description:
    "Planning a move across islands? Our North & South Island moving team offers smooth, safe, and fast service. Book now for a stress-free relocation!",
  openGraph: {
    title: "North & South Island Moving Made Easy Today | professional moves",
    description:
      "Planning a move across islands? Our North & South Island moving team offers smooth, safe, and fast service. Book now for a stress-free relocation!",
    url: "http://rmmovingexpress.com/service/nort-south-island-moving",
    siteName: "Rm Moving Express",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "North & south island moving from christchurch",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "North & South Island Moving Made Easy Today | professional moves",
    description:
      "Planning a move across islands? Our North & South Island moving team offers smooth, safe, and fast service. Book now for a stress-free relocation!",
    images: ["/cover.png"],
  },
  metadataBase: new URL("http://rmmovingexpress.com"),
};

export default function NorthSouthIslandMoving() {
  return (
    <IntersectionAnimationWrapper>
      <Header />
      <PageSection
        page_title="North & South Island Moving"
        page_sub_title="Inter-island moves can be complex, but with Moving Express, it’s a smooth and well-coordinated experience."
      />
      <NortSouthIslandMovingContent />
      <WhyChoose
        choose_title="What You Get with Inter-Island Moving"
        choose_subtitle="Stress-free inter-island moves with organized logistics and careful handling.
We take care of everything—so you don’t have to."
        chooseData={chooseData}
      />
      <HelpFast
        title="Moving Between Islands?"
        description="Whether you're going from North to South or vice versa, we offer reliable inter-island moving services that are both fast and budget-friendly.
We handle all logistics so you don’t have to—making your big move easier than ever.
"
      />
      <Title title="Faqs" subtitle="North & South Island Moving" />
      <ServiceFaq faqsData={faqData} />
    </IntersectionAnimationWrapper>
  );
}
