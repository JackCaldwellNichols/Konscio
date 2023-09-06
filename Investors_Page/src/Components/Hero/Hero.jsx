import "./hero.scss";
import ESG from "../../assets/ESG.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="heroTitleLeft">
          <h1>Invertir en Cohousing para una sociedad mejor.</h1>
          <h2>Inversión ODS y ESG en Cohousing</h2>
          <p>
            Invierte en Cohousing de alquiler. Con garantía y gestión segura y
            un 7% a largo plazo. Con toda confianza.
          </p>
          <a
            className="heroTitleBtn"
            target="_blank"
            href="https://www.canva.com/design/DAFtIckWeaE/s4P38yiBP5-NuRdjvUy9Zg/view?utm_content=DAFtIckWeaE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            rel="noreferrer"
          >
            Saber Más
          </a>
        </div>
        <div className="heroRight">
          <div className="heroImgContainer">
            <img src={ESG} alt="Inversion Cohousing Happy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
