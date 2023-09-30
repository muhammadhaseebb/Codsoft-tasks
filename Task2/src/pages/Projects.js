import Cards from "../Components/Cards";
import "./Projects.css";
import img from "../Empleyado.png";
import doc from "../Documnet Converter App.jpg";
import booking from "../website for ground bookin.jpg";
import carzline from "../carzline moockup.jpg";

function Projects() {
  const cardsData = [
    {
      img1: booking,
      title1: "Ground Booking Website",
      description1:
        "Our ground booking website is your one-stop destination for reserving sports grounds and facilities for all your recreational needs. Whether you are organizing a friendly football match, ...",
      img2: carzline,
      title2: "Car Buying Website",
      description2:
        "Discover an intuitive and user-friendly interface that allows you to browse through a wide selection of cars from various reputable dealerships and private sellers. ...",
    },
    {
      img1: doc,
      title1: "Document Converter App",
      description1:
        "With a sleek and intuitive interface, our Document Converter App offers a seamless user experience for both beginners and tech-savvy users. ...",
      img2: img,
      title2: "HR Management App",
      description2:
        "Our app is a treasure trove of resources to support HR professionals in their daily tasks. Access a vast library of best practices, industry guidelines, and up-to-date HR laws and regulations ...",
    },
  ];
  return (
    <div className="Projects">
      <h1 className="projects">Projects</h1>
      {cardsData.map((card, index) => (
        <Cards
          key={index}
          img1={card.img1}
          title1={card.title1}
          desc1={card.description1}
          img2={card.img2}
          title2={card.title2}
          desc2={card.description2}
        />
      ))}
    </div>
  );
}

export default Projects;
