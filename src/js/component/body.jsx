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
                                <h5 className="card-title">El Monumento al Ejército de Los Andes</h5>
                                <p className="card-text">Es una obra artística del escultor uruguayo Juan Manuel Ferrari. Se encuentra emplazada en la cima del Cerro de la Gloria, Parque General San Martín, en la ciudad argentina de Mendoza</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary"><button type="button" class="btn btn-primary" ><link rel="stylesheet" href="https://es.wikipedia.org/wiki/Monumento_al_Ej%C3%A9rcito_de_Los_Andes#:~:text=El%20Monumento%20al%20Ej%C3%A9rcito%20de,billete%20de%20cinco%20pesos%20argentino." />Conocer Mas</button></small>
                            </div>
                        </div>
                    </div>
    
                    {/* Tarjeta 2 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Mendoza_-_Park_gate.jpg/1280px-Mendoza_-_Park_gate.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Parque General San Martin</h5>
                                <p className="card-text">Portones de hierro forjado con escudos dorados, faroles y un cóndor en la entrada del parque San Martín.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary"><button type="button" class="btn btn-primary">Conocer Mas</button></small>
                            </div>
                        </div>
                    </div>
    
                    {/* Tarjeta 3 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Casa_de_Gobierno_de_Mendoza_03.JPG/1920px-Casa_de_Gobierno_de_Mendoza_03.JPG" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Casa de Gobierno</h5>
                                <p className="card-text">La Casa de Gobierno es la sede del Poder Ejecutivo de la Provincia de Mendoza, en Argentina. Forma parte del Barrio Cívico de Mendoza, un pretencioso proyecto urbano que quedó inconcluso</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary"><button type="button" class="btn btn-primary">Conocer Mas</button></small>
                            </div>
                        </div>
                    </div>
    
                    {/* Tarjeta 4 */}
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://www.savacations.com/wp-content/uploads/2019/10/Blog-Catena-Zapata-Vineyard-Andes-Mendoza.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Aconcagua</h5>
                                <p className="card-text">El Aconcagua es una montaña en el departamento Las Heras, en la provincia de Mendoza, en el oeste de la República Argentina. Integra la Cordillera Principal, componente de la cordillera de los Andes.</p>
                            </div>
                            <div className="card-footer">
                                <small className="text-body-secondary"><button type="button" class="btn btn-primary">Conocer Mas</button></small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    

    );
};
export default Body;