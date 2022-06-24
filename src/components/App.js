import React, { useEffect, useState } from "react";
import "./App.css";
import Currency from "./Currency";
import DisplayData from "./DisplayData";
import axios from "axios";

function App() {
	const initialCurrency = "aud";
	const [currency, setCurrency] = useState(initialCurrency);
	const [cryptoData, setCryptoData] = useState({});

	const baseUrl =
		"https://api.coindesk.com/v1/bpi/historical/close.json?currency=";
	const getCryptoData = () => {
		axios
			.get(`${baseUrl}${currency}`)
			.then((response) => {
				const cryptoData = response.data.bpi;
				setCryptoData(cryptoData);
			})
			.catch((error) => console.error(`Error: ${error}`));
	};

	const handleCurrency = (value) => {
		setCurrency(value);
	};

	useEffect(
		() => {
			getCryptoData();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[currency]
	);

	return (
		<div>
			<h1>Crypto Index</h1>
			<Currency currency={currency} handleCurrency={handleCurrency} />
			<DisplayData cryptoData={cryptoData} />
		</div>
	);
}

export default App;
