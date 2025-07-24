import { HomeServiceProps } from "@/@types/home";
import styles from "../../styles/component/_homeService.module.scss";

export default function HomeServiceItem(props: HomeServiceProps) {
  return (
    <div className={`reveal ${styles.serviceItem}`}>
      <div className={`fadeup-sm ${styles.serviceContent}`}>
        <i>{props.icon}</i>
        <h2>{props.title}</h2>
        <p>{props.details}</p>
      </div>
      <div className={styles.readMore}>
        <a href="#" className="fadeup-sm">
          Read More
        </a>
      </div>
    </div>
  );
}
