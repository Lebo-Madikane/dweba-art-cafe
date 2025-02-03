import heroImg from "../assets/HeroImg.png"

const Hero = () => {

    return (
        <section className="hero-section">
            <div className="hero-text">
                <h1>Art Meets<br/> Community & Coffee</h1>
                <p>Dweba Art and Café is where creativity, connection, and comfort meet - offering contemporary art, premium coffee, and an inspiring, inclusive atmosphere.</p>
            </div>
            <div className="hero-img">
                <img src={heroImg} alt="hero-img"/>
            </div>
        </section>
    );

};
 
export default Hero;