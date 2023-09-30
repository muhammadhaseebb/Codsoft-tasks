import "./Cards.css";

function Cards({ img1, title1, desc1, img2, title2, desc2 }) {
  return (
    <div className="Cards">
      <div className="card">
        <img src={img1} alt="pic" className="cardImg" />
        <h3 className="heading">{title1}</h3>
        <p className="para">{desc1}</p>
      </div>
      <div className="card">
        <img src={img2} alt="pic" className="cardImg" />
        <h3 className="heading">{title2}</h3>
        <p className="para">{desc2}</p>
      </div>
    </div>
  );
}

export default Cards;
