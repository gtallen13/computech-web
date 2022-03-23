import { skills, experiences, projects } from "../profile";

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
              {projects.map(({ name, description, image }, index) => (
                <div className="col-md-4 p-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt=""
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                     
                      <a href="#!">Comprar</a>
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
