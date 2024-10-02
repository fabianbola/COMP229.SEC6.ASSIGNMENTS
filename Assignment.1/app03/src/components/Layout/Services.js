import serviceDevWeb from '../../assets/Service.Devwebsites.jpeg';
import serviceMeth from '../../assets/Service.Methodology.jpeg'
import serviceBackDev from '../../assets/Service.BackDev.jpeg'
import Card from '../Items/Card.js';


const Services = () => {
    return <>
    <h1>Services</h1>
    <p>Los servicios mas relevantes</p>
    <center>
        <Card pic={serviceDevWeb} tittle="Website Development" description="This is the description of the webdite"/>
        <Card pic={serviceMeth} tittle="Agile Methodology Coach" description="This is the description of the webdite"/>
        <Card pic={serviceBackDev} tittle="Back Development" description="This is the description of the webdite"/>
    </center>
    </>
};

export default Services;