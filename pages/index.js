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
	const [theme, setTheme] = useState("dark");

	const toggleTheme = () => {
	  setTheme(theme === "light" ? "dark" : "light");
	  document.documentElement.setAttribute("data-theme", theme);
	};
	return (
	  <>
		<nav className={utilStyles.navbar}>
		  <div className={utilStyles.logo}>Mugsend</div>
		  <button className={utilStyles.menuToggle} onClick={toggleMenu}>
			{menuOpen ? '✕' : '☰'}
		  </button>
		  <ul className={`${utilStyles.navLinks} ${menuOpen ? utilStyles.open : ''}`}>
			<li><a href="#about">About</a></li>
			<li><a href="#skills">Skills</a></li>
			<li><a href="#projects">Projects</a></li>
			<li><a href="#clients">Clients</a></li>
			<li><a href="#contact">Contact</a></li>
		  </ul>
		  <button className={utilStyles.themeToggle} onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
		</nav>
		<div className={`${utilStyles.menuOverlay} ${menuOpen ? utilStyles.open : ''}`} onClick={toggleMenu} />
	  </>
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

// Other components (Skills, Projects, Clients, Rates, Contact, About) remain the same...
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
			<div className={utilStyles.title}>Projects</div>
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
	const skills = {
	  "Programming Languages": {
		skills: ["JavaScript", "TypeScript", "Python", "C#"],
		icon: "code",
	  },
	  "Frameworks & Libraries": {
		skills: ["Next.js", "React", "Electron", "WinUI 3"],
		icon: "library_books",
	  },
	  "Databases": {
		skills: ["MongoDB", "PostgreSQL"],
		icon: "storage",
	  },
	  "Tools & Platforms": {
		skills: ["Git", "Tailwind CSS", "Node.js"],
		icon: "build",
	  },
	};
  
	return (
	  <div className={utilStyles.window} id="skills">
		<div className={utilStyles.title}>Skills & Technologies</div>
		<div className={utilStyles.container}>
		  {Object.entries(skills).map(([category, { skills: skillList, icon }]) => (
			<div key={category} className={utilStyles.skillCategory}>
			  <h3 className={utilStyles.categoryTitle}>
				<span className="material-icons">{icon}</span> {category}
			  </h3>
			  <div className={utilStyles.skillList}>
				{skillList.map((skill, index) => (
				  <div key={index} className={utilStyles.skillItem}>
					{skill}
				  </div>
				))}
			  </div>
			</div>
		  ))}
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
			<div className={utilStyles.title}>Let's work together!</div>
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

export default function Homepage() {
  return (
    <>
	<Head>
		<title>Portfolio</title>
	</Head>
	 
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Clients />
      <Rates />
      <Contact />
      <About />
    </>
  );
}