import { Link, NavLink } from "react-router-dom"

interface SideBarProps {
	isOpen: string
	onClose: () => void
}

function SideBar({ isOpen, onClose }: SideBarProps) {
	return (
		<div className={`modal page top ${isOpen}`}>
			<h5>Options</h5>
			<div>Go to...</div>
			<NavLink to="/" className="row round">
				<i>home</i>
				<span>Home</span>
			</NavLink>
			<NavLink to="/skills" className="row round">
				<i>widgets</i>
				<span>Skills</span>
			</NavLink>
			<NavLink to="/aboutus" className="row round">
				<i>account_circle</i>
				<span>About Me</span>
			</NavLink>
			<NavLink to="/projects" className="row round">
				<i>fingerprint</i>
				<span>Projects</span>
			</NavLink>
			<NavLink to="/more" className="row round">
				<i>code</i>
				<span>More</span>
			</NavLink>
			<a className="row round">
				<i>palette</i>
				<span>Theme</span>
			</a>
			<nav className="right-align">
				<button className="border" onClick={onClose}>
					Close
				</button>
			</nav>
		</div>
	)
}

export default SideBar
