import React from "react";
import Buscador from "../ui/Buscador";
import Nav from "./Nav";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>P</p>
          <Buscador />
          <Nav />
        </div>
        <div>
          <p>Hola: Saul</p>
          <button>Cerrar sesión</button>
          <Link href="/">Login</Link>
          <Link href="/">Crear cuenta</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
