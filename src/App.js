import React from 'react';
import './App.css';
// import About from './components/About'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jason Bernzweig</h1>
        <nav>
          <a href="#about">About Me</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
        </nav>
      </header>
      <section id="about">
        {/* This will be replaced by About Me Component */}
        {/* { About } */}
        <h1>About Me</h1>
        <p>Hello! I'm Jason, a passionate and dedicated web developer with a strong desire to create engaging and functional websites. With a background in [relevant field or education], I have developed a solid foundation in web development principles and techniques.
          I am highly proficient in HTML, CSS, and JavaScript, and constantly strive to stay updated with the latest trends and technologies in the industry. I enjoy transforming design concepts into fully responsive and user-friendly websites that deliver exceptional user experiences.
          What sets me apart is my strong attention to detail and my ability to effectively collaborate with cross-functional teams. I thrive in fast-paced environments, where I can apply my problem-solving skills to overcome challenges and deliver high-quality solutions.
          I have experience working with various content management systems (CMS) and frameworks such as WordPress and Bootstrap. Additionally, I am familiar with version control systems like Git, which enables me to work efficiently and collaborate seamlessly with other developers.
          In addition to my technical skills, I am a proactive and lifelong learner, always seeking opportunities to enhance my knowledge and skills. I possess excellent communication skills, allowing me to effectively communicate technical concepts to both technical and non-technical stakeholders.
          As a junior web developer, I am eager to contribute my skills and creativity to projects that make a positive impact. I am excited to work alongside experienced professionals, absorbing knowledge and continuously improving my craft.
          I invite you to explore my portfolio, where you can find examples of my work that showcase my proficiency and passion for web development. If you're looking for a dedicated and ambitious junior web developer to join your team, I would love to connect and discuss how I can contribute to your organization's success.
          Thank you for visiting my portfolio, and I look forward to the opportunity to work with you.</p>
      </section>

      <section>
        {/* This will be replaced by Work Component */}
        {/* Work */}
        <h1>Work</h1>
          <div className='card'>
            <h3>Project Example 1 </h3>
          </div>

          <div className='card'>
            <h3>Project Example 2 </h3>
          </div>

          <div className='card'>
            <h3>Project Example 3 </h3>
          </div>

      </section>

      <footer>
        {/* This will be replaced by Footer Component */}
        {/* Footer */}
        <h1>Contact Me</h1>
        <h3>Phone | Github | Email | LinkedIn</h3>
      </footer>
    </div>
  );
}

export default App;
