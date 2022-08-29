import ProgressBar from "../components/ProgressBar"

function Skills() {
	return (
		<div className="page right active">
			<h2>Skills</h2>
			<div className="small-divider"></div>
			<div style={{paddingLeft: "15rem", paddingBottom: "30rem"}}>
				<h4>
					{"<>"}Web Skills{"</>"}
				</h4>
				<div className="skills">
					<p>React</p>
					<ProgressBar id="pg1" color="primary" progress={80} />
					<p>Django</p>
					<ProgressBar id="pg2" color="primary" progress={70} />
					<p>Firebase</p>
					<ProgressBar id="pg3" color="primary" progress={60} />
					<p>React Native</p>
					<ProgressBar id="pg4" color="primary" progress={70} />
				</div>
				<div className="small-divider"></div>
				<div>
					<h4>
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
				<div className="small-divider"></div>
				<div>
					<h4>
						{"<>"}Technologies Known{"</>"}
					</h4>
					<p>Git and GitHub</p>
					<ProgressBar id="pg17" color="tertiary" progress={85} />
					<p>Vite + React TS</p>
					<ProgressBar id="pg12" color="tertiary" progress={80} />
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
	)
}

export default Skills
