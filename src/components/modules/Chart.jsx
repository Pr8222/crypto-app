import styles from "./Chart.module.css";

function Chart({ setChart }) {
  const closeHandler = () => {
    setChart(null);
  };

  return (
    <div className={styles.container}>
      <span className={styles.close} onClick={closeHandler}>x</span>
      <div className={styles.chart}>

      </div>
    </div>
  );
}

export default Chart;
