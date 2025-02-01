import Header from '../components/Header';
import Footer from '../components/Footer';

const MenuItems = (
    <div id="menu-items">
        <div id='menu-text'>
            <h2>Our Menu</h2>
        </div>
        <div id='breakfast'>
            <ul>
                <li>Classic egg benedict - R95</li>
                <li>Loaded egg benedict - R115</li>
                <li>Cheese omelette basic - R80</li>
                <li>Classic english breakfast - R65</li>
                <li>Herby scramble on toast - R85</li>
                <li>Boiled or poached egg - R120</li>
                <li>Loaded avocado toast - R95</li>
                <li>Masela poached - R75</li>
            </ul>
        </div>
        <div id='croissaints'>
            <ul>
                <li>Croissants - R50</li>
                <li>Plain croissant - R25</li>
                <li>Croissant with butter & jam - R50</li>
                <li>Croissant french toast - R65</li>
                <li>Croissant with herby scramble - R65</li>
            </ul>
        </div>
        <div id='salads'>
            <ul>
                <li>Classic greek - R70</li>
                <li>Waldorf salad - R95</li>
                <li>Summer panzanella - R75</li>
                <li>Lemon broccoli & wild rocket - R95</li>
            </ul>
        </div>
        <div id='burgers'>
            <ul>
                <li>Smash burger - R105</li>
                <li>Caprese style burger - R85</li>
                <li>Smash chicken burger - R105</li>
                <li>Spicy lamb burger - R105</li>
            </ul>
        </div>
        <div id='extras'>
            <ul>
                <li>Egg - R25</li>
                <li>Brie - R25</li>
                <li>Beacon - R25</li>
                <li>Cheddar - R15</li>
                <li>Gherkins - R10</li>
                <li>Avocado - R25</li>
                <li>Camembert - R25</li>
                <li>Mozzarella - R25</li>
                <li>Chesse platter - R98</li>
                <li>Cherry tomatoes - R10</li>
                <li>Breakfast sausage - R25</li>
                <li>Crispy fresh fries - R25</li>
                <li>Smoked chicken - R25</li>
                <li>Sweet potatoe's - R25</li>
                <li>Sauteed greens - R15</li>
                <li>Artisanal/Country bread - R15</li>
                <li>Feta - R20</li>
                <li>Kale - R15</li>
            </ul>
        </div>
        <div id='juices'>
            <ul>
                <li>Apple zing - R55</li>
                <li>Apple juice - R35</li>
                <li>Berry juice - R35</li>
                <li>Orange juice - R35</li>
                <li>Spinach juice - R50</li>
                <li>Cranberry juice - R35</li>
                <li>Carrot juice - R35</li>
                <li>Celery juice - R50</li>
                <li>Ginger shot - R25</li>
                <li>Cucumber, lemon cooler - R55/R70</li>
            </ul>
        </div>
        <div id='cold-drinks'>
            <ul>
                <li>Sprite - R22</li>
                <li>Lemonade - R22</li>
                <li>Ice coffee - R45</li>
                <li>Still water - R15/R50</li>
                <li>Sparkling water - R15/R50</li>
                <li>Coke(ligth, zero) - R22</li>
                <li>Appletizer(grape) - R30</li>
                <li>Cream soda - R22</li>
                <li>Ginger ale - R22</li>
                <li>Dry lemon - R22</li>
                <li>Fanta - R22</li>
            </ul>
        </div>
        <div id='hot-drinks'>
            <ul>
                <li>Tea - R25</li>
                <li>Espresso - R28</li>
                <li>Flat white - R35</li>
                <li>Macchiato - R28</li>
                <li>Americano - R30</li>
                <li>Dark hot chocolate - R40</li>
                <li>White hot chocolate - R40</li>
                <li>Cappuccino - R35</li>
                <li>Chai latte - R40</li>
                <li>Baby chino - R5</li>
                <li>Cortado - R35</li>
                <li>Latte - R40</li>
            </ul>
        </div>
        <div id='smoothies'>
            <ul>
                <li>Rock shandy - R45</li>
                <li>Cucumber lime - R55</li>
                <li>No tequila sunrise - R45</li>
                <li>Passionate lady - R45</li>
                <li>Virgin mojito - R45</li>
            </ul>
        </div>
        <div id='mocktails'>
            <ul>
                <li>Tropical breeze - R55</li>
                <li>Peanut butter bliss - R55</li>
                <li>Berry smoothie - R55</li>
            </ul>
        </div>
    </div>
);

const MenuPage = () => {

    return (
        <section id="menu-page"> 
            <Header />
            {MenuItems}
            <Footer />
        </section>
    );

};
 
export default MenuPage;