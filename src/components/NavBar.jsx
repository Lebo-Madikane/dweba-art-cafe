import logo from "../assets/logo black.svg"

const NavBar = () => {

    return (
        <header>
            <img src={logo} />
            <div>
                <ul>
                    <li>Gallery</li>
                    <li>Cafe</li>
                    <li>Our Story</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </header>
    );
};
 
export default NavBar