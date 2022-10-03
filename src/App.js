
import './App.css';
import NavBar from './componentes/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ItemListContainer from './componentes/ItemListContainer';

import Footer from './componentes/Footer';

import ItemDetail from './componentes/ItemDetail';


        
function App() {
 
  return (
   <>
 
   
  
     
    

    
   
  
      <BrowserRouter>
        <NavBar/>
      
     
      


        <Routes>
       
       
                <Route path='/ItemListContainer/' element={<ItemListContainer></ItemListContainer>}/>
                <Route path='/componentes/ItemCard/:id'  element={<ItemDetail></ItemDetail>} />
   
        
     
       
        </Routes>
        <Footer/>   
      </BrowserRouter>


    </>

   
  );
}

export default App;
