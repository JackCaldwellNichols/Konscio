import "./infoTop.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoTop = () => {
  return (
    <div className="infoTop">
      <h1 className="infoWrapperTitle">
        Lo que <span style={{ color: "#84bc41" }}>ofrecemos</span>
      </h1>
      <div className="infoWrapper">
        <div className="infoTopLeft">
          <h1>
            Colaboración{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ color: "#84bc41", paddingLeft: "5px" }}
            />
          </h1>
          <h2 className="infoTextTitle">
            Fomentamos una comunidad colaborativa
          </h2>
          <span className="infoText">
            A traves de{" "}
            <a
              href="https://proyectakonscio.org/blog/proyectos/plataforma-digital-konsciohousing"
              target="_blank"
              rel="noreferrer"
            >
              nuestra plataforma
            </a>
            , fomentamos una comunidad colaborativa, donde personas interesadas
            en el co-housing y la construcción sostenible, podrá conectarse y
            compartir ideas a través de tecnologías innovadoras como el 3D y las
            salas webRTC. La interactividad permitirá que los usuarios creen
            vínculos sólidos y fomenten la confianza necesaria para embarcarse
            juntos en el proceso de buscar terrenos, decidir el sistema
            constructivo y constituirse en una cooperativa. iti.
          </span>
          <a
            href="https://www.canva.com/design/DAFWvu823u4/PNKo2VOxaomHYSm2R69L5w/watch?utm_content=DAFWvu823u4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            className="saber"
            target="_blank"
            rel="noreferrer"
          >
            Saber Más
          </a>
        </div>
        <div className="infoTopRight">
          <img
            className="infoTopImg"
            src="https://images.pexels.com/photos/5553128/pexels-photo-5553128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="CoHousing Plataforma Konscio"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoTop;
