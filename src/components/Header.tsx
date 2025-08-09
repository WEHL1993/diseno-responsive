import logo from '../assets/programacion-web.png'; // asegúrate del path correcto

function Header() {
  return (
    <header className="bg-dark text-white p-3">
      
      <div className="container d-flex justify-content-between align-items-center flex-wrap gap-3">
        
        {/* Logo y título */}
        <div className="d-flex align-items-center gap-2">
          <img src={logo} alt="Logo" style={{ height: '40px' }} />
          <h1 className="h5 m-0">Desarrollo Web</h1>
        </div>


        {/* Navegación */}
        <nav className="d-flex align-items-center gap-2">
          <ul className="nav m-0">
            <li className="nav-item"><a className="nav-link text-white" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Servicios</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Contacto</a></li>
          </ul>
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar..."
              className="search-input"
            />
          </div>
      </nav>
    </div>
  </header>
  );
}

export default Header;
