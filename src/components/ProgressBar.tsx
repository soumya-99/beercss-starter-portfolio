import { useEffect } from "react"
import "./ProgressBar.css"

interface ProgressBarProps {
	id: string
	progress: number
	color: string
	direction?: string
}

function ProgressBar({
	id,
	progress,
	color,
	direction = "left",
}: ProgressBarProps) {
	useEffect(() => {
		// @ts-ignore
		ui(`#${id}`, progress)
	}, [])

	return (
		<div className="small-space border">
			<div className={`progress ${direction} ${color}`} id={id}></div>
		</div>
	)
}

export default ProgressBar
