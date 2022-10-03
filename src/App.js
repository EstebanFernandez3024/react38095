import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';

import ItemListContainer from './componentes/ItemListContainer';
import ItemCount from './componentes/ItemCount';
import ItemList2 from './componentes/ItemList2';
import StarWard from './componentes/starwars/StarWard';


function App() {
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos al carrito`);
  };
  return (
   <>
   
   <body className='body'>
         <NavBar/>
<div>
      <ItemListContainer/>
      <><ItemCount onAdd={onAdd} initial={1} stock={10} />
<ItemList2/>
    </>
    </div>
    </body>

   <StarWard/>
   </>
  );
}

export default App;
