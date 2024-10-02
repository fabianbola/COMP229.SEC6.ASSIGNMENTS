import Button from '../Items/Button.js';

import BodyText from '../Items/BodyText.js';

const Home = () => {
    return<>
        <h1>Home</h1>;
        <BodyText
        Section1="Hi, I'm <strong>Daniel Fabian Bolanos Arcos</strong>, a dedicated software engineer with a passion for developing innovative and scalable solutions. I specialize in full-stack development, and I’m always looking for ways to create impactful software."
        Subtittle="Mission Statement"
        Section2="My mission is to deliver high-quality software solutions that solve real-world problems. I believe in continuous learning and improvement, and I am always open to new challenges."
        />
        <Button NameButton='Learn More About Me'/>
        <Button NameButton='View My Projects'/>


    </>
}

export default Home;