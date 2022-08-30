import "./Skills.css"
import ProgressBar from "../components/ProgressBar"
import Ball from "../animation/Ball"
import Square from "../animation/Square"

function Skills() {
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
			<div className="page right active">
				<h2>Skills</h2>
				<div className="small-divider"></div>
				<div className="skill-elems">
					<h4 className="skills-head">
						{"<>"}Web Skills{"</>"}
					</h4>
					<div className="skills">
						<p>React TS/JS + Vite</p>
						<ProgressBar id="pg1" color="primary" progress={80} />
						<p>Django</p>
						<ProgressBar id="pg2" color="primary" progress={70} />
						<p>Firebase</p>
						<ProgressBar id="pg3" color="primary" progress={60} />
						<p>React Native (TS/JS)</p>
						<ProgressBar id="pg4" color="primary" progress={70} />
					</div>
					<div className="medium-divider"></div>
					<div className="skills">
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
								color="var(--inverse-surface)"
							/>
							<Ball
								color="var(--primary)"
								top="2px"
								left="60vw"
								size="50px"
							/>
						<h4 className="skills-head">
							{"<>"}Programming Languages{"</>"}
						</h4>
						<p>TypeScript</p>
						<ProgressBar id="pg5" color="secondary" progress={80} />
						<p>JavaScript</p>
						<ProgressBar id="pg6" color="secondary" progress={80} />
						<p>Python</p>
						<ProgressBar id="pg7" color="secondary" progress={60} />
						<p>C</p>
						<ProgressBar id="pg8" color="secondary" progress={60} />
						<p>Java</p>
						<ProgressBar id="pg9" color="secondary" progress={70} />
						<p>HTML5</p>
						<ProgressBar id="pg10" color="secondary" progress={95} />
						<p>CSS3</p>
						<ProgressBar id="pg11" color="secondary" progress={90} />
					</div>
					<div className="medium-divider"></div>
					<div className="skills">
							<Square
								left="2vw"
								top="20vh"
								radius="10px"
								color="var(--primary-container)"
							/>
							<Ball color="var(--error)" top="10vh" left="30vw" size="60px" />
							<Square
								left="65vw"
								top="30vh"
								radius="10px"
								color="var(--tertiary-container)"
							/>
						<h4 className="skills-head">
							{"<>"}Technologies Known{"</>"}
						</h4>
						<p>Git and GitHub</p>
						<ProgressBar id="pg17" color="tertiary" progress={85} />
						<p>Material UI</p>
						<ProgressBar id="pg13" color="tertiary" progress={85} />
						<p>Material You (Material Design 3)</p>
						<ProgressBar id="pg14" color="tertiary" progress={75} />
						<p>Operating System</p>
						<ProgressBar id="pg15" color="tertiary" progress={60} />
						<p>Unix and Linux</p>
						<ProgressBar id="pg16" color="tertiary" progress={60} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Skills
