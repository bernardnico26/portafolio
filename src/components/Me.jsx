import "../styles/me.css"

const Me = () => {
  
    return (
      <main className="main-principal-data" >
        <section className="principal-data section grid" id="home">
          <img src="/developerfoto.png" alt="" className='home__img'/>

          <div className='home__content'>
            <div className='home__data'>
              <h1 className='home__title'>
                <span>Hola soy Nicolas Bernard</span> Front-End Developer
              </h1>

              <p className='home__description'>
                Actualmente soy un Front-End Developer, cuento con experiencia en tecnologías como React JS y Redux,
                esto me puede permitir ayudar a las empresas a mejorar la experiencia del usuario.
              </p>

              <a href="#misdatos" className='button'>
                Mas datos{' '}
                <span className='button__icon'>
                <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="color__block"></div>
          <div className="color__block2"></div>
        </section>
        
      </main>
    )
  }
  
  export default Me