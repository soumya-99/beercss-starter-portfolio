import { useEffect, useState } from "react"
import img1 from "../assets/images/me.jpg"
import SideBar from "./SideBar"

interface HeaderProps {
	title: string
	toggleDark: () => void
}

function Header({ title = "Soumyadeep Mondal", toggleDark }: HeaderProps) {
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
				<button className="circle transparent" onClick={() => toggleDark()}>
					<img className="responsive" src={img1} />
				</button>
			</nav>
			{sidebarOpen && (
				<SideBar isOpen="active" onClose={() => toggleSidebar()} />
			)}
		</header>
	)
}

export default Header
