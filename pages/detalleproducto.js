
import Link from "next/link";

import { skills, experiences, projects } from "../profile";

const detalleproducto = () => (
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
          <div className="row">
            <div className="col-md-4">
              <img src="/headset-ga6203de22_640.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1 className="texto">Auriculares Razor</h1>
              <h3 className="texto">1500.lps</h3>
             
              <p className="texto">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae atque ullam perferendis harum, nisi porro voluptate,
                iste consequuntur enim reprehenderit architecto consectetur cum?
                Totam ad molestias natus illum illo officia.
              </p>

              <h3 className="texto">Especificaciones</h3>

              <p className="texto">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae atque ullam perferendis harum, nisi porro voluptate,
                iste consequuntur enim reprehenderit architecto consectetur cum?
                Totam ad molestias natus illum illo officia.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae atque ullam perferendis harum, nisi porro voluptate,
                iste consequuntur enim reprehenderit architecto consectetur cum?
                Totam ad molestias natus illum illo officia.
              </p>


              <Link href="/hireme">
                <a className="button">Whatsapp</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
);

export default detalleproducto;
