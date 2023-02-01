import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Home from "./componentes/Home"
import Agregar from "./componentes/Agregar"
import Listar from "./componentes/Listar"
import Editar from "./componentes/Editar"
import Boleta from "./componentes/Boleta"
import Candidaturalista from "./componentes/Listarcandidaturas"
import Registrarcandidaturas from "./componentes/Registrarcandidaturas"
import Editarcandidato from './componentes/editarcandidaturas';
import { FaFacebookF, FaGithub, FaGoogle, FaHome, FaInstagramSquare, FaLinkedinIn, FaTwitter, FaUserAlt, IconName } from "react-icons/fa";
function App() {
  return (
    <Router>
      <div class="container-fluid" className='columnas' >
        <div class="row flex-nowrap" >
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 menu"   >
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100  p-4 border-right">
              <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"  >
                <span class="fs-3 d-none d-sm-inline">Menú</span>
              </a>
              <ul class="nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li class="nav-item">
                  <FaHome color="black" size={26} />
                  <Link class="nav-link px-0 align-middle" aria-current="page" to="/">Home</Link>
                </li>
                <li>
                  <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle" className='linki'>
                    <FaUserAlt color="black" size={26} />
                    <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline" >Ciudadanos</span> </a>
                  <ul class="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                    <li class="w-100">
                      <Link class="nav-link" to="agregarciudadano">Registrar ciudadano</Link>
                    </li>
                    <li>
                      <Link class="nav-link" to="listar">Lista Nominal</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                    <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Candidaturas</span></a>
                  <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                    <li class="w-100">
                      <Link class="nav-link" to="Registrarcandidaturas">Registrar Candidaturas</Link>
                    </li>
                    <li>
                      <Link class="nav-link" to="listarcandidatura">Listar Candidaturas</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link class="nav-link px-0 align-middle" to="boleta">Boleta</Link>
                </li>
              </ul>
              <div class="dropdown pb-4">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle" />
                  <span class="d-none d-sm-inline mx-1">loser</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li><a class="dropdown-item" href="#">New project...</a></li>
                  <li><a class="dropdown-item" href="#">Settings</a></li>
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col py-2">
            <div>
              <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                  <div class="navbar-header">
                    <a class="navbar-brand" href="#">WebSiteName</a>
                  </div>
                  <form class="navbar-form navbar-left" action="/action_page.php">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Search" />
                    </div>

                  </form>
                </div>
              </nav>
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
              <footer class="text-center text-lg-start bg-white text-muted" className='footer'>
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom ">
                  <div class="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                  </div>
                  <div>
                    <a href="" class="me-4 link-secondary">
                      <FaFacebookF color="black" size={26} />
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="" class="me-4 link-secondary">
                      <FaTwitter color="black" size={26} />
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="" class="me-4 link-secondary">
                      <FaGoogle color="black" size={26} />
                      <i class="fab fa-google"></i>
                    </a>
                    <a href="" class="me-4 link-secondary">
                      <FaInstagramSquare color="black" size={26} />
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href="" class="me-4 link-secondary">
                      <FaLinkedinIn color="black" size={26} />
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="" class="me-4 link-secondary">
                      <FaGithub color="black" size={26} />
                      <i class="fab fa-github"></i>
                    </a>
                  </div>

                </section>



                <section class="">
                  <div class="container text-center text-md-start mt-5">

                    <div class="row mt-3">

                      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                        <h6 class="text-uppercase fw-bold mb-4">
                          <i class="fas fa-gem me-3 text-secondary"></i>INE
                        </h6>
                        <p>
                          El Instituto Nacional Electoral se encarga de celebrar y regular los procesos electorales y nombrar las directrices a las que se sujetarán los participantes de dichos procesos.
                        </p>
                      </div>


                      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 class="text-uppercase fw-bold mb-4">
                          Products
                        </h6>
                        <p>
                          <a href="#!" class="text-reset">Angular</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset">React</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset">Vue</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset">Laravel</a>
                        </p>
                      </div>



                      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 class="text-uppercase fw-bold mb-4">
                          Useful links
                        </h6>
                        <p>
                          <a href="#!" class="text-reset">Pricing</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset">Settings</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset">Orders</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset">Help</a>
                        </p>
                      </div>



                      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                        <h6 class="text-uppercase fw-bold mb-4">Contacto</h6>
                        <p><i class="fas fa-home me-3 text-secondary"></i>
                          Viaducto Tlalpan No. 100 Col. Arenal Tepepan, Alcaldía Tlalpan, C.P. 14610, Ciudad de México.</p>
                        <p><i class="fas fa-phone me-3 text-secondary"></i> Desde cualquier parte del país sin costo: 800 433 2000</p>
                        <p><i class="fas fa-print me-3 text-secondary"></i> Desde Estados Unidos sin costo: 1 (866) 986 8306.</p>
                      </div>

                    </div>

                  </div>
                </section>



                <div class="text-center p-4" >
                  ©  Derechos Reservados, Instituto Nacional Electoral, México.

                </div>

              </footer>
            </div>
          </div>
        </div>

      </div>

    </Router >
  );

}

export default App;

