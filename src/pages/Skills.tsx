import ProgressBar from "../components/ProgressBar"

function Skills() {
	return (
		<div className="page right active">
			<h2>Skills</h2>
			<div className="small-divider"></div>
			<h4>
				{"<h4>"}Web Skills{"</h4>"}
			</h4>
			<div className="skills">
				<p>React</p>
				<ProgressBar id="pg1" color="green5" progress={80} />
				<p>Django</p>
				<ProgressBar id="pg2" color="red5" progress={70} />
				<p>Firebase</p>
				<ProgressBar id="pg3" color="orange5" progress={60} />
				<p>React Native</p>
				<ProgressBar id="pg4" color="blue5" progress={70} />
			</div>
			<div className="small-divider"></div>
			<div>
				<h4>
					{"<h4>"}Programming Languages{"</h4>"}
				</h4>
				<p>TypeScript</p>
				<ProgressBar id="pg5" color="green6" progress={80} />
				<p>JavaScript</p>
				<ProgressBar id="pg6" color="red6" progress={80} />
				<p>Python</p>
				<ProgressBar id="pg7" color="orange6" progress={60} />
				<p>C</p>
				<ProgressBar id="pg8" color="pink6" progress={60} />
				<p>Java</p>
				<ProgressBar id="pg9" color="purple6" progress={70} />
				<p>HTML5</p>
				<ProgressBar id="pg10" color="teal6" progress={95} />
				<p>CSS3</p>
				<ProgressBar id="pg11" color="yellow6" progress={90} />
			</div>
			<div className="small-divider"></div>
			<div>
				<h4>
					{"<h4>"}Technologies Known{"</h4>"}
				</h4>
				<p>Vite + React TS</p>
				<ProgressBar id="pg12" color="green4" progress={80} />
				<p>Material UI</p>
				<ProgressBar id="pg13" color="red4" progress={85} />
				<p>Material You (Material Design 3)</p>
				<ProgressBar id="pg14" color="orange4" progress={75} />
				<p>Operating System</p>
				<ProgressBar id="pg15" color="pink4" progress={60} />
				<p>Unix and Linux</p>
				<ProgressBar id="pg16" color="purple4" progress={60} />
				<p>Git and GitHub</p>
				<ProgressBar id="pg17" color="teal4" progress={85} />
			</div>
		</div>
	)
}

export default Skills
