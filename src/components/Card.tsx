import img1 from "../assets/images/img1.jpg"

function Card() {
	return (
		<article className="no-padding round fill" style={{ width: "100%" }}>
			<img className="responsive small top-round" src={img1} />
			<div className="padding">
				<h5>Title</h5>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
				<nav>
					<button className="round">Button</button>
				</nav>
			</div>
		</article>
	)
}

export default Card
