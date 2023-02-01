import React, { useEffect, useState } from "react";
import axios from "axios";
//import Editar from "./Editar";
import { Link } from "react-router-dom";

function Listar() {
  const [candidatos, setCandidatos] = useState([])
  const elementoCandidato = candidatos.map((candidato, i) => (
    <div class="col-4 mt-4">
      <div class="card" key={i}>
        <img src={`/images/${candidato.Ruta}ruta.jpg`} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">Nombre completo: {candidato.Nombrecandidato}</p>
          <p class="card-text">Id_electoral:{candidato.Id_electoralcandidato}</p>
          <p class="card-text">Curp: {candidato.Curpcandidato}</p>
          <p class="card-text">Edad: {candidato.Edadcandidato}</p>
          <p class="card-text">Telefono: {candidato.Telefonocandidato}</p>
          <p class="card-text">Direccion: {candidato.Direccioncandidato}</p>
          <p class="card-text">Partido: {candidato.Partido}</p>
          <p class="card-text">Puesto: {candidato.Puesto}</p>
        </div>
        <div class="card-footer">
          <div class="row justify-content-md-center">
            <div class="col-md-auto">
              <Link to={`../editarcandidatura/${candidato._id}`} className="button is-info is-small mr-1">Editar</Link>
            </div>
            <div class="col-md-auto">
              <button class="btn btn-danger" onClick={() => eliminarCandidatos(candidato._id)}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
  useEffect(() => {
    getCandidatos()
  }, [])
  const getCandidatos = async () => {
    const response = await axios.get("http://localhost:3001/candidatura/obtenerRegistros")
    setCandidatos(response.data)
  }
  const eliminarCandidatos = async (id) => {
    try {
      await axios.get(`http://localhost:3001/candidatura/eliminarRegistro/${id}`)
      getCandidatos()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className='fondo'>
        <h1 className="h1">Lista de candidaturas</h1>
        <div class="row">
          {elementoCandidato}
        </div>

      </div >
    </div>
  )
}
export default Listar;