import styles from "./Chart.module.css";
import { convertData } from "../../helpers/ConvertData";
import { useState } from "react";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  convertData(chart, type);
  const closeHandler = () => {
    setChart(null);
  };

  return (
    <div className={styles.container}>
      <span className={styles.close} onClick={closeHandler}>
        x
      </span>
      <div className={styles.chart}></div>
    </div>
  );
}

export default Chart;
