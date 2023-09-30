import "./Home.css";
import profile from "../Profile.png";
import "../Fonts/fonts.css";

function Home() {
  return (
    <div className="Home">
      <div className="intro">
        <h2>Frontend Engineer</h2>
        <h1>Muhammad </h1>
        <h1>Haseeb</h1>
        <p>
          I’m a skilled frontend developer with 2 years of experience.
          Proficient in HTML, CSS, and JavaScript, I can create visually
          stunning and responsive web applications. My expertise in modern
          frontend frameworks like React and Angular ensures seamless user
          experiences. Passionate about staying updated with the latest trends,
          I’m committed to delivering cutting-edge solutions that elevate user
          interactions.
        </p>
        <button>Hire Me</button>
      </div>
      <img src={profile} alt="profile pic" className="profile" />
    </div>
  );
}

export default Home;
