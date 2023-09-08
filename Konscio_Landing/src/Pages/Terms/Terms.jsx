import "./terms.scss";
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";
import Nav from "../../Components/Nav/Nav";

const Terms = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Nav />
      <div className="terms">
        <h1>Términos y Condiciones</h1>
        <div className="termsWrapper">
          <h2>Introducción</h2>
          <p>
            Bienvenido a los términos y condiciones de Proyecta Konscio. Al
            utilizar nuestro sitio web y servicios, aceptas cumplir con los
            términos y condiciones que se presentan a continuación. Por favor,
            lee cuidadosamente esta página antes de utilizar nuestro sitio web o
            contratar nuestros servicios. <br />
            <br />
            Los siguientes términos y condiciones se aplican a todo el
            contenido, productos y servicios ofrecidos por Proyecta Konscio,
            incluyendo nuestra plataforma en línea, programas de capacitación,
            eventos en vivo y cualquier otro servicio que ofrezcamos. <br />
            <br />
            En esta página, encontrarás información importante sobre nuestra
            política de privacidad, propiedad intelectual, limitación de
            responsabilidad, garantías, política de reembolso, terminación y ley
            aplicable. Al utilizar nuestro sitio web o contratar nuestros
            servicios, aceptas todas las condiciones que se presentan en esta
            página. Si no estás de acuerdo con estos términos y condiciones, por
            favor, no utilices nuestro sitio web o contrates nuestros servicios.{" "}
            <br />
            <br />
            Gracias por confiar en Proyecta Konscio para ayudarte a alcanzar tus
            metas.
          </p>
          <h2>Propiedad intelectual de terceros</h2>
          <p>
            Proyecta Konscio respeta los derechos de propiedad intelectual de
            terceros y se esfuerza por utilizar sólo contenido que se encuentra
            en el dominio público o que ha sido autorizado debidamente por sus
            respectivos propietarios. <br />
            <br />
            Sin embargo, en algunos casos, nuestro sitio web o servicios pueden
            incluir contenido de terceros, incluyendo textos, imágenes,
            fotografías, gráficos, videos, audio, software, códigos y otros
            materiales (en adelante, el “Contenido de Terceros”). <br />
            <br />
            Todo el Contenido de Terceros es propiedad exclusiva de sus
            respectivos propietarios de derechos. Proyecta Konscio no es
            propietario ni tiene ningún control sobre el Contenido de Terceros.
            <br />
            <br />
            Proyecta Konscio no asume ninguna responsabilidad por el Contenido
            de Terceros que se incluye en nuestro sitio web o servicios. Los
            propietarios de derechos de dicho Contenido de Terceros son los
            únicos responsables de obtener todas las autorizaciones necesarias
            para su uso y de garantizar que dicho contenido no viole los
            derechos de propiedad intelectual de terceros.
            <br />
            <br /> Si crees que tu propiedad intelectual ha sido utilizada de
            manera indebida en el Contenido de Terceros que se incluye en
            nuestro sitio web o servicios, por favor contáctanos de inmediato
            para que podamos tomar las medidas necesarias para remediar la
            situación.
          </p>
          <h2>Política de privacidad</h2>
          <p>
            En Proyecta Konscio nos tomamos muy en serio la privacidad de
            nuestros usuarios y nos comprometemos a proteger su información
            personal. Nuestra política de privacidad describe cómo recopilamos,
            utilizamos, almacenamos y compartimos la información de nuestros
            usuarios. Respetamos las leyes de protección de datos aplicables y
            cumplimos con las mejores prácticas de privacidad en línea. <br />
            <br />
            En resumen, solo recopilamos la información necesaria para
            proporcionar nuestros servicios y mejorar la experiencia de usuario,
            y nunca compartimos la información con terceros sin su
            consentimiento explícito, a menos que sea necesario para
            proporcionar el servicio o estemos obligados por ley. Por favor, lea
            nuestra política de privacidad completa para obtener más
            información.
          </p>
          <h2>Limitación de responsabilidad</h2>
          <p>
            Proyecta Konscio no se hace responsable por los daños directos,
            indirectos, especiales, consecuentes o incidentales que puedan
            surgir del uso de nuestro sitio web o servicios, incluyendo pero no
            limitado a pérdida de beneficios, interrupción de negocios, pérdida
            de información o cualquier otro tipo de pérdida financiera. <br />
            <br />A pesar de que hacemos todo lo posible para proporcionar
            información precisa y actualizada en nuestro sitio web y servicios,
            no podemos garantizar que la información sea precisa, completa o
            actualizada en todo momento. <br />
            <br />
            Proyecta Konscio no se hace responsable de cualquier interrupción o
            falta de disponibilidad de nuestro sitio web o servicios, incluyendo
            pero no limitado a interrupciones causadas por mantenimiento
            programado, errores técnicos o cualquier otra causa. <br />
            <br />
            El usuario es responsable de tomar medidas adecuadas para proteger
            su información, equipo y sistemas de software de virus, ataques
            cibernéticos u otras amenazas. <br />
            <br />
            En cualquier caso, la responsabilidad total de Proyecta Konscio por
            cualquier reclamación, pérdida, daño o gasto, ya sea en contrato,
            agravio (incluyendo negligencia) o de otra manera, no superará en
            ningún caso el monto total pagado por el usuario a Proyecta Konscio
            por los servicios prestados en los seis (6) meses anteriores a la
            fecha del reclamo.
          </p>
          <h2>Terminación del acuerdo de uso</h2>
          <p>
            Proyecta Konscio se reserva el derecho de terminar el acuerdo de uso
            con cualquier usuario que incumpla nuestros términos y condiciones,
            sin previo aviso y sin responsabilidad alguna hacia el usuario.{" "}
            <br />
            <br />
            El usuario también puede terminar el acuerdo de uso en cualquier
            momento, simplemente dejando de utilizar nuestros servicios. Si el
            usuario tiene una suscripción o ha adquirido un servicio pagado,
            deberá cancelarla siguiendo las instrucciones en nuestra plataforma.
            <br />
            <br />
            Después de la terminación del acuerdo de uso, el usuario deberá
            dejar de utilizar nuestros servicios y borrar cualquier contenido o
            información relacionada con ellos. Proyecta Konscio no será
            responsable de la eliminación o pérdida de la información del
            usuario después de la terminación del acuerdo de uso. <br />
            <br />
            Cualquier sección de estos términos y condiciones que por su
            naturaleza deba sobrevivir a la terminación del acuerdo de uso,
            seguirá siendo aplicable incluso después de dicha terminación,
            incluyendo, entre otras, las secciones de propiedad intelectual,
            limitación de responsabilidad y política de privacidad.
          </p>
          <h2>Cambios a la política</h2>
          <p>
            En ProyectaKonscio.org, nos comprometemos a mantener a nuestros
            usuarios informados sobre cualquier cambio importante en nuestra
            política de privacidad. Si realizamos cambios significativos en
            nuestra política de privacidad, notificaremos a nuestros usuarios a
            través de nuestro sitio web o por correo electrónico si tenemos su
            dirección de correo electrónico. <br />
            <br />
            Además, proporcionaremos una descripción clara y concisa de los
            cambios realizados en nuestra política de privacidad y la fecha en
            que se realizó la actualización más reciente. Al continuar
            utilizando nuestro sitio web después de cualquier cambio en nuestra
            política de privacidad, se considerará que los usuarios han aceptado
            dichos cambios. <br />
            <br />
            Es importante destacar que, como empresa, nos comprometemos a
            revisar y actualizar nuestra política de privacidad de forma regular
            para garantizar que cumpla con los cambios en la legislación
            aplicable y las mejores prácticas en el manejo de datos personales.
            Por lo tanto, recomendamos que los usuarios revisen periódicamente
            nuestra política de privacidad para estar al tanto de cualquier
            cambio que pueda afectar su privacidad y protección de datos
            personales. La fecha de la última actualización se incluirá
            claramente en la parte superior de nuestra política de privacidad.
          </p>
          <h2>Ley aplicable</h2>
          <p>
            Estos términos y condiciones están sujetos a la ley española y
            europea aplicable en la materia. Cualquier disputa que surja de o en
            relación con estos términos y condiciones, incluyendo cualquier
            disputa sobre la existencia, validez o terminación de este acuerdo,
            será resuelta por los tribunales competentes en España. <br />
            <br />
            Si alguna de las disposiciones de estos términos y condiciones se
            considera inválida o inaplicable por cualquier motivo, la
            disposición en cuestión será eliminada sin afectar a la validez de
            las disposiciones restantes.
            <br />
            <br /> El hecho de que Proyecta Konscio no ejerza o haga cumplir
            ningún derecho o disposición de estos términos y condiciones no
            constituirá una renuncia a dicho derecho o disposición.
            <br />
            <br /> Este acuerdo, junto con cualquier política o documento al que
            se haga referencia explícitamente aquí, constituye el acuerdo
            completo entre el usuario y Proyecta Konscio en relación con el uso
            del sitio web y nuestros servicios.
            <br />
            <br /> El usuario reconoce que ha leído estos términos y
            condiciones, los entiende y acepta estar sujeto a ellos en su
            totalidad.
          </p>
          <h2>Modificaciones a los términos y condiciones</h2>
          <p>
            Proyecta Konscio se reserva el derecho de modificar estos términos y
            condiciones en cualquier momento y sin previo aviso. Es
            responsabilidad del usuario revisar periódicamente esta página para
            estar al tanto de cualquier cambio. <br />
            <br />
            Si el usuario continúa utilizando nuestros servicios después de
            cualquier modificación en estos términos y condiciones, se
            considerará que ha aceptado dichos cambios. Si el usuario no está de
            acuerdo con los cambios, deberá dejar de utilizar nuestros servicios
            de inmediato.
            <br />
            <br />
            Cualquier modificación a estos términos y condiciones no afectará a
            ninguna transacción previa entre el usuario y Proyecta Konscio.
            Cualquier sección de estos términos y condiciones que por su
            naturaleza deba sobrevivir a la terminación del acuerdo de uso,
            seguirá siendo aplicable incluso después de dicha terminación.
            <br />
            <br /> Si tiene preguntas o comentarios sobre estos términos y
            condiciones, por favor contáctenos a través de nuestro sitio web.
          </p>
        </div>
        <Link className="link" to="/">
          <button className="inicioBtnTerms">Volver</button>
        </Link>
      </div>
    </>
  );
};

export default Terms;
