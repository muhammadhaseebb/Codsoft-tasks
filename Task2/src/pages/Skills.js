import "../Fonts/fonts.css";
import "./Skills.css";

function Skills() {
  // Define the inline styles as JavaScript objects
  const skillBarStyle = {
    height: '10px', // Smaller bars
    backgroundColor: 'orange',
    borderRadius: '4px',
    marginTop: '8px',
    position: 'relative',
  };

  // Define skills and their corresponding skill levels
  const skills = [
    { name: 'React.js', level: '90%' },
    { name: 'HTML5', level: '95%' },
    { name: 'CSS3', level: '85%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'Git', level: '75%' },
    { name: 'Webpack', level: '85%' },
    { name: 'Responsive Design', level: '90%' },
    { name: 'API Integration', level: '85%' },
    // Add more skills here
  ];

  return (  
    <div className="SkillSection">

    <div className="container">

    <div className="skills dark-theme"> {/* Added dark-theme class for dark theme */}
      <div className="container">
        <h1 className="section-title">Skills</h1>
        <div className="skills-list">
          {skills.map((skill, index) => (
              <div className="skill" key={index}>
              <i className="fab fa-react"></i>
              <h3>{skill.name}</h3>
              <div className="skill-rating" style={{ ...skillBarStyle, width: skill.level }}>
                <div className="skill-rating-bar"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
          </div>
          </div>
  );
}

export default Skills;
