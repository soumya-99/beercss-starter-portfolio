import { useEffect, useState } from "react"
import { useTheme, useThemeUpdate } from "../context/ThemeProvider"

interface ThemeModalProps {
	isOpen: string
	onClose: () => void
}

function ThemeModal({ isOpen, onClose }: ThemeModalProps) {
	const [input, setInput] = useState("")
	const [currentFile, setCurrentFile] = useState(() => undefined)

	const selectFile = (e: EventTarget) => {
		// @ts-ignore
		const file = e.target.files[0]
		setCurrentFile(file)
	}

	const dark = useTheme()
	const updateDark = useThemeUpdate()

	const materialThemeColor = async (color: string) => {
		// @ts-ignore
		await ui("theme", color)
	}

	const materialThemeFile = async (file: File) => {
		// @ts-ignore
		await ui("theme", file)
	}

	useEffect(() => {
		document.body.className = dark ? "dark" : "light"
	}, [dark])

	useEffect(() => {
		if (currentFile) {
			materialThemeFile(currentFile as File)
		} else {
			materialThemeColor(input)
		}
	}, [input, dark, currentFile])

	return (
		<div
			className={`modal right ${isOpen}`}
			style={
				dark
					? {
							backgroundColor: "rgba(3, 8, 6, 0.5)",
							backdropFilter: "blur(4px)",
					  }
					: {
						backgroundColor: "rgba(250, 240, 230, 0.5)",
						backdropFilter: "blur(4px)",
					  }
			}
		>
			<h5>Theming</h5>
			<div>Choose any color for Material You themes!</div>
			<div>Re-open the sidebar to interchange theme!</div>
			<div className="small-divider"></div>
			<div style={{ marginTop: "20px" }}>
				<input
					type="color"
					onChange={(e) => setInput(e.target.value)}
					value={input}
				/>
				<div style={{ marginTop: "15px" }}>OR</div>
				<div className="field label border round">
					<input type="text" />
					<input
						type="file"
						accept=".jpg, .png, .jpeg, .webp, .svg"
						// @ts-ignore
						onChange={selectFile}
					/>
					<label>Upload Your Photo</label>
					<span className="helper">Choose any photo to apply theme.</span>
				</div>
			</div>
			<nav className="right-align">
				<button className="border round" onClick={onClose}>
					Close
				</button>
				<button
					className="round"
					onClick={updateDark}
					disabled={input === "" && currentFile === undefined ? true : false}
				>
					{input === "" && currentFile === undefined ? (
						<div className="tooltip bottom">Choose Theme To Toggle</div>
					) : null}
					<i>palette</i>
					<span>{dark ? "Light" : "Dark"} Mode</span>
				</button>
			</nav>
		</div>
	)
}

export default ThemeModal
