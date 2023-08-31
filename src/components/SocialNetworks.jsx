import "../styles/socialNetworks.css"

const SocialNetworks = () => {
    return(        
        <section className="social__networks_container">

                <input type="checkbox" id="btn-mas"/>
                <div className="btn-mas">
                    <label htmlFor="btn-mas" className="fa fa-plus"></label>
                </div>
                <div className="redes">
                    <a href="https://wa.me/1133298630"><i className="fa-brands fa-whatsapp social_network"></i></a>
                    <a href="mailto:nico.bernard2207@gmail.com"><i className="fa-regular fa-envelope social_network"></i></a>
                    <a href="https://github.com/bernardnico26"><i className="fa-brands fa-github social_network"></i></a>
                    <a href="https://www.linkedin.com/in/nicolas-bernard-ab4984236/"><i className="fa-brands fa-linkedin social_network"></i></a>
                </div>
                

            
            
        </section>
    )
}
export default SocialNetworks