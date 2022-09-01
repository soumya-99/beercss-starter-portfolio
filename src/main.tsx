import React from "react"
import ReactDOM from "react-dom/client"
import "beercss"
import "material-dynamic-colors"
import App from "./App"
import "./index.css"
import { MemoryRouter } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeProvider"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MemoryRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</MemoryRouter>
	</React.StrictMode>
)
