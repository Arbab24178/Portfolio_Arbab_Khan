import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCpu, FiLayers, FiTrendingUp, FiMonitor, FiFileText } from 'react-icons/fi';
import { SiTypescript, SiJavascript, SiPython, SiNextdotjs, SiReact, SiHtml5, SiGit } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: FiCode,
      title: 'Programming Languages',
      skills: [
        { name: 'TypeScript', icon: SiTypescript, level: 90 },
        { name: 'JavaScript', icon: SiJavascript, level: 92 },
        { name: 'Python', icon: SiPython, level: 85 },
      ],
    },
    {
      icon: FiLayers,
      title: 'Web Development',
      skills: [
        { name: 'Next.js', icon: SiNextdotjs, level: 88 },
        { name: 'React', icon: SiReact, level: 90 },
        { name: 'HTML5', icon: SiHtml5, level: 95 },
        { name: 'CSS3', icon: FiMonitor, level: 92 },
      ],
    },
    {
      icon: FiDatabase,
      title: 'Data & Database',
      skills: [
        { name: 'MS Office', icon: FiFileText, level: 90 },
        { name: 'Power BI', icon: FiTrendingUp, level: 80 },
        { name: 'Database Optimization', icon: FiDatabase, level: 85 },
      ],
    },
    {
      icon: FiCpu,
      title: 'AI & Emerging Tech',
      skills: [
        { name: 'Agentic AI', icon: FiCpu, level: 70, learning: true },
        { name: 'Prompt Engineering', icon: FiTrendingUp, level: 75, learning: true },
      ],
    },
    {
      icon: FiLayers,
      title: 'Development Practices',
      skills: [
        { name: 'Agile Methodologies', icon: FiLayers, level: 85 },
        { name: 'Code Review', icon: FiCode, level: 88 },
        { name: 'Version Control (Git)', icon: SiGit, level: 90 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  <category.icon size={24} />
                </div>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                  >
                    <div className="skill-info">
                      <div className="skill-name-wrapper">
                        <skill.icon className="skill-icon" size={20} />
                        <span className="skill-name">{skill.name}</span>
                        {skill.learning && (
                          <span className="learning-badge">Learning</span>
                        )}
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3 
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
