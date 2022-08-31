import React, { useEffect, useState, useRef } from "react";

function Formularios() {
/*   const [nombre, setNombre] = useState("");
  const [sabor, setSabor] = useState("");
  const [lenguaje, setLenguaje] = useState("");
  const [terminos, setTerminos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('El formulario se a enviado');
  }
  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <p>Elige tu sabor JS favorito</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={(e) => setSabor(e.target.value)}
          defaultChecked
        />
        <label htmlFor="">vanilla</label>

        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="">react</label>
        <input
          type="radio"
          id="Angular"
          name="sabor"
          value="Angular"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="">Angular</label>
        <input
          type="radio"
          id="VueJS"
          name="sabor"
          value="VueJS"
          onChange={(e) => setSabor(e.target.value)}
        />
        <label htmlFor="">VueJS</label>

        <p>Elige tu lenguaje de programacion favorito</p>
        <select name="lenguaje" onChange={(e) => setLenguaje(e.target.value)}  defaultValue="">
          <option>-----</option>
          <option value="js">JavaScript</option>
          <option value="php">
            PHP
          </option>
          <option value="python">python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br/>
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input type="checkbox" id="terminos" name="terminos" onChange={(e) => setTerminos(e.target.checked)} /><br/>
        <input type="submit"/>
      </form>
    </>
  ); */


  const [form, setForm] = useState({});
 
  const handleChange = (e) => {
    setForm({
        ...form, [e.target.name]:e.target.value
    })
  }

  const handleChecked = (e) => {
    setForm({
        ...form, [e.target.name]:e.target.checked
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('El formulario se a enviado');
  }
  return (
    <>
      <h2>Formularios</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
        />
        <p>Elige tu sabor JS favorito</p>
        <input
          type="radio"
          id="vanilla"
          name="sabor"
          value="vanilla"
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="">vanilla</label>

        <input
          type="radio"
          id="react"
          name="sabor"
          value="react"
          onChange={handleChange}
        />
        <label htmlFor="">react</label>
        <input
          type="radio"
          id="Angular"
          name="sabor"
          value="Angular"
          onChange={handleChange}
        />
        <label htmlFor="">Angular</label>
        <input
          type="radio"
          id="VueJS"
          name="sabor"
          value="VueJS"
          onChange={handleChange}
        />
        <label htmlFor="">VueJS</label>

        <p>Elige tu lenguaje de programacion favorito</p>
        <select name="lenguaje" onChange={handleChange}  defaultValue="">
          <option>-----</option>
          <option value="js">JavaScript</option>
          <option value="php">
            PHP
          </option>
          <option value="python">python</option>
          <option value="go">GO</option>
          <option value="rb">Ruby</option>
        </select>
        <br/>
        <label htmlFor="terminos">Acepto terminos y condiciones</label>
        <input type="checkbox" id="terminos" name="terminos" onChange={handleChecked} /><br/>
        <input type="submit"/>
      </form>
    </>
  );
}

export default Formularios;
