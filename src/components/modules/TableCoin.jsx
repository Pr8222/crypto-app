import { RotatingLines } from "react-loader-spinner";

import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import { marketChart } from "../../services/CryptoApi";
import { currencySymbols } from "../../helpers/CurrencySymbols";

import styles from "./TableCoin.module.css";

function TableCoin({ coins, isLoading, currency, setChart }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow
                coin={coin}
                key={coin.id}
                currency={currency}
                setChart={setChart}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoin;

const TableRow = ({ coin, currency, setChart }) => {
  const  {
    id,
    name,
    image,
    current_price,
    symbol,
    price_change_percentage_24h: price_change,
    total_volume,
  } = coin;

  const showChartHandler = async () => {
    try {
      const res = await fetch(marketChart(id, currency));
      const json = await res.json();
      setChart({...json, coin, currency});
    } catch (error) {
      setChart(null);
      console.log(error);
    }
  };

  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showChartHandler}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currencySymbols[currency] ?? ""}
        {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
};
