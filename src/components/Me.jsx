import "../styles/me.css"

const Me = () => {
  
    return (
      <section className="main-principal-data" >
        <section className="principal-data section grid" id="home">
          <img src="/developerfoto.png" alt="" className='home__img'/>

          <div className='home__content'>
            <div className='home__data'>
              <div className='home__title'>
                <h1 className="name">Nicolas Bernard</h1>
                <span className="grid__title grid__title--transform">Front-End Developer</span>
              </div>
              

              <p className='home__description'>
                Soy un Fullstack Developer muy apasionado por lo que hago, la vida me llevo a transitar diferentes trabajos, pero ninguno me generó lo que hace la programacion.
              </p>

              <div>
                <a href="#misdatos" className='button'>
                <span className="text__button">Mas datos{' '}</span>
                <span className='button__icon'>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
              </div>
              
            </div>
            <div className="color__block3"></div>
          </div>
          <div className="color__block"></div>
          <div className="color__block2"></div>
          
        </section>
        
      </section>
    )
  }
  
  export default Me