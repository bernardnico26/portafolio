import Me from "../components/Me"
import Portafolio from "../components/Portafolio"
import Contacto from "../components/Contacto"
import MyDates from "../components/MyDates"
import Skills from "../components/skills"

const Home = () => {
  
  return (
    <div id="home">
      <Me/>
      <MyDates/>
      <Skills/>
      <Portafolio/>
      <Contacto/>
    </div>
  )
}

export default Home