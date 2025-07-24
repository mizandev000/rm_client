import ServiceFaq from "@/components/faq/ServiceFaq";
import Header from "@/components/header";
import IntersectionAnimationWrapper from "@/components/IntersectionAnimationWrapper";
import HelpFast from "@/components/service/HelpFast";
import HouseRelocationContent from "@/components/service/HouseRelocationContent";

import PageSection from "@/components/service/PageSection";

import WhyChoose from "@/components/service/WhyChoose";
import Title from "@/components/Title";

const chooseData = [
  {
    id: 1,
    title: "Full-Service Moving",
    details: "Packing, transport, and setup done by trained pros.",
  },
  {
    id: 2,
    title: "Packing Supplies Included",
    details: "We bring boxes, wrap, tape, and tools.",
  },
  {
    id: 3,
    title: "Furniture Assembly",
    details: "Disassembly and reassembly of furniture as needed.",
  },
  {
    id: 4,
    title: "Fragile Item Protection",
    details: "Special care for delicate items like glassware and electronics.",
  },
  {
    id: 4,
    title: "Move-In Ready Service",
    details: "We’ll even help place your furniture where you want it.",
  },
];

const faqData = [
  {
    id: 1,
    title: "Do you offer packing help for full house moves?",
    sub_title:
      "Yes, we provide both packing materials and full packing services if needed.",
  },
  {
    id: 2,
    title: "How much notice do you need for a house move?",
    sub_title:
      "We recommend at least 3–5 days notice, especially during peak seasons.",
  },
  {
    id: 3,
    title: " Can you move items into storage for me?",
    sub_title:
      "Absolutely. We can move your belongings to your chosen storage facility safely and efficiently.",
  },
  {
    id: 4,
    title: "What’s included in a full house relocation?",
    sub_title:
      "We include packing, disassembly, loading, transport, and reassembly—all handled by professional movers.",
  },
  {
    id: 5,
    title: "Do you offer cheap house movers in NZ?",
    sub_title:
      "Yes, our pricing is among the most competitive for house moving services across New Zealand.",
  },
  {
    id: 6,
    title: "Can I schedule a pre-move consultation?",
    sub_title:
      " Absolutely! We offer free assessments to help you plan and get an accurate quote.",
  },
];

export const metadata = {
  title: "Trusted House Relocation Services in Christchurch",
  description:
    "Get smooth, safe, and affordable house relocation services. We move your home with care. Book today for a hassle-free moving experience!",
  openGraph: {
    title: "Trusted House Relocation Services in Christchurch",
    description:
      "Get smooth, safe, and affordable house relocation services. We move your home with care. Book today for a hassle-free moving experience!",
    url: "http://rmmovingexpress.com/service/house-relocation",
    siteName: "Rm Moving Express",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "House relocation services near me",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trusted House Relocation Services in Christchurch",
    description:
      "Get smooth, safe, and affordable house relocation services. We move your home with care. Book today for a hassle-free moving experience!",
    images: ["/cover.png"],
  },
  metadataBase: new URL("http://rmmovingexpress.com"),
};

export default function HouseRelocation() {
  return (
    <IntersectionAnimationWrapper>
      <Header />
      <PageSection
        page_title="House Relocation Services"
        page_sub_title="Whether it’s a small home or a multi-bedroom property, our house relocation services offer an end-to-end moving experience you can trust."
      />
      <HouseRelocationContent />
      <WhyChoose
        choose_title="What You Get with Our House Relocation"
        choose_subtitle="We make full house moves smooth, secure, and budget-friendly.
 Our team manages packing, transport, and setup from start to finish."
        chooseData={chooseData}
      />
      <HelpFast
        title="Shifting to a New Home?"
        description="We make house moves easy, fast, and affordable. Our friendly movers ensure your furniture and valuables are handled with care and precision.
Whether you're upsizing or downsizing, we’ve got the gear and experience to make your move stress-free.
"
      />
      <Title title="Faqs" subtitle="House Relocation" />
      <ServiceFaq faqsData={faqData} />
    </IntersectionAnimationWrapper>
  );
}
