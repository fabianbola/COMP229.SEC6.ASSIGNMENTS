import logo from '../../assets/Logo.jpg'

function Headers(){
    return(
        <>
            <center>
            <img className='logo' src={logo} alt="Logo image"></img>
            </center>
            <div className='topnav'>
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </>

    );
}

export default Headers;