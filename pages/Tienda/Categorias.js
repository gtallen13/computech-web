import { projects } from "../../profile";
import Image from 'next/image'
import Link from 'next/link'
const Categorias = () => (
<>
    <section className="row">
      <div className="col-md-8 py-2">
      </div>
    </section>
    <section>
      <div className="row">
        <div className="col-md-12">
          
            <div className="row">
              <div className="col-md-12 my-2">
                <h1 className="titulocategoria">Categorias</h1>
              </div>
              {projects.map(({ name, description, image, categoria }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <Image
                        src={`/${image}`}
                        alt=""
                        className="card-img-top"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <Link href={`/Tienda/Productos?categoria=${categoria}`}><a>Comprar</a></Link>
                    </div>
                  </div>
                </div>
              ))}

              <div className="col-md-12 mt-4">
              </div>
            </div>
          </div>
      </div>
    </section>
</>
);

export default Categorias;
