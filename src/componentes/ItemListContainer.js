import React, { useEffect, useState } from 'react'
import { products } from './products'
import ItemCard from './ItemCard'

const ItemList = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    getProducts().then( response => {
      console.log( response );
      setItems( response )
    })
  }, [])
  
  const getProducts = () => {
    return new Promise( resolve => {
      setTimeout(() => {
        resolve( products )
      }, );
    })
  }

  return (
    <>
  
      { items.map( i => <ItemCard key={i.id} {...i}/> ) }
      </>
  )
}

export default ItemList