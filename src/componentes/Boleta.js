import React from "react";
import './home.css';
function Boleta() {
    return (
        <div class="fondo">
            <div >
                <h1 className="h1">Diputaciones Federales</h1>
                <br></br>
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card h-100">
                        <div class="card mb-2 card">
                            <div class="row g-4">
                                <div class="col-md-3">
                                    <img src="/images/img1.png" class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title" className="partido">Partido Accion Nacional</h5>
                                        <p class="card-text" className="text">Nombre del cadidato</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <div class="card mb-2 card">
                            <div class="row g-4">
                                <div class="col-md-3">
                                    <img src="/images/img2.png" class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title" className="partido">Partido Recolucionario Institucional</h5>

                                        <p class="card-text" className="text">Nombre del cadidato</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <div class="card mb-2 card">
                            <div class="row g-4">
                                <div class="col-md-3">
                                    <img src="/images/img4.png"  class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title" className="partido">Partido Revolución Democrática</h5>
                                        <p class="card-text" className="text">Nombre del cadidato</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <div class="card mb-2 card">
                            <div class="row g-4">
                                <div class="col-md-3">
                                    <img src="/images/img3.png" class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title" className="partido">Partido verde ecologista de México</h5>
                                        <p class="card-text" className="text">Nombre del cadidato</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <div class="card mb-2 card">
                            <div class="row g-4">
                                <div class="col-md-3">
                                    <img src="/images/img5.png" class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title" className="partido">Partido del trabajo</h5>
                                        <p class="card-text" className="text">Nombre del cadidato</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <div class="card mb-2 card">
                            <div class="row g-4">
                                <div class="col-md-3">
                                    <img src="/images/img6.png" class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title" className="partido">Movimiento ciudadano</h5>
                                        <p class="card-text" className="text">Nombre del cadidato</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <div class="card mb-2 card">
                            <div class="row g-4">
                                <div class="col-md-3">
                                    <img src="/images/img7.png" class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title" className="partido">Morena</h5>
                                        <p class="card-text" className="text">Nombre del cadidato</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <div class="card mb-2 card">
                            <div class="row g-4">
                                <div class="col-md-3">
                                    <img src="/images/img8.png" class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title" className="partido">Partido de encuentro Solidario</h5>
                                        <p class="card-text" className="text">Nombre del cadidato</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button type="submit"  className='submitBtn'>Votar</button>
            </div>
        </div>

    )
}
export default Boleta;