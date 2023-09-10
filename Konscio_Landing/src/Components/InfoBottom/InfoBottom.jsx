import "./infoBottom.scss";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";

const InfoBottom = () => {
  return (
    <div className="info">
      <div className="wrapper">
        <div className="infoHeader">
          <h1 className="infoTitle">
            ¿Y el <span style={{ color: "#84bc41" }}>Cohousing</span> es para
            mi?
          </h1>
        </div>
        <div className="infoMain">
          <div className="right">
            <div className="rightIntro">
              <h3>Haces bien en preguntarlo</h3>
              <EmojiObjectsIcon className="icon" />
            </div>

            <h4>
              Algunas personas anhelan la conexión social. El cohousing permite
              que todos se conecten entre sí y tengan roles únicos en la
              comunidad, lo que les brinda un sentido de propósito. Los
              residentes se unen para planificar eventos comunitarios, comidas y
              desarrollar relaciones.
              <br />
              <br />
              Además de la conexión social, es el entorno ideal para un
              envejecimiento activo y seguro. El Cohousing ofrece la oportunidad
              de vivir en tu propia casa y comunidad con seguridad,
              independencia y comodidad. Contar con un sistema de apoyo a medida
              que envejecemos es fundamental para mejorar la calidad de vida.
              <br />
              <br />
              Cuando vives en una comunidad con personas que tienen diferentes
              conjuntos de habilidades y experiencias, tendrás la oportunidad de
              aprender de ellos. Aportando tus conocimientos y experiencias
              puedes enriquecerte tanto a ti mismo como a los demás.
              <br />
              <br />
              ¡Contacta con nosotros y te informamos!
            </h4>
            <a
              className="infoBottomBtn"
              href="https://www.vidasostenible.info/cohousing-y-conciliacion-para-familias-jovenes-y-en-madurez/"
              target="_blank"
              rel="noreferrer"
            >
              Saber Más
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBottom;
