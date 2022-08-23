interface ThemeModalProps {
	isOpen: string
	onClose: () => void
}

function ThemeModal({ isOpen, onClose }: ThemeModalProps) {
	return (
		<div className={`modal right ${isOpen}`}>
			<h5>Theming</h5>
			<div>Checkout these Material You themes!</div>
			<nav className="right-align">
				<button className="border" onClick={onClose}>
					Cancel
				</button>
			</nav>
		</div>
	)
}

export default ThemeModal
