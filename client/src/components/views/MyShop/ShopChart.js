import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

function ShopChart(props) {
	console.log(props);
	const [dataShop, setDataShop] = useState();
	const options = {
		onClick: (e, element) => {
			if (element.length > 0) {
				// const valueOb = { [e.chart.tooltip.dataPoints[0].label]: e.chart.tooltip.dataPoints[0].formattedValue };
				// const dataShop = { [e.chart.tooltip.dataPoints[0].label]: props.dataTime.map((x) => Object.values(x).map((xx) => Object.values(xx)[0])[0])[0] };
				const dataShop = {};
				props.dataTime.forEach((x) => {
					console.log("x", x);
					if (Object.keys(x)[0] === e.chart.tooltip.dataPoints[0].label) {
						Object.values(x).forEach((xx) => {
							dataShop[e.chart.tooltip.dataPoints[0].label] = Object.values(xx)[0];
						})
					}
				})
				// if (dataShop.map((e) => Object.keys(e)[0]).indexOf(Object.keys(valueOb)[0]) === -1) {
				setDataShop(dataShop);
				// }
				console.log("dataShop", dataShop);
				// Object.values(dataShop).map((e) =>
				// 	console.log(e)
				// )
			}
		},

		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};
	const data = {
		labels: props.dataTime?.map((e) => Object.keys(e)[0]),
		datasets: [
			{
				label: 'number of selling products',
				data: props.dataTime
					.map((e) => Object.values(e).map((ee) => Object.keys(ee)[0]))
					.reduce((acc, cur) => {
						return [...acc, ...cur];
					}, []),
				fill: false,
				backgroundColor: 'rgb(0, 0, 0)',
				borderColor: 'rgb(0, 0, 0)',
			},
		],
	};
	return (
		<div
			style={{
				width: '75%',
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				margin: 'auto',
			}}
		>
			<div className='header'>
				<h1 className='title'>My Shop</h1>
			</div>
			<Line data={data} options={options} ref={(r) => console.log(r)} />
			<table className='table table-striped table-hover'>
				<thead>
					<tr>
						<th scope='col' style={{ fontSize: '23px' }}>
							Title
						</th>
						<th scope='col' style={{ fontSize: '23px' }}>
							Quantity
						</th>
						<th scope='col' style={{ fontSize: '23px' }}>
							Cash
						</th>
					</tr>
				</thead>

				{/* {dataShop?.length > 0
					? dataShop.map((e) => (
						<tbody>
							<tr className='table-light'>
								<td style={{ fontWeight: '500' }}>{Object.keys(e)}</td>
								<td style={{ fontWeight: '500' }}>{Object.values(e)}</td>
								)
							</tr>
							)
						</tbody>
					))
					: null} */}
				{dataShop ?
					Object.values(dataShop).map((e) => (
						<>
							{e.map((card) =>
								<tbody>
									<tr className='table-light'>
										{card.map((infor) =>
											<td style={{ fontWeight: '500' }}>{infor}</td>
										)}
									</tr>
								</tbody>
							)}
						</>
					))
					: null}
			</table>
		</div >
	);
}

export default ShopChart;
