import "./hero.scss";
import Nav from "../Nav/Nav";

const Hero = () => {
  return (
    <div className="hero">
      <Nav />
      <div className="wrapper">
        <div className="left">
          <h1 className="titleMain">
            Para una vida más plena, con privacidad, autonomía y apoyo mutuo.
            <br />A cualquier edad.
          </h1>
        </div>
        <div className="right">
          <p>
            Crea la comunidad soñada en <b>Cohousing.</b> <br />
            Vive una vida sostenible. <br />
            Comparte los momentos importantes con seres queridos. <br />
            En Fundación Proyecta Konscio, con la colabaración de Vida
            Sostenible, podemos conseguirlo. <br />
          </p>
          <br />
          <a
            href="https://www.canva.com/design/DAFWvu823u4/PNKo2VOxaomHYSm2R69L5w/watch?utm_content=DAFWvu823u4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            target="_blank"
            rel="noreferrer"
          >
            Saber Más
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
