import servicePic from '../../assets/Service.Devwebsites.jpg';
import './Card.css';

function card(){
    return(
        <div className="card">
            <img className="cardImage" src={servicePic} alt="Card picture"></img>
            <h2 className="cardTittle">Tittle</h2>
            <p className="carddescription">Description</p>
        </div>
    )
}

export default card