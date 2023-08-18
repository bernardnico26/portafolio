import Me from "../components/Me"
import Portafolio from "../components/Portafolio"
import Contacto from "../components/Contacto"
import MyDates from "../components/MyDates"
import Skills from "../components/skills"

const Home = () => {
  
  return (
    <section id="home">
      {/*<div className="buttons section">
              <a href="nico.bernard2207@gmail.com" className="link-contact mail"><i className='bx bx-envelope' ></i></a>
              <a href="https://wa.me/1133298630" className="link-contact whatsapp"><i className='bx bxl-whatsapp'></i></a>
      </div>*/}
      <Me/>
      <MyDates/>
      <Skills/>
      <Portafolio/>
      <Contacto/>
    </section>
  )
}

export default Home