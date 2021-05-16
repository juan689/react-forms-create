import React, { useState } from 'react';
import LicoresCategoryRow from '../licores-category-row/licores-category-row.comp';
import LicoresRow from '../licores-row/licores-row.comp';


import './licores-table.style.css';


const LicoresTable = (props) => {

    
    
    const [descripcion, setDescripcion] = useState('cat1');
    const [name, setName] = useState('');
    const [telefono, setTelefono] = useState(0);
    const [unidad, setUnidad] = useState(0);
    const [precio, setPrecio] = useState(0);

  

    const agregarCliente = (event)=>{
      event.preventDefault();
      const newCliente = {
          id: name,
          name: name,
          telefono: Number(telefono),
          unidad: Number(unidad),
          precio: Number(precio),

    };
      props.onagregarCliente(newCliente, descripcion);
    }
    
    return (
        <div className="licores-table-container">

          <div>
            
          {props.licoresListas.map((descripcion, index)=>{
            return(
            <React.Fragment key={descripcion.id}>
             <LicoresCategoryRow descripcionName={descripcion.name}/>
             {descripcion.licores.map((licores, indexLicores)=>{
               return (

                <LicoresRow 
                key={licores.id}
                licores={licores}
                />  
               );
             })}
            </React.Fragment>
            
            );

          })}
          </div>

          <div className="licores-form">
           <form>
             <table>
               <tbody>
               <tr>
                  <td>
                     DESCRIPCION
                  </td>
               </tr>
               
               <tr>
                 <td>
                  <select 
                    value={descripcion}
                    onChange={(event)=>{
                      setDescripcion(event.target.value);
                    }}
                  >
                    
                    <option value="cat1">AGUARDIENTE</option>
                    <option value="cat2">RON</option>
                    <option value="cat3">GALLETAS</option>
                    
                  </select>
                </td>
               </tr>
               <tr>
                    <td>Name</td>    
               </tr>

               <tr>
                     <td><input 
                     type="text"
                     value={name}
                     onChange={(event)=>{
                       setName(event.target.value);
                     }}
                     
                     /></td>
                </tr>
               <tr>
                     <td>Telefono</td>
                </tr>
                <tr>
                <td><input 
                     type="text"
                     value={telefono}
                     onChange={(event)=>{
                       setTelefono(event.target.value);
                     }}
                     
                     /></td>
                </tr>
                <tr>
                      <td>Unidad</td>
                </tr>
                <tr>
                <td><input 
                     type="text"
                     value={unidad}
                     onChange={(event)=>{
                       setUnidad(event.target.value);
                     }}
                     
                     /></td>
                </tr>
                <tr>
                       <td>Precio</td>
                </tr>
                <tr>
                <td><input 
                     type="text"
                     value={precio}
                     onChange={(event)=>{
                       setPrecio(event.target.value);
                     }}
                     
                     /></td>
                </tr>
                
               
                <tr>
                  <td><button
                       onClick={agregarCliente}
                  >
                    Agregar cliente
                   
                    </button></td>
                  

                </tr>
                </tbody>
               </table>
           </form>

        </div>
          
        </div>

    ); 
}

export default LicoresTable;