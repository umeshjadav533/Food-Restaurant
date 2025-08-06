import Footer from "../Footer";
import Service_Card from "../Service_Card";

const Service = () => {
    return (
    <section id="service-section">
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-center">
            <h3 id="our-service" className="text-center">Our Services</h3>
            <h2 id="service-explore" className="fw-bold text-center">Explore Our Services</h2>
        </div>
        <div className="container-fluid mb-3 mt-5" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <div id="service-card-container" className="d-flex flex-wrap justify-content-center gap-4 row-gap-4">
                <Service_Card icon={<i className="fa-solid fa-user-tie"></i>} name="Master Chefs"/>
                <Service_Card icon={<i className="fa-solid fa-utensils"></i>} name="Quality Food"/>
                <Service_Card icon={<i className="fa-solid fa-bag-shopping"></i>} name="Online Order"/>
                <Service_Card icon={<i className="fa-solid fa-headphones-simple"></i>} name="24/7 Service"/>
                <Service_Card icon={<i className="fa-solid fa-user-tie"></i>} name="Master Chefs"/>
                <Service_Card icon={<i className="fa-solid fa-utensils"></i>} name="Quality Food"/>
                <Service_Card icon={<i className="fa-solid fa-bag-shopping"></i>} name="Online Order"/>
                <Service_Card icon={<i className="fa-solid fa-headphones-simple"></i>} name="24/7 Service"/>
            </div>
        </div>
        <Footer />
    </section>
    )
}

export default Service;