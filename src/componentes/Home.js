import './styles/home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (<>
  <div className='bodyHome'>
    <div className='titulo'>
    <h1>BIENVENIDO</h1>  
  </div>
  <div></div>
  <div className='ver'>
  <Link  to='ItemListContainer'>    Ver Productos</Link> 
  </div>
  </div>
    </>
  )
}
export default Home