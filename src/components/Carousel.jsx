import poster from "../assets/Launch Poster 2.png"

const Carousel = () => {

    return (
        <section className="carousel">
            <img src={poster} />
            <div className="poster-details">
                <h4>WEEKEND LAUNCH</h4>
                <p>Come and join us</p>
                <p>RSVS</p>
            </div>
        </section>
    );

};
 
export default Carousel;