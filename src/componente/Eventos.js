import React, { Component } from "react";
export  class EventosES6 extends Component{
    constructor(props){
        super(props)
        this.state = {
            contador:0
        }
     this.suma = this.suma.bind(this)
     this.resta = this.resta.bind(this)
    }
   
    suma(e){
        this.setState({
            contador:this.state.contador + 1
        })
    }
    resta(e){
        this.setState({
            contador:this.state.contador - 1
        })
    }

    render(){ 
        return(
            <div> 
                <h2>Eventos entre Componentes de clase</h2>
                <nav>
                    <button onClick={this.suma}> +</button>
                    <button  onClick={this.resta}> -</button>
                </nav>
                <h3>{this.state.contador}</h3>
                
            </div>
        
    )}
   
}

export  class EventosES7 extends Component{
   state = {
    contador:0
   }
   
    suma =  (e) => {
        this.setState({
            contador:this.state.contador + 1
        })
    }

    resta = (e) => {
        this.setState({
            contador:this.state.contador - 1
        })
    }

    render(){ 
        return(
            <div> 
                <h2>Eventos entre Componentes de clase ES7</h2>
                <nav>
                    <button onClick={this.suma}> +</button>
                    <button  onClick={this.resta}> -</button>
                </nav>
                <h3>{this.state.contador}</h3>
                
            </div>
        
    )}
   
}

const Boton = ({myonClick}) => <button onClick={myonClick}>Boton Echo Componente</button>

export class MasSobreEventos extends Component {

    handleClick = (e,mensaje) =>{
    }
    render(){
        return(
            <div>
                <h2>Mas sobre eventos</h2>
                {/* <button onClick={(e) =>this.handleClick(e,"hola pasando un parametro desde un evento")}>Saludar</button>
                <Boton onClick/> */}
                <Boton myonClick={(e) => this.handleClick(e,"Hola pasando parametros desde un evento")}/>
            </div>
        )
    }
}