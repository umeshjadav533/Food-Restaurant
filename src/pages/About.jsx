import Footer from '../Footer';
import about_1 from './../assets/about-section/about_1.jpg';
import about_2 from './../assets/about-section/about-2.jpg';
import about_3 from './../assets/about-section/about-3.jpg';
import about_4 from './../assets/about-section/about-4.jpg';

const About = () => {
    return (
    <section id="about-section" style={{marginTop:"100px"}}>
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col-12 col-lg-6">
                    {/* images */}
                    <div className='row mb-4'>
                        <div className='col' data-aos="zoom-in">
                            <img src={about_1} className='img-fluid' />
                        </div>
                        <div className='col d-flex align-items-end justify-content-start' data-aos="zoom-in">
                            <img src={about_2} className='img-fluid h-75' />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col d-flex align-items-start justify-content-end' data-aos="zoom-in">
                            <img src={about_3} className='img-fluid h-75' />
                        </div>
                        <div className='col' data-aos="zoom-in">
                            <img src={about_4} className='img-fluid' />
                        </div>
                    </div>
                </div>

                {/* about text */}
                <div className="col-12 col-lg-6 p-5" id='about-content'>
                    {/* <h4 id='about-title' style={{textDecorationLine:"underline"}}>About us</h4> */}
                    <div className="d-flex align-items-center">
                        <h4 id='about-title'>About Us &nbsp;</h4>
                        <div id='strat-line'></div>
                    </div>
                    <h1 id='nuniti-font' className='fw-bold mb-4'>Welcome to <i className="fa-solid fa-utensils"></i> Restaurant</h1>
                    <p className='mb-4' style={{textAlign:"justify"}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                    <p style={{textAlign:"justify"}}>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

                    <div className='row'>
                        <div id='border-left-col' className='col-12 col-sm-6 d-flex p-0'>
                            <h1 className='mx-2'>15</h1>
                            <div className='mx-2'>
                                <p className='m-0'>Years of</p>
                                <p className='m-0 fw-bold'>EXPERIENCE</p>
                            </div>
                        </div>

                        <div id='border-left-col' className='col-12 col-sm-6 d-flex p-0'>
                            <h1 className='mx-2'>50</h1>
                            <div className='mx-2'>
                                <p className='m-0'>Popular</p>
                                <p className='m-0 fw-bold'>MASTER CHEFS</p>
                            </div>
                        </div>
                    </div>

                    <button href='#' className='btn px-5 py-3 mt-3' id='read-more-btn'>READ MORE</button>
                </div>
            </div>
        </div>
        <Footer />
    </section>
    )
}

export default About;