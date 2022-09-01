import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Graph from "./component/Graph";

const App = () => {
	const [data, setData] = useState([
		{
			day: "mon",
			amount: 17.45,
		},
		{
			day: "tue",
			amount: 34.91,
		},
		{
			day: "wed",
			amount: 52.36,
		},
		{
			day: "thu",
			amount: 31.07,
		},
		{
			day: "fri",
			amount: 23.39,
		},
		{
			day: "sat",
			amount: 43.28,
		},
		{
			day: "sun",
			amount: 25.48,
		},
	]);
	return (
		<main className="container">
			<article className="card">
				<Header />
				<Graph />
			</article>
		</main>
	);
};

export default App;
