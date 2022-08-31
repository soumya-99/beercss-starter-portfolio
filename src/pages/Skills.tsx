import "./Skills.css"
import ProgressBar from "../components/ProgressBar"
import Ball from "../animation/Ball"
import Square from "../animation/Square"

import { WEB_SKILLS, PROGRAMMING_LANGS, TECH_KNOWN } from "../data/skills"

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
						{WEB_SKILLS.map((skill, index) => (
							<span key={index}>
								<p>{skill.name}</p>
								<ProgressBar
									id={skill.id}
									color={skill.color}
									progress={skill.progress}
								/>
							</span>
						))}
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
						<Ball color="var(--primary)" top="2px" left="60vw" size="50px" />
						<h4 className="skills-head">
							{"<>"}Programming Languages{"</>"}
						</h4>
						{PROGRAMMING_LANGS.map((skill, index) => (
							<span key={index}>
								<p>{skill.name}</p>
								<ProgressBar
									id={skill.id}
									color={skill.color}
									progress={skill.progress}
								/>
							</span>
						))}
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
						{TECH_KNOWN.map((skill, index) => (
							<span key={index}>
								<p>{skill.name}</p>
								<ProgressBar
									id={skill.id}
									color={skill.color}
									progress={skill.progress}
								/>
							</span>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Skills
