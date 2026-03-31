import { motion } from 'framer-motion';
import { FiUser, FiMapPin, FiBriefcase, FiBook } from 'react-icons/fi';
import './About.css';

const About = () => {
  const stats = [
    { icon: FiBook, label: 'Education', value: 'B.S. Software Engineering' },
    { icon: FiBriefcase, label: 'Experience', value: '1+ Years' },
    { icon: FiUser, label: 'Focus', value: 'Full Stack + AI' },
    { icon: FiMapPin, label: 'Location', value: 'Karachi, Pakistan' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about my background and journey
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="about-card card">
              <h3>Who Am I?</h3>
              <p>
                I'm an ambitious <strong>Software Engineering student</strong> at Sir Syed University 
                of Engineering and Technology, currently pursuing my Bachelor's degree with an expected 
                graduation in 2026.
              </p>
              <p>
                Alongside my degree, I'm completing a <strong>Diploma in General Artificial Intelligence</strong> 
                from PIAIC, which equips me with cutting-edge AI knowledge and skills.
              </p>
              <p>
                With over <strong>1 year of professional experience</strong> as a Junior Software Developer, 
                I've worked with modern technologies including TypeScript, JavaScript, Next.js, Python, 
                and various AI technologies. I'm passionate about building scalable software solutions 
                and contributing to innovative projects.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-card card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-icon">
                    <stat.icon size={32} />
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
