import "./App.css";
import Header from "./component/Header";
import Chart from "./component/Chart";

const App = () => {
	return (
		<main className="container">
			<article className="card">
				<Header />
				<Chart />
			</article>
		</main>
	);
};

export default App;
