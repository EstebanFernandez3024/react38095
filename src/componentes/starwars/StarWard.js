import { useEffect, useState } from "react"
const StarWard = () => {

    const [people, setPeople] = useState([])
    

useEffect(() => {

    getPeople()

}, [] )
 
const getPeople = () => {
    const URL = 'https://swapi.dev/api/people/'
    fetch( URL )
    .then(  response  => {
        return response.json()
    })
    .then( data => {
        console.log( data.results )
        setPeople( data.results)
    })
}


    
  return (
    <div>
        
        <h1>StarWard</h1>
        {people.map( p => <li key={p.url} >{ p.name }</li>)}

    </div>
  ) 
}
export default StarWard