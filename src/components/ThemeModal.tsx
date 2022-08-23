import { useEffect, useState } from "react"
import { useTheme, useThemeUpdate } from "../context/ThemeProvider"

interface ThemeModalProps {
	isOpen: string
	onClose: () => void
}

function ThemeModal({ isOpen, onClose }: ThemeModalProps) {
	const [input, setInput] = useState("")
	const [currentFile, setCurrentFile] = useState(undefined)

	const selectFile = (e: EventTarget) => {
		// @ts-ignore
		const file = e.target.files[0]
		setCurrentFile(file)
	}

	const dark = useTheme()
	const updateDark = useThemeUpdate()

	const materialTheme = async (color: string) => {
		if (currentFile) {
			// @ts-ignore
			await ui("theme", currentFile)
		} else {
			// @ts-ignore
			await ui("theme", color)
		}
	}
	useEffect(() => {
		document.body.className = dark ? "dark" : "light"
	}, [dark])

	useEffect(() => {
		materialTheme(input)
	}, [input, dark, currentFile])

	return (
		<div className={`modal right ${isOpen}`}>
			<h5>Theming</h5>
			<div>Choose any color for Material You themes!</div>
			<div className="small-divider"></div>
			<div style={{ marginTop: "20px" }}>
				<input type="color" onChange={(e) => setInput(e.target.value)} />
				<div style={{marginTop: "15px"}}>
					OR
				</div>
				<div className="field label border round">
					<input type="text" />
					{/* @ts-ignore */}
					<input type="file" accept=".jpg, .png, .jpeg, .webp, .svg" onChange={selectFile} />
					<label>Upload Your Photo</label>
					<span className="helper">Choose any photo to apply theme.</span>
				</div>
			</div>
			<nav className="right-align">
				<button className="border round" onClick={onClose}>
					Close
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
