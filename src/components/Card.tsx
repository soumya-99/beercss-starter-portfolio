import "./Card.css"

interface CardProps {
	image?: string
	title: string
	bodyText: string
	buttonText: string
	width?: string
	margin?: string
	link?: string
}

function Card({
	image,
	title,
	bodyText,
	buttonText,
	link,
	width = "100%",
	margin = "10px",
}: CardProps) {
	return (
		<article
			className="no-padding round fill"
			style={{ width: `${width}`, margin: `${margin}` }}
		>
			<img className="responsive small top-round" src={image} />
			<div className="padding">
				<h5 className="card-title">{title}</h5>
				<p>{bodyText}</p>
				<nav className="project-refs">
					<a
						className="chip round tertiary"
						href={link}
						target="_blank"
					>
						<i className="small">call_made</i>
						<span>{buttonText}</span>
					</a>
				</nav>
			</div>
		</article>
	)
}

export default Card
