import ItemCount from './ItemCount';
import './styles/ItemCount.css';
import { Link } from 'react-router-dom'
 

const ItemCard = ({nombre, precio, img, id}) => {
    return (
           <>



      <div className='conteinercards'>

<Link to={`/hola/Item${id}`}>
      <div className='cardS'>
      <img  src={img}/>
      <p>{nombre} </p> 
      <p >${precio}</p>
      <ItemCount/>
      </div>
   </Link>


      </div>




         </>
    )
  }
  export default ItemCard