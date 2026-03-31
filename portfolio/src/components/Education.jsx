import { motion } from 'framer-motion';
import { FiBook, FiAward } from 'react-icons/fi';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      icon: FiBook,
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'Sir Syed University of Engineering and Technology (SSUET)',
      year: 'Expected Graduation: 2026',
      type: 'degree',
    },
    {
      icon: FiAward,
      degree: 'Diploma in General Artificial Intelligence',
      institution: 'Pakistan Institute of Artificial Intelligence and Computing (PIAIC)',
      year: 'Expected Completion: 2026',
      type: 'diploma',
    },
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              className="education-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="education-card-inner card">
                <div className="education-icon">
                  <edu.icon size={32} />
                </div>
                <div className="education-content">
                  <span className="education-year">{edu.year}</span>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                </div>
                <div className="education-badge">
                  <span>{edu.type === 'degree' ? '🎓' : '🏆'}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Line */}
        <div className="timeline-line">
          <motion.div
            className="timeline-progress"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
