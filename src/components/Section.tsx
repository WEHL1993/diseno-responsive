function Section() {
  const servicios = [
    {
      titulo: 'Diseño Web Responsivo',
      texto:
        'Creamos interfaces adaptables para todo tipo de dispositivos, garantizando una experiencia fluida y profesional para tus usuarios.',
    },
    {
      titulo: 'Desarrollo Full Stack',
      texto:
        'Desarrollamos aplicaciones web completas adaptable a tus necesidades, desde el frontend interactivo hasta la lógica backend y conexión con bases de datos.',
    },
    {
      titulo: 'Optimización y SEO',
      texto:
        'Mejoramos el rendimiento de tu sitio y aplicamos buenas prácticas de SEO para aumentar tu visibilidad en motores de búsqueda.',
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {servicios.map((servicio, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{servicio.titulo}</h5>
                  <p className="card-text">{servicio.texto}</p>
                  <a href="#" className="btn btn-primary">
                    Leer más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section;