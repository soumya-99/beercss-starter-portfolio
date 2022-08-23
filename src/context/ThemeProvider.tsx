import { useContext, createContext, useState, ReactNode } from "react"

const ThemeContext = createContext(false)
const ThemeUpdateContext = createContext(() => {})

export function useTheme() {
	return useContext(ThemeContext)
}

export function useThemeUpdate() {
	return useContext(ThemeUpdateContext)
}

interface Props {
	children?: ReactNode
}

export function ThemeProvider({ children }: Props) {
	const [darkTheme, setDarkTheme] = useState(true)

	const toggleTheme = () => {
		setDarkTheme((prevDarkTheme) => !prevDarkTheme)
	}

	return (
		<ThemeContext.Provider value={darkTheme}>
			<ThemeUpdateContext.Provider value={toggleTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	)
}
