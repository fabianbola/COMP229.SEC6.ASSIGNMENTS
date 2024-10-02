import './Card.css';

function card(prop){
    return(
        <div className="card">
            <img className="cardImage" src={prop.pic} alt="Card picture"></img>
            <h2 className="cardTittle">{prop.tittle}</h2>
            <p className="carddescription">{prop.description}</p>
        </div>
    )
}

export default card