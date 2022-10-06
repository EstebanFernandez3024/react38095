
import './App.css';
import NavBar from './componentes/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ItemListContainer from './componentes/ItemListContainer';

import Footer from './componentes/Footer';

import ItemDetail from './componentes/ItemDetail';
import Home from './componentes/Home';

        
function App() {
 
  return (
   <>
 
   
  
     

   <div className='body'>
   
  
      <BrowserRouter>
        <NavBar/>
      
     
      


        <Routes>
       
        <Route path={'/'} element={<Home/>} />
       
                <Route path='/ItemListContainer/' element={<ItemListContainer></ItemListContainer>}/>
                <Route path='/componentes/ItemCard/:id'  element={<ItemDetail></ItemDetail>} />
   
        
     
       
        </Routes>
         
      </BrowserRouter>
      <Footer/>  

      </div>
    </>

   
  );
}

export default App;
