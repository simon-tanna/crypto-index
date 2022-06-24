import React from "react";

function DisplayData({ cryptoData }) {
	return (
		<div>
			{Object.keys(cryptoData).map((object) => (
				<div key={object}>
					Date: {object} Value: {cryptoData[object]}
				</div>
			))}
		</div>
	);
}

export default DisplayData;
