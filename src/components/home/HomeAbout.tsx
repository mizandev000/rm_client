"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "../../styles/component/_homeAbout.module.scss";

export default function HomeAbout() {
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(imgRef.current, {
      scrollTrigger: {
        trigger: imgRef.current,
        scrub: true, // Smooth animation on scroll
        start: "top top",
        end: "+=80%",
        // markers: true,
      },
      right: "100%", // Same as CSS 'right: -300px'
      ease: "none", // Linear animation without easing
    });
  }, []);

  return (
    <div className="container">
      <div className={`reveal ${styles.homeAbout}`}>
        <h4 className="fadeup-sm"> Fast. Reliable. Affordable. Guaranteed.</h4>
        <h1 className="fadeup-sm">Your Trusted House Moving Experts</h1>
        <p className="fadeup-sm">
          Looking for cheap house movers you can count on? RM Moving Express
          offers fast, affordable, and stress-free relocation services across
          New Zealand. As one of the best house movers in the region, we handle
          everything from packing and lifting to secure transport and timely
          delivery. Whether it’s a small apartment or a large family home, we
          tailor every move to fit your needs. We’re proud to be known among the
          most affordable and reliable house movers NZ-wide. Get in touch today
          for a free quote and discover why we’re the top choice for cheap
          movers and professional house shifting services.
        </p>
      </div>
      <div className={styles.homeAboutImgWrap}>
        <div className={styles.homeAboutImgContent} ref={imgRef}>
          <div className={styles.homeAboutImg}>
            {/* <Image
              width={499}
              height={250}
              src="/home/car.png"
              alt="Expert Cleaning Partner"
            /> */}
            <Image
              className="logo"
              width={499}
              height={250}
              src="/home/car.webp"
              alt="Logo"
            />
            {/* <ImageResponsive
              width={300}
              height={304}
              src="/home/car.png"
              alt="Expert Cleaning Partner"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
