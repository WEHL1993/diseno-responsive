import ImagenResponsive from '../assets/Imagenresponsive.png';
import ImagenSeo from '../assets/Imagenseo.png';
import ProgramacionWeb from '../assets/desarrolloweb.png';

function Section() {
  const servicios = [
    {
      titulo: 'Diseño Web Responsivo',
      texto:
        'Creamos interfaces adaptables para todo tipo de dispositivos, garantizando una experiencia fluida y profesional para tus usuarios.',
      imagen: ImagenResponsive,
    },
    {
      titulo: 'Desarrollo Full Stack',
      texto:
        'Desarrollamos aplicaciones web completas adaptable a tus necesidades, desde el frontend interactivo hasta la lógica backend y conexión con bases de datos.',
      imagen: ProgramacionWeb,
    },
    {
      titulo: 'Optimización y SEO',
      texto:
        'Mejoramos el rendimiento de tu sitio y aplicamos buenas prácticas de SEO para aumentar tu visibilidad en motores de búsqueda.',
      imagen: ImagenSeo,
    },
  ];

  return (
    <section className="py-5">
      <div className="container">
        {/* Usamos .row (flex container de Bootstrap) + .card-col (tus breakpoints 600/1024) */}
        <div className="row">
          {servicios.map((servicio, index) => (
            <div key={index} className="card-col">
              <div className="card h-100 shadow-sm">
                <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  className="card-img-top card-img-fixed"
                />
                <div className="card-body">
                  <h5 className="card-title">{servicio.titulo}</h5>
                  <p className="card-text">{servicio.texto}</p>
                  <a href="#" className="btn btn-primary">Leer más</a>
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

