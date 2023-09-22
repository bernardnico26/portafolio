import "../styles/proyects.css"
import Close from '../assets/close.svg'
import { useState } from "react"

const Projects = ({ img, title, details, id, dire }) => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };

    return (
        <label className="card" htmlFor={`${dire}`} id={`${id}`}>
            <img src={img} alt='' className='portfolio__img' />

            <div className='portfolio__hover' >
              <div className="hover__content">
                <h3 className='portfolio__title'>{title}</h3>
                <button onClick={toggleModal} className="modal__button">ver info</button>
              </div>
              
            </div>

            {modal && (
              <div className='portfolio__modal'>
                <div className='portfolio__modal-content'>
                  <img
                    src={Close}
                    alt=''
                    className='modal__close'
                    onClick={toggleModal}
                  />

                  <h3 className='modal__title'>{title}</h3>
            
                  <ul className='modal__list grid'>
                    {details.map(({ icon, title, desc }, index) => {
                      if (index === 3) {
                        return (
                          <li className='modal__item' key={index}>
                            <span className='item__icon'>{icon}</span>
                            <div>
                              <span className='item__title'>{title}</span>
                              <a href={desc} target="_blank" rel="noopener noreferrer">
                                Ir al proyecto
                              </a>
                            </div>
                          </li>
                        );
                      }

                      return (
                        <li className='modal__item' key={index}>
                          <span className='item__icon'>{icon}</span>
                          <div>
                            <span className='item__title'>{title}</span>
                            <span className='item__details'>{desc}</span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                
                  <img src={img} alt='' className='modal__img' />
                </div>
              </div>
            )}
        </label>
    )
}

export default Projects