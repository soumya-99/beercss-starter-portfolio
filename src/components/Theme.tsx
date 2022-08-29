interface ThemeProps {
	onClick: () => void
	icon: string
	text: string
}

function Theme({ onClick, icon, text }: ThemeProps) {
	return (
		<a onClick={onClick}>
			<i>{icon}</i>
			<span>{text}</span>
		</a>
	)
}

export default Theme
