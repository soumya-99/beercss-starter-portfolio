import "./Ball.css"

interface BallProps {
	size?: string
	color?: string
	top?: string
	left: string
}

function Ball({
	size = "70px",
	color = "var(--primary-container)",
	top = "0px",
	left = "0px",
}: BallProps) {
	return (
		<div
			className="ball"
			style={{
				width: `${size}`,
				height: `${size}`,
				borderRadius: "50%",
				backgroundColor: `${color}`,
				top: `${top}`,
				left: `${left}`,
			}}
		></div>
	)
}

export default Ball
