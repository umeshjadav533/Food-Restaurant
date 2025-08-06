import FetchData from "../Components/FetchData";
const Menu = () => {
    
    return (
    <section id="menu-section" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div className="tect-center">
            <h3 className="text-center">Food Menu</h3>
            <h2 className="text-center">Most Popular Items</h2>
        </div>

        <ul className="nav nav-tabs border-0 d-flex justify-content-center" id="food-tab">
            <li className="nav-item">
                <button className="nav-link active border-0 px-2 fw-bold" id="all-tab" data-bs-toggle="tab" data-bs-target="#all" type="button">
                All
                </button>
            </li>

            <li className="nav-item">
                <button className="nav-link border-0 px-2 fw-bold" id="burger-tab" data-bs-toggle="tab" data-bs-target="#burger" type="button">
                    Burger
                </button>
            </li>

            <li className="nav-item">
                <button className="nav-link border-0 px-2 fw-bold" id="pizza-tab" data-bs-toggle="tab" data-bs-target="#pizza" type="button">
                    Pizza
                </button>
            </li>

            <li className="nav-item">
                <button className="nav-link border-0 px-2 fw-bold" id="pasta-tab" data-bs-toggle="tab" data-bs-target="#pasta" type="button">
                 Pasta
                </button>
            </li>

            <li className="nav-item">
                <button className="nav-link border-0 px-2 fw-bold" id="fries-tab" data-bs-toggle="tab" data-bs-target="#fries" type="button">
                 Fries
                </button>
            </li>
        </ul>
        {/* <FetchData /> */}

        <div className="tab-content" id="food-tab">
            <div className="tab-pane fade show active bg-transparent" id="all">
                <FetchData id_start="1" id_end="40"/>
            </div>
            <div className="tab-pane fade bg-transparent" id="burger">
                <FetchData id_start="1" id_end="10"/>
            </div>
            <div className="tab-pane fade bg-transparent" id="pizza">
                <FetchData id_start="11" id_end="20"/>
            </div>
            <div className="tab-pane fade bg-transparent" id="pasta">
                <FetchData id_start="21" id_end="30"/>
            </div>
            <div className="tab-pane fade bg-transparent" id="fries">
                <FetchData id_start="31" id_end="40"/>
            </div>
        </div>
    </section>
    )
}

export default Menu;