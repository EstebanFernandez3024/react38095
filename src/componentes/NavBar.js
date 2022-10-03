
import { Link } from "react-router-dom"
import CardWidget from "./CardWidget"

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 mb-8 mb-8 ">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ulmen" >
        <div className="navbar-end">
    </div>
    <li tabIndex={0}>
          <a>
            GENERO
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2">
           <li><a className="sec">Femenino</a></li>
            <li><a className="sec">Maculino</a></li>
          </ul>
        </li>
        <li tabIndex={0}>
          <a>
            MARCAS
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2">
          
            <li><a className="sec">Adidas</a></li>
            <li><a className="sec">Nike</a></li>
          </ul>
        </li>
     
        <li><a>Ver Todo</a></li>
        <a className="btn ">🛒 <br></br> ver carrito </a> 
        </ul>
        
      </div>
      
     <CardWidget/>
   


      <Link to='/' className="btn btn-ghost normal-case text-xl">TodoFulbo.com</Link>
  
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
      <div className="navbar-end">
    </div>
    <li tabIndex={0}>
          <a>
            GENERO
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2">
        
            <li><a className="sec">Maculino</a></li>
          </ul>
        </li>
        <li tabIndex={0}>
          <a>
            MARCAS
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a className="sec">Adidas</a></li>
            <li><a className="sec">Nike</a></li>
          </ul>
        </li>
        <Link to='ItemListContainer'> VER PRODUCTOS</Link> 
        <li><a>Ver Todo</a></li>
        <a className="btn ">🛒 <br></br> ver carrito </a> 
        
      </ul>
    </div>
   
  </div>
  )
}
export default NavBar