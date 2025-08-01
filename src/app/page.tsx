import GoogleMap from "@/components/GoogleMap";
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
  title: "Home | Rm Moving Express",
  description:
    "Planning a move across islands? Our North & South Island moving team offers smooth, safe, and fast service. Book now for a stress-free relocation!",
  openGraph: {
    title: "Home | Rm Moving Express",
    description:
      "Planning a move across islands? Our North & South Island moving team offers smooth, safe, and fast service. Book now for a stress-free relocation!",
    url: "http://rmmovingexpress.com",
    siteName: "Rm Moving Express",
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
    title: "Home | Rm Moving Express",
    description:
      "Planning a move across islands? Our North & South Island moving team offers smooth, safe, and fast service. Book now for a stress-free relocation!",
    images: ["/cover.png"],
  },
  metadataBase: new URL("http://rmmovingexpress.com"),
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
    <main className={`${styles.main}`}>
      <IntersectionAnimationWrapper>
        <HeaderTransparent />
        <Banner />
        <div className={styles.home}>
          <HomeAbout />
          <HomeService />
          <TestimonialSlider />
          <HomeQuote />
          <GoogleMap />
        </div>
        {/* <HomeStep /> */}
      </IntersectionAnimationWrapper>
    </main>
  );
}
