import "./nav.scss";
import logo from "../../assets/FP.png";
import VS from "../../assets/VS.png";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="left">
        <a
          href="https://proyectakonscio.org/"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img
            src={logo}
            alt="Fundación Proyecta Konscio Logo"
            className="logo"
          />
          <span style={{ color: "black" }}>Fundación Projecta Konscio</span>
        </a>
        <a
          href="https://www.vidasostenible.info/"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <img src={VS} alt="Vida Sostenible Logo" className="logo" />
          <span style={{ color: "black" }}>Vida Sostenible</span>
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
