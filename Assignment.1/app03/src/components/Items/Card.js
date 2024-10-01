import servicePic from '../../assets/Service.Devwebsites.jpg'

function card(){
    return(
        <div className="card">
            <img className='card-image' src={servicePic} alt="Card picture"></img>
            <h2 className='card-tittle'>Tittle</h2>
            <p className='card-description'>Description</p>
        </div>


    )

}

export default card