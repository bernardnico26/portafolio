import Experience from "./Experience"
import Skills from "./skills"
import "../styles/experience_skills.css"

const Experience_skills = () => {

    return (
        <main className="main__experience_skills">
            <section className="experience_skills" id="habilidades">
                <h2 className='section__title'>
                    Experiencia <span>y habilidades</span>
                </h2>
                <Experience/>
                <div className="separator">
                        <hr />
                </div>
                <Skills/>
            </section>
            
        </main>
    )
}

export default Experience_skills