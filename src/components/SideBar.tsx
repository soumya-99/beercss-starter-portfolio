import { useState } from "react"
import { NavLink } from "react-router-dom"
import ThemeModal from "./ThemeModal"

interface SideBarProps {
	isOpen: string
	onClose: () => void
}

function SideBar({ isOpen, onClose }: SideBarProps) {
	const [openModal, setOpenModal] = useState(false)

	const toggleThemeModal = () => {
		setOpenModal(!openModal)
	}

	return (
		<>
			<div className={`modal page top ${isOpen}`}>
				<h5>Options</h5>
				<div className="small-divider"></div>
				<div>All Navigations and some love 😘</div>
				<div className="small-divider"></div>
				<NavLink to="/" className="row round">
					<i>home</i>
					<span>Home</span>
				</NavLink>
				<NavLink to="/skills" className="row round">
					<i>widgets</i>
					<span>Skills</span>
				</NavLink>
				<NavLink to="/aboutme" className="row round">
					<i>account_circle</i>
					<span>About Me</span>
				</NavLink>
				<NavLink to="/projects" className="row round">
					<i>rocket_launch</i>
					<span>Projects</span>
				</NavLink>
				<NavLink to="/more" className="row round">
					<i>code</i>
					<span>More</span>
				</NavLink>
				<a className="row round" onClick={toggleThemeModal}>
					<i>palette</i>
					<span>Theme</span>
				</a>
				<nav className="right-align">
					<button className="border" onClick={onClose}>
						Close
					</button>
				</nav>
			</div>
			{openModal && (
				<ThemeModal isOpen="active" onClose={() => toggleThemeModal()} />
			)}
		</>
	)
}

export default SideBar
