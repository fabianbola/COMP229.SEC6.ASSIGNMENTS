import './Card.css';

function card(prop){
    return(
        <div className="card">
            <div className="image-container">
                <img className="cardImage" src={prop.pic} alt="Card picture"></img>
            </div>
            <div className="content-container">
                <center>
                    <h3 className="cardTittle">{prop.tittle}</h3>
                    <p className="carddescription">{prop.description}</p>
                </center>
            </div>
        </div>
    )
}

export default card