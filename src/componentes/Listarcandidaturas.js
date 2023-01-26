import React, { useEffect, useState } from "react";
import axios from "axios";
//import Editar from "./Editar";
import { Link } from "react-router-dom";

function Listar() {
    const [candidatos, setCandidatos] = useState([])
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
        <div class="fondo">
            <h1 className='welcome'>Listados de candidatuaras</h1>
            <br></br>
            <br></br>
            <br></br>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nombre completo</th>
                        <th scope="col">Curp</th>
                        <th scope="col">Id electoral</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Partido</th>
                        <th scope="col">Puesto</th>
                        <th scope="col">Eliminar</th>
                        <th scope="col">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        candidatos.map((candidato, i) => (
                            <tr key={candidato._id}>
                                <td>{candidato.Nombrecandidato}</td>
                                <td>{candidato.Curpcandidato}</td>
                                <td>{candidato.Id_electoralcandidato}</td>
                                <td>{candidato.Telefonocandidato}</td>
                                <td>{candidato.Edadcandidato}</td>
                                <td>{candidato.Direccioncandidato}</td>
                                <td>{candidato.Partido}</td>
                                <td>{candidato.Puesto}</td>
                                <td><button type="button" class="btn btn-danger" onClick={() => eliminarCandidatos(candidato._id)}>Eliminar</button></td>
                                <td> <Link to={`../editarcandidatura/${candidato._id}`} className="button is-info is-small mr-1 ">Editar</Link></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>

    )

}
export default Listar;