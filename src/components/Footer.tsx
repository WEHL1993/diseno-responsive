function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p>Síguenos en redes sociales:</p>
        <div className="d-flex justify-content-center gap-3 mt-2">
            <a href="#" className="text-white">
                <i className="fab fa-facebook-f me-2"></i>Facebook
            </a>
            <a href="#" className="text-white">
                <i className="fab fa-twitter me-2"></i>Twitter
            </a>
            <a href="#" className="text-white">
                <i className="fab fa-instagram me-2"></i>Instagram
            </a>
            </div>
        <p className="mt-3">&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
export default Footer;
