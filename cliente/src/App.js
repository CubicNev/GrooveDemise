import './App.css';

function App() {
  return (
    //<div className="App"> Procesamiento de solicitud:  </div>
    <div class="container">  
      <form id="contact" action="http://localhost:5000/BingsoftSolutions/treeRequest" method="post">
        <h3>Formulario de solicitud:</h3>
        <label for="tipoP">Tipo de propiedad donde se encuentra el árbol:</label>
        <select name="tipo_propiedad" id="tipoP">
            <option value="propiedadP">Propiedad Privada</option>
            <option value="viaPub">Vía pública</option>
          </select><br></br>
          <label for="fname">Nombre solicitante:</label>
          <input type="text" id="fname" name="nombre_solicitante"></input>
          <label for="lname">ApellidoPaterno:</label>
          <input type="text" id="lname" name="aPaterno"></input>
          <label for="lname">ApellidoMaterno:</label>
          <input type="text" id="lname" name="aMaterno"></input>
        <fieldset>
          <input name="arbolAlias" placeholder="Alias del árbol" type="text" tabindex="1" required autofocus></input>
        </fieldset>
        <h3>Detalles de la solicitud:</h3><br></br>
        <fieldset>
          <textarea name="detalles_Solicitud" placeholder="Detalles de la solicitud, redactar de manera clara y concisa, sin omitir cualquier dato relevante para la petición" tabindex="5" required></textarea>
        </fieldset>
        <h2>Ubicación:</h2><br></br>
        <fieldset>
          <input name="calle" placeholder="Calle" type="text" tabindex="3" required></input>
        </fieldset>
        <fieldset>
          <input name="Mz" placeholder="Mz" type="text" tabindex="3" required></input>
        </fieldset>
        <fieldset>
          <input name="lote" placeholder="Lote" type="text" tabindex="3" required></input>
        </fieldset>
        <fieldset>
          <input name="noExterior" placeholder="No. Exterior" type="text" tabindex="3" required></input>
        </fieldset>
        <fieldset>
          <input name="noInterior" placeholder="No. INterior" type="text" tabindex="3" required></input>
        </fieldset>
        <fieldset>
          <input name="CP" placeholder="Código Postal" type="text" tabindex="3" required></input>
        </fieldset>
        <fieldset>
          <input name="Colonia" placeholder="Colonia" type="text" tabindex="3" required></input>
        </fieldset>
        <fieldset>
        <select name="Delegacion" id="col">
            <option value="gam">Gustavo A. Madero</option>
            <option value="Atzcapo">Atzcapotsalco</option>
        </select>    
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
