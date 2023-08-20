import "../styles/skills.css"
import Experience from "./Experience"

const Skills= () => {

    return (
        <main className="main-skills">
            <section className="skills" id="habilidades">
                <h2 className='section__title'>
                    Experiencia <span>y habilidades</span>
                </h2>
                <Experience/>
                <div className='skills__container grid'>
                    <div className="skills__data">
                        <span><i className='bx bxl-javascript'></i></span>
                        <h3 className='skills__title'>javascript</h3>
                    </div>
                    <div className="skills__data">
                        <span><i className='bx bxl-html5'></i></span>
                        <h3 className='skills__title'>html</h3>
                    </div>
                    <div className="skills__data">
                        <span><i className='bx bxl-css3' ></i></span>
                        <h3 className='skills__title'>css</h3>
                    </div>
                    <div className="skills__data">
                        <span><i className='bx bxl-react'></i></span>
                        <h3 className='skills__title'>react</h3>
                    </div>
                    <div className="skills__data">
                        <span><i className='bx bxl-github' ></i></span>
                        <h3 className='skills__title'>github</h3>
                    </div>
                    <div className="skills__data">
                        <span><i className='bx bxl-redux' ></i></span>
                        <h3 className='skills__title'>redux</h3>
                    </div>
                </div>
            </section>
        
        </main>
    )
}

export default Skills