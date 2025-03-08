import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import profileImg from '../public/images/profile.jpg';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
	};

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const closeMenu = (e) => {
		e.preventDefault();
		const targetId = e.currentTarget.getAttribute('href');
		const targetElement = document.querySelector(targetId);

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
		// Close the menu after a short delay
		setTimeout(() => {
			setMenuOpen(false);
		}, 300); // Adjust the delay as needed
	};

	return (
		<>
			<nav className={utilStyles.navbar}>
				<div className={utilStyles.logo}>MUGSEND</div>
				<div className={utilStyles.navRight}>
					<button className={utilStyles.themeToggle} onClick={toggleTheme}>
						{theme === 'light' ? '🌙' : '☀️'}
					</button>
					<button className={utilStyles.menuToggle} onClick={toggleMenu}>
						{menuOpen ? '✕' : '☰'}
					</button>
				</div>
				<ul className={`${utilStyles.navLinks} ${menuOpen ? utilStyles.open : ''}`}>
					<li><a href="#skills" onClick={closeMenu}>Skills</a></li>
					<li><a href="#clients" onClick={closeMenu}>Clients</a></li>
					<li><a href="#projects" onClick={closeMenu}>Projects</a></li>
					<li><a href="#contact" onClick={closeMenu}>Contact</a></li>
					<li><a href="#about" onClick={closeMenu}>About</a></li>
				</ul>

			</nav>
			<div className={`${utilStyles.menuOverlay} ${menuOpen ? utilStyles.open : ''}`} onClick={closeMenu} />
		</>
	);
}

function Header() {
	return (

		<div className={utilStyles.header}>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				<h1>Hey!</h1></motion.div>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				viewport={{ once: true }}
			>
				<h2>Welcome to my Portfolio.</h2></motion.div>
			<Profile />
		</div>

	);
}

function Profile() {
	return (
		<div className={utilStyles.profile} id="profile">
			<Image
				className={utilStyles.profile_img}
				src={profileImg}
				height={200}
				width={200}
				alt="Saurabh"
			/>
			<div className={utilStyles.profile_text}>
				<h1>
					Saurabh <br /> Chaudhary
				</h1>
				<div className={utilStyles.profile_links}>
					<a className={utilStyles.url} target="_blank" href="Resume.pdf">Resume</a>
					<a className={utilStyles.url} target="_blank" href="https://github.com/Mugsend">Github</a>
					<a className={utilStyles.url} target="_blank" href="https://www.linkedin.com/in/saurabh-chaudhary-b6a6a9266">LinkedIn</a>
					<a className={utilStyles.url} target="_blank" href="mailto:chaudharysaurabh93063@gmail.com">Email</a>
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
			<div className={utilStyles.title}>Personal projects</div>
			<p className={utilStyles.sectionTagline}>
				My projects span audio plugins, web applications, and more, combining innovation with user-centric design to create exceptional experiences..
			</p>

			<div className={`${utilStyles.container} projectContainer`}>
				{projects.map((project, index) => (

					<Project key={index} {...project} />
				))}
			</div>

		</div>
	);
}
function Project({ name, description, url }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
		>
			<div className={utilStyles.content} >
				<div className={utilStyles.title}>{name}</div>
				<p className={utilStyles.description}>{description}</p>
				<a className={utilStyles.link_btn} target="_blank" href={url}>
					Source
				</a>
			</div>
		</motion.div>
	);
}


