import React, { useRef, useEffect, useState } from "react";
import Experience from "./Experience"
import Skills from "./skills"
import "../styles/experience_skills.css"

const Experience_skills = () => {

  const [popUp, setPopUp] = useState(true);

  const togglePopUp = () => {
    setPopUp(!popUp);
  };

    const showwRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    });

    if (showwRef.current) {
      observer.observe(showwRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

    return (
        <main className="main__experience_skills">
            <section className="experience_skills" id="habilidades">
                <h2 className='section__title'>
                    Experiencia <span>y Habilidades</span>
                </h2>
                <Experience/>
                <div className="separator">
                    <hr />
                    
                      <div ref={showwRef} className={`pop_up ${isVisible ? "visible" : ""}`}>
                        {popUp && (
                          <div
                              ref={showwRef}
                              className={`showw ${isVisible ? "visible" : ""}`}>
                              <span onClick={togglePopUp} className="close__message">X</span>
                              <div className="text__container">
                                <i className='bx bxs-message-square'>
                                  <span className="titlee">
                                    Si buscas un profesional comprometido y responsable, ¡no dudes en <a href="#contacto" className="contactMe__button">contactarme</a> !
                                  </span>
                                </i>
                              </div>
                          </div>
                        )}
                        <img src="/developerfoto.png" alt="" ref={showwRef} onClick={togglePopUp} className={`img__pop_up ${isVisible ? "visible" : ""}`}/>
                      </div>
                    
                </div>
                <Skills/>
            </section>
            
        </main>
    )
}

export default Experience_skills