import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import profileImg from '../public/images/profile.jpg';
import { useEffect, useState } from 'react';


function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className={utilStyles.navbar}>
			<div className={utilStyles.logo}>Mugsend</div>
			<button className={utilStyles.menuToggle} onClick={toggleMenu}>
				☰
			</button>
			<ul className={utilStyles.navLinks}>
				<li><a href="#about">About</a></li>
				<li><a href="#skills">Skills</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#clients">Clients</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>
		</nav>
	);
}
function Header() {
	return (
		<div className={utilStyles.header}>
			<h1>Hey!</h1>
			<h2>Welcome to my Portfolio.</h2>
			<Profile />
		</div>
	);
}



function Clients() {
	const clients = [
		{
			name: "ABC Corp",
			project: "Developed a Windows Desktop App",
			description: "Built a high-performance WinUI application for managing enterprise resources.",
		},
		{
			name: "XYZ Ltd.",
			project: "Cross-Platform Mobile App",
			description: "Created an iOS and Android app for real-time communication using Flutter.",
		},
		{
			name: "DEF Startup",
			project: "E-Commerce Website",
			description: "Designed and developed a Next.js-based online store with payment integration.",
		},
	];

	return (
		<div className={utilStyles.window} id='clients'>
			<div className={utilStyles.title}>Clients & Work</div>
			<div className={utilStyles.container}>
				{clients.map((client, index) => (
					<Client key={index} {...client} />
				))}
			</div>
		</div>
	);
}

function Client({ name, project, description}) {
	return (
		<div className={utilStyles.content}>
			<div className={utilStyles.title}>{name}</div>
			<p className={utilStyles.project}>{project}</p>
			<p className={utilStyles.description}>{description}</p>
		</div>
	);
}

function Profile() {
	return (
		<div className={utilStyles.profile} id='profile'>
			<Image
				className={utilStyles.profile_img}
				src={profileImg}
				height={200}
				width={200}
				alt="Saurabh"
			/>
			<div className={utilStyles.profile_text}>
				<h1>
					Saurabh <br></br>Chaudhary
				</h1>
				<div className={utilStyles.profile_links}>
					<a
						className={utilStyles.url}
						target="_blank"
						href="Resume.pdf"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="1em"
							viewBox="0 0 384 512"
						>
							<path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
						</svg>
					</a>
					<a
						className={utilStyles.url}
						target="_blank"
						href="https://github.com/Mugsend"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="1em"
							viewBox="0 0 496 512"
						>
							<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
						</svg>
					</a>
					<a
						className={utilStyles.url}
						target="_blank"
						href="https://www.linkedin.com/in/saurabh-chaudhary-b6a6a9266"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="1em"
							viewBox="0 0 448 512"
						>
							<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
						</svg>
					</a>
					<a
						className={utilStyles.url}
						target="_blank"
						href="mailto:chaudharysaurabh93063@gmail.com"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="1em"
							viewBox="0 0 512 512"
						>
							<path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
}
function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		var myHeaders = new Headers();
		myHeaders.append(
			'Authorization',
			`Bearer ${process.env.NEXT_PUBLIC_GIT_TOKEN}`,
		);
		var requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow',
		};

		fetch('https://api.github.com/user/repos', requestOptions)
			.then((response) => response.json())
			.then((result) => {
				setProjects(
					result.map((repo) => {
						return {
							name: repo.name,
							description: repo.description,
							url: repo.html_url,
						};
					}),
				);
			})
			.catch((error) => console.log('error', error));
	}, []);
	return (
		<div className={utilStyles.window} id='projects'>
			<div className={utilStyles.title}>Projects (ぱ疫や)</div>
			<div className={utilStyles.container}>
				{projects.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
		</div>
	);
}
function Project({ name, description, url }) {
	return (
		<div className={utilStyles.content} >
			<div className={utilStyles.title}>{name}</div>
			<p className={utilStyles.description}>{description}</p>
			<a className={utilStyles.link_btn} target="_blank" href={url}>
				Source
			</a>
		</div>
	);
}

