import Footer from "../Footer";

const Home = () => {
    return (
        <>
    <section id="home-section" className=" d-flex align-items-center">
        <div className="container-fluid " id="home-text-part">
            <div className="row d-flex justify-content-center justify-content-md-start" id="text-part-row">
                <div className="col-12 col-sm-8 col-md-6 px-5" id="text-part-col" data-aos="fade-right" dat-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-delay="0" data-aos-duration="400">
                    <h1>Enjoy our Delicious Meal</h1>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </>
    )
}

export default Home;