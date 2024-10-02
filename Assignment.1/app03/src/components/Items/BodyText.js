function BodyText(prop){
    return(<>
        <section class="intro">
            <p>{prop.Section1}</p>
        </section>

        <section class="mission">
            <h2>{prop.Subtittle}</h2>
            <p>{prop.Section2}</p>
        </section>

        <section class="explore">
            <p>Explore more about me, my projects, and how I can help you!</p>
            {/* <div class="buttons">
                <a href="about.html" class="button">Learn More About Me</a>
                <a href="projects.html" class="button">View My Projects</a>
            </div> */}
        </section>
    </>
        
    )


}

export default BodyText