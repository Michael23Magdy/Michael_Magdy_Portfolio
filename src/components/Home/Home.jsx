
function Home(){
    return(
        <section id="home" className="home">
            <div className="intro">
                <h1>Michael Magdy</h1>
                <p>Computer Engineering Student | Full-Stack Developer</p>
                <p>Based in Alexandria, Egypt</p>
            </div>

            <div className="contact-info">
                <p>Email: michaelmagdymagdy@gmail.com</p>
                <p>Phone: +201220687286</p>
                <p>
                <a href="https://www.linkedin.com/in/michael-magdy" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
                <a href="https://github.com/Michael23Magdy" target="_blank" rel="noopener noreferrer">GitHub</a>
                </p>
            </div>

            <div className="summary">
                <h2>Summary</h2>
                <p>
                I am a computer engineering student with a strong foundation in computer science, eager to create impactful software solutions. As a full-stack developer, I specialize in building responsive, user-centered applications using HTML, CSS, JavaScript, and backend technologies like PHP, MySQL, Node.js, and MongoDB. Seeking freelance opportunities to collaborate on innovative projects.
                </p>
            </div>

            <div className="experience">
                <h2>Experience</h2>
                <ul>
                <li>
                    <strong>DEPI Scholarship - Web Development React Track</strong> (April 2024 – November 2024)
                    <p>Developed skills in React, Node.js, MongoDB, and worked on a social media project using a modern tech stack, including HTML, CSS, and JavaScript.</p>
                </li>
                <li>
                    <strong>Forward Program Graduate at McKinsey & Company</strong> (April 2024 – July 2024)
                    <p>Developed essential skills for freelancing: problem-solving, communication, adaptability, and teamwork.</p>
                </li>
                </ul>
            </div>

            <div className="soft-skills">
                <h2>Soft Skills</h2>
                <ul>
                <li>Communication & Presentation</li>
                <li>Team Leadership & Mentoring</li>
                <li>Adaptability & Resilience</li>
                </ul>
            </div>

            <div className="languages">
                <h2>Languages</h2>
                <p>Arabic (Native), English (Professional)</p>
            </div>
        </section>
    )
}

export default Home