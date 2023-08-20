import "../styles/portafolio.css"
import { portfolio } from "../data"
import Projects from "./Projects"

const Portafolio= () => {
  
    return (
      <section className="main-portafolio" >
        <section className='portfolio' id="portafolio">
          <h2 className='section__title'>
            My <span>Portfolio</span>
          </h2>

          <div className='portfolio__container '>
            <div className="slider">
              <input type="radio" name="slider" id="item-1" defaultChecked/>
              <input type="radio" name="slider" id="item-2"/>
              <input type="radio" name="slider" id="item-3"/>
              <input type="radio" name="slider" id="item-4"/>
              <div className='cards'>
                {portfolio.map((project) => {
                  return <Projects key={project.id} {...project} />;
                })}
              </div> 
            </div>
          </div>
            
        </section>
        
      </section>
    )
  }
  
  export default Portafolio