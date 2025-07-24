import ServiceFaq from "@/components/faq/ServiceFaq";
import Header from "@/components/header";
import IntersectionAnimationWrapper from "@/components/IntersectionAnimationWrapper";
import HelpFast from "@/components/service/HelpFast";

import PageSection from "@/components/service/PageSection";
import SeniorMoversContent from "@/components/service/SeniorMoversContent";

import WhyChoose from "@/components/service/WhyChoose";
import Title from "@/components/Title";

const chooseData = [
  {
    id: 1,
    title: "Personalized Assistance",
    details: "Help with packing, unpacking, and settling into the new home.",
  },
  {
    id: 2,
    title: "Friendly Movers",
    details: "Our crew treats clients like family.",
  },
  {
    id: 3,
    title: "Flexible Timing",
    details: "We work around your preferred moving hours.",
  },
  {
    id: 4,
    title: "Safe & Gentle Handling",
    details: "We treat every item and person with the utmost care.",
  },
  {
    id: 4,
    title: "Stress-Free Transitions",
    details: "Support throughout the moving day to keep it smooth and easy.",
  },
];

const faqData = [
  {
    id: 1,
    title: "Can you help with sorting and packing?",
    sub_title:
      "Yes, we offer gentle assistance with organizing, packing, and even light decluttering.",
  },
  {
    id: 2,
    title: "Do you coordinate with family or care facilities?",
    sub_title:
      "Absolutely—we’re happy to work directly with family members or facility staff for a smooth move.",
  },
  {
    id: 3,
    title: "Is your team trained for senior support?",
    sub_title:
      "Yes, our movers are trained to be patient, courteous, and extra careful.",
  },
  {
    id: 4,
    title: "Do you offer moving services for retirement villages?",
    sub_title:
      "Yes, we regularly help seniors transition to retirement homes or aged care facilities.",
  },
  {
    id: 5,
    title: "Can you assist with downsizing or donating items?",
    sub_title:
      "Yes, we can help sort, donate, or dispose of unwanted belongings as part of the move.",
  },
  {
    id: 6,
    title: "Is this service suitable for seniors with mobility issues?",
    sub_title:
      " Absolutely. Our team is trained to assist gently, with care, patience, and respect at every step.",
  },
];

export const metadata = {
  title: "Caring & Reliable Senior Movers Near You",
  description:
    "Moving for seniors made easy and gentle. Our senior movers offer trusted, stress-free help. Book today for safe and friendly relocation support!",
  openGraph: {
    title: "Caring & Reliable Senior Movers Near You",
    description:
      "Moving for seniors made easy and gentle. Our senior movers offer trusted, stress-free help. Book today for safe and friendly relocation support!",
    url: "http://rmmovingexpress.com/service/senior-movers",
    siteName: "Rm Moving Express",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Caring Senior Movers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caring & Reliable Senior Movers Near You",
    description:
      "Moving for seniors made easy and gentle. Our senior movers offer trusted, stress-free help. Book today for safe and friendly relocation support!",
    images: ["/cover.png"],
  },
  metadataBase: new URL("http://rmmovingexpress.com"),
};

export default function SeniorMovers() {
  return (
    <IntersectionAnimationWrapper>
      <Header />
      <PageSection
        page_title="Senior Movers"
        page_sub_title="Compassionate, professional moving services for seniors — making relocation smooth and worry-free for older adults."
      />
      <SeniorMoversContent />
      <WhyChoose
        choose_title="What You Get with Senior Moving Services"
        choose_subtitle="Gentle, respectful moving support tailored for seniors.
We handle the heavy work while keeping things comfortable and clear."
        chooseData={chooseData}
      />
      <HelpFast
        title="Helping Seniors Move with Care?"
        description="We offer specialized moving services for seniors, focused on comfort, care, and clear communication. Our team ensures a smooth, respectful moving experience every step of the way.
        <br/><br/>
        Whether downsizing or transitioning to assisted living, we’re here to help—gently and affordably.
        "
      />
      <Title title="Faqs" subtitle="Senior Moving" />
      <ServiceFaq faqsData={faqData} />
    </IntersectionAnimationWrapper>
  );
}
