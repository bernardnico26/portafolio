import "../styles/portafolio.css"

const Portafolio= () => {
  
    return (
      <main className="main-portafolio" >
        <section className='portfolio section' id="portafolio">
          <h2 className='section__title'>
            My <span>Portfolio</span>
          </h2>

          <div className='portfolio__container container grid'>
            <div className="slider">
              <div>
                <img src="/ecom.png" alt="" />
                <h3 className='modal__title'>e-commerce</h3>
                <ul className='modal__list grid'>
                  <li className='modal__item'>
                    <span className='item__icon'><i className="fa-regular fa-file-lines"></i></span>
                
                    <div>
                      <span className='item__title'>proyecto</span>
                      <span className='item__details'>e-commerce</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <img src="/pokedex.png" alt="" />
                <h3 className='modal__title'>pokedex</h3>
                <ul className='modal__list grid'>
                  <li className='modal__item'>
                    <span className='item__icon'><i className="fa-regular fa-file-lines"></i></span>
                
                    <div>
                      <span className='item__title'>proyecto</span>
                      <span className='item__details'>pokedex</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <img src="/ricky.png" alt="" />
                <h3 className='modal__title'>rick and morty Locations</h3>
                <ul className='modal__list grid'>
                  <li className='modal__item'>
                    <span className='item__icon'><i className="fa-regular fa-file-lines"></i></span>
                
                    <div>
                      <span className='item__title'>proyecto</span>
                      <span className='item__details'>rick and morty Locations</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <img src="/weather.png" alt="" />
                <h3 className='modal__title'>weather page</h3>
                <ul className='modal__list grid'>
                  <li className='modal__item'>
                    <span className='item__icon'><i className="fa-regular fa-file-lines"></i></span>
                
                    <div>
                      <span className='item__title'>proyecto</span>
                      <span className='item__details'>weather page</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            
        </section>
        
      </main>
    )
  }
  
  export default Portafolio