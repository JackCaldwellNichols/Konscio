import "./benefits.scss";
import SpaIcon from "@mui/icons-material/Spa";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import BalanceIcon from "@mui/icons-material/Balance";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefitsHeader">
        <h1 className="benefitsTitle">
          Los beneficios del <span style={{ color: "#84bc41" }}>Cohousing</span>
        </h1>
      </div>
      <div className="wrapper">
        <div className="card">
          <div className="cardTop">
            <SpaIcon className="cardIcon" />
          </div>
          <div className="cardInfo">
            <h3>BIENESTAR PERSONAL</h3>
            <span>
              Las personas primero. Autonomía y privacidad. Apoyo mutuo, ocio
              común y co-cuidados.
            </span>
          </div>
        </div>
        <div className="card">
          <div className="cardTop">
            <FavoriteIcon className="cardIcon" />
          </div>
          <div className="cardInfo">
            <h3>VIVIENDA SALUDABLE</h3>
            <span>
              Una casa ecológica, hecha a tu medida, para tu bienestar
              emocional.
            </span>
          </div>
        </div>
        <div className="card">
          <div className="cardTop">
            <BalanceIcon className="cardIcon" />
          </div>
          <div className="cardInfo">
            <h3>ESTABILIDAD</h3>
            <span>
              Vivir de estabilidad, sin permanencia, hasta cuando quieras.{" "}
            </span>
          </div>
        </div>
        <div className="card">
          <div className="cardTop">
            <Diversity1Icon className="cardIcon" />
          </div>
          <div className="cardInfo">
            <h3>ENVEJECIMIENTO DIGNO</h3>
            <span>
              El entorno ideal para un envejecimiento activo y seguro.{" "}
            </span>
          </div>
        </div>
        <div className="card">
          <div className="cardTop">
            <Diversity3Icon className="cardIcon" />
          </div>
          <div className="cardInfo">
            <h3>CONEXIÓN SOCIAL</h3>
            <span>
              Conocer a todos los vecinos, compartir momentos, mantener
              conexiones es fundamental para una buena calidad de vida.
            </span>
          </div>
        </div>
        <div className="card">
          <div className="cardTop">
            <PointOfSaleIcon className="cardIcon" />
          </div>
          <div className="cardInfo">
            <h3>ECONOMÍA Y FINANZAS</h3>
            <span>
              Gastos mínimos y compartidos, el cohousing ofrece la posibilidad
              de ahorrar.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
