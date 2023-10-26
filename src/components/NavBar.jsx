import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <header>
        <div><h1>eCommers Vehículos</h1></div>
      <nav>
        <ul>
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="">Motos</a>
          </li>
          <li>
            <a href="">Autos</a>
          </li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  );
};
