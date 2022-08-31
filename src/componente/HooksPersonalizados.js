import React from 'react'
import { useFetch } from "../Hooks/useFetch"


function HooksPersonalizados() {
    let url = "https://jsonplaceholder.typicode.com/users"

    let { data, isPending, error } = useFetch(url)
    return (
        <>
            <h1>HooksPersonalizados</h1>
            <h3>{JSON.stringify(isPending)}</h3>
        <h3>
            <mark>{JSON.stringify(error)}</mark>
        </h3>
        <h3>
            <pre style ={{whiteSpace:"pre-wrap"}}>
                <code>{JSON.stringify(data)}</code>
            </pre>
            
        </h3>
           {/*  <table className='table table-hover table-sm'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Lanzamientos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Hi5</td>
                        <td>2003</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>MetroFlog</td>
                        <td>2003</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Windos live</td>
                        <td>1999</td>
                    </tr>
                </tbody>
            </table>*/}
        </> 
    )
}

export default HooksPersonalizados