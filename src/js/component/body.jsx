import React from "react";

const Body = () => {
	return (
            <div className="container d-flex justify-content-center my-5">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {/* Tarjeta 1 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Siguiendo_al_Libertador.jpg/1920px-Siguiendo_al_Libertador.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary"><button type="button" class="btn btn-primary">Primary</button></small>
                            </div>
                        </div>
                    </div>
    
                    {/* Tarjeta 2 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Mendoza_-_Park_gate.jpg/1280px-Mendoza_-_Park_gate.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary"><button type="button" class="btn btn-primary">Primary</button></small>
                            </div>
                        </div>
                    </div>
    
                    {/* Tarjeta 3 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Casa_de_Gobierno_de_Mendoza_03.JPG/1920px-Casa_de_Gobierno_de_Mendoza_03.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary"><button type="button" class="btn btn-primary">Primary</button></small>
                            </div>
                        </div>
                    </div>
    
                    {/* Tarjeta 4 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.savacations.com/wp-content/uploads/2019/10/Blog-Catena-Zapata-Vineyard-Andes-Mendoza.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary"><button type="button" class="btn btn-primary">Primary</button></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    

    );
};
export default Body;