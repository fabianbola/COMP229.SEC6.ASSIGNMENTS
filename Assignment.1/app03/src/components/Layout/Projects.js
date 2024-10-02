import bug from '../../assets/ProjectBug.jpeg'
import samba from '../../assets/ProjectSamba.jpeg'

import Card from '../Items/Card.js';


const Projects = () => {
    return <>
        <h1>My Projects</h1>
        <p>Here are some of the key projects I’ve worked on:</p>
        <center>
            <Card pic={bug} tittle="Bug Mach Game" description="This is the description of the webdite"/>
            <Card pic={samba} tittle="Samba File Sharing" description="This is the description of the webdite"/>
        </center>
    </>
};

export default Projects;