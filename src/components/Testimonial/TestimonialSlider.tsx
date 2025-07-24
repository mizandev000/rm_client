"use client";
import { TestimonialPropsItem } from "@/@types/home";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../../styles/component/_testimonial.module.scss";
import Title from "../Title";
import TestimonialItem from "./TestimonialItem";

const testimonialData: TestimonialPropsItem[] = [
  {
    message:
      "We had a fantastic experience with this moving company. 10/10 Russel and his team fantastic. Deepu and Arun were incredibly supportive, well-organized, and efficient. They made sure everything was handled perfectly, and we didn’t have to worry about leaving anything behind. Their flexibility was great—we could easily communicate our needs, and they adapted smoothly. They worked quickly but carefully, ensuring everything was transported safely. Highly recommend their service to anyone looking for a stress-free move!",
    location: "Long distance House moving, Linwood ",
    name: "Yohan Basnayaka",
    photo: "/about/1.jpg",
  },
  {
    message:
      "10/10 recommend Russell and his amazing team. We had 2 men move our entire house in 3 trips over the space of 7 hours. I was blown away with their loading and unloading techniques I had to stand and watch them a few times because they made the impossible possible.Our men worked flawlessly together and communicated clearly. So professional and respectful with all our requests and personal items. If we move again in the future there is no doubt I would use this company again, and I will be recommending to all of my friends and family.",
    location: "Address needed",
    name: "Harriet van Rooyen",
    photo: "/about/2.jpg",
  },
  {
    message:
      "Thank you so much for making my move that bit less stressful the guys were such a big help would definitely recommend",
    name: "Melissa Mc",
    location: "Address needed",
    photo: "/about/3.jpg",
  },
  {
    message:
      "Very satisfied with the moving process. Najib was competent with his job. Had a good chat with him along the way too. Highly recommended.",
    location: "Address needed",
    name: "Christophilarry Alex",
    photo: "/about/3.jpg",
  },
  {
    message:
      "highly recommend this guy for transport things, nicely care and fair rates.thanks",
    location: "Address needed",
    name: "Maryann Cain",
    photo: "/about/3.jpg",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function TestimonialSlider() {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);
  return (
    <div className={styles.testimonial}>
      <div className="container">
        <div className="row">
          <Title title="Testimonials" subtitle="See what our clients say" />
        </div>
      </div>
      {initialRenderComplete ? (
        <>
          {testimonialData ? (
            <>
              <Carousel
                // autoPlay
                infinite={true}
                responsive={responsive}
                additionalTransfrom={0}
                showDots={true}
                className={styles.serviceSlider}
                dotListClass={`${styles.testimonialDotList} testimonial-dot-list`}
                arrows={false}
                autoPlaySpeed={5000}
                centerMode={false}
                containerClass="container-with-dots"
                draggable
                focusOnSelect={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
              >
                {testimonialData.map((item: TestimonialPropsItem) => (
                  <TestimonialItem
                    message={item.message}
                    location={item.location}
                    name={item.name}
                    photo={item.photo}
                  />
                ))}
              </Carousel>
            </>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
