import "./navStyles.css"
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.jpg"

const NavBar = () => {
    return(
      <nav className="NavBar">
        <img src={logo} alt="logo de la empresa" />
      <h1>mi barra de navegacion</h1>
      <ul>
        <button>Home</button>
        <button>Productos</button>
        <button>Contacto</button>
      </ul>
        <CartWidget />
      </nav>  
    );
}

export default NavBar