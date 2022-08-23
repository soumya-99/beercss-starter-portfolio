import React from "react"
import ReactDOM from "react-dom/client"
import "beercss"
import "material-dynamic-colors"
import App from "./App"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeProvider"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
)
