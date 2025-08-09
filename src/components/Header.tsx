import logo from '../assets/programacion-web.png';

function Header() {
  return (
    <header className="bg-dark text-white">
      {/* breakpoint personalizado: navbar-expand-custom */}
      <nav className="navbar navbar-dark bg-dark navbar-expand-custom py-2">
        <div className="container">
          {/* Logo + texto */}
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <img src={logo} alt="Logo" height={32} />
            <span className="fw-semibold">Desarrollo Web</span>
          </a>

          {/* Botón hamburguesa (visible solo en ≤600px) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú colapsable */}
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;


