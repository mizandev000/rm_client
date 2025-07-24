import ServiceFaq from "@/components/faq/ServiceFaq";
import Header from "@/components/header";
import IntersectionAnimationWrapper from "@/components/IntersectionAnimationWrapper";
import HelpFast from "@/components/service/HelpFast";

import PageSection from "@/components/service/PageSection";
import PianoShiftingContent from "@/components/service/PianoShiftingContent";

import WhyChoose from "@/components/service/WhyChoose";
import Title from "@/components/Title";

const chooseData = [
  {
    id: 1,
    title: "Seamless Project Management",
    details:
      " From the moment you book, we assign a coordinator to manage your move, keeping you informed at every step.",
  },
  {
    id: 2,
    title: "Trained & Trusted Movers",
    details:
      "Our team is experienced in handling sensitive items like pianos, antiques, and artwork with care.",
  },
  {
    id: 3,
    title: "Tailored Solutions",
    details:
      "We offer flexible booking options and services based on your specific piano type and location.",
  },
  {
    id: 4,
    title: "Efficiency & Care",
    details:
      "We move quickly without compromising on safety, saving you time and worry.",
  },
];
const faqData = [
  {
    id: 1,
    title: "Do you charge extra for stairs or tight spaces?",
    sub_title:
      "Yes, a small surcharge may apply for stairs or tricky access. We'll include this in your quote.",
  },
  {
    id: 2,
    title: "Can you move grand pianos or just uprights?",
    sub_title:
      "We move both types! Let us know the model and we’ll prepare the right gear.",
  },
  {
    id: 3,
    title: "Is your team trained for piano moving?",
    sub_title:
      "Yes, our movers are trained in safe piano handling and positioning.",
  },
  {
    id: 4,
    title: "Do you move pianos for schools or events?",
    sub_title:
      "Yes, we work with schools, venues, and private clients for both one-time and recurring piano moves.",
  },
  {
    id: 5,
    title: "What’s the cost to move a piano locally?",
    sub_title:
      "Prices typically range from $150 to $350 depending on access and piano type.",
  },
  {
    id: 6,
    title: "Can you move a piano upstairs?",
    sub_title:
      "Yes, but stair fees may apply depending on weight, angle, and difficulty.",
  },
];

export const metadata = {
  title: "Best & Cheapest Professional Piano Movers in Christchurch",
  description:
    "Hire trusted professional piano movers in Christchurch. Safe, careful, and reliable service for your piano. Book today for smooth moving support!",
  openGraph: {
    title: "Best & Cheapest Professional Piano Movers in Christchurch",
    description:
      "Hire trusted professional piano movers in Christchurch. Safe, careful, and reliable service for your piano. Book today for smooth moving support!",
    url: "http://rmmovingexpress.com/service/piano-shifting",
    siteName: "Rm Moving Express",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Cheap professional piano movers in christchurch",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best & Cheapest Professional Piano Movers in Christchurch",
    description:
      "Hire trusted professional piano movers in Christchurch. Safe, careful, and reliable service for your piano. Book today for smooth moving support!",
    images: ["/cover.png"],
  },
  metadataBase: new URL("http://rmmovingexpress.com"),
};

export default function PianoShifting() {
  return (
    <IntersectionAnimationWrapper>
      <Header />
      <PageSection
        page_title="Piano Shifting Services"
        page_sub_title="Moving a piano isn't just about strength — it's about precision, care, and experience. At RM Moving Express, we specialize in safe and professional piano shifting across New Zealand, ensuring your valuable instrument arrives in perfect condition."
      />
      <PianoShiftingContent />
      <WhyChoose
        choose_title="Why Choose RM Moving Express?"
        choose_subtitle="Specialized equipment and skilled hands to move your piano safely.
We treat your instrument with the care it deserves."
        chooseData={chooseData}
      />
      <HelpFast
        title="Need to Move a Piano?"
        description="Moving a piano is no ordinary job—and we treat it like the treasure it is. Our team is trained to handle piano shifting safely, efficiently, and affordably.
From upright to baby grand, we’ll make sure your instrument is transported without a scratch.
"
      />
      <Title title="Faqs" subtitle="Piano Shifting" />
      <ServiceFaq faqsData={faqData} />
    </IntersectionAnimationWrapper>
  );
}
