import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Check, Code2, ExternalLink, Mail, Menu, MessageCircle, X } from 'lucide-react';
import homepagePhoto from '../images/homepagephoto.jpg';
import aboutPhoto from '../images/myphoto.jpg';
import resumeFile from '../hemant resume 2 (1).pdf';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

function useReveal(page) {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return () => observer.disconnect();
  }, [page]);
}

function Header({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (id) => { setPage(id); setMenuOpen(false); };
  return <header className="site-header">
    <button className="brand" onClick={() => navigate('home')} aria-label="Go to Hemant Chaudhary home"><span>HC</span><strong>Hemant<br />Chaudhary</strong></button>
    <nav aria-label="Primary navigation">
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? <X size={15} /> : <Menu size={15} />} <span>Menu</span></button>
      <ul className={menuOpen ? 'show' : ''}>{navItems.map((item) => <li key={item.id}><button className={page === item.id ? 'active' : ''} onClick={() => navigate(item.id)}>{item.label}{item.id === 'contact' && <ArrowUpRight size={14} />}</button></li>)}</ul>
    </nav>
  </header>;
}

function Eyebrow({ children }) { return <p className="eyebrow">{children}</p>; }
function Button({ children, onClick }) { return <button className="button button-dark" onClick={onClick}>{children}<ArrowUpRight size={16} /></button>; }

function ProfileArt() { return <div className="hero-art reveal reveal-delay" style={{ overflow: 'hidden' }}><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="profile-tile"><img src={homepagePhoto} alt="Hemant Chaudhary outdoors wearing sunglasses" /><span className="profile-kicker">Frontend developer</span><span className="profile-name">Hemant<br />Chaudhary</span></div><span className="floating-tag tag-top">React + Next.js</span><span className="floating-tag tag-bottom">Build with purpose ✦</span></div>; }

const projects = [
  { number: '01', title: 'Shoe Doorsteps', type: 'E-commerce website', copy: 'A responsive online shoe store with product browsing, friendly navigation, and a mobile-first experience.', stack: 'React.js · Netlify', url: 'https://shoes-doorsteps.netlify.app' },
  { number: '02', title: 'E-MedCity', type: 'Healthcare web application', copy: 'A healthcare platform for appointments, doctor consultation, medicine delivery, and lab test scheduling.', stack: 'React.js · Node.js · MongoDB', url: 'https://e-medcity.netlify.app/' },
  { number: '03', title: 'Eye Tracking Mouse', type: 'Assistive technology', copy: 'A Python eye-tracking system that uses gaze and blinks for cursor control, supporting users with mobility challenges.', stack: 'Python · OpenCV · PyAutoGUI' },
];

function Home({ setPage }) { return <>
  <section className="hero section-wrap"><div className="hero-copy reveal"><Eyebrow><span className="status-dot" /> Frontend developer <span className="eyebrow-line" /> Open to opportunities</Eyebrow><h1>Building useful<br /><em>things</em> with code.</h1><p className="hero-description">I’m Hemant, a frontend developer and BCA student who turns ideas into responsive, practical digital experiences with React, Next.js, and a growing full stack toolkit.</p><div className="hero-actions"><Button onClick={() => setPage('about')}>More about me</Button><button className="text-link" onClick={() => setPage('contact')}>Let’s talk <ArrowUpRight size={16} /></button></div></div><ProfileArt /></section>
  <section className="marquee"><div>REACT.JS <span>✦</span> NEXT.JS <span>✦</span> PRODUCT THINKING <span>✦</span> REACT.JS <span>✦</span> NEXT.JS <span>✦</span></div></section>
  <section className="intro-grid section-wrap reveal"><div><Eyebrow>01 / The short version</Eyebrow><h2>A developer in motion,<br /><em>with a reason.</em></h2></div><div className="intro-copy"><p>I completed my BCA at Sharda University with an 8.8 CGPA and a full government scholarship. I like learning by building things people can actually use.</p><button className="text-link" onClick={() => setPage('journey')}>See my journey <ArrowUpRight size={16} /></button></div></section>
  <section className="projects-section section-wrap reveal"><div className="section-heading"><Eyebrow>02 / Selected work</Eyebrow><h2>Things I’ve <em>built</em></h2></div><div className="projects-grid">{projects.map((project) => <article className="project-card" key={project.number}><span className="card-number">{project.number}</span><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.copy}</p><div className="project-meta"><span>{project.stack}</span>{project.url && <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ExternalLink size={16} /></a>}</div></article>)}</div></section>
</>; }

function PageIntro({ eyebrow, title, accent, lead }) { return <section className="page-intro reveal"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}<br /><em>{accent}</em></h1><p className="lead">{lead}</p></section>; }

function About() { return <><PageIntro eyebrow="01 / About" title="Curious by nature." accent="Builder by choice." lead="A frontend developer and problem solver from Kathmandu, Nepal, and a scholarship-supported BCA graduate who studied, developed, and built real-world projects in Greater Noida, India. Passionate about creating intuitive digital experiences and continuously growing as a software professional." /><div className="about-container reveal"><div className="about-pic"><img src={aboutPhoto} alt="Hemant Chaudhary wearing a black suit and tie" /><small>2023 — 2026 / INDIA</small></div><div className="about-text"><p>I’m Hemant Chaudhary, a frontend developer who enjoys learning new technologies, solving problems through code, and building useful applications that can impact people’s lives.</p><p>I’ve worked with React.js, Next.js, Tailwind, Shadcn UI, Node.js, and MongoDB. During my frontend internship at Web Studio Nepal, I helped build a tourism dashboard and login/signup experiences for the web.</p><div className="about-facts"><span><b>Based in</b>Kathmandu, Nepal</span><span><b>Education</b>BCA · Sharda University</span><span><b>CGPA</b>8.8 / 10</span></div><a href={resumeFile} className="button button-dark" download>Download resume <ArrowDown size={16} /></a></div></div></>; }

