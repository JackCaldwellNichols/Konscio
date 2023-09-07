import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import FP from "../../assets/FP.png";
import VS from "../../assets/VS.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="fundacionProyecta">
          <div className="orgImg">
            <img src={FP} alt="Fundación Social" />
          </div>
          <div className="orgInfo">
            <span className="orgName">Fundación Proyecta Konscio</span>
          </div>
        </div>
        <div className="vidaSostenible">
          <div className="orgImg">
            <img src={VS} alt="Fundación Social" className="orgImage" />
          </div>
          <div className="orgInfo">
            <span className="orgName">Vida Sostenible</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="rightWrapper">
          <Link to="/términos-y-condiciones" className="link">
            <span className="rightText">Términos y Condiciones</span>
          </Link>
          <Link className="link" to="/política-de-privacidad">
            <span className="rightText">Política de Privacidad</span>
          </Link>
        </div>
        {/* <div className="iconWrapper">
          <a
            href="https://www.facebook.com/ProyectaKonscio"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className="icon" style={{ color: "#4267B2" }} />
          </a>
          <a
            href="https://www.instagram.com/proyectakonscio/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="icon" style={{ color: "#C13584" }} />
          </a>
        </div> */}
        <span className="end">Por la innovación social. </span>
      </div>
    </div>
  );
};

export default Footer;
