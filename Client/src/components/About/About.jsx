import Style from "./about.module.css"

function About () {
    return <> 
        <div className={Style.container}>
            <div className={Style.description}>
                <h2 className={Style.name}>Mauricio Alonso</h2>
                <p className={Style.text}>
                    As a front-end web development student, I have strong HTML, CSS, and JavaScript skills. I learned to build attractive and functional interfaces. I recently expanded my knowledge with React, creating reusable components and applying data binding and routing. My focus is creating exceptional user experiences and contributing to the ever-evolving digital world. 
                </p>
                <br/>
                <h3 className={Style.skills}>Skills</h3>
                <div className={Style.divSkills}>
                    <li className={Style.html}></li>
                    <li className={Style.css}></li>
                    <li className={Style.javascript}></li>
                    <li className={Style.bootstrap}></li>
                    <li className={Style.react}></li>
                </div>
            </div>
            <div className={Style.img}></div>
        </div>
    </>
}

export default About