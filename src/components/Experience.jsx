import "../styles/experience.css"

const Experience = () =>{
    return (
        <section className="Experience_section" >
                <h3 className='section__subtitle'>
                    Mi Experiencia
                </h3>
                <div className="Experiences">
                    <div className="Experience">
                        <h3 className="company">Interflex GP</h3>
                        <button className="drop">
                            <p><i className='bx bx-chevron-down'></i></p> 
                        </button>
                        <h4 className='Title_exp'>Encargado General</h4>
                        <p className="description__labor">Realizo la mismas labores como maquinista de insoladora, ademas testeo el tiempo y la efectividad al emplear acido y líquidos químicos sobre el fotopolímero. Y finalmente corroboro que se hayan preparado los adecuados polimeros que se deben despachar a las fabricas.</p>
                    </div>
                    <div className="Experience">
                        <h3 className="company">Interflex GP</h3>
                        <button className="drop">
                            <p><i className='bx bx-chevron-down'></i></p> 
                        </button>
                        <h4 className='Title_exp'>Maquinista de Insoladora UV</h4>
                        <p className="description__labor">Mi labor era colocar las películas de poliéster sobre el fotopolímero en una posicion especifica y luego manejaba un dispositivo que absorbía el aire al vacío.</p>
                    </div>
                    <div className="Experience">
                        <h3 className="bastida">bastida</h3>
                        <button className="drop">
                            <p><i className='bx bx-chevron-down'></i></p> 
                        </button>
                        <h4 className='Title_exp'>Ventas y atención al cliente</h4>
                        <p className="description__labor">Venta de neumaticos y servicos de la gomeria, en internet. También atención al clinete en el local</p>
                    </div>
                </div>
                
        </section>
    )
}
export default Experience