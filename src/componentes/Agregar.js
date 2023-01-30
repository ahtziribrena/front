import { useState } from 'react';
import React from 'react';
import axios from "axios";
import './home.css';
function Agregar() {
  const [Nombre, setNombre] = useState("")
  const [Edad, setEdad] = useState(0)
  const [Curp, setCurp] = useState("")
  const [Telefono, setTelefono] = useState("")
  const [Ruta, setRuta] = useState("")
  const [Id_electoral, setId_Electoral] = useState("")

  const guardarRegistro = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/agregarRegistro", {
        Nombre,
        Curp,
        Telefono,
        Edad,
        Ruta,
        Id_electoral,
      })
      //navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='fondo'>
      <form onSubmit={guardarRegistro}>
        <h1 className="h1">Registrar ciudadano</h1>
        <div>
          <label for="exampleInputNombre">Nombre completo</label>
          <input type="text" class="form-control" id="nombre" value={Nombre} onChange={(e) => setNombre(e.target.value)}></input>
        </div>
        <div>
          <label for="exampleInputCurp">Curp</label>
          <input type="text" class="form-control" id="curp" value={Curp} onChange={(e) => setCurp(e.target.value)}></input>
        </div>
        <div>
          <label for="exampleInputTelefono">Id electoral</label>
          <input type="text" class="form-control" id="Id_electoral" value={Id_electoral} onChange={(e) => setId_Electoral(e.target.value)}></input>
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
          <label for="imagenlabel">Ruta Imagen</label>
          <input type="text" class="form-control" id="imagenlabel" value={Ruta} onChange={(e) => setRuta(e.target.value)}></input>
        </div>

        <div className='boton'>
        <button type="submit" class="btn btn-danger">Registrar</button>
        </div>
      </form>
    </div>
  );
}

export default Agregar;