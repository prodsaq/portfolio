import React from "react";
import "./styles.css";



function App() {
  return (

    <div className="portfolio">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">INTERNET OF THINGS</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="intro-text">
          <p className="first">Feel free to explore <br /> my portfolio!</p>
          <h1>BSIT - 3</h1>
          <a href="#contact" className="btn-primary">Contact Me</a>
        </div>
        <div className="intro-image">
          <img src="jeter.jpg" alt="jeter" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>I'm Jeter M. Alcantara, a passionate Web Developer specializing in modern,
          responsive web design and the exciting world of IoT (Internet of Things).
          With a strong foundation in front-end back-end development,I aim to create visually appealing,
          user-friendly websites that enhance connectivity through smart technology.
           <br />
           <br />
          IoT Integration:
          Experience in connectiong web interfaces to IoT devices for real-time control,
          monitoring,and automation.
        </p>
        <img src="iot_devices.jpg" alt="About Me" />
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Portfolio</h2>
        <p><br />A deep understanding of design aesthetics and cuttin-edge technology, <br />I leverage
          modern development tools like index.html and style.css to create seamless web experiences.
        </p>
        <img src="website.jpg" alt="" className="jet" />
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                
                <button type="submit">Send Message</button>
            </form>
        <p className="group1">Facebook: <a href="https://www.facebook.com/jeter.alcantara.9/">Jeter Alcantara</a></p>
        <p className="group1">GitHub: <a href="https://github.com/prodsaq/jeter">Github.com</a></p>
      </section>
      <div className="App">
            {/* Your main content goes here */}
            <footer>
                <div className="footer-container">
                    <p>&copy; 2024 Your Name. All rights reserved.</p>
                    <ul className="social-links">
                        <li><a href="#">My Website</a></li>
                        <li><a href="https://dashboard.render.com/">Render</a></li>
                        <li><a href="https://www.figma.com/files/team/1279319148892386443/recents-and-sharing/recently-viewed?fuid=1279319146760045577">Figma</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    </div>
    
    
  );
}

export default App;
