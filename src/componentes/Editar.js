
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
function Editar() {
  const navigate = useNavigate()
  const [Nombre, setNombre] = useState("")
  const [Edad, setEdad] = useState(0)
  const [Curp, setCurp] = useState("")
  const [Telefono, setTelefono] = useState("")
  const [Ruta, setRuta] = useState("")
  const [Id_electoral, setId_Electoral] = useState("")
  const { id } = useParams();
  useEffect(() => {
    obtenerUsuarioPorId()
  }, [])
  const obtenerUsuarioPorId = async () => {
    console.log('obteniendo...')
    const respose = await axios.get(`http://localhost:3001/obtenerRegistro/${id}`)
    setId_Electoral(respose.data.Id_electoral)
    setNombre(respose.data.Nombre)
    setEdad(respose.data.Edad)
    setCurp(respose.data.Curp)
    setRuta(respose.data.Ruta)
    setTelefono(respose.data.Telefono)
  }
  const actualizarUsuario = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/editarRegistro/${id}`, {
        Nombre,
        Curp,
        Telefono,
        Edad,
        Ruta,
        Id_electoral,
      })
      navigate("/listar")
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div onSubmit={actualizarUsuario}class="wrapper">
    <form action="" class="formulario">
      <h1 class="title">Editar Ciudadanos</h1>
      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" id="nombre" value={Nombre} onChange={(e) => setNombre(e.target.value)}></input>
        <label for="" class="label">Nombre</label>
      </div>
      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" iid="curp" value={Curp} onChange={(e) => setCurp(e.target.value)}></input>
        <label for="" class="label">Curp</label>
      </div>
      <div class="inputContainer">
          <input type="number" class="input" placeholder="a" id="telefono" value={Telefono} onChange={(e) => setTelefono(e.target.value)}></input>
          <label for="" class="label">Teléfono</label>
        </div>
      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" id="Id_electoral" value={Id_electoral} onChange={(e) => setId_Electoral(e.target.value)}></input>
        <label for="" class="label">Id electoral</label>
      </div>
      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" id="edad" value={Edad} onChange={(e) => setEdad(e.target.value)}></input>
        <label for="" class="label">Edad</label>
      </div>
      <div class="inputContainer">
        <input type="text" class="input" placeholder="a" id="imagenlabel" value={Ruta} onChange={(e) => setRuta(e.target.value)}></input>
        <label for="" class="label">Ruta imagen</label>
      </div>

      <input type="submit" class="submitBtn" value="Registrar" />
    </form>
  </div>
  );
}

export default Editar;
