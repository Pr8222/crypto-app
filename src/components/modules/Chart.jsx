import styles from "./Chart.module.css";

import { convertData } from "../../helpers/ConvertData";
import { currencySymbols } from "../../helpers/CurrencySymbols";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  const data = convertData(chart, type);

  const closeHandler = () => {
    setChart(null);
  };

  const typeHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const type = event.target.textContent.toLowerCase().replace(" ", "_");
      setType(type);
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.close} onClick={closeHandler}>
        x
      </span>
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={chart.coin.image} alt={chart.coin.name} />
          <p>{chart.coin.name}</p>
        </div>
        <div className={styles.graph}>
          <ChartComponent data={data} type={type} />
        </div>
        <div className={styles.types} onClick={typeHandler}>
          <button className={type === "prices" ? styles.selected : null}>Prices</button>
          <button className={type === "market_caps" ? styles.selected : null}>Market Caps</button>
          <button className={type === "total_volumes" ? styles.selected : null}>Total Volumes</button>
        </div>
        <div className={styles.details}>
          <div>
            <p>
              Prices:{" "}
              <span>
                {currencySymbols[chart.currency]}
                {chart.coin.current_price}
              </span>
            </p>
          </div>
          <div>
            <p>
              ATH: <span>{chart.coin.ath}</span>
            </p>
          </div>
          <div>
            <p>
              Market Cap: <span>{chart.coin.market_cap}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;

const ChartComponent = ({ data, type }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey={type} stroke="#3874ff" />
        <CartesianGrid stroke="#404042" strokeWidth="2px" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" hide />
        <Legend />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
