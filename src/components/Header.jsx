import logo from "../assets/logo black.svg"

const Header = () => {

    return (
        <header>
            <img src={logo} alt="logo"/>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Our Stoty</li>
                    <li>Gallery</li>
                    <li>Café</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>
    );
};
 
export default Header