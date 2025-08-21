import Team from "@/components/about/Team";
import Header from "@/components/header";
import ImageResponsive from "@/components/image/ImageResponsive";
import IntersectionAnimationWrapper from "@/components/IntersectionAnimationWrapper";
import Title from "@/components/Title";
import styles from "../../styles/component/_about.module.scss";

export default function mepService() {
  return (
    <IntersectionAnimationWrapper>
      <Header />
      <div className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6 col-lg-6">
              <div className={`reveal ${styles.aboutTop}`}>
                <h5 className="fadeup-sm">About Us</h5>
                <h2 className="fadeup-sm">Introducing RM Moving Express</h2>
                <p className="fadeup-sm">
                  At RM Moving Express, we’re more than just movers — we’re your
                  trusted relocation partners across New Zealand. With years of
                  experience in the industry, our team specializes in providing
                  affordable, reliable, and hassle-free moving services tailored
                  to your needs. From house relocations and office moves to
                  piano shifting and vehicle transport, we handle every job with
                  care and professionalism.
                  <br />
                  <br />
                  We pride ourselves on transparent pricing, punctual service,
                  and customer satisfaction. Whether you’re moving locally or
                  across islands, RM Moving Express is here to make the journey
                  smooth, secure, and stress-free. Let us do the heavy lifting —
                  literally.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6 col-lg-6 reveal">
              <div className={`image-wrap ${styles.aboutTop}`}>
                <ImageResponsive
                  width={570}
                  height={304}
                  src="/service/service1.jpg"
                  alt="Expert Cleaning Partner"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <Title
              title="Meet the Team"
              subtitle="Sales, Operations, Marketing or Business Development – we are here to make your moving experience as smooth as possible."
            />
          </div>
          <Team
            img="/about/russel.jpg"
            name="Russel Rahman"
            designation="Operations Manager"
            details=" Rasel is the engine behind RM Moving Express. He oversees daily operations, coordinates logistics, and ensures every job runs smoothly. With a sharp eye for detail and a strong focus on customer care, Rasel is your go-to guy for a seamless moving experience."
          />
          <Team
            img="/about/deepu.jpg"
            name="DEEPU SINGH"
            designation=" Professional Loader"
            details="Deepu Sing  brings strength, speed, and a great attitude to every move. Whether it’s heavy furniture or fragile items, he handles everything with care and precision. His work ethic and reliability have earned him praise from countless happy clients."
          />
          <Team
            img="/about/arun.jpg"
            name="ARUN SINGH "
            designation="Professional Loader"
            details="Arun Sing is all about safety and efficiency. He’s always ready to lend a hand, making sure your belongings are securely packed and transported with minimal hassle. His friendly nature and professionalism make him a key part of every successful move."
          />
        </div>
      </div>
    </IntersectionAnimationWrapper>
  );
}
