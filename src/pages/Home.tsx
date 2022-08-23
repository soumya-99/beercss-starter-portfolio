import "./Home.css"
import mu from "../assets/images/mat_you.png"

function Home() {
	return (
		<div className="page left active">
			<h2>Home</h2>
			<hr />
			<h3 className="typedElem">
				{"<h3>"}Hi.{"</h3>"}
			</h3>
			<p className="body-text">
				I'm <span style={{ color: "var(--tertiary)" }}>Soumyadeep Mondal</span>{" "}
				and I love to code in <span style={{ color: "gold" }}>JavaScript</span>,{" "}
				<span style={{ color: "cornflowerblue" }}>TypeScript</span>, &{" "}
				<span style={{ color: "dodgerblue" }}>Python</span>.{" "}
				<span style={{ color: "skyblue" }}>React</span>,{" "}
				<span style={{ color: "forestgreen" }}>Django</span> &{" "}
				<span style={{ color: "orange" }}>Firebase</span> Lover.
			</p>
			<div>
				<div className="body-elems">
					<img
						className="round extra"
						style={{ width: "50%", height: "50%", borderRadius: "30px" }}
						src={mu}
					/>
					<a
						href="https://m3.material.io/"
						className="chip small-elevate secondary-container"
						style={{ float: "right" }}
						target="_blank"
					>
						<i className="small">call_made</i>
						<span>Click here to learn more</span>
					</a>
				</div>
				<h5>
					Hands dirty with the design concept Material You (Material Design 3)
				</h5>
				{/* @ts-ignore */}
				<marquee>
					"Material Design&#8482;" and "Material You&#8482;" is a TM by Google Inc.
				{/* @ts-ignore */}
				</marquee>
			</div>
		</div>
	)
}

export default Home
