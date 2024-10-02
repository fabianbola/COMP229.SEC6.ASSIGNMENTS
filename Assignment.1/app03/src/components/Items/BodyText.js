function BodyText(prop){
    return(<>
        <section class="intro">
            <p>{prop.Section1}</p>
        </section>

        <section class="mission">
            <h2>{prop.Subtittle}</h2>
            <p>{prop.Section2}</p>
        </section>
    </>
        
    )


}

export default BodyText