import ServiceFaq from "@/components/faq/ServiceFaq";
import Header from "@/components/header";
import IntersectionAnimationWrapper from "@/components/IntersectionAnimationWrapper";
import HelpFast from "@/components/service/HelpFast";
import KitchenCabinetDeliveryContent from "@/components/service/KitchenCabinetDeliveryContent";

import PageSection from "@/components/service/PageSection";

import WhyChoose from "@/components/service/WhyChoose";
import Title from "@/components/Title";

const chooseData = [
  {
    id: 1,
    title: "Special Packing Materials",
    details: "Cushioned protection for panels, doors, and accessories.",
  },
  {
    id: 2,
    title: "Trained Delivery Crew",
    details: "Professionals who know how to handle fragile, heavy items.",
  },
  {
    id: 3,
    title: "Scheduled Delivery Slots",
    details: "On-time service that fits your renovation schedule.",
  },
  {
    id: 4,
    title: "Door-to-Door Service",
    details: "Cabinets delivered directly to your site.",
  },
  {
    id: 4,
    title: "Affordable & Flexible Rates",
    details: "Pay only for what you need — no surprise charges.",
  },
];

const faqData = [
  {
    id: 1,
    title: "Do you deliver from stores or only homes?",
    sub_title:
      "We deliver from retail stores, warehouses, or individual sellers—wherever you need.",
  },
  {
    id: 2,
    title: "What areas do you cover?",
    sub_title: "We provide furniture delivery services across New Zealand.",
  },
  {
    id: 3,
    title: "Do you protect furniture during transport?",
    sub_title:
      "Yes, we use padding, wraps, and tie-downs to protect all cabinets and furniture during delivery.",
  },
  {
    id: 4,
    title: "Can you deliver to rural or remote locations?",
    sub_title:
      " Yes, we deliver across urban and rural NZ. Let us know your address and we’ll confirm access.",
  },
  {
    id: 5,
    title: "What’s the average delivery time for commercial moving?",
    sub_title:
      "Most deliveries are completed same-day or next-day, depending on availability and location.",
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
    url: "http://rmmovingexpress.com/service/kitchen-cabinet-delivery",
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

export default function KitchenCabinetDelivery() {
  return (
    <IntersectionAnimationWrapper>
      <Header />
      <PageSection
        page_title="Commercial Delivery"
        page_sub_title="Delivering your dream kitchen? Trust Moving Express for reliable and damage-free kitchen cabinet delivery to your doorstep."
      />
      <KitchenCabinetDeliveryContent />
      <WhyChoose
        choose_title="What You Get with Kitchen Cabinet Delivery"
        choose_subtitle="Swift, damage-free delivery of cabinets and furniture at great rates.
 Perfect for store drops or online purchases."
        chooseData={chooseData}
      />
      <HelpFast
        title="Delivering a Kitchen Cabinet?"
        description="Bought a new kitchen cabinet? We’ll get it to your doorstep safely and quickly—without overcharging you. <br/><br/>
Our single-item delivery service is ideal for furniture drops, and we treat every item like it’s our own."
      />
      <Title title="Faqs" subtitle="Commercial Moving" />
      <ServiceFaq faqsData={faqData} />
    </IntersectionAnimationWrapper>
  );
}
