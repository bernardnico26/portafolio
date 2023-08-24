import "../styles/portafolio.css";
import { portfolio } from "../data";
import Projects from "./Projects";

const Portafolio = () => {
  const isMobile = window.innerWidth < 768;

  return (
    <section className="main-portafolio">
      <section className="portfolio" id="portafolio">
        <h2 className="section__title">
          My <span>Portfolio</span>
        </h2>

        <div className={`portfolio__container ${isMobile ? 'mobile' : ''}`}>
          <div className="slider">
            {isMobile ? null : (
              <>
                <input type="radio" name="slider" id="item-1" defaultChecked />
                <input type="radio" name="slider" id="item-2" />
                <input type="radio" name="slider" id="item-3" />
                <input type="radio" name="slider" id="item-4" />
              </>
            )}
            <div className="cards">
              {portfolio.map((project) => {
                return <Projects key={project.id} {...project} />;
              })}
            </div>
          </div>
        </div>
        <div className="projects__instructions">
          <span> Para mas informacion toca la imagen si usas un dispositivo movil o pasa el cursor sobre la imagen si usas un computador</span>
        </div>
      </section>
    </section>
  );
};

export default Portafolio;
