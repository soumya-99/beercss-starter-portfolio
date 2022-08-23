import { NavLink } from "react-router-dom"
import img1 from "../assets/images/me.jpg"

function NavBar() {
	return (
		<nav
			className="m l left primary"
			style={{ margin: "25px", borderRadius: "25px" }}
		>
			<a>
				<img className="circle" src={img1} />
			</a>
			<NavLink to="/">
				<i>home</i>
				<span>Home</span>
			</NavLink>
			<NavLink to="/skills">
				<i>widgets</i>
				<span>Skills</span>
			</NavLink>
			<NavLink to="/aboutme">
				<i>account_circle</i>
				<span>About Me</span>
			</NavLink>
			<NavLink to="/projects">
				<i>fingerprint</i>
				<span>Projects</span>
			</NavLink>
			<NavLink to="/more">
				<i>code</i>
				<span>More</span>
			</NavLink>
			<a>
				<i>palette</i>
				<span>Theme</span>
			</a>
		</nav>
	)
}

export default NavBar