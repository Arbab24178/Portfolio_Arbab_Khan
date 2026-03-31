import { motion } from 'framer-motion';
import { FiBriefcase, FiDatabase } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const experienceData = [
    {
      icon: FiBriefcase,
      role: 'Junior Software Developer',
      company: 'Extreme Engineering, Karachi',
      period: 'Professional Experience',
      achievements: [
        'Developed scalable software solutions using TypeScript, Next.js, JavaScript, and Python',
        'Collaborated with cross-functional teams to design and implement high-performance features',
        'Conducted code reviews and participated in agile development processes',
        'Optimized database performance and implemented performance tuning strategies',
        'Ensured high usability standards across all software deliverables',
      ],
    },
    {
      icon: FiDatabase,
      role: 'Data Entry Operator',
      company: 'Organic Food & Spices Pvt Ltd, Karachi',
      period: 'January 2023 - December 2023',
      achievements: [
        'Managed databases and performed data entry tasks with high accuracy and efficiency',
        'Implemented automated data validation processes to maintain data integrity',
        'Supported inventory management systems and generated reports for management review',
        'Improved data entry accuracy by 30% through process optimization',
      ],
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey and contributions
          </p>
        </motion.div>

        <div className="experience-cards">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.role}
              className="experience-card-wrapper"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="experience-card card">
                <div className="experience-header">
                  <div className="experience-icon">
                    <exp.icon size={28} />
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">{exp.period}</span>
                  </div>
                </div>
                <div className="experience-body">
                  <h3 className="experience-role">{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                  <ul className="experience-achievements">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <span className="achievement-bullet"></span>
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