function Skills() {
	const skills = {
		"Programming Languages": {
			skills: ["JavaScript", "TypeScript", "Python", "C++", "AutoLISP"],
			icon: "code",
		},
		"Frameworks & Libraries": {
			skills: ["React", "Next.js", "Node.js", "JUCE", "Discord.js", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
			icon: "library_books",
		},
		"Databases": {
			skills: ["MongoDB", "PostgreSQL", "GraphQL"],
			icon: "storage",
		},
		"Tools & Platforms": {
			skills: ["Git", "Tailwind CSS", "WordPress", "WooCommerce", "Elementor", "Strapi CMS", "Max/MSP", "VST3"],
			icon: "build",
		},
		"Cloud & DevOps": {
			skills: ["AWS (EC2, S3, Lambda)", "Google Cloud Platform (GCP)", "Docker", "Kubernetes", "CI/CD Pipelines"],
			icon: "cloud",
		},
	};

	return (
		<div className={utilStyles.window} id="skills">
			<div className={utilStyles.title}>Skills & Technologies</div>
			<p className={utilStyles.sectionTagline}>
				I combine programming, frameworks, and cloud technologies to build solutions that are reliable, scalable, and tailored to client needs.
			</p>
			<div className={utilStyles.container}>
				{Object.entries(skills).map(([category, { skills: skillList, icon }]) => (
					<div key={category} className={`${utilStyles.skillCategory} ${utilStyles.content}`}>
						<h3 className={utilStyles.categoryTitle}>
							<span className="material-icons">{icon}</span> {category}
						</h3>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<div className={utilStyles.skillList}>

								{skillList.map((skill, index) => (
									<div key={index} className={utilStyles.skillItem}>

										{skill}

									</div>
								))}
							</div>
						</motion.div>
					</div>

				))}


			</div>
		</div>
	);
}


function Contact() {
	return (
		<div className={utilStyles.window} id="contact">
			<div className={utilStyles.title}>Let's Work Together!</div>
			<p className={utilStyles.sectionTagline}>
				Ready to bring your ideas to life? Let’s collaborate and create something amazing!
			</p>
			<div className={utilStyles.container}>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<div className={`${utilStyles.contactCard} ${utilStyles.content}`} onClick={() => window.location.href = "mailto:chaudharysaurabh93063@gmail.com"}>
						<span className="material-icons">email</span>
						<h3>Email Me</h3>
						<p>Get in touch directly via email.</p>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<div className={`${utilStyles.contactCard} ${utilStyles.content}`} onClick={() => window.open("https://www.linkedin.com/in/saurabh-chaudhary-b6a6a9266", "_blank")}>
						<span className="material-icons">people</span>
						<h3>Connect on LinkedIn</h3>
						<p>Let’s connect and grow our professional network.</p>
					</div></motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<div className={`${utilStyles.contactCard} ${utilStyles.content}`} onClick={() => window.open("https://github.com/Mugsend", "_blank")}>
						<span className="material-icons">code</span>
						<h3>Check Out My GitHub</h3>
						<p>Explore my projects and contributions.</p>
					</div></motion.div>
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
						👋 Hi, I'm Mugsend, a passionate developer specializing in <b>WinUI 3, Next.js,
							and cross-platform applications</b>. I love building innovative solutions
						for desktop, mobile, and web platforms.
					</p>
					<p>
						With experience in <b>C#, JavaScript, Python, and UI/UX design</b>, I create
						modern applications that are both functional and aesthetically pleasing.
					</p>
					<p>
						I am always open to <b>freelance projects, collaborations, and new opportunities</b>.
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
function Clients() {
	const clients = [
		{
			name: "SocaLabs",
			project: "Stereo Processor Plugin",
			description:
				"Collaborated with a team to develop a Stereo Processor plugin using <b>C++</b>, <b>JUCE framework</b>, and <b>VST3 technology</b>, delivering a high-quality audio processing tool for professional music production.",
		},
		{
			name: "Khief",
			project: "Discord Bot for Astral Projection Community",
			description:
				"Developed a Discord bot using <b>Node.js</b>, <b>Discord.js</b>, and <b>MongoDB</b>, enabling users to create and join lobbies through custom commands, enhancing community engagement and interaction.",
		},
		{
			name: "Raga-Trance",
			project: "Glitchy Arpeggiator Plugin",
			description:
				"Created a custom audio processing plugin using <b>Max/MSP</b> and <b>JUCE</b> within a week for an upcoming gig. The plugin was used to produce tracks that received an overwhelming response from the audience.",
		},
		{
			name: "Bosley",
			project: "Wiki Website for Nibi Programming Language",
			description:
				"Developed a wiki-style website using <b>Next.js</b>, <b>Markdown</b>, and <b>Tailwind CSS</b> for a custom programming language, providing comprehensive documentation and resources for developers.",
		},
		{
			name: "Nucork",
			project: "Custom AutoCAD Scripts",
			description:
				"Collaborated with a team to develop custom AutoCAD scripts using <b>AutoLISP</b> and <b>Python</b>, automating repetitive tasks such as generating drawings with varying dimensions, significantly improving workflow efficiency.",
		},
		{
			name: "Ice-Blue Pulga",
			project: "SEO-Optimized Hotel Website",
			description:
				"Designed and developed an SEO-optimized website using <b>React</b>, <b>GraphQL</b>, and <b>Strapi CMS</b>, resulting in a <b>70% increase in sales</b> during the peak season by improving online visibility and organic traffic.",
		},
		{
			name: "Mavrix Music Academy",
			project: "Website for Private Music Lessons",
			description:
				"Built a website using <b>WordPress</b>, <b>WooCommerce</b>, and <b>Elementor</b> for selling private music lessons, providing a seamless platform for students to enroll and access course materials.",
		},
		{
			name: "Liman",
			project: "Python Problem-Solving Mentorship",
			description:
				"Mentored an individual in problem-solving with <b>Python</b>, <b>NumPy</b>, and <b>Pandas</b>, guiding them to secure a developer job in England through personalized coaching.",
		},
		{
			name: "Olayenka",
			project: "Data Processing and Visualization Tutoring",
			description:
				"Provided online tutoring on data processing and visualization using <b>Python</b>, <b>Matplotlib</b>, <b>Seaborn</b>, and <b>Plotly</b>, enabling the client to analyze and present data effectively.",
		},
		{
			name: "Oxygen Academy",
			project: "Basic Programming Tutoring",
			description:
				"Taught basic programming and problem-solving using <b>Python</b>, <b>Scratch</b>, and <b>Blockly</b> to high school students, fostering their interest in coding and equipping them with foundational skills.",
		},
	];

	return (
		<div className={utilStyles.window} id="clients">
			<div className={utilStyles.title}>Clients & Work</div>
			<p className={utilStyles.sectionTagline}>
				I create tailored solutions that solve real-world problems, helping clients achieve their goals efficiently and effectively.
			</p>

			<div className={utilStyles.container}>

				{clients.map((client, index) => (
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<Client key={index} {...client} /></motion.div>
				))}
			</div>
		</div>
	);
}

function Client({ name, project, description }) {
	return (
		<div className={utilStyles.content}>
			<div className={utilStyles.title}>{name}</div>
			<div className={utilStyles.briefDescription}>{project}</div>
			<p
				className={utilStyles.description}
				dangerouslySetInnerHTML={{ __html: description }}
			/>

		</div>
	);
}


export default function Homepage() {
	return (
		<>
			<Head>
				<title>Portfolio</title>
			</Head>

			<Navbar />
			<Header />
			<div className={utilStyles.mainContent}>
				<Skills />
				<Clients />
				<Projects />
				<Contact />
				<About />
			</div>
		</>
	);
}