

const ContactForm = () => {

    return (
        <section className="contact-us">
            <form className="form-art-collector">
                <h4>Artwork Inquiry Form</h4>
                <div className="input-row-1">
                    <input type="text" placeholder="First name"/>
                    <input type="text" placeholder="Last name" />
                </div>
                <div className="input-row-2">
                    <input type="email" placeholder="Email"/>
                    <input type="text" placeholder="Artwork code" />
                </div>
                <div className="input-row-3">
                    <textarea id="message" name="message" placeholder="message.." rows="4" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );

};
 
export default ContactForm;