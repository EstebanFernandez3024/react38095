import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from './products'
import './styles/ItemCount.css';

const ItemDetail = () => {

 const { id: itemId } = useParams()
 const [item, setItem] = useState({})

useEffect(() => {
  getItemDetails().then( response =>{
     setItem( response )
  })
}, [])



 const getItemDetails = () => { 
 return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve( products.find(p => p.id == itemId) )
  }, 1000);
})
  }

return (
  <div className='info'>

  <div className='descripcionContenedor'>
      <div>
       <img className='imgdes' src={item.img}/>
       </div>
      <div>
       <h1>{item.nombre}</h1>
       <p>{item.descripcion}</p>  <br></br>
       <p>PRECIO: $ {item.precio}</p>
      </div>
      
    

  </div>
  </div>
)



}

export default ItemDetail

