
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
function Editarcandidato() {
  const navigate = useNavigate()
  const [Nombrecandidato, setNombrecandidato] = useState("")
  const [Edadcandidato, setEdadcandidato] = useState(0)
  const [Curpcandidato, setCurpcandidato] = useState("")
  const [Telefonocandidato, setTelefonocandidato] = useState("")
  const [Id_electoralcandidato, setId_Electoralcandidato] = useState("")
  const [Direccioncandidato, setDireccioncandidato] = useState("")
  const [Partido, setPartido] = useState("")
  const [Puesto, setPuesto] = useState("")
  const [Ruta, setRuta] = useState("")
  const { id } = useParams();
  useEffect(() => {
    obtenerCandidatosPorId()
  }, [])
  const obtenerCandidatosPorId = async () => {
    console.log('obteniendo...')
    const respose = await axios.get(`http://localhost:3001/candidatura/obtenerRegistro/${id}`)
    setNombrecandidato(respose.data.Nombrecandidato)
    setEdadcandidato(respose.data.Edadcandidato)
    setCurpcandidato(respose.data.Curpcandidato)
    console.log('recibiendo datos1: ', respose.data.Curpcandidato)
    console.log('recibiendo datos:2 ', respose.data.Telefonocandidato)
    setTelefonocandidato(respose.data.Telefonocandidato)
    setId_Electoralcandidato(respose.data.Id_electoralcandidato)
    setDireccioncandidato(respose.data.Direccioncandidato)
    setPartido(respose.data.Partido)
    setPuesto(respose.data.Puesto)
    setRuta(respose.data.Ruta)
  }
  const actualizarCandidato = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/candidatura/editarRegistro/${id}`, {
        Nombrecandidato,
        Curpcandidato,
        Id_electoralcandidato,
        Telefonocandidato,
        Edadcandidato,
        Direccioncandidato,
        Partido,
        Puesto,
        Ruta,
      })
      navigate("/listarcandidatura")
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className='fondo'>
      <h1 className="h1">Registrar candidaturas</h1>
      <form onSubmit={actualizarCandidato}>
        <div>
          <label for="exampleInputNombre">Nombre completo del candidato:</label>
          <input type="text" class="form-control" id="nombrecandidato" value={Nombrecandidato} onChange={(e) => setNombrecandidato(e.target.value)}></input>
        </div>
        <div>
          <label for="exampleInputTelefono">Id electoral del candidato</label>
          <input type="text" class="form-control" id="Id_electoral_candidato" value={Id_electoralcandidato} onChange={(e) => setId_Electoralcandidato(e.target.value)}></input>
        </div>
        <div>
          <label for="exampleInputCurp">Curp del cadidato</label>
          <input type="text" class="form-control" id="curp_candidato" value={Curpcandidato} onChange={(e) => setCurpcandidato(e.target.value)}></input>
        </div>
        <div>
          <label for="exampleInputTelefono">Telefono del cadidato</label>
          <input type="number" class="form-control" id="telefono_candidadato" value={Telefonocandidato} onChange={(e) => setTelefonocandidato(e.target.value)}></input>
        </div>
        <div>
          <label for="exampleInputTelefono">Edad del cadidato</label>
          <input type="number" class="form-control" id="edad_candidato" value={Edadcandidato} onChange={(e) => setEdadcandidato(e.target.value)}></input>
        </div>
        <div>
          <label for="exampleInputTelefono">Direccion del candidato</label>
          <input type="text" class="form-control" id="Direccioncandidato" value={Direccioncandidato} onChange={(e) => setDireccioncandidato(e.target.value)}></input>
        </div>
        <div>
          <label for="exampleInputTelefono">Seleccione el Partido porlitico al cual esta afiliado el candidato:</label>
        </div>
        <select class="form-select" aria-label="Default select example" id="partido" value={Partido} onChange={(e) => setPartido(e.target.value)}>
          <option selected>Seleccione un partido</option>
          <option value="Partido Accion Nacional">Partido Accion Nacional</option>
          <option value="Partido Revolucionario Instituciona">Partido Revolucionario Institucional</option>
          <option value="Partido Revolución Democrática">Partido Revolución Democrática</option>
          <option value="Partido verde ecologista de México">Partido verde ecologista de México</option>
          <option value="Partido del trabajo">Partido del trabajo</option>
          <option value="Movimiento ciudadano">Movimiento ciudadano</option>
          <option value="Movimiento de regeneracion nacional">Movimiento de regeneracion nacional</option>
          <option value="Partido de encuentro Solidario">Partido de encuentro Solidario</option>
        </select>
        <div>
          <label for="exampleInputTelefono">Seleccione el cargo para el cual se postula:</label>
        </div>
        <select class="form-select" aria-label="Default select example" value={Puesto} onChange={(e) => setPuesto(e.target.value)}>
          <option selected>Seleccione un cargo</option>
          <option value="Presidencia de la republica">Presidencia de la republica</option>
          <option value="Senadores Federales">Senadores Federales</option>
          <option value="Diputaciones Federales">Diputaciones Federales</option>
        </select>
        <div>
          <label for="exampleInputRuta">Ruta</label>
          <input type="text" class="form-control" id="Ruta" value={Ruta} onChange={(e) => setRuta(e.target.value)}></input>
        </div>
        <div className='boton'>
          <button type="submit" class="btn btn-danger">Actualizar registro</button>
        </div>
      </form>
    </div>
  );
}

export default Editarcandidato;
