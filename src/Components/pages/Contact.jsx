import Footer from "../Footer";

const Contact = () => {
    return (
    <section id="contact-section">
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <h3 className="text-center fw-bold">Contact us</h3>
            <h1 className="text-center fw-bold">Contact For Any Query</h1>
        </div>

        <div className="container-fluid" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div className="row row-cols-1 row-cols-sm-3">
                <div className="col text-center" id="contact-place">
                    <span>place</span>
                    <div className="d-flex align-items-center justify-content-center" id="contact-bottom">
                        <i className="fa-regular fa-envelope mb-0"></i>
                        <p className="text-dark mb-0">&nbsp; &nbsp;book@example.com</p>
                    </div>
                </div>

                <div className="col text-center" id="contact-general">
                    <span>General</span>
                    <div className="d-flex align-items-center justify-content-center" id="contact-bottom">
                        <i className="fa-regular fa-envelope"></i>
                        <p className="text-dark mb-0">&nbsp; &nbsp;info@example.com</p>
                    </div>
                </div>

                <div className="col text-center" id="contact-technical">
                    <span>Technical</span>
                    <div className="d-flex align-items-center justify-content-center" id="contact-bottom">
                        <i className="fa-regular fa-envelope"></i>
                        <p className="text-dark mb-0">&nbsp; &nbsp;tech@example.com</p>
                    </div>
                </div>
            </div>
        </div>
        
        

        <div className="container-fluid mt-5 mb-3">
        <div className="row">
            <div className="col-12 col-md-5 col-lg-6" id="our-map-container" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34929.77929716086!2d72.5698251907622!3d23.04062776515379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fa08cd4e4b%3A0x1a4593ed88b2e66c!2sLaw%20Garden!5e0!3m2!1sen!2sin!4v1751089821543!5m2!1sen!2sin" width="100%" height="100%" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" id="our-map"></iframe>
            </div>

            <div className="col" id="contact-form" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                {/* name and email */}
                <div className="row row-cols-1 row-cols-sm-2">
                    {/* name */}
                    <div className="col form-floating mb-3">
                        <input type="text" id="floatingname" className="form-control" placeholder="Your Name"/>
                        <label htmlFor="floatingname" className="ps-4">Your Name</label>
                    </div>

                    {/* email */}
                    <div className="col form-floating mb-3">
                        <input type="text" id="floatingemail" className="form-control" placeholder="Your Email"/>
                        <label htmlFor="floatingemail" className="ps-4">Your Email</label>
                    </div>
                </div>


                <div className="form-floating mb-3">
                        <input type="text" id="floatingsubject" className="form-control" placeholder="Subject"/>
                        <label htmlFor="floatingsubject">Subject</label>
                </div>

                <div className="form-floating mb-3">
                        <textarea id="floatingmessage" className="form-control" placeholder="Message" rows="17" cols="7"/>
                        <label htmlFor="floatingmessage">Message</label>
                </div>

                <button type="button" className="py-3 border-0 w-100" id="send-message-btn">SEND MESSAGE</button>
            </div>
        </div>
    </div>

    <Footer />
    </section>
    )
}

export default Contact;