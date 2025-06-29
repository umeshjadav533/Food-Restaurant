const Footer = () => {
    return (
    <footer id="footer-section" className="d-block">
        <div className="container-fluid" id="footer-container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
                <div className="col mb-5">
                    <div className="d-flex align-items-center">
                        <h4 id='company-title'>Company &nbsp;</h4>
                        <div id='strat-line'></div>
                    </div>
                    <ul className="list-unstyled" id="footer-links">
                        <li><a href="#" >About Us</a></li>
                        <li><a href="#" >Contact Us</a></li>
                        <li><a href="#" >Order</a></li>
                        <li><a href="#" >Privacy Policy</a></li>
                        <li><a href="#" >Terms & Condition</a></li>
                    </ul>
                </div>


                <div className="col mb-5">
                    <div className="d-flex align-items-center">
                        <h4 id='contact-title'>Contact &nbsp;</h4>
                        <div id='strat-line'></div>
                    </div>
                    <ul className="list-unstyled" id="footer-links">
                        <li><a href="#" ><i className="fa-solid fa-location-dot"></i>&nbsp; &nbsp;123 Street, New York, USA</a></li>
                        <li><a href="#" ><i className="fa-solid fa-phone"></i>&nbsp; &nbsp;+012 345 67890</a></li>
                        <li><a href="#" ><i className="fa-solid fa-envelope"></i>&nbsp; &nbsp;info@example.com</a></li>
                        <ul className="list-unstyled d-flex" id="social-media-icon">
                            <li><i className="fa-brands fa-twitter"></i></li>
                            <li><i className="fa-brands fa-facebook"></i></li>
                            <li><i className="fa-brands fa-youtube"></i></li>
                            <li><i className="fa-brands fa-linkedin-in"></i></li>
                        </ul>
                    </ul>
                </div>


                <div className="col mb-5">
                    <div className="d-flex align-items-center">
                        <h4 id='opening-title'>Opening &nbsp;</h4>
                        <div id='strat-line'></div>
                    </div>
                    <ul className="list-unstyled" id="footer-links">
                        <li><a href="#" className="fs-6">Monday - Saturday</a></li>
                        <li><a href="#" >09AM - 09PM</a></li>
                        <li><a href="#" className="fs-6">Sunday</a></li>
                        <li><a href="#" >10AM - 08PM</a></li>
                    </ul>
                </div>


                <div className="col">
                    <div className="d-flex align-items-center">
                        <h4 id='newsletter-title'>Newsletter &nbsp;</h4>
                        <div id='strat-line'></div>
                    </div>
                    <ul className="list-unstyled" id="footer-links">
                        <li><a href="#" >Dolor amet sit justo amet elitr clita ipsum elitr est.</a></li>
                        <li><input type="email" placeholder="Your Email" className="form-control" id="footer-email"/></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;