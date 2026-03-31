import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFileText, FiShoppingCart, FiEdit } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      icon: FiFileText,
      title: 'Resume Builder Application',
      description: 'Developed a tool to assist users in creating professional resumes with templates and guided prompts.',
      features: [
        'Pre-filled sections and formatting features',
        'Automatic formatting for personal details, work experience, education, and skills',
        'Editable sections with real-time updates',
      ],
      gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    },
    {
      icon: FiEdit,
      title: 'Editable Resume Builder Website',
      description: 'Built an online platform with drag-and-drop functionality and live preview features.',
      features: [
        'Cloud saving capabilities',
        'Multiple export formats including PDF and Word',
        'Customizable templates and personalized design elements',
        'User-friendly drag-and-drop interface',
      ],
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
    },
    {
      icon: FiShoppingCart,
      title: 'E-Commerce Website',
      description: 'Created a digital platform for online product sales with secure payment integration.',
      features: [
        'Product catalog and shopping cart',
        'User account management systems',
        'Search functionality and order management',
        'Secure payment gateway integration',
      ],
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Some of the projects I've worked on
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-icon-wrapper" style={{ background: project.gradient }}>
                <project.icon size={40} />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-features">
                {project.features.map((feature, i) => (
                  <li key={i}>
                    <span className="feature-bullet"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="project-links">
                <motion.a
                  href="#"
                  className="project-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiGithub size={20} />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href="#"
                  className="project-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiExternalLink size={20} />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
