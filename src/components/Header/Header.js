import "./Header.css";
import NavBar from '../NavBar/NavBar';
import Brand from "./Brand";

function Header(){
  return (
    <header>
          <Brand></Brand>
          <NavBar></NavBar>
    </header>
  );
}

export default Header;