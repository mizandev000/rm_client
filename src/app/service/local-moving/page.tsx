import ServiceFaq from "@/components/faq/ServiceFaq";
import Header from "@/components/header";
import IntersectionAnimationWrapper from "@/components/IntersectionAnimationWrapper";
import HelpFast from "@/components/service/HelpFast";

import PageSection from "@/components/service/PageSection";

import LocalMovingContent from "@/components/service/LocalMovingContent";
import WhyChoose from "@/components/service/WhyChoose";
import Title from "@/components/Title";

const chooseData = [
  {
    id: 1,
    title: "Experienced Local Movers",
    details:
      "Trained professionals who know how to navigate tight spaces and handle your items with care.",
  },
  {
    id: 2,
    title: "Quick Turnaround",
    details:
      "We make sure your local move is done fast without compromising on safety or quality.",
  },
  {
    id: 3,
    title: "Packing & Unpacking Options",
    details:
      "Choose full-service packing or opt for help only where you need it.",
  },
  {
    id: 4,
    title: "Modern Equipment",
    details:
      "From moving blankets to trolleys and secure vans, we come prepared.",
  },
  {
    id: 4,
    title: "Affordable & Transparent Pricing",
    details:
      "No hidden fees — just honest, competitive rates for top-tier service.",
  },
];

const faqData = [
  {
    id: 1,
    title: "How long should it take movers to move a 3-bedroom house?",
    sub_title:
      "Normally, it takes 4-7 hours to shift a fully furnished 3 bedroom home but the actual time sometimes varies depending on the access of the premises, packing and unpacking items and the distance between the two locations.",
  },
  {
    id: 2,
    title: "How much do movers cost for a 4-bedroom house?",
    sub_title:
      "Usually, it costs around $800-$1000 depending on the volume of the items and excess of the work. The costing depends on various factors like distance, number of movers and any other additional services like packing, boxing things separately.",
  },
  {
    id: 3,
    title: "How long does it take movers to pack a house?",
    sub_title:
      "Packing an entire house can take 4–10 hours for professional movers, depending on the number of rooms and items. For a 3-bedroom house, expect 6–8 hours if done by an experienced team.",
  },
  {
    id: 4,
    title: "Are your local moving services insured?",
    sub_title:
      "Yes, we can provide context insurance whenever needed and some time required by the client.",
  },
  {
    id: 4,
    title: "Do you provide cheap movers for small local jobs?",
    sub_title:
      "Yes we provide low cost and cheap moving options for small local moving i.e furniture, bed, electronics.",
  },
  {
    id: 4,
    title: "Why choose RM Moving Express over other local movers?",
    sub_title:
      "Check out our customer feedback and reviews before hiring us so  you can get an idea how they received our services.",
  },
];
export const metadata = {
  title:
    "Best & Cheap local moving services in Christchurch | RM Moving Express",
  description:
    "Find the best & cheap local moving services in Christchurch. Reliable, friendly movers to make your move easy. Get a free quote today!",
  openGraph: {
    title:
      "Best & Cheap local moving services in Christchurch | RM Moving Express",
    description:
      "Find the best & cheap local moving services in Christchurch. Reliable, friendly movers to make your move easy. Get a free quote today!",
    url: "http://rmmovingexpress.com/service/local-moving",
    siteName: "Rm Moving Express",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Cheap local moving services in christchurch",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best & Cheap local moving services in Christchurch | RM Moving Express",
    description:
      "Find the best & cheap local moving services in Christchurch. Reliable, friendly movers to make your move easy. Get a free quote today!",
    images: ["/cover.png"],
  },
  metadataBase: new URL("http://rmmovingexpress.com"),
};
export default function MovingQuote() {
  return (
    <IntersectionAnimationWrapper>
      <Header />
      <PageSection
        page_title="Local Moving Services"
        page_sub_title="Moving Express provides fast, reliable, and affordable local
                moving services for homes, apartments, and offices in
                Christchurch and across New Zealand."
      />
      <LocalMovingContent />

      <WhyChoose
        choose_title="What You Get with Our Local Moving Service"
        choose_subtitle="When you choose RM Moving Express for your local move, you get more than just a couple of guys with a truck. We offer a full-service experience—careful packing, efficient loading, safe transportation, and reliable unloading at your new place"
        chooseData={chooseData}
      />
      <HelpFast
        title="Need Local Moving Help Fast?"
        description="Looking to move across town without the stress or the high price tag? RM Moving Express offers quick, efficient, and budget-friendly local moving solutions tailored to your needs. Whether you're shifting a small apartment or a family home, we’ll handle everything with care and speed. Our experienced team knows the ins and outs of local moves, and we work around your schedule to make the process seamless. Best of all, our pricing is transparent and competitive—so no surprises, just smooth service."
      />

      <Title
        title="Faqs"
        subtitle="Frequently Asked Questions – Local Moving Services"
      />
      <ServiceFaq faqsData={faqData} />
    </IntersectionAnimationWrapper>
  );
}
