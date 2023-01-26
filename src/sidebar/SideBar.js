/*import React from "react";
import Agregar from "../componentes/Agregar";
import Boleta from "../componentes/Boleta";
import Editar from "../componentes/Editar";
import Editarcandidato from "../componentes/editarcandidaturas";
import Home from "../componentes/Home";
import Listar from "../componentes/Listar";
import Candidaturalista from "../componentes/Listarcandidaturas"
import Registrarcandidaturas from "../componentes/Registrarcandidaturas"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function SideBar() {
    return (
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light" >
                    <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span class="fs-5 d-none d-sm-inline">Menu</span>
                        </a>
                        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li class="nav-item">
                                <a href="#" class="nav-link align-middle px-0">
                                    <Link class="nav-link active" aria-current="page" to="/">Home</Link><br></br>
                                </a>
                            </li>
                            <li>
                                <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                                    <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Ciudadanos</span> </a>
                                <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                    <li class="w-100">
                                        <Link class="nav-link" to="agregarciudadano">Registrar ciudadano</Link><br></br>
                                    </li>
                                    <li class="w-100">
                                        <Link class="nav-link" to="listar">Lista Nominal</Link><br></br>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                                    <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Candidaturas</span></a>
                                <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                    <li class="w-100">
                                        <Link class="nav-link" to="Registrarcandidaturas">Registrar Candidaturas</Link><br></br>
                                    </li>
                                    <li class="w-100">
                                        <Link class="nav-link" to="listarcandidatura">Listar Candidaturas</Link><br></br>
                                    </li>
                                    <li class="w-100">
                                        <Link class="nav-link" to="boleta">Boleta</Link><br></br>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                        <hr></hr>
                        <div class="dropdown pb-4">
                            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false" >
                                <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle" />
                                <span class="d-none d-sm-inline mx-1">loser</span>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                                <li><a class="dropdown-item" href="#">New project...</a></li>
                                <li><a class="dropdown-item" href="#">Settings</a></li>
                                <li><a class="dropdown-item" href="#">Profile</a></li>
                                <li>
                                    <hr class="dropdown-divider"></hr>
                                </li>
                                <li><a class="dropdown-item" href="#">Sign out</a></li>
                            </ul>
                        </div>
                    </div>



                </div>

                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="agregarciudadano" element={<Agregar />} />
                        <Route exact path="Registrarcandidaturas" element={<Registrarcandidaturas />} />
                        <Route exact path="editar/:id" element={<Editar />} />
                        <Route exact path="editarcandidatura/:id" element={<Editarcandidato />} />
                        <Route exact path="boleta" element={<Boleta />} />
                        <Route exact path="listar" element={<Listar />} />
                        <Route exact path="listarcandidatura" element={<Candidaturalista />} />

                    </Routes>
                <div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;*/