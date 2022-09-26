import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';

import ItemListContainer from './componentes/ItemListContainer';
import ItemCount from './componentes/ItemCount';
import ItemList2 from './componentes/ItemList2';


function App() {
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos al carrito`);
  };
  return (
   <>
   <body>
      <NavBar/>

      <ItemListContainer/>
      <><ItemCount onAdd={onAdd} initial={1} stock={10} />
<ItemList2/>
    </>
    </body>
   </>
  );
}

export default App;
