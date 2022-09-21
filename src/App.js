import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';

import ItemListContainer from './componentes/ItemListContainer';
import ItemCount from './componentes/ItemCount';


function App() {
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos al carrito`);
  };
  return (
   <>
   <body>
      <NavBar/>

      <ItemListContainer/>
      <>
      <ItemCount onAdd={onAdd} initial={1} stock={10} />
    </>
    </body>
   </>
  );
}

export default App;
