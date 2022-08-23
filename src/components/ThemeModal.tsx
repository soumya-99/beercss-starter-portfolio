import { useEffect, useState } from "react"
import { useTheme, useThemeUpdate } from "../context/ThemeProvider"

interface ThemeModalProps {
	isOpen: string
	onClose: () => void
}

function ThemeModal({ isOpen, onClose }: ThemeModalProps) {
	const [input, setInput] = useState("")

	const dark = useTheme()
	const updateDark = useThemeUpdate()

	const materialTheme = async (color: string) => {
		// @ts-ignore
		await ui("theme", color)
	}
	useEffect(() => {
		document.body.className = dark ? "dark" : "light"
	}, [dark])

	useEffect(() => {
		materialTheme(input)
	}, [input, dark])

	return (
		<div className={`modal right ${isOpen}`}>
			<h5>Theming</h5>
			<div>Choose any color for Material You themes!</div>
			<hr />
			<div style={{ marginTop: "20px" }}>
				<input type="color" onChange={(e) => setInput(e.target.value)} />
			</div>
			<nav className="right-align">
				<button className="border" onClick={onClose}>
					Cancel
				</button>
				<button className="round" onClick={updateDark}>
					<i>palette</i>
					<span>Dark Mode</span>
				</button>
			</nav>
		</div>
	)
}

export default ThemeModal
