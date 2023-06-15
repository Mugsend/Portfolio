import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Section from '../components/section';
import profileImg from '../public/images/profile.jpg';
import projectImg from '../public/images/project/sudoku-solver.jpeg';
function Header() {
	return (
		<Section>
			<div className={utilStyles.header}>
				<h1>Hey!</h1>
				<h2>Welcome to my Portfolio.</h2>
				<Profile />
			</div>
		</Section>
	);
}
function Profile() {
	return (
		<div className={utilStyles.profile}>
			<Image
				className={utilStyles.profile_img}
				src={profileImg}
				height={200}
				width={200}
				alt="Sourabh"
			/>
			<h1 className={utilStyles.profile_name}>
				Saurabh <br></br>Chaudhary
			</h1>
		</div>
	);
}
function Projects() {
	const projects = [
		{
			pName: 'sudoku-solver',
			desc: 'This is a Sudoku solver written in JavaScript that can solve any valid Sudoku puzzle. The solver uses Sudoku tricks such as obvious singles, doubles and triples, and hidden singles and doubles to find the solution.',
			liveLink: 'https://mugsend.github.io/SUDOKU-SOLVER',
			sourceLink: 'https://github.com/Mugsend/SUDOKU-SOLVER',
			imageSrc: 'sudoku-solver.jpeg',
		},
		{
			pName: 'sudoku-solver',
			desc: 'This is a Sudoku solver written in JavaScript that can solve any valid Sudoku puzzle. The solver uses Sudoku tricks such as obvious singles, doubles and triples, and hidden singles and doubles to find the solution.',
			liveLink: 'https://mugsend.github.io/SUDOKU-SOLVER',
			sourceLink: 'https://github.com/Mugsend/SUDOKU-SOLVER',
			imageSrc: 'sudoku-solver.jpeg',
		},
		{
			pName: 'sudoku-solver',
			desc: 'This is a Sudoku solver written in JavaScript that can solve any valid Sudoku puzzle. The solver uses Sudoku tricks such as obvious singles, doubles and triples, and hidden singles and doubles to find the solution.',
			liveLink: 'https://mugsend.github.io/SUDOKU-SOLVER',
			sourceLink: 'https://github.com/Mugsend/SUDOKU-SOLVER',
			imageSrc: 'sudoku-solver.jpeg',
		},
		{
			pName: 'sudoku-solver',
			desc: 'This is a Sudoku solver written in JavaScript that can solve any valid Sudoku puzzle. The solver uses Sudoku tricks such as obvious singles, doubles and triples, and hidden singles and doubles to find the solution.',
			liveLink: 'https://mugsend.github.io/SUDOKU-SOLVER',
			sourceLink: 'https://github.com/Mugsend/SUDOKU-SOLVER',
			imageSrc: 'sudoku-solver.jpeg',
		},
		{
			pName: 'sudoku-solver',
			desc: 'This is a Sudoku solver written in JavaScript that can solve any valid Sudoku puzzle. The solver uses Sudoku tricks such as obvious singles, doubles and triples, and hidden singles and doubles to find the solution.',
			liveLink: 'https://https://mugsend.github.io/SUDOKU-SOLVER',
			sourceLink: 'https://github.com/Mugsend/SUDOKU-SOLVER',
			imageSrc: 'sudoku-solver.jpeg',
		},
	];
	return (
		<Section>
			<div className={utilStyles.projects}>
				<h2>Projects</h2>
				{projects.map((project) => (
					<Project {...project} />
				))}
			</div>
		</Section>
	);
}
function Project({ pName, desc, liveLink, sourceLink, imageSrc }) {
	return (
		<div className={utilStyles.project}>
			<div className={utilStyles.project_img}>
				<Image fill={true} src={projectImg} />
			</div>
			<div className={utilStyles.project_desc}>
				<h3>{pName}</h3>
				<p>{desc}</p>
				<a href={liveLink}>Try it! </a>
				<a href={sourceLink}>View Source</a>
			</div>
		</div>
	);
}
function Education() {}
function Skills() {
	const skills = [
		{
			name: 'html',
			svgPath:
				'M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z',
		},
		{
			name: 'html',
			svgPath:
				'M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z',
		},
		{
			name: 'html',
			svgPath:
				'M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z',
		},
		{
			name: 'html',
			svgPath:
				'M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z',
		},
		{
			name: 'html',
			svgPath:
				'M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z',
		},
		{
			name: 'html',
			svgPath:
				'M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z',
		},
	];
	return (
		<Section>
			<div className={utilStyles.skills}>
				<h2>Skills</h2>
				<div className={utilStyles.skills_row}>
					{skills.map(({ name, svgPath, index }) => (
						<Skill key={index} name={name} svgPath={svgPath} />
					))}
				</div>
			</div>
		</Section>
	);
}
function About() {
	return (
		<Section>
			<div className={utilStyles.about}>
				<h2>About</h2>
				<div className={utilStyles.about_card}>
					<div className={utilStyles.about_text}>
						When I'm not writing code, you can find me indulging in my love of
						classical, J-rock, and film scores, or catching up on my favorite
						movies and shows. Loving Vincent and Better Call Saul are particular
						favorites of mine. In my free time, I also enjoy taking on side
						projects as a hobby, exploring new areas of interest, and keeping
						up-to-date with the latest scientific developments.
					</div>
				</div>
			</div>
		</Section>
	);
}

function Skill({ name, svgPath }) {
	return (
		<div className={utilStyles.skill}>
			<div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path d={svgPath} />
				</svg>
			</div>
			<h3>{name}</h3>
		</div>
	);
}
function Contact() {
	return (
		<Section>
			<div className={utilStyles.contacts}>
				<h1>Let's work together!</h1>

				<div className={utilStyles.contact}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="2em"
						viewBox="0 0 512 512"
					>
						<path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
					</svg>
					<a href="mailto:chaudharysaurabh93063@gmail.com">
						Email @chaudharysaurabh93063@gmail.com
					</a>
				</div>
				<div className={utilStyles.contact}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="2em"
						viewBox="0 0 448 512"
					>
						<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
					</svg>
					<a href="mailto:chaudharysaurabh93063@gmail.com">LinkedIn @saurabh</a>
				</div>
			</div>
		</Section>
	);
}
export default function Homepage() {
	return (
		<>
			<Header />
			<Skills />
			<Projects />
			<About />
			<Contact />
		</>
	);
}
