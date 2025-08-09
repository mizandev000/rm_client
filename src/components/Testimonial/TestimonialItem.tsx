import { TestimonialPropsItem } from "@/@types/home";
import Image from "next/image";
import styles from "../../styles/component/_testimonial.module.scss";
import TextAvatar from "../avatar/TextAvatar";

export default function TestimonialItem(props: TestimonialPropsItem) {
  return (
    <div className={styles.testimonialSliderWrap}>
      <div className={styles.testimonialHead}>
        <div className={styles.testimonialHeadLeft}>
          {props.photo ? (
            <>
              <div className={styles.testimonialImg}>
                <Image
                  width={90}
                  height={90}
                  src={props.photo}
                  alt={props.name}
                />
              </div>
            </>
          ) : (
            <TextAvatar name={props.name} />
          )}

          <div className={styles.testimonialName}>
            <h3>{props.name}</h3>
            <h6>2025-01-25</h6>
          </div>
        </div>

        <Image width={20} height={20} src={"./google.svg"} alt={props.name} />
      </div>
      <div className={styles.testimonialStar}>
        <Image width={17} height={17} src={"./star.svg"} alt={props.name} />
        <Image width={17} height={17} src={"./star.svg"} alt={props.name} />
        <Image width={17} height={17} src={"./star.svg"} alt={props.name} />
        <Image width={17} height={17} src={"./star.svg"} alt={props.name} />
        <Image width={17} height={17} src={"./star.svg"} alt={props.name} />
        <div className={styles.verifiedReview}>
          <div className={styles.reviewNot}>
            Trustindex verifies that the original source of the review is
            Google.
          </div>
        </div>
      </div>

      <div className={styles.messageWrap}>
        <h5>{props.message}</h5>
      </div>
    </div>
  );
}
