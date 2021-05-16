import React, {useState}from 'react';
import ListaLicores from './componentes/lista-licores/lista-licores.comp';
import FormTable from './componentes/form/formtable.comp';

const LicoresPage = () => {
    let licoresListas = [
            {
                id:"cat1",
                name: "AGUARDIENTE",
                licores:[
                    {
                        
                        id:"cat1licor1",
                        name:"Juan David",
                        telefono:88888,
                        unidad:2,
                        precio:200,
                    },
                    {
                        id:"cat1licor2",
                        name:"Leonor",
                        telefono:99999,
                        unidad:1,
                        precio:100
                      },
                      {
                        id:"cat1licor3",
                        name:"Roger",
                        telefono:33333,
                        unidad:3,
                        precio:300
                        
                      },

                ]
            },
            {
                id:"cat2",
                name: "RON",
                licores:[
                    {

                        id:"cat2licor1",
                        name:"Juan David",
                        telefono:88888,
                        unidad:1,
                        precio:150
                      },
                      {
                        
                        id:"cat2licor2",
                        name:"Oscar",
                        telefono:5555,
                        unidad:5,
                        precio:750
                      },
                      {
                        id:"cat2licor3",
                        name:"Roger",
                        telefono:33333,
                        unidad:2,
                        precio:300
                      },
                ]
            },
            {
                id:"cat3",
                name: "GALLETAS",
                licores:[
                    {
                        id:"cat3licor1",
                        name:"Adriana", 
                        telefono:9876,
                        unidad:2,
                        precio:100
                        
                      },

                      {
                        id:"cat3licor2",
                        name:"Luisa",
                        telefono:123456,
                        unidad:10,
                        precio:50
                      },

                      {
                        id:"cat3licor3",
                        name:"Angelica",
                        telefono:4567,
                        unidad:1,
                        precio:50
                      },
                ]

            }
          

        ];
        

        const[licores, setLicores] = useState(licoresListas);

let listaClientes = [
          {
              id: 1,  
                      nombre:"cat1licor1",
                      edad:"Juan David",
                      correo_electronico:88888,
                      genero:2,
          },
          {
            id: 2,  
                    nombre:"cat2licor2",
                    edad:"Pedro",
                    correo_electronico:88888,
                    genero:2,
        },
        {
          id: 3,  
                  nombre:"cat1licor3",
                  edad:"Ana",
                  correo_electronico:88888,
                  genero:2,
      }
      ];
      const[clientes, setClientesNuevos] = useState(listaClientes);

    return (
        
        <>
        <ListaLicores licoresListas={licores}
        onagregarCliente={(clienteObj, descripcionId)=>{
             
            const newLicores =[];
            for(let i=0; i<licores.length; i++){
                if(licores[i].id !== descripcionId){
                  newLicores.push(licores[i]);

                }
                else {
                  newLicores.push(
                    {
                      ...licores[i],
                      licores:[...licores[i].licores, clienteObj]
                }
                );
              }   
            }
            setLicores(newLicores);            
        }}
        
        />
        <FormTable listaClientes={clientes}
        onAgregarClienteNuevo={(clienteNuevoObj, nombreId)=>{
          const newClientesNuevos =[];
            for(let i=0; i<clientes.length; i++){
                if(clientes[i].id !== nombreId){
                  newClientesNuevos.push(clientes[i]);

                }
                else {
                  newClientesNuevos.push(
                    {
                      ...clientes[i],
                      licores:[...clientes[i].clientes, clienteNuevoObj]
                }
                );
              }   
            }
            setClientesNuevos(newClientesNuevos);

        }}
        />

        </>
        
    );  
}

export default LicoresPage;


