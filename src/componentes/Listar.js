import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import './home.css';
function Listar() {
  const [usuarios, setUsuario] = useState([])

  const elementoUsuario = usuarios.map((usuarios, i) => (
    <div class="col-4 mt-4">
      <div class="card" key={i}>
        <img src={`/images/${usuarios.Ruta}ruta.jpg`} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">Nombre: {usuarios.Nombre}</p>
          <p class="card-text">Id_electoral:{usuarios.Id_electoral}</p>
          <p class="card-text">Curp: {usuarios.Curp}</p>
          <p class="card-text">Edad: {usuarios.Edad}</p>
          <p class="card-text">Telefono: {usuarios.Telefono}</p>
        </div>
        <div class="card-footer">
          <div class="row justify-content-md-center">
            <div class="col-md-auto">
              <Link to={`../editar/${usuarios._id}`} className="button is-info is-small mr-1">Editar</Link>
            </div>
            <div class="col-md-auto">
              <button class="submitBtn2" onClick={() => eliminarUsuario(usuarios._id)}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))


  useEffect(() => {
    getUsuarios()
  }, [])
  const getUsuarios = async () => {
    const respose = await axios.get("http://localhost:3001/obtenerRegistros")
    setUsuario(respose.data)
  }
  const eliminarUsuario = async (id) => {
    try {
      console.log('ingresando... ' + id)
      await axios.get(`http://localhost:3001/eliminarRegistro/${id}`)
      getUsuarios()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
    
    <div className='fondo'>
     
      <h1 className="h1">Lista Nominal</h1>
      <div class="row">
        {elementoUsuario}
      </div>

    </div >
    </div>
  )
}

export default Listar;