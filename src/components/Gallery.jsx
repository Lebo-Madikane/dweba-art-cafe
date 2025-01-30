

const Gallery = () => {

    return (
        <section className="gallery-grid">
            <div className="row">
                <div className="art-grid" style={{border: "2px solid black"}}>
                    <img />
                </div>
                <div className="art-grid" style={{ border: "2px solid black" }}>
                    <img />
                    <div className="art-details">
                        <p>Category</p>
                    </div>
                </div>
                <div className="art-grid">
                    <img />
                    <div className="art-details">
                        <p>Category</p>
                    </div>
                    <div className="art-grid">
                        <img />
                        <div className="art-details">
                            <p>Category</p>
                        </div>
                    </div>
                </div>
                <div className="art-grid">
                    <img />
                </div>
            </div>
            <div className="row">
                <div className="art-grid">
                    <img />
                </div>
                <div className="art-grid">
                    <img />
                    <div className="art-details">
                        <p>Category</p>
                    </div>
                </div>
                <div className="art-grid">
                    <img />
                    <div className="art-details">
                        <p>Category</p>
                    </div>
                </div>
                <div className="art-grid">
                    <img />
                    <div className="art-details">
                        <p>Category</p>
                    </div>
                </div>
                <div className="art-grid">
                    <img />
                </div>
            </div>
            <div className="row">
                <div className="art-grid">
                    <img />
                </div>
                <div className="art-grid">
                    <img />
                    <div className="art-details">
                        <p>Category</p>
                    </div>
                </div>
                <div className="art-grid">
                    <img />
                    <div className="art-details">
                        <p>Category</p>
                    </div>
                </div>
                <div className="art-grid" style={{ border: "2px solid black" }}>
                    <img />
                    <div className="art-details">
                        <p>Category</p>
                    </div>
                </div>
                <div className="art-grid" style={{ border: "2px solid black" }}>
                    <img />
                </div>
            </div>
        </section>
    );

};
 
export default Gallery;