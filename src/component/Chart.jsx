import { Bar } from "react-chartjs-2";
import {
	BarElement,
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	Title,
	Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip);
const Chart = () => {
	const data = {
		labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
		datasets: [
			{
				backgroundColor: "hsl(10, 79%, 65%)",
				hoverBackgroundColor: "hsl(186, 34%, 60%)",
				borderRadius: 3,
				responsive: true,
				data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
			},
		],
	};
	return (
		<section className="graph-container">
			{/* section containing graph */}
			<section>
				<h3>Spending - Last 7 days</h3>
				<div className="bar-chart">
					<Bar style={{ cursor: "pointer" }} data={data} />
				</div>
				<hr />
			</section>
			{/* footer */}
			<footer className="footer">
				<p>Total this month</p>
				<div>
					<span className="price">$478.33</span>
					<p>
						<span className="rate">+2.4%</span>
						from last month
					</p>
				</div>
			</footer>
		</section>
	);
};

export default Chart;
