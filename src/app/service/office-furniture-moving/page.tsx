import ServiceFaq from "@/components/faq/ServiceFaq";
import Header from "@/components/header";
import IntersectionAnimationWrapper from "@/components/IntersectionAnimationWrapper";
import HelpFast from "@/components/service/HelpFast";
import OfficeFurnitureMovingContent from "@/components/service/OfficeFurnitureMovingContent";

import PageSection from "@/components/service/PageSection";

import WhyChoose from "@/components/service/WhyChoose";
import Title from "@/components/Title";

const chooseData = [
  {
    id: 1,
    title: "Dedicated Project Coordination",
    details: "One point of contact to oversee your entire office relocation.",
  },
  {
    id: 2,
    title: "IT & Furniture Handling",
    details:
      "Careful packing and moving of computers, desks, and office equipment.",
  },
  {
    id: 3,
    title: "After-Hours Moving",
    details: "We work on weekends or evenings to minimize business disruption.",
  },
  {
    id: 4,
    title: "Inventory & Labeling",
    details: "Organized tracking of your assets for smooth unpacking.",
  },
  {
    id: 4,
    title: "Licensed & Insured Service",
    details: "Full protection for your valuable office items.",
  },
];
const faqData = [
  {
    id: 1,
    title: "Do you move offices outside of Christchurch?",
    sub_title:
      "Yes, we handle office moves throughout New Zealand, including inter-city relocations.",
  },
  {
    id: 2,
    title: "Can you disassemble and reassemble office furniture?",
    sub_title:
      "Absolutely. Our team is trained in dismantling and assembling desks, shelving, and workstations.",
  },
  {
    id: 3,
    title: "Do you work outside business hours for office moves?",
    sub_title:
      "Yes! We offer after-hours and weekend service to minimize disruption to your business.",
  },
  {
    id: 4,
    title: "Do you provide boxes or packing supplies for office moves?",
    sub_title:
      "Yes, we offer boxes, bubble wrap, and other supplies as part of our moving packages.",
  },
  {
    id: 5,
    title: "Can you move IT equipment safely?",
    sub_title:
      "Absolutely. Our movers are trained in handling fragile electronics and office equipment with care.",
  },
  {
    id: 6,
    title: "Do you offer weekend office relocations?",
    sub_title:
      " Yes, we provide flexible scheduling including weekend and after-hours moves to reduce downtime.",
  },
];

export const metadata = {
  title:
    "Affordable office furniture movers Christchurch | small moves christchurch ",
  description:
    "Affordable office furniture movers Christchurch. Experts in small moves Christchurch. Fast, safe & stress-free. Get a free quote today!",
  openGraph: {
    title:
      "Affordable office furniture movers Christchurch | small moves christchurch ",
    description:
      "Affordable office furniture movers Christchurch. Experts in small moves Christchurch. Fast, safe & stress-free. Get a free quote today!",
    url: "http://rmmovingexpress.com/service/office-furniture-moving",
    siteName: "Rm Moving Express",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Affordable office furniture movers Christchurch",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Affordable office furniture movers Christchurch | small moves christchurch ",
    description:
      "Affordable office furniture movers Christchurch. Experts in small moves Christchurch. Fast, safe & stress-free. Get a free quote today!",
    images: ["/cover.png"],
  },
  metadataBase: new URL("http://rmmovingexpress.com"),
};

export default function OfficeFurnitureMoving() {
  return (
    <IntersectionAnimationWrapper>
      <Header />
      <PageSection
        page_title="ffice Furniture Moving Services"
        page_sub_title="Moving your office? Let our experts manage the process with minimal disruption. Our office furniture moving services are designed to be efficient, secure, and reliable."
      />
      <OfficeFurnitureMovingContent />
      <WhyChoose
        choose_title="What You Get with Our Office Moving Service"
        choose_subtitle="We handle desks, chairs, and workstations with speed and care.
 Minimize downtime and let us manage the heavy lifting."
        chooseData={chooseData}
      />
      <HelpFast
        title="Need Office Furniture Moved?"
        description="Business move coming up? We specialize in safe and swift office furniture moves at cost-effective rates. From desks to workstations, we move it all with zero fuss.
We work around your business hours to minimize disruption, so you can keep your operations running smoothly.
"
      />
      <Title title="Faqs" subtitle="Office Furniture Moving" />
      <ServiceFaq faqsData={faqData} />
    </IntersectionAnimationWrapper>
  );
}
