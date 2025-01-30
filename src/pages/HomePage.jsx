import Header from '../components/Header';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import OurStory from '../components/OurStory';
import Cafe from '../components/Cafe';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const HomePage = () => {

    return (
        <div className='back-ground'>
            <Header />
            <Hero />
            <Gallery />
            <OurStory />
            <Cafe />
            <Carousel />
            <ContactForm />
            <Footer />
        </div>
    );

};
 
export default HomePage;