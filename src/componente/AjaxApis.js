import { computeHeadingLevel } from "@testing-library/react";
import React, { Component } from "react";

function Pokemon(props) {
    return (
        <figure>
            <img src={props.avatar} alt={props.name}></img>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}

export default class AjaxApis extends Component {
    state = {
        pokemons: []
    }

    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon/"

        fetch(url)
            .then((res) => res.json())
            .then((json) => {

                json.results.forEach((value) => {
                    fetch(value.url)
                        .then((res) => res.json())
                        .then((json) => {

                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default
                            }
                            console.log(pokemon)
                            let pokemons = [...this.state.pokemons, pokemon]
                            this.setState({ pokemons })

                        })
                })
            })
    }

    render() {
        return (
            <>
                <h2>Peticiones Asincronas en Componentes de Clase</h2>
                {this.state.pokemons.map((value) => <Pokemon key={value.id} name={value.name} avatar={value.avatar}></Pokemon>)} 
            </>
        )
    }
}