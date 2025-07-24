import ServiceFaq from "@/components/faq/ServiceFaq";
import Header from "@/components/header";
import IntersectionAnimationWrapper from "@/components/IntersectionAnimationWrapper";
import CleaningContent from "@/components/service/CleaningContent";
import HelpFast from "@/components/service/HelpFast";

import PageSection from "@/components/service/PageSection";

import WhyChoose from "@/components/service/WhyChoose";
import Title from "@/components/Title";

const chooseData = [
  {
    id: 1,
    title: "Move-In/Move-Out Cleaning",
    details:
      "Thorough cleaning of kitchens, bathrooms, living areas, and more.",
  },
  {
    id: 2,
    title: "Decluttering Support",
    details:
      "We help you sort, pack, and remove unnecessary items before the big day.",
  },
  {
    id: 3,
    title: "Eco-Friendly Disposal",
    details:
      "We donate or responsibly dispose of unwanted items whenever possible.",
  },
  {
    id: 4,
    title: "Flexible Scheduling",
    details: "Book your service at your convenience, even on short notice.",
  },
  {
    id: 4,
    title: "Affordable Add-On Service",
    details: "Combine it with your move for a bundled discount.",
  },
];

const faqData = [
  {
    id: 1,
    title: "Do you offer cleaning after moving out?",
    sub_title:
      "Yes! We provide full end-of-tenancy cleaning and decluttering services to help you hand over a clean property stress-free.",
  },
  {
    id: 2,
    title: "Can I use this service without booking a move?",
    sub_title:
      " Absolutely. Our cleaning and decluttering service is available as a standalone offering—even if you're not moving with us.",
  },
  {
    id: 3,
    title: "What happens to the items I want to get rid of?",
    sub_title:
      " We can help you donate, dispose, or recycle unwanted items responsibly. Just let us know your preference.",
  },
  {
    id: 4,
    title: "How much does cleaning and decluttering cost?",
    sub_title:
      "Prices vary depending on the size of the property and amount of work. Get in touch for a free quote tailored to your needs.",
  },
];

export const metadata = {
  title: "Professional cleaning and decluttering services Christchurch",
  description:
    "Professional cleaning and decluttering services in Christchurch. Make your space spotless & organized. Book trusted experts today!",
  openGraph: {
    title: "Professional cleaning and decluttering services Christchurch",
    description:
      "Professional cleaning and decluttering services in Christchurch. Make your space spotless & organized. Book trusted experts today!",
    url: "http://rmmovingexpress.com/service/cleaning-decluttering",
    siteName: "Rm Moving Express",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Professional cleaning and decluttering services Christchurch",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional cleaning and decluttering services Christchurch",
    description:
      "Professional cleaning and decluttering services in Christchurch. Make your space spotless & organized. Book trusted experts today!",
    images: ["/cover.png"],
  },
  metadataBase: new URL("http://rmmovingexpress.com"),
};

export default function CleaningDecluttering() {
  return (
    <IntersectionAnimationWrapper>
      <Header />
      <PageSection
        page_title="Cleaning and Decluttering Services"
        page_sub_title="A fresh start begins with a clean space. Moving Express offers professional cleaning and decluttering before or after your move to make transitions easier.
"
      />
      <CleaningContent />
      <WhyChoose
        choose_title="What You Get with Our Cleaning & Decluttering"
        choose_subtitle="We help you clean, clear, and refresh your space—no mess, no stress.
Fast, affordable, and perfect for move-outs or general home resets."
        chooseData={chooseData}
      />
      <HelpFast
        title="Need Help with Cleaning & Decluttering?"
        description="Moving out or refreshing your space? Our team can handle your cleaning and decluttering needs quickly and affordably. We help you clear out the mess, sort what matters, and leave your space spotless.
Whether it's a pre-move cleanup or post-move refresh, we’ll take care of it all—saving you time, stress, and energy. Our rates are competitive, and we always work to fit your schedule."
      />
      <Title title="Faqs" subtitle="– Office Furniture Moving" />
      <ServiceFaq faqsData={faqData} />
    </IntersectionAnimationWrapper>
  );
}
