import "../styles/skills.css"

const Skills= () => {

    return (
        <section className="section-skills">
            <h3 className='section__subtitle'>
                Mis habilidades
            </h3>
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
    )
}

export default Skills