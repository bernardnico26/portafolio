import "../styles/aboutMe.css"

const AboutMe= () => {

    return (
        <main className="main-about container">
            <section className='about_me' id="misdatos">
                <h2 className='section__title'>
                    Sobre <span>Mí</span>
                </h2>

                <div className='about__container grid'>
                    <div className='about__info'>
                        <h3 className='section__subtitle'>Info Personal</h3>

                        <ul >
                            <div className='info__list'>
                                <div className="info__section">
                                    <li className="data__list">
                                        <span className='info__title'>Nombre Completo:</span>
                                        <span className='info__description'>Nicolás Bernard</span>
                                    </li>
                                    <li className="data__list">
                                        <span className='info__title'>Edad:</span>
                                        <span className='info__description'>23 años</span>
                                    </li>
                                    <li className="data__list">
                                        <span className='info__title'>Locación:</span>
                                        <span className='info__description'>Buenos Aires, Argentina</span>
                                    </li>
                                </div>
                                <div div className="info__section">
                                    <li className="data__list">
                                        <span className='info__title'>estado laboral:</span>
                                        <span className='info__description'>disponible</span>
                                    </li>
                                    <li className="data__list">
                                        <span className='info__title'>Puesto:</span>
                                        <span className='info__description'>Front-End</span>
                                    </li>
                                    <li className="data__list">
                                        <span className='info__title'>Modalidad:</span>
                                        <span className='info__description'>virtual o presencial</span>
                                    </li>
                                </div>
                            </div>
                            
                        </ul>

                        <div className="download__section">
                            <a href="./CV_NB.pdf" download='' className='button'>
                                <span className="text__button">Descargar Cv</span>
                                <span className='button__icon'>
                                    <i className="fa-solid fa-download"></i>
                                </span>
                            </a>
                        </div>
                        
                    </div>

                    <div className='my__description'>
                        <h3 className='section__subtitle'>Un poco de mí</h3>
                        <div className="My__description_data">
                            <p>
                                Actualmente soy un Front-End Developer. Mi enfoque se basa en la disciplina y el compromiso, lo que me ha llevado a brindar lo mejor de mi en cada proyecto, para llegar al mejor resultado posible.
                            </p>
                            <p>
                                Soy una persona que se apasiona por la programacion, por lo que siempre estoy dispuesto a aprender y mantenerme actualizado en las últimas tendencias y tecnologías.
                            </p>
                            <p>
                                Mi objetivo es trabajar en proyectos desafiantes que me permitan poder desplegar mis habilidades y conocimientos, y de esta forma crear soluciones innovadoras que satisfagan las necesidades de los usuarios.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="showw">
                        <div className="text__container">
                            <span className="titlee">Si buscas un profesional comprometido y apasionado, ¡no dudes en contactarme!</span>
                        </div>
                        
                    </div>
            </section>
            
        
        </main>
    )
}

export default AboutMe