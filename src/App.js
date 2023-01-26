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
function App() {
  return (
    <Router>
      
      <div class="container-fluid" className='columnas'>
        <h1>Cambios </h1>
        <div class="row flex-nowrap">
          <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span class="fs-5 d-none d-sm-inline">Menu</span>
              </a>
              <ul class="nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li class="nav-item">
                  <Link class="nav-link px-0 align-middle" aria-current="page" to="/">Home</Link>
                </li>
                <li>
                  <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                    <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Ciudadanos</span> </a>
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
                    <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                  <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                    <li class="w-100">
                      <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 1</a>
                    </li>
                    <li>
                      <a href="#" class="nav-link px-0"> <span class="d-none d-sm-inline">Item</span> 2</a>
                    </li>
                  </ul>
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
          <div class="col py-3">
            <div >
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
            </div>
          </div>
        </div>
      </div>

    </Router >
  );

}

export default App;

