import "./Square.css"

interface SquareProps {
    height?: string
    width?: string
	size?: string
	color?: string
	top?: string
	left: string
    radius?: string
}

function Square({
    height = "40px",
	width = "70px",
	color = "var(--primary-container)",
	top = "0px",
	left = "0px",
    radius = "0px",
}: SquareProps) {
	return (
		<div
			className="square"
			style={{
				width: `${width}`,
				height: `${height}`,
				borderRadius: `${radius}`,
				backgroundColor: `${color}`,
				top: `${top}`,
				left: `${left}`,
			}}
		></div>
	)
}

export default Square
