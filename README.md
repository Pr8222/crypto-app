# Crypto App 🚀

A dynamic cryptocurrency tracking application built with React and Vite.

## Badges

[![React](https://img.shields.io/badge/React-19.2.7-blue)]
[![Vite](https://img.shields.io/badge/Vite-8.1.1-green)]
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)]
[![React Router](https://img.shields.io/badge/React%20Router-DOM-orange)]

---

## Description 📝

This project is a React-based single-page application that allows users to track various cryptocurrencies. It fetches real-time data from an external API to display cryptocurrency prices, market caps, and trading volumes. Users can search for specific cryptocurrencies, switch between different fiat currencies (USD, EUR, JPY), view historical price data in interactive charts, and navigate through a paginated list of available coins.

---

## Table of Contents 📜

- [Project Title & Badges](#crypto-app-🚀)
- [Description](#description-📝)
- [Table of Contents](#table-of-contents-📜)
- [Features](#features-🌟)
- [Tech Stack](#tech-stack-🛠️)
- [Installation](#installation-⚙️)
- [Usage](#usage-💡)
- [Project Structure](#project-structure-📁)
- [Contributing](#contributing-🤝)
- [License](#license-📜)
- [Important Links](#important-links-🔗)
- [Footer](#footer-🌟)

---

## Features 🌟

- **Real-time Data Fetching**: Displays up-to-date cryptocurrency information.
- **Search Functionality**: Allows users to quickly find specific cryptocurrencies.
- **Currency Conversion**: Supports USD, EUR, and JPY as display currencies.
- **Interactive Charts**: Visualizes historical price, market cap, and volume data for selected cryptocurrencies.
- **Pagination**: Enables efficient navigation through a large list of cryptocurrencies.
- **Responsive Design**: Adapts to different screen sizes (basic support observed).
- **Error Handling**: Basic error handling for API requests.

---

## Tech Stack 🛠️

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Language**: JavaScript (ES6+)
- **Styling**: CSS Modules
- **Charting Library**: Recharts
- **UI Components**: `react-loader-spinner`
- **State Management**: React Hooks (`useState`, `useEffect`)
- **HTTP Client**: `fetch` API
- **Linting**: ESLint

---

## Installation ⚙️

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Pr8222/crypto-app.git
    cd crypto-app
    ```

2.  **Install Dependencies:**
    The project uses npm as its package manager. Install the necessary dependencies using:
    ```bash
    npm install
    ```

3.  **Run the Development Server:**
    Start the Vite development server to see the application in action:
    ```bash
    npm run dev
    ```

This will start the development server, and you can access the application in your browser, usually at `http://localhost:5173`.

---

## Usage 💡

This application serves as a cryptocurrency tracker. Here's how you can use it:

1.  **View Cryptocurrency List**: Upon loading, the app displays a paginated list of popular cryptocurrencies with their name, price, 24-hour change, and total volume.
2.  **Search for Cryptocurrencies**: Use the search bar at the top to find specific coins. As you type, matching results will appear.
3.  **Change Currency**: Select your preferred fiat currency (USD, EUR, JPY) from the dropdown menu next to the search bar.
4.  **View Coin Details and Chart**: Click on a cryptocurrency's symbol (e.g., BTC, ETH) in the table to open an interactive chart. This chart displays historical data for:
    *   **Prices**
    *   **Market Caps**
    *   **Total Volumes**
    You can switch between these views using the buttons below the graph. The chart also shows the current price, ATH (All-Time High), and Market Cap for the selected coin.
5.  **Navigate Pages**: Use the pagination controls at the bottom of the table to browse through different pages of the cryptocurrency list.

---

## How to Use 🤔

This project is a demonstration of building a functional cryptocurrency dashboard using React. It showcases:

-   **API Integration**: Fetching data from a cryptocurrency API (e.g., CoinGecko, though the specific endpoint is abstracted via `services/CryptoApi.js`).
-   **Component-Based Architecture**: Utilizing React components for different parts of the UI (Search, Table, Chart, Pagination, Layout).
-   **State Management**: Managing application state (page number, currency, chart data) using `useState` and `useEffect` hooks.
-   **Dynamic Rendering**: Conditionally rendering elements like loading spinners and the chart.
-   **Styling**: Applying styles using CSS Modules for component-scoped CSS.

**Real-world Use Case**: This app can be a foundation for a more complex cryptocurrency portfolio tracker, a market analysis tool, or an educational resource for learning about cryptocurrency data visualization.

---

## Project Structure 📁

```
crypto-app/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── chart-down.svg
│   │   └── chart-up.svg
│   ├── components/
│   │   ├── modules/
│   │   │   ├── Chart.jsx
│   │   │   ├── Chart.module.css
│   │   │   ├── Pagination.jsx
│   │   │   ├── Pagination.module.css
│   │   │   ├── Search.jsx
│   │   │   ├── Search.module.css
│   │   │   ├── TableCoin.jsx
│   │   │   └── TableCoin.module.css
│   │   └── templates/
│   │       └── HomePage.jsx
│   ├── helpers/
│   │   ├── ConvertData.js
│   │   └── CurrencySymbols.js
│   ├── layouts/
│   │   ├── Layout.jsx
│   │   └── Layout.module.css
│   ├── services/
│   │   └── CryptoApi.js  (Assumed based on usage in components)
│   ├── App.jsx
│   ├── global.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## API Reference 🌐

This project interacts with external APIs to fetch cryptocurrency data. The primary API endpoints used are:

-   **Coin List**: `getCoinList(page, currency)` (e.g., `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`)
-   **Search Coin**: `searchCoin(query)` (e.g., `https://api.coingecko.com/api/v3/search?query=${query}`)
-   **Market Chart**: `marketChart(id)` (e.g., `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=1`)

*Note: The exact base URL for these services is abstracted in `src/services/CryptoApi.js` and is assumed to be using a public API like CoinGecko based on common practices.*

---

## Contributing 🤝

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix (`git checkout -b feature/AmazingFeature`).
3.  Make your changes and commit them (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## License 📜

This project is not explicitly licensed. For more information, please refer to the repository or contact the author.

---

## Important Links 🔗

-   **Repository**: [https://github.com/Pr8222/crypto-app](https://github.com/Pr8222/crypto-app)
-   **Author's Profile**: [https://github.com/Pr8222](https://github.com/Pr8222)
-   **Author's Website**: [https://pr8222.github.io](https://pr8222.github.io)

---

## Footer 🌟

Made with determination and discipline by Parsa Rohani.

© 2023 Crypto App

[Fork on GitHub](https://github.com/Pr8222/crypto-app/fork)
[Star on GitHub](https://github.com/Pr8222/crypto-app/stargazers)
[Watch on GitHub](https://github.com/Pr8222/crypto-app/watchers)
[Open an Issue](https://github.com/Pr8222/crypto-app/issues)


---
**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**