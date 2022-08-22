import { Link } from "react-router-dom"
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
			<a>
				<i>home</i>
				<span>
					<Link to="/">Home</Link>
				</span>
			</a>
			<a>
				<i>widgets</i>
				<span>
					<Link to="/skills">Skills</Link>
				</span>
			</a>
			<a>
				<i>account_circle</i>
				<span>
					<Link to="/aboutme">About Me</Link>
				</span>
			</a>
			<a>
				<i>fingerprint</i>
				<span>
					<Link to="/projects">Projects</Link>
				</span>
			</a>
			<a>
				<i>code</i>
				<span>
					<Link to="/more">More</Link>
				</span>
			</a>
			<a>
				<i>palette</i>
				<span>Theme</span>
			</a>
		</nav>
	)
}

export default NavBar
