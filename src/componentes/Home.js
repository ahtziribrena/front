import React from 'react';
import './home.css';
function Home() {
  return (
    <div className='homes'>
      <div className='columnas'>
        <div class="row " >
          <div class="col-6">
            <div className="Logotipo">
              <img src="/images/ine2.png"></img>
              <h1 className='welcome'>Voto electronico</h1>
            </div>
          </div>
          <div className='col-6 '>
            <div class="wrapper">
              <form action="" class="form">
                <h1 class="title">Inicio de Sesión</h1>
                <div class="inputContainer">
                  <input type="text" class="input" placeholder="a" />
                  <label for="" class="label">Usuario</label>
                </div>

                <div class="inputContainer">
                  <input type="text" class="input" placeholder="a" />
                  <label for="" class="label">Contraseña</label>
                </div>

                <div class="inputContainer">
                  <input type="text" class="input" placeholder="a" />
                  <label for="" class="label">Confirmar cantraseña</label>
                </div>

                <input type="submit" class="submitBtn1" value="Entrar" />
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;