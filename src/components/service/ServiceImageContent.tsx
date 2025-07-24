import { ServiceProps } from "@/@types/service";
import styles from "../../styles/component/service/_service_img_content.module.scss";
import ImageResponsive from "../image/ImageResponsive";

export default function ServiceImageContent(props: ServiceProps) {
  return (
    <div className={styles.serviceTopImgWrap}>
      <div className="container">
        <div className="row">
          {props?.position ? (
            <>
              <div className="col-xs-12 col-sm-12 col-md-5 col-xl-5 col-lg-5">
                <div className={`reveal ${styles.serviceTopTx}`}>
                  <h5 className="fadeup-sm">{props.sub_title}</h5>
                  <h2 className="fadeup-sm">{props.title}</h2>
                  <p className="fadeup-sm">{props.description}</p>
                </div>
                <div className={styles.serviceInfo}>
                  <h4>{props.costs_title}</h4>
                  <p>{props.costs_subtitle}</p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-7 col-xl-7 col-lg-7">
                <div className={`reveal ${styles.serviceTopImg}`}>
                  <div className={`image-wrap ${styles.serviceImgOne}`}>
                    <ImageResponsive
                      width={570}
                      height={404}
                      src={props.image}
                      alt={props.title}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-xs-12 col-sm-12 col-md-7 col-xl-7 col-lg-7">
                <div className={`reveal ${styles.serviceTopImg}`}>
                  <div className={`image-wrap ${styles.serviceImgOne}`}>
                    <ImageResponsive
                      width={570}
                      height={404}
                      src={props.image}
                      alt={props.title}
                    />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-5 col-xl-5 col-lg-5">
                <div className={`reveal ${styles.serviceTopTx}`}>
                  <h5 className="fadeup-sm">{props.sub_title}</h5>
                  <h2 className="fadeup-sm">{props.title}</h2>
                  <p className="fadeup-sm">{props.description}</p>
                </div>
                <div className={styles.serviceInfo}>
                  <h4>{props.costs_title}</h4>
                  <p>{props.costs_subtitle}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
