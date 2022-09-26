import { useEffect, useState } from "react"
import ItemCard from "./ItemCard"
const products = [
    {id: 1, name:'camiseta', price:'20'},
    {id: 2, name:'pelota', price:'30'},
    {id: 3, name:'remera', price:'250'},
    {id: 4, name:'pelota', price:'250'},
    {id: 5, name:'botines', price:'250'},
    {id: 6, name:'Chombas', price:'250'},
]

const ItemList2 = () => {

  const [items, setItems] = useState([ {id: 4, name:'cpu', price:'2500'},])

  useEffect( ()=>{
    getProducts().then( res => {
        setItems( res )
    })
    .catch( err => {
        console.log('err: ' + err);
    })
  }, [])

  const getProducts = () => {
    return new Promise( (resolve) => {
      setTimeout( () => {
        resolve( products )
      }, 3000)
    })
  }

  return (
    <div>
      <h1>Componente ItemList2</h1>
      <div className="cardConteiner">
      { items.map( item => <ItemCard key={item.id} {...item} /> ) }</div>
    </div>
  )
}
export default ItemList2