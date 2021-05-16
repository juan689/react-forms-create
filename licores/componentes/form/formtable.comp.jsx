import React, {useState} from 'react';
 

import './form.style.css';



const FormTable = (props) => {
  const [nombre, setNombre] = useState(' ');
  const [edad, setEdad] = useState(' ');
  const [correo_electronico, setCorreo] = useState(' ');
  const [genero, setGenero] = useState(' ');

  const agregarClienteNuevo =(event)=>{
    event.preventDefault();

    
    const newCliente={
      nombre: nombre,
      edad: Number(edad),
      correo_electronico: correo_electronico,
      genero: genero,
      
    }
      props.onAgregarClienteNuevo(newCliente, nombre);
  }

  return (
      
      <div className="formtable-container">
           REGISTRO

           <div className=''>
            <form>
              <table>
                <tbody>
                <tr>
                  <td>Nombre</td>
                </tr>
                <tr>
                  <td>
                    <input type="text" 
                    value={nombre}
                    onChange={(event)=>{setNombre(event.target.value);
                    }}
                    />
                  </td>
                </tr>

                  <tr><td>
                    Elija La Edad
                    </td></tr>

                      <tr>
                        <td>
                        <select>
                        value={edad}
                          onChange={(event)=>{setEdad(event.target.value);
                          }}
              <option value="" >entre 0 a 19 años</option>
              <option value="" >entre 20 a 39 años</option>
              <option value="" >entre 40 a 59 años</option>
              <option value="" >60 o más años</option>
              </select>
                        </td>
                      </tr>
        
                  <tr>
                  <td>Correo electrónico</td>
                </tr>
                <tr>
                  <td>
                    <input type="text" 
                    value={correo_electronico}
                    onChange={(event)=>{setCorreo(event.target.value);
                    }}
                    />
                  </td>
                </tr>


                <tr>
                  <td>Género</td>
                </tr>
                <tr>
                  <td>
                    <input type="radio" 
                    value={genero}/>hombre
                    
                    <input type="radio"
                    value={genero}/>mujer
                    
                    
                  </td>
                </tr>
                




                <tr>
                  <td>
                    <button onClick={agregarClienteNuevo}>
                      Registrar
                    </button>
                  </td>
                </tr>
                </tbody>
              </table>

            </form>
           </div>

      </div>

                    

  ); 
      
}

export default FormTable;

