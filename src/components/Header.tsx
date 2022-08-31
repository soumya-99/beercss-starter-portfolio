import { useEffect, useState } from "react"
import img1 from "../assets/images/me.webp"
import SideBar from "./SideBar"

interface HeaderProps {
	title: string
	// toggleDark?: () => void
}

function Header({ title = "Soumyadeep Mondal" }: HeaderProps) {
	const [sidebarOpen, setSidebarOpen] = useState(false)

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen)
	}

	return (
		<header
			className="primary-container"
			style={{ margin: "10px", borderRadius: "20px" }}
		>
			<nav>
				<button className="s circle transparent" onClick={toggleSidebar}>
					<i>menu</i>
				</button>
				<h5 className="max center-align">{title}</h5>
				<div className="right-head">
					<button className="circle transparent darkmode">
						<img className="responsive" src={img1} />
						<div className="tooltip bottom">It's Soumya!</div>
					</button>
				</div>
			</nav>
			{sidebarOpen && (
				<SideBar isOpen="active" onClose={() => toggleSidebar()} />
			)}
		</header>
	)
}

export default Header
