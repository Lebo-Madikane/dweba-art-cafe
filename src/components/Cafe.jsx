

const Cafe = () => {

    return (
        <section className="">
            <h2>Cafe</h2>
            <p className="cafe-p">Dweba Café is a cozy haven for enjoying freshly brewed coffee, delicious meals, and inspiring surroundings.</p>
            <div className="menu-grid">
                <div className="menu-border" style={{ border: "2px solid black" }}>
                    <img className="menu-img" />
                    <p className="menu-description"></p>
                    <p className="menu-price">R1.00</p>
                </div>
                <div className="menu-border" style={{ border: "2px solid black" }}>
                    <img className="menu-img" />
                    <p className="menu-description"></p>
                    <p className="menu-price">R10.00</p>
                </div>
                <div className="menu-border" style={{ border: "2px solid black" }}>
                    <img className="menu-img" />
                    <p className="menu-description"></p>
                    <p className="menu-price">R20.00</p>
                </div>
                <div className="menu-border" style={{ border: "2px solid black" }}>
                    <img className="menu-img" />
                    <p className="menu-description"></p>
                    <p className="menu-price">R50.00</p>
                </div>
            </div>
            <button className="view-menu-btn">View Menu</button>
        </section>
    );

};
 
export default Cafe;