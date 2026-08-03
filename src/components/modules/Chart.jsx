import styles from "./Chart.module.css";
import { convertData } from "../../helpers/ConvertData";
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

  return (
    <div className={styles.container}>
      <span className={styles.close} onClick={closeHandler}>
        x
      </span>
      <div className={styles.chart}>
        <div className={styles.graph}>
          <ChartComponent data={data} type={type} />
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
