import { useEffect, useState } from "react"
import { useRoutes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import AboutMe from "./pages/AboutMe"
import Home from "./pages/Home"
import More from "./pages/More"
import NotFound from "./pages/NotFound"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"

function App() {
	const [dark, setDark] = useState(false)

	const toggleDark = () =>{
		setDark(!dark)
	}

	const materialTheme = async () => {
		// @ts-ignore
		let theme = await ui("theme", "#cc00ff")
		return theme
	}

	useEffect(() => {
		document.body.className = dark ? "dark" : "light"
		materialTheme()
	}, [dark])

	const components = useRoutes([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/skills",
			element: <Skills />,
		},
		{
			path: "/aboutme",
			element: <AboutMe />,
		},
		{
			path: "/projects",
			element: <Projects />,
		},
		{
			path: "/more",
			element: <More />,
		},
		{
			path: "*",
			element: <NotFound />,
		},
	])

	return (
		<div className="container">
			<div className="box header">
				<Header title="Soumyadeep Mondal" toggleDark={toggleDark} />
			</div>
			<div className="box navbar">
				<NavBar />
			</div>
			<div className="box content">{components}</div>
		</div>
	)
}

export default App
