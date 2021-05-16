import React from 'react';
import FormTable from '../form/formtable.comp';
import LicoresCategoryRow from '../licores-category-row/licores-category-row.comp';
import LicoresTable from '../licores-table/licores-table.comp';
import SearchBar from '../search-bar/search-bar.comp';


import './lista-licores.style.css';

const ListaLicores = (props) => {
    return (
        
        <div className="lista-licores-container">
  
            <SearchBar/>
            <LicoresTable licoresListas={props.licoresListas}
            onagregarCliente={props.onagregarCliente}
            /> 



        </div>
    ); 
    
}

export default ListaLicores;