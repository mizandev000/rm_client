import ServiceFaq from "@/components/faq/ServiceFaq";
import Header from "@/components/header";
import IntersectionAnimationWrapper from "@/components/IntersectionAnimationWrapper";
import HelpFast from "@/components/service/HelpFast";

import PageSection from "@/components/service/PageSection";
import SingleItemMoversContent from "@/components/service/SingleItemMoversContent";

import WhyChoose from "@/components/service/WhyChoose";
import Title from "@/components/Title";

const chooseData = [
  {
    id: 1,
    title: "On-Demand Availability",
    details: "Book a quick move for a single item, even on the same day.",
  },
  {
    id: 2,
    title: "Specialty Item Handling",
    details:
      "We move items like safes, appliances, and large furniture safely and securely.",
  },
  {
    id: 3,
    title: "Protective Materials Used",
    details: "We wrap and cushion items to avoid damage during transport.",
  },
  {
    id: 4,
    title: "Trained Movers",
    details:
      "Experienced staff who know how to lift and move heavy objects safely.",
  },
  {
    id: 4,
    title: "Budget-Friendly Pricing",
    details: "Pay only for what you move — no unnecessary fees.",
  },
];
const faqData = [
  {
    id: 1,
    title: "Do you move single large items like pianos or fridges?",
    sub_title:
      "Yes! We’re equipped to move large or heavy single items safely and securely.",
  },
  {
    id: 2,
    title: "How much does a single item move cost?",
    sub_title:
      "Prices start as low as $80–$150 depending on distance, item size, and access conditions.",
  },
  {
    id: 3,
    title: "Can I book same-day pickup for one item?",
    sub_title:
      "Absolutely! Same-day service is available depending on schedule availability.",
  },
  {
    id: 4,
    title: "Are your single item moving rates the cheapest in Christchurch?",
    sub_title:
      "We offer some of the most competitive rates in the city—get a quote to compare!",
  },
  {
    id: 4,
    title: "What kind of items can you move individually?",
    sub_title:
      "We move all types—TVs, couches, washing machines, beds, desks, appliances, and more.",
  },
  {
    id: 4,
    title: "Do I need to wrap the item before pickup?",
    sub_title:
      "Our movers bring padding and straps, but pre-wrapping fragile items is always helpful for extra protection.",
  },
];

export const metadata = {
  title: "Best & Cheapest single item movers Christchurch | Quick Movers",
  description:
    "Best & cheapest single item movers Christchurch. Quick, safe delivery for your items. Book trusted local movers today!",
  openGraph: {
    title: "Best & Cheapest single item movers Christchurch | Quick Movers",
    description:
      "Best & cheapest single item movers Christchurch. Quick, safe delivery for your items. Book trusted local movers today!",
    url: "http://rmmovingexpress.com/service/single-item-movers",
    siteName: "Rm Moving Express",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Cheapest single item movers Christchurch",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best & Cheapest single item movers Christchurch | Quick Movers",
    description:
      "Best & cheapest single item movers Christchurch. Quick, safe delivery for your items. Book trusted local movers today!",
    images: ["/cover.png"],
  },
  metadataBase: new URL("http://rmmovingexpress.com"),
};

export default function SingleItemMovers() {
  return (
    <IntersectionAnimationWrapper>
      <Header />
      <PageSection
        page_title="Single Item Movers"
        page_sub_title="No move is too small! Our single item moving service is perfect for safely relocating bulky furniture or valuable items."
      />
      <SingleItemMoversContent />
      <WhyChoose
        choose_title="What You Get with Our Single Item Moving"
        choose_subtitle="Whether it's a sofa or fridge, we move it safely and on time.
 Ideal for small moves without the big price tag."
        chooseData={chooseData}
      />
      <HelpFast
        title="Moving Just One Item?"
        description="No job is too small for us! Whether it's a couch, fridge, or a heavy dresser, we provide quick and affordable single-item moving services.
Our team will pick up and deliver with care, saving you the hassle of figuring it out yourself. Same-day service available in most areas!"
      />
      <Title title="Faqs" subtitle="Single Item Movers" />
      <ServiceFaq faqsData={faqData} />
    </IntersectionAnimationWrapper>
  );
}
