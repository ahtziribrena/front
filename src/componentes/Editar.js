
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
function Editar() {
  const navigate= useNavigate()
  const [Nombre, setNombre] = useState("")
  const [Edad, setEdad] = useState(0)
  const [Curp, setCurp] = useState("")
  const [Telefono, setTelefono] = useState("")
  const [Id_electoral, setId_Electoral] = useState("")
  const {id}=useParams();
  useEffect(()=>{
    obtenerUsuarioPorId()
  },[])
  const obtenerUsuarioPorId=async()=>{
    console.log('obteniendo...')
    const respose= await axios.get(`http://localhost:3001/obtenerRegistro/${id}`)
    setId_Electoral(respose.data.Id_electoral)
    setNombre(respose.data.Nombre)
    setEdad(respose.data.Edad)
    setCurp(respose.data.Curp)
    setTelefono(respose.data.Telefono)
  }
  const actualizarUsuario= async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/editarRegistro/${id}`, {
        Nombre,
        Curp,
        Telefono,
        Edad,
        Id_electoral,
      })
      navigate ("/listar")
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <div>
      <form onSubmit={actualizarUsuario}>
        <div>
          <label for="exampleInputNombre">Nombre</label>
          <input type="text" class="form-control" id="nombre" value={Nombre} onChange={(e) => setNombre(e.target.value)}></input>
        </div>
        <div>
          <label for="exampleInputCurp">Curp</label>
          <input type="text" class="form-control" id="curp" value={Curp} onChange={(e) => setCurp(e.target.value)}></input>
        </div>
        <div>
          <label for="exampleInputTelefono">Telefono</label>
          <input type="number" class="form-control" id="telefono" value={Telefono} onChange={(e) => setTelefono(e.target.value)}></input>
        </div>
        <div>
          <label for="exampleInputTelefono">Edad</label>
          <input type="number" class="form-control" id="edad" value={Edad} onChange={(e) => setEdad(e.target.value)}></input>
        </div>
        <div>
          <label for="exampleInputTelefono">Id electoral</label>
          <input type="text" class="form-control" id="Id_electoral" value={Id_electoral} onChange={(e) => setId_Electoral(e.target.value)}></input>
        </div>
        <button type="submit" class="btn btn-primary">Actualizar registro</button>
      </form>
    </div>
  );
}

export default Editar;
