import Card from "../components/Card"
import "./Projects.css"

import { PROJECTS } from "../data/projects"

import Ball from "../animation/Ball"
import Square from "../animation/Square"

function Projects() {
	return (
		<>
			<Ball
				color="var(--tertiary-container)"
				top="10vh"
				left="2vw"
				size="60px"
			/>
			<Square
				left="35vw"
				top="20vh"
				radius="10px"
				color="var(--primary-container)"
			/>

			<Ball left="2vw" size="30px" color="var(--secondary)" />
			<Square
				left="50vw"
				radius="20px"
				top="30px"
				color="var(--secondary-container)"
			/>
			<Ball left="70vw" top="10vh" size="40px" />
			<Ball color="var(--primary)" top="20vh" left="65vw" size="50px" />
			<div className="page bottom active">
				<h2>Projects</h2>
				<div className="medium-divider"></div>
				<h5 className="proj-body-up">
					Hello folks! Welcome to the projects section of my portfolio. Here you
					can find some of the projects I've worked on. If you'd like to see
					more of my work, feel free to check out my GitHub Profile.
				</h5>
				<div className="projects-body">
					{PROJECTS.map((project, index) => (
						<Card
							key={index}
							image={project.image}
							title={project.title}
							bodyText={project.description}
							buttonText={project.btnText}
							width={project.width}
							link={project.link}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default Projects
