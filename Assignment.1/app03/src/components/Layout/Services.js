import serviceDevWeb from '../../assets/Service.Devwebsites.jpeg';
import serviceMeth from '../../assets/Service.Methodology.jpeg'
import serviceBackDev from '../../assets/Service.BackDev.jpeg'
import Card from '../Items/Card.js';


const Services = () => {
    return <>
    <div>
        <div>
            <h1>Services</h1>
        </div>
        <div>
            <p>Los servicios mas relevantes</p>
        </div>
        <br></br>
        <div>
            <center>
                <Card pic={serviceDevWeb} tittle="Website Development" description="This is the description of the webdite"/>
                <Card pic={serviceMeth} tittle="Agile Methodology Coach" description="This is the description of the webdite"/>
                <Card pic={serviceBackDev} tittle="Back Development" description="This is the description of the webdite"/>
            </center>
        </div>
        <br></br>
        <div>
            <p>I’m always excited to take on new projects, so if you have an idea or collaboration in mind, feel free to reach out!</p>
        </div>
    </div>
    
    {/* <center>
        
    </center> */}

    </>
};

export default Services;