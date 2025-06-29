const Service_Card = ({icon,name}) => {
    return (
    <div className="card p-3 d-flex flex-column gap-2" id="service-card-top-container">
        <span className="display-5">{icon}</span>
        <p className="mb-0 fw-bold">{name}</p>
        <p className="mb-0" style={{textAlign:"justify"}}>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
    </div>
    )
}   

export default Service_Card;