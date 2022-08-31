import React, {useEffect, useState} from 'react'

function Pokemon({avatar, name}) {
    return (
        <figure>
            <img src={avatar} alt={name}></img>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

function AjaxHooks() {
  const [ pokemons,setPokemons ] =  useState([])
  /* useEffect(()=> {
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
                    setPokemons((pokemons) => [...pokemons,pokemon])
                    })
                })
            })

  },[]) */

  useEffect(()=> {
    const getPokemons = async (url) => {
        let res = await fetch (url)
        let json = await res.json()

            json.results.forEach(async (value) => {
                let res = await fetch (value.url),
                    json = await res.json()
                     let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default
                    }
                    setPokemons((pokemons) => [...pokemons,pokemon])
                    })
                
    }
    getPokemons("https://pokeapi.co/api/v2/pokemon/")
  },[])
  return (
    <>
        <h2>Peticiones Asincronas en Hooks</h2>
        {pokemons.map((value) => <Pokemon key={value.id}name={value.name} avatar={value.avatar}></Pokemon>)} 
    </>
  )
}

export default AjaxHooks