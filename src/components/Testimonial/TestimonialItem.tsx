import { TestimonialPropsItem } from "@/@types/home";
import Image from "next/image";
import styles from "../../styles/component/_testimonial.module.scss";

export default function TestimonialItem(props: TestimonialPropsItem) {
  return (
    <div className={styles.testimonialSliderWrap}>
      <div className={styles.testimonialImg}>
        <Image
          width={90}
          height={90}
          src={props.photo}
          // src={`${process.env.NEXT_PUBLIC_API_IMAGES_URL}/image/${props.photo}`}
          alt={props.name}
        />
      </div>
      <h3>{props.name}</h3>

      <h5>"{props.message}"</h5>
      <h4>{props.location}</h4>
    </div>
  );
}
