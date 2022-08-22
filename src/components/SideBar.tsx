import { Link } from "react-router-dom"

interface SideBarProps {
	isOpen: string
	onClose: () => void
}

function SideBar({ isOpen, onClose }: SideBarProps) {
	return (
		<div className={`modal page top ${isOpen}`}>
			<h5>Options</h5>
			<div>Go to...</div>
			<a className="row round" data-ui="modal-menu">
				<i>home</i>
				<span>
					<Link to="/">Home</Link>
				</span>
			</a>
			<a className="row round" data-ui="modal-menu">
				<i>widgets</i>
				<span>
					<Link to="/skills">Skills</Link>
				</span>
			</a>
			<a className="row round" data-ui="modal-menu">
				<i>account_circle</i>
				<span>
					<Link to="/aboutus">About Me</Link>
				</span>
			</a>
			<a className="row round" data-ui="modal-menu">
				<i>fingerprint</i>
				<span>
					<Link to="/projects">Projects</Link>
				</span>
			</a>
			<a className="row round" data-ui="modal-menu">
				<i>code</i>
				<span>
					<Link to="/more">More</Link>
				</span>
			</a>
			<a className="row round" data-ui="modal-menu">
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
