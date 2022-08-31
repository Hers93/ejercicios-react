import React, { Component } from "react";
import data from '../helpers/data.json'

const ElementoLista = (props) =>{
    
    return(
        <li>
            <a href={props.data.web} target='blank'>{props.data.name}</a>
        </li>
    )
}

export default class RenderizadoElementos extends Component{

    constructor(props){
        super(props);
        this.state ={
            seasons:['Primavera','Verano','Otono','Invierno']
        }
    }
    render(){
        return(
            <div>
                <h2>Renderizado de elementos</h2>
                <h3>Estaciones del año</h3>
                <ol>  
                    {this.state.seasons.map((value, index) =>(<li key={index}>{value}</li>))}
                </ol>
                <h3>Frameworks frontend JS</h3>
                <ul>
                    {data.frameworks.map((value,key) =><ElementoLista key={value.id} data={value}/>)}
                </ul>
              
            </div>
           
            
        )
    }
}