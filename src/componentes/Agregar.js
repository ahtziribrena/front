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
    <div onSubmit={guardarRegistro} class="wrapper">
      <form action="" class="formulario">
        <h1 class="title">Registrar Ciudadanos</h1>
        <div class="inputContainer">
          <input type="text" class="input" placeholder="a" id="nombre" value={Nombre} onChange={(e) => setNombre(e.target.value)}></input>
          <label for="" class="label">Nombre completo</label>
        </div>
        <div class="inputContainer">
          <input type="text" class="input" placeholder="a" id="curp" value={Curp} onChange={(e) => setCurp(e.target.value)}></input>
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
          <input type="number" class="input" placeholder="a" id="edad" value={Edad} onChange={(e) => setEdad(e.target.value)}></input>
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

export default Agregar;