import "./infoBottomCentre.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoBottomCentre = () => {
  return (
    <div className="infoBC">
      <div className="infoBCWrapper">
        <div className="infoBCLeft">
          <h1>
            Experiencia{" "}
            <FontAwesomeIcon icon={faArrowRight} style={{ color: "#84bc41" }} />
          </h1>
          <h2 className="infoBCTextTitle">
            Contamos con una amplia experienca
          </h2>
          <span className="infoBCText">
            Los proyectos son orientadas y dirigidos por profesionales con
            amplia trayectoria en el sector. Nuestros áreas de especialización
            incluyen la coordinación, legal, económico, técnico y social.
            Contamos con un equipo de profesionales experimentados para
            gestionar los proyectos con éxito.
          </span>
          <a
            href="https://www.canva.com/design/DAFWvu823u4/PNKo2VOxaomHYSm2R69L5w/watch?utm_content=DAFWvu823u4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            target="_blank"
            rel="noreferrer"
          >
            Saber Más
          </a>
        </div>
        <div className="infoBCRight">
          <img
            className="infoBCImg"
            src="https://www.insight.com/content/insight-web/en_US/what-we-do/industries/construction-technology/jcr%3acontent/full-width-hero-section/column_layout_copy_5/-column-1/column_layout_copy/-column-2/insight_image.img.jpg/1680111046630.jpg"
            alt="Cohousing Garantía"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoBottomCentre;
