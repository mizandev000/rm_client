import ServiceFaq from "@/components/faq/ServiceFaq";
import Header from "@/components/header";
import IntersectionAnimationWrapper from "@/components/IntersectionAnimationWrapper";
import BikeCarBoatTtransportContent from "@/components/service/BikeCarBoatTtransportContent";
import HelpFast from "@/components/service/HelpFast";

import PageSection from "@/components/service/PageSection";

import WhyChoose from "@/components/service/WhyChoose";
import Title from "@/components/Title";

const chooseData = [
  {
    id: 1,
    title: "Fully Insured Transport",
    details: "Peace of mind for your valuable car, bike, or boat.",
  },
  {
    id: 2,
    title: "Nationwide Coverage",
    details: "We transport to and from any city in NZ.",
  },
  {
    id: 3,
    title: "Specialty Carriers",
    details: "Equipped trailers designed for different vehicle types.",
  },
  {
    id: 4,
    title: "Pickup & Drop-Off Flexibility",
    details: "Home, depot, or specified location — we’re flexible.",
  },
  {
    id: 4,
    title: "Affordable & Transparent Rates",
    details: "No surprises — you get a full quote upfront.",
  },
];
const faqData = [
  {
    id: 1,
    title: "Can you transport non-running vehicles?",
    sub_title:
      "Yes, as long as we’re informed in advance so we can bring the right equipment.",
  },
  {
    id: 2,
    title: "Is vehicle transport insured?",
    sub_title:
      "Yes, all vehicle moves are covered by our basic insurance policy.",
  },
  {
    id: 3,
    title: "Do you offer door-to-door delivery?",
    sub_title: "Yes, we aim for direct delivery whenever access allows.",
  },
  {
    id: 4,
    title: "How much does it cost to move a car across NZ?",
    sub_title:
      "Prices vary by distance and vehicle size—starting from $250. Request a quote for exact pricing.",
  },
  {
    id: 5,
    title: "Do I need to empty the fuel tank before transport?",
    sub_title:
      "For safety, we recommend keeping fuel to a minimum—about a quarter tank is ideal.",
  },
  {
    id: 6,
    title: "Can I transport personal items inside the vehicle?",
    sub_title:
      "We generally discourage it, but small, secured items may be allowed with prior notice.",
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
    url: "http://rmmovingexpress.com/service/bike-car-boat-transport",
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

export default function BikeCarBoatTransport() {
  return (
    <IntersectionAnimationWrapper>
      <Header />
      <PageSection
        page_title="Bike, Car & Boat Transport"
        page_sub_title="Need to move your vehicle? We offer professional bike, car, and boat transportation services anywhere in New Zealand."
      />
      <BikeCarBoatTtransportContent />
      <WhyChoose
        choose_title="What You Get with Vehicle Transport"
        choose_subtitle="Safe and reliable transport for vehicles of all sizes.
 We deliver across NZ, with secure handling and quick turnaround."
        chooseData={chooseData}
      />
      <HelpFast
        title="Vehicle to Transport?"
        description="Need to shift a car, bike, or even a boat? We've got the transport solutions to get your vehicle safely where it needs to go.
With careful handling and reliable delivery times, we make vehicle moves simple and stress-free.
"
      />
      <Title title="Faqs" subtitle="Vehicle Transport" />
      <ServiceFaq faqsData={faqData} />
    </IntersectionAnimationWrapper>
  );
}
