import Ball from "../animation/Ball"
import Square from "../animation/Square"
import Card from "../components/Card"

function AboutMe() {
	return (
		<>
			<Ball
				color="var(--tertiary-container)"
				top="10vh"
				left="2vw"
				size="60px"
			/>
			<Square
				left="35vw"
				top="20vh"
				radius="10px"
				color="var(--primary-container)"
			/>

			<Ball left="2vw" size="30px" color="var(--secondary)" />
			<Square
				left="50vw"
				radius="20px"
				top="30px"
				color="var(--secondary-container)"
			/>
			<Ball left="70vw" top="10vh" size="40px" />
			<Ball color="var(--primary)" top="20vh" left="65vw" size="50px" />
			<div className="page right active">
				<h2>About Me</h2>
				<hr />
				<p>
					This section is completely describes my background, experience,
					education and my location.
				</p>
				<div
					style={{
						display: "flex",
						justifyContent: "space-around",
						flexWrap: "wrap",
					}}
				>
					<Card
						width="30vw"
						title="Education"
						bodyText={
							<ul style={{ padding: "15px" }}>
								<li>
									<h6>
										B. Sc. (H) in Computer Science, Seth Anandram Jaipuria
										College [2019 - 2022]
									</h6>
								</li>
								<li>
									<h6>
										Higher Secondary in Pure Science, Nabagram Vidyapith [2018 -
										2019]
									</h6>
								</li>
							</ul>
						}
					/>
					<Card
						width="45vw"
						title="Experience"
						bodyText={
							<ul style={{ padding: "15px" }}>
								<li>
									<h6>
										Full Stack Web Developer Intern at Phurti.in [Nov 2021 - Dec
										2021]
									</h6>
								</li>
								<li>
									<h6>
										Live Project Intern at Sabdasyo.in [Jun 2020 - Jul 2020]
									</h6>
								</li>
							</ul>
						}
					/>
					<Card
						width="30vw"
						title="Want to contact with me?"
						bodyText={
							<div>
								Here's my Email Address. You can contact me through this.
							</div>
						}
						buttonText="Mail Me"
						link="mailto:soumyadeep891079@gmail.com"
					/>
				</div>
			</div>
		</>
	)
}

export default AboutMe
