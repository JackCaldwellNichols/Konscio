import React from "react";
import "./why.scss";
import {
  faArrowTrendUp,
  faBookOpenReader,
  faCalendar,
  faCalendarTimes,
  faCircleCheck,
  faClock,
  faHandshake,
  faHandshakeAlt,
  faHandshakeAngle,
  faHandshakeSimple,
  faHandshakeSlash,
  faHelmetUn,
  faHourglass1,
  faLeaf,
  faMoneyBillTransfer,
  faShield,
  faThumbsDown,
  faThumbsUp,
  faTimeline,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Why = () => {
  return (
    <div className="why">
      <h1 className="whyHeader">
        ¿Por qué <span style={{ color: "#84bc41" }}>nosotros?</span>
      </h1>
      <div className="whyWrapper">
        <div className="whyCard">
          <div className="cardTopWhy">
            <FontAwesomeIcon icon={faCircleCheck} className="cardIconWhy" />
            <h3 className="cardTitleWhy">Especialización</h3>
          </div>
        </div>
        <div className="whyCard">
          <div className="cardTopWhy">
            <FontAwesomeIcon icon={faBookOpenReader} className="cardIconWhy" />
            <h3 className="cardTitleWhy">Aprendizaje Común</h3>
          </div>
        </div>
        <div className="whyCard">
          <div className="cardTopWhy">
            <FontAwesomeIcon icon={faHandshakeAngle} className="cardIconWhy" />
            <h3 className="cardTitleWhy">Cultura de Servicio</h3>
          </div>
        </div>
        <div className="whyCard">
          <div className="cardTopWhy">
            <FontAwesomeIcon icon={faHourglass1} className="cardIconWhy" />
            <h3 className="cardTitleWhy">Experiencia</h3>
          </div>
        </div>
      </div>
      <a
        target="_blank"
        className="whyBtn"
        href="https://www.vidasostenible.info/inversores/"
        rel="noreferrer"
      >
        Saber Más
      </a>
    </div>
  );
};

export default Why;