function Skills() {
	const skills = [
		{ name: "JavaScript" },
		{ name: "TypeScript"},
		{ name: "Python"},
		{ name: "C#"},
		{ name: "WinUI 3"},
		{ name: "Next.js"},
		{ name: "React" },
		{ name: "Electron"},
		{ name: "Tailwind CSS"},
		{ name: "Node.js"},
		{ name: "MongoDB"},
		{ name: "PostgreSQL"},
		{ name: "Git"},
	];

	return (
		<div className={utilStyles.window} id='skills'>
			<div className={utilStyles.title}>Skills & Technologies</div>
			<div className={utilStyles.container}><div className={utilStyles.content}>
				{skills.map((skill, index) => (
					
					<div className={utilStyles.title}>{skill.name}</div>
					
				))}</div>
			</div>
		</div>
	);
}

function Rates() {
	return (
		<div className={utilStyles.window} id='rates'>
			<div className={utilStyles.title}>Rates & Budget</div>
			<div className={utilStyles.container}>
				<div className={utilStyles.content}>
					<h2 className={utilStyles.rate}>💰 My Hourly Rate</h2>
					<p className={utilStyles.price}>$XX per hour</p>
				</div>
				<div className={utilStyles.content}>
					<h2 className={utilStyles.rate}>📉 Flexible Pricing</h2>
					<p className={utilStyles.description}>
						I offer budget-friendly solutions without compromising quality.
					</p>
				</div>
			</div>
		</div>
	);
}

function Contact() {
	return (
		<div className={utilStyles.window} id='contact'>
			<div className={utilStyles.title}>Let's work together! (ソ畝挨)</div>
			<div className={utilStyles.container}>
				<div className={utilStyles.content}>
					<div className={utilStyles.title}>Email Me!</div>
					<a
						className={utilStyles.link_btn}
						target="_blank"
						href="mailto:chaudharysaurabh93063@gmail.com"
					>
						ok!
					</a>
				</div>
				<div className={utilStyles.content}>
					<div className={utilStyles.title}>Let's connect on LinkedIn!</div>
					<a
						className={utilStyles.link_btn}
						target="_blank"
						href="https://www.linkedin.com/in/saurabh-chaudhary-b6a6a9266"
					>
						ok!
					</a>
				</div>
			</div>
		</div>
	);
}
function About() {
	return (
		<div className={utilStyles.window} id="about">
			<div className={utilStyles.title}>About Me</div>
			<div className={utilStyles.container}>
				<div className={utilStyles.content}>
					<p>
						👋 Hi, I'm Mugsend, a passionate developer specializing in **WinUI 3, Next.js, 
						and cross-platform applications**. I love building innovative solutions 
						for desktop, mobile, and web platforms.
					</p>
					<p>
						With experience in **C#, JavaScript, Python, and UI/UX design**, I create 
						modern applications that are both functional and aesthetically pleasing.
					</p>
					<p>
						I am always open to **freelance projects, collaborations, and new opportunities**.
					</p>
				</div>
				<div className={utilStyles.links}>
					<a href="https://github.com/mugsend" target="_blank" className={utilStyles.link_btn}>
						🔗 GitHub
					</a>
					<a href="https://www.linkedin.com/in/saurabh-chaudhary-b6a6a9266" target="_blank" className={utilStyles.link_btn}>
						🔗 LinkedIn
					</a>
					<a href="mailto:chaudharysaurabh93063@gmail.com" className={utilStyles.link_btn}>
						📧 Email Me
					</a>
					<a href="https://portfolio-mugsend.vercel.app/" target="_blank" className={utilStyles.link_btn}>
						🌍 Portfolio
					</a>
				</div>
			</div>
		</div>
	);
}
export default function Homepage() {
	return (
		<>
		
			<Head>
				<title>Portfolio</title>
				<link rel="icon" href="/images/favicon.ico" />
				
			</Head>
			<Navbar/>
			<Header />
			<Skills />
			<Projects />
			<Clients />
			<Rates />
			<Contact />
			<About/>
		</>
	);
}
