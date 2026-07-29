import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

import { searchCoin } from "../../services/CryptoApi";

import styles from "./Search.module.css";

function Search({ currency, setCurrency }) {
  const [query, setQuery] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    if (!query) {
      setIsLoading(false);
      return;
    }

    const search = async () => {
      try {
        setIsLoading(true);
        setCoins([]);
        const res = await fetch(searchCoin(query), {
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.coins) {
          setIsLoading(false);
          setCoins(json.coins);
        } else alert(json.status.error_message);
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };
    search();
    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      <div className={query && styles.searchResult}>
        {isLoading && (
          <RotatingLines
            
            width="50px"
            height="50px"
            strokeWidth="2"
            strokeColor="#3874ff"
          />
        )}
        <ul>
          {coins.map((c) => (
            <li key={c.id}>
              <img src={c.thumb} alt={c.name} />
              <p>{c.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
