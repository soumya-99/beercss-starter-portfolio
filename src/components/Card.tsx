import "./Card.css"

interface CardProps {
	image?: string
	title: string
	bodyText: string | JSX.Element
	buttonText?: string
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
			className={`no-padding round fill`}
			style={{ width: `${width}`, margin: `${margin}` }}
		>
			{image && <img className="responsive small top-round" src={image} />}
			<div className="padding">
				<h5 className="card-title">{title}</h5>
				<div className="small-divider secondary"></div>
				<p>{bodyText}</p>
				{buttonText && (
					<nav className="project-refs">
						<a className="chip round tertiary" href={link} target="_blank">
							<i className="small">call_made</i>
							<span>{buttonText}</span>
						</a>
					</nav>
				)}
			</div>
		</article>
	)
}

export default Card
