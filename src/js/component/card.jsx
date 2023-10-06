import React from "react";
let styleCard = {
    with: '18rem'
}
const Card = () => {
    return (

        <div className="col-12 col-md-3">

            <div className="card" style={styleCard}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>

    )
}

export default Card