import React from "react";
import currencies from "../data/currencies.json";

function Currency({ currency, handleCurrency }) {
	return (
		<div>
			<span>Select Your Currency:</span>
			<select
				value={currency}
				onChange={(event) => {
					handleCurrency(event.target.value);
				}}
			>
				{currencies.map(
					(
						object,
						index // the second argument of index is the currency object index
					) => (
						<option key={index} value={object.currency}>
							{object.country}
						</option>
					)
				)}
			</select>
		</div>
	);
}

export default Currency;
