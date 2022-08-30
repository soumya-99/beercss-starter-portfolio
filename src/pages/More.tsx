import Ball from "../animation/Ball"
import Square from "../animation/Square"

function More() {
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
			<div className="page top active">
				<h2>More</h2>
				<hr />
				<h5 style={{color: "var(--primary)"}}>
					I will upload my future blog articles and external article links over
					here. This section is reserved for that purpose only.
				</h5>
			</div>
		</>
	)
}

export default More