function Skills() { const groups = [['Programming languages', ['Python', 'Java', 'JavaScript', 'C', 'R'], 'accent-lime'], ['Web & data', ['HTML / CSS', 'React.js', 'Next.js', 'MySQL', 'MongoDB'], 'accent-coral'], ['Tools & systems', ['Git / GitHub', 'Netlify', 'Google Cloud Platform', 'Linux', 'Networking basics'], 'accent-blue']]; return <><PageIntro eyebrow="02 / The toolkit" title="Tools are useful." accent="Curiosity is better." lead="A practical toolkit shaped by coursework, internship experience, personal projects, and a habit of learning by doing." /><div className="skills-container">{groups.map(([title, items, accent], index) => <article className={`skill-category reveal ${accent}`} key={title}><span className="card-number">{String(index + 1).padStart(2, '0')}</span><h4>{title}</h4><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div><section className="skills-extra reveal"><div><Eyebrow>Also part of the toolkit</Eyebrow><h2>Beyond the<br /><em>syntax.</em></h2></div><div className="extra-columns"><div><b>Certifications</b><p>Generative AI with LangChain and Hugging Face · Udemy</p><p>Web Development · Udemy</p><p>Prompt Engineering · Sharda University</p></div><div><b>Languages</b><p>English · Nepali · Maithili · Hindi</p><b>Strengths</b><p>Teamwork · Leadership · Problem-solving · Adaptability</p></div></div></section></>; }

function Journey() { const items = [['2026', 'Frontend Developer Intern', 'Web Studio Nepal · Remote', 'Built a tourism website dashboard and login/signup page designs using React.js, Next.js, Shadcn UI, and Tailwind.'], ['2023 — 2026', 'Bachelor of Computer Application', 'Sharda University · Greater Noida', 'Studying Computer Science and Applications with an 8.8 / 10 CGPA and a full 100% Government of India scholarship awarded by EdCIL.'], ['2020 — 2022', 'Higher secondary education', 'Little Angels’ College · Kathmandu', 'Completed 11th and 12th Grade before continuing into computer applications.'], ['NEXT', 'Keep building', 'Projects, people, and new problems', 'Continuing to grow across frontend engineering, full stack development, and assistive technology.']]; return <><PageIntro eyebrow="03 / The journey" title="Small steps." accent="Real momentum." lead="From scholarship-supported study to frontend work, every stage has added another reason to keep building." /><section className="timeline reveal">{items.map(([year, title, place, copy], index) => <article className="timeline-item" key={title}><span className="timeline-year">{year}</span><div><h2>{title}</h2><p className="timeline-place">{place}</p><p>{copy}</p></div><span className="timeline-mark">0{index + 1}</span></article>)}</section></>; }

function Contact() { const [sent, setSent] = useState(false); const submit = (event) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); }; return <><PageIntro eyebrow="04 / Say hello" title="Have a good idea?" accent="Let’s talk." lead="Whether it’s a project, an opportunity, or a conversation about technology, my inbox is open." /><div className="contact-info reveal"><p><strong>Email</strong><a href="mailto:hemantchy583@gmail.com">hemantchy583@gmail.com</a></p><p><strong>Phone</strong><a href="tel:9812031174">9812031174</a></p><p><strong>Location</strong>Greater Noida, Uttar Pradesh</p><p><strong>University</strong>Sharda University · BCA</p></div><form className="contact-form reveal" onSubmit={submit}><div><label htmlFor="name">Name</label><input id="name" name="name" placeholder="Your full name" required /></div><div><label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="you@example.com" required /></div><div className="full"><label htmlFor="message">Message</label><textarea id="message" name="message" rows="5" placeholder="Tell me a little about it..." required /></div><button className="button button-dark" type="submit">{sent ? <>Message ready <Check size={16} /></> : <>Send message <ArrowUpRight size={16} /></>}</button>{sent && <p className="form-message">Thanks, Hemant will get back to you soon.</p>}</form><div className="social-links"><a href="https://github.com/hemant684" aria-label="GitHub" target="_blank" rel="noreferrer"><Code2 /></a><a href="https://www.linkedin.com/in/hemant-chaudhary-8b0971375/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><BriefcaseBusiness /></a><a href="https://www.instagram.com/hem_ant_chaudhary/?hl=en" aria-label="Instagram" target="_blank" rel="noreferrer"><MessageCircle /></a><a href="https://wa.me/9812031174" aria-label="WhatsApp" target="_blank" rel="noreferrer"><MessageCircle /></a><a href="mailto:hemantchy583@gmail.com" aria-label="Email"><Mail /></a></div></>; }

function App() { const [page, setPage] = useState('home'); useReveal(page); const content = { home: <Home setPage={setPage} />, about: <About />, skills: <Skills />, journey: <Journey />, contact: <Contact /> }; return <><Header page={page} setPage={setPage} /><main className={page === 'home' ? '' : 'page-main'}>{content[page]}</main><footer className="site-footer section-wrap"><span>© 2026 Hemant Chaudhary</span></footer></>; }

export default App;