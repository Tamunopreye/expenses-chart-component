const Graph = () => {
	return (
		<section className="graph-container">
			{/* section containing graph */}
			<section>
				<h3>Spending - Last 7 days</h3>
				<div className="bar-chart"></div>
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

export default Graph;
