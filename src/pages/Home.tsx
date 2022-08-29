import "./Home.css"
import mu from "../assets/images/mat_you.png"
import me2 from "../assets/images/me2.jpg"
import gh from "../assets/icons/github.png"
import youtube from "../assets/icons/youtube.png"
import twit from "../assets/icons/twit.png"
import insta from "../assets/icons/insta.webp"
import fb from "../assets/icons/fb.webp"
import Ball from "../animation/Ball"
import Square from "../animation/Square"

function Home() {
	return (
		<>
			<Ball left="2vw" size="30px" />
			<Square
				left="50vw"
				radius="20px"
				top="30px"
				color="var(--secondary-container)"
			/>
			<Ball left="70vw" top="30px" size="40px" />
			<div className="page left active">
				<h2>Home</h2>
				<div className="small-divider"></div>
				<div className="typedElem">
					<h3>
						{"<>"}Hi.{"</>"}
					</h3>
					<span className="underline"></span>
				</div>
				<div className="body-main">
					<p className="body-text">
						I'm{" "}
						<span style={{ color: "var(--tertiary)" }}>Soumyadeep Mondal</span>{" "}
						and currently I'm creating projects in{" "}
						<span style={{ color: "gold" }}>JavaScript</span>,{" "}
						<span style={{ color: "cornflowerblue" }}>TypeScript</span>, &{" "}
						<span style={{ color: "dodgerblue" }}>Python</span>.{" "}
						<span style={{ color: "skyblue" }}>React</span>,{" "}
						<span style={{ color: "forestgreen" }}>Django</span> &{" "}
						<span style={{ color: "orange" }}>Firebase</span> Lover. I'm a
						full-stack developer. Follow me on...
					</p>
					<img
						className="round me"
						style={{ width: "200px", height: "200px", borderRadius: "50%" }}
						src={me2}
					/>
				</div>
				<div className="social">
					<a className="chip round medium tertiary">
						<img className="responsive" src={gh} />
						<span>GitHub</span>
					</a>
					<a className="chip round medium secondary">
						<img className="responsive" src={insta} />
						<span>Instagram</span>
					</a>
					<a className="chip round medium primary-container">
						<img className="responsive" src={fb} />
						<span>Facebook</span>
					</a>
					<a
						href="https://github.com/soumya-99/"
						className="chip round medium inverse-primary"
					>
						<img className="responsive" src={youtube} />
						<span>YouTube</span>
					</a>
					<a
						href="https://github.com/soumya-99/"
						className="chip round medium tertiary-container"
					>
						<img className="responsive" src={twit} />
						<span>Twitter</span>
					</a>
				</div>
				<div>
					<Ball
						color="var(--tertiary-container)"
						top="10vh"
						left="2vw"
						size="60px"
					/>
					<Square
						left="30vw"
						top="25vh"
						radius="10px"
						color="var(--inverse-primary)"
					/>
					<Ball
						color="var(--tertiary-container)"
						top="2px"
						left="60vw"
						size="50px"
					/>
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
						"Material Design&#8482;" and "Material You&#8482;" is a TM by Google
						Inc.
						{/* @ts-ignore */}
					</marquee>
				</div>
			</div>
		</>
	)
}

export default Home
