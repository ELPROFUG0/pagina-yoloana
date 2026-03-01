import styles from './PrivacyPolicy.module.css';

export default function PrivacyPolicy() {
  return (
    <main className={styles.main}>
      <section className={styles.introSection}>
        <div className={styles.introStack}>
          <h1 className={styles.mainTitle}>Política de Privacidad</h1>
          <div className={styles.effectiveDateStack}>
            <h3 className={styles.effectiveDateLabel}>Fecha Efectiva</h3>
            <p className={styles.effectiveDate}>01/03/2026</p>
          </div>
        </div>
        <div className={styles.divider}></div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>1. Información que Recopilamos</h2>
          <div className={styles.spacer}></div>
          <div className={styles.contentWrapper}>
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>1.1 Información Proporcionada por Usted</h3>
              <div className={styles.text}>
              <p>Cuando se suscribe a nuestro boletín o se comunica con nosotros a través de formularios de contacto, correo electrónico, teléfono o cualquier otro método de comunicación proporcionado en nuestro sitio web, podemos recopilar la siguiente información:</p>
              <ul>
                <li>Nombre</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Tipo de consulta (privado, corporativo, prensa u otro)</li>
                <li>Cualquier detalle adicional que elija compartir con nosotros</li>
              </ul>
              </div>
            </div>
            <div className={styles.subsection}>
              <h3 className={styles.subsectionTitle}>1.2 Datos Recopilados Automáticamente</h3>
              <div className={styles.text}>
                <p>Nuestro proveedor de hosting puede recopilar automáticamente ciertos datos técnicos con fines operativos y analíticos. Esto puede incluir:</p>
                <ul>
                  <li>Dirección IP</li>
                  <li>Tipo y versión del navegador</li>
                  <li>Información del dispositivo</li>
                  <li>Sistema operativo</li>
                  <li>Datos de uso (por ejemplo, páginas visitadas, tiempo en el sitio)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}></div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>2. Cómo Utilizamos su Información</h2>
          <div className={styles.spacer}></div>
          <div className={styles.text}>
            <p>Utilizamos la información recopilada para:</p>
            <ul>
              <li>Responder a sus consultas, procesar solicitudes de proyectos o reservas, y proporcionar atención al cliente</li>
              <li>Gestionar suscripciones al boletín y enviar actualizaciones sobre nuevos proyectos, eventos del estudio y noticias relacionadas</li>
              <li>Mejorar la funcionalidad de nuestro sitio web y la experiencia del usuario</li>
              <li>Analizar tendencias de uso y rendimiento</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}></div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>3. Base Legal para el Procesamiento</h2>
          <div className={styles.spacer}></div>
          <div className={styles.text}>
            <p>Dependiendo de su ubicación, nuestro procesamiento de datos personales puede basarse en:</p>
            <ul>
              <li>Su consentimiento</li>
              <li>La necesidad de procesamiento para la ejecución de un contrato</li>
              <li>Cumplimiento de obligaciones legales</li>
              <li>Nuestros intereses legítimos, siempre que estos no sean anulados por sus derechos</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}></div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>4. Compartir Datos</h2>
          <div className={styles.spacer}></div>
          <div className={styles.text}>
            <p>No vendemos ni alquilamos sus datos personales. Solo podemos compartir información con:</p>
            <ul>
              <li>Proveedores de servicios que respaldan el funcionamiento de nuestro sitio web y servicios (por ejemplo, proveedores de hosting, herramientas de análisis y plataformas de boletines)</li>
              <li>Autoridades legales, si es necesario para cumplir con las leyes aplicables o procesos legales válidos</li>
              <li>Asesores profesionales, como auditores o asesores legales, cuando sea necesario para fines comerciales o de cumplimiento</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}></div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>5. Retención de Datos</h2>
          <div className={styles.spacer}></div>
          <div className={styles.text}>
            <p>Retenemos la información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta Política de Privacidad, a menos que la ley requiera un período de retención más largo.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}></div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>6. Sus Derechos</h2>
          <div className={styles.spacer}></div>
          <div className={styles.text}>
            <p>Dependiendo de su jurisdicción, puede tener derecho a:</p>
            <ul>
              <li>Acceder a los datos personales que tenemos sobre usted</li>
              <li>Solicitar la corrección de datos inexactos</li>
              <li>Solicitar la eliminación de sus datos</li>
              <li>Oponerse a ciertas actividades de procesamiento de datos</li>
              <li>Solicitar la portabilidad de datos</li>
              <li>Retirar el consentimiento en cualquier momento, cuando sea aplicable</li>
            </ul>
            <p>Para ejercer sus derechos, contáctenos en <a href="mailto:hola@yoloana.com" className={styles.link}>hola@yoloana.com</a></p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}></div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>7. Seguridad de Datos</h2>
          <div className={styles.spacer}></div>
          <div className={styles.text}>
            <p>Implementamos medidas técnicas y organizativas apropiadas para proteger los datos personales, incluidas conexiones cifradas (SSL), acceso restringido y políticas internas para salvaguardar la información. Sin embargo, ningún sistema es completamente seguro y no podemos garantizar protección absoluta.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}></div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>8. Transferencias Internacionales de Datos</h2>
          <div className={styles.spacer}></div>
          <div className={styles.text}>
            <p>Si se encuentra fuera del país donde se alojan nuestros servidores, sus datos pueden transferirse y procesarse en un país que puede no proporcionar el mismo nivel de protección que su jurisdicción.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}></div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>9. Enlaces de Terceros</h2>
          <div className={styles.spacer}></div>
          <div className={styles.text}>
            <p>Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas de privacidad de dichos terceros y le recomendamos que revise sus políticas de privacidad.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}></div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>10. Privacidad de Menores</h2>
          <div className={styles.spacer}></div>
          <div className={styles.text}>
            <p>Nuestros servicios no están dirigidos a menores de 16 años (o 13 cuando sea aplicable por ley), y no recopilamos conscientemente información personal de ellos. Si nos enteramos de que hemos recopilado inadvertidamente dicha información, tomaremos medidas para eliminarla.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}></div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>11. Boletín y Comunicaciones de Marketing</h2>
          <div className={styles.spacer}></div>
          <div className={styles.text}>
            <p>Cuando se suscribe a nuestro boletín, recopilamos y procesamos su dirección de correo electrónico (y, si se proporciona voluntariamente, su nombre) con el fin de enviarle actualizaciones sobre nuevos proyectos, eventos del estudio e información relacionada con nuestro trabajo.</p>
            <p>Nuestro boletín se envía solo con su consentimiento explícito, y puede retirar este consentimiento en cualquier momento haciendo clic en el enlace "cancelar suscripción" incluido en cada correo electrónico o contactándonos directamente.</p>
            <p>No compartimos los datos de suscripción de su boletín con terceros, excepto los proveedores de servicios necesarios para operar el sistema de entrega de correo electrónico.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}></div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>12. Cumplimiento de las Leyes Aplicables</h2>
          <div className={styles.spacer}></div>
          <div className={styles.text}>
            <p>Cumplimos con las leyes de protección de datos aplicables, incluido el Reglamento General de Protección de Datos (GDPR) para usuarios en la UE, la Ley de Privacidad del Consumidor de California (CCPA) para residentes de California y otros marcos relevantes según su jurisdicción.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}></div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>13. Cambios a Esta Política</h2>
          <div className={styles.spacer}></div>
          <div className={styles.text}>
            <p>Podemos actualizar esta Política de Privacidad de vez en cuando. Cualquier cambio se publicará en esta página con una fecha efectiva actualizada.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.divider}></div>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>14. Contáctenos</h2>
          <div className={styles.spacer}></div>
          <div className={styles.text}>
            <p>Si tiene preguntas sobre esta Política de Privacidad o nuestras prácticas de manejo de datos, contáctenos en:</p>
            <p><a href="mailto:hola@yoloana.com" className={styles.link}>hola@yoloana.com</a></p>
            <p><a href="tel:+52-123-456-7890" className={styles.link}>+52 123 456 7890</a></p>
            <p>Loto Blanco, México</p>
          </div>
        </div>
      </section>
    </main>
  );
}
