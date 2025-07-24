import { ChooseDataProps, ChooseProps } from "@/@types/service";
import styles from "../../styles/component/service/_why_choose.module.scss";
import Title from "../Title";

export default function WhyChoose(props: ChooseProps) {
  return (
    <div className="container">
      <div className="row">
        <div className={`reveal ${styles.whyChoose}`}>
          <Title title={props.choose_title} subtitle={props.choose_subtitle} />

          <div className={`fadeup-sm ${styles.whyChooseList}`}>
            <ul>
              {props?.chooseData ? (
                <>
                  {props.chooseData.map((item: ChooseDataProps) => (
                    <li key={item.id}>
                      <span>{item.title}:</span>
                      {item.details}
                    </li>
                  ))}
                </>
              ) : (
                <div className="errorTx">Data Not Found</div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
