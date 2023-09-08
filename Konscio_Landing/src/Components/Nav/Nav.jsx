import "./nav.scss";
import logo from "../../assets/FP.png";
import VS from "../../assets/VS.png";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <div className="nav">
      <div className="left">
        <a href="https://proyectakonscio.org/" target="_blank" rel="noreferrer">
          <img src={logo} alt="Proyecta Konscio" />
        </a>
        <a
          href="https://www.vidasostenible.info/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={VS} alt="Vida Sostenible" />
        </a>
      </div>
      <div className="right">
        <Link to="/" className="link">
          <FontAwesomeIcon icon={faHome} className="homeIcon" />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
