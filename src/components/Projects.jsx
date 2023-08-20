import "../styles/proyects.css"

const Projects = ({ img, title, details, id, dire }) => {

    return (
        <label className="card" htmlFor={`${dire}`} id={`${id}`}>
            
                <img src={img} alt='' className='portfolio__img' />

            
            

            <div className='portfolio__hover' >
                <h3 className='portfolio__title'>{title}</h3>

                <ul className='modal__list grid'>
                {details.map(({ icon, title, desc }, index) => {
                    return(
                        <li className='modal__item' key={index}>
                            <span className='item__icon'>{icon}</span>

                            <div>
                                <span className='item__title'>{title}</span>
                                <span className='item__details'>{desc}</span>
                            </div>
                        </li>
                    )
                })}
                </ul>
            </div>
        </label>
    )
}

export default Projects