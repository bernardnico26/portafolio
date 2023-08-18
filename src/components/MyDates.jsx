import "../styles/aboutMe.css"

const MyDates= () => {

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
                                <div>
                                    <li>
                                        <span className='info__title'>Nombre Completo:</span>
                                        <span className='info__description'>Nicolás Bernard</span>
                                    </li>
                                    <li>
                                        <span className='info__title'>Edad:</span>
                                        <span className='info__description'>23 años</span>
                                    </li>
                                    <li>
                                        <span className='info__title'>Locación:</span>
                                        <span className='info__description'>Buenos Aires, Argentina</span>
                                    </li>
                                </div>
                                <div>
                                    <li>
                                        <span className='info__title'>dispobilidad:</span>
                                        <span className='info__description'>buscando un nuevo trabajo</span>
                                    </li>
                                    <li>
                                        <span className='info__title'>Puesto:</span>
                                        <span className='info__description'>Front-End</span>
                                    </li>
                                    <li>
                                        <span className='info__title'>Modalidad:</span>
                                        <span className='info__description'>virtual o presencial</span>
                                    </li>
                                </div>
                            </div>
                            
                        </ul>

                        <a href="./src/assets/curriculum_nicolas_bernard.pdf" download='' className='button'>
                            Descargar Cv
                            <span className='button__icon'>
                                <i className="fa-solid fa-download"></i>
                            </span>
                        </a>
                    </div>

                    <div className='my description grid'>
                        <h3 className='section__subtitle'>Un poco de mí</h3>
                        <div>
                            <h4>
                                Actualmente soy un Front-End Developer, cuento con experiencia en tecnologías como React JS y Redux, esto me puede permitir ayudar a las empresas a mejorar la experiencia del usuario. Mi enfoque se basa en la disciplina y el compromiso, lo que me ha llevado a brindar lo mejor de mi en cada proyecto, entregando todo de mi siempre y asi llegar al mejor resultado posible.
                            </h4>
                            <h4>
                                Soy una persona que se apasiona por la programacion, por lo que siempre estoy dispuesto a aprender y mantenerme actualizado en las últimas tendencias y tecnologías.
                            </h4>
                            <h4>
                                Mi objetivo es trabajar en proyectos desafiantes que me permitan poder desplegar mis habilidades y conocimientos, y de esta forma crear soluciones innovadoras que satisfagan las necesidades de los usuarios. Si buscas un profesional comprometido y apasionado, ¡no dudes en contactarme!
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            
        
        </main>
    )
}

export default MyDates