import HeaderTransparent from "@/components/header/HeaderTransparent";
import Banner from "@/components/home/banner/Banner";
import HomeAbout from "@/components/home/HomeAbout";
import HomeService from "@/components/home/HomeService";
import HomeQuote from "@/components/HomeQuote";
import IntersectionAnimationWrapper from "@/components/IntersectionAnimationWrapper";
import TestimonialSlider from "@/components/Testimonial/TestimonialSlider";
import styles from "../styles/page/_home.module.scss";
// gsap.registerPlugin(ScrollTrigger);

export const metadata = {
  title: "Contact Us | Pie Solutions",
  description:
    "Get in touch with Pie Solutions' team for business modernization services, inquiries, and partnership opportunities.",
  openGraph: {
    title: "Contact Us | Pie Solutions",
    description:
      "Get in touch with Pie Solutions' team for business modernization services, inquiries, and partnership opportunities.",
    url: "https://www.piesolutions.ai/contact",
    siteName: "Pie Solutions",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Pie Solutions - Business Modernization Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Pie Solutions",
    description:
      "Get in touch with Pie Solutions' team for business modernization services, inquiries, and partnership opportunities.",
    images: ["/cover.png"],
  },
  metadataBase: new URL("https://www.piesolutions.ai"),
};

export default function Home() {
  // const lazyRoot = useRef(null);

  // useEffect(() => {
  //   gsap.fromTo(
  //     "#box a",
  //     { opacity: 0, y: -10, scale: 0 },
  //     {
  //       y: 0,
  //       scale: 1,
  //       delay: 1,
  //       opacity: 1,
  //       stagger: 0.2,
  //       duration: 0.3,
  //       ease: "power2.out",
  //     }
  //   );
  // }, []);

  return (
    <main className={`${styles.main} containertest`}>
      <IntersectionAnimationWrapper>
        <HeaderTransparent />
        <Banner />
        <HomeAbout />
        <HomeService />
        <TestimonialSlider />
        <HomeQuote />
        {/* <HomeStep /> */}
      </IntersectionAnimationWrapper>
    </main>
  );
}
