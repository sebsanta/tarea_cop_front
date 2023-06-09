

const Home = () => {

    return (
      <div className="container">
        <br></br>
        <h3>Reseña de proyecto de backend y frontend</h3>
        <div className="card" >
            <div className="card-body">
                <h4 className="card-title">Proyecto Backend</h4>
                <p className="card-text">En el desarrollo de este proyecto, se incluyeron tecnologías tales como el framework de java spring (SpringBoot). Dentro 
                   del desarrollo del proyecto se utilizaron variados tipos de anotaciones y mapeo de entidades objeto-relacional (JPA). También se utilizó
                   un patrón de diseño que permite generar un repositorio al interior del proyecto que incluyen el valor de la clase principal y su llave primaria.
                   Este patrón de diseño corresponde a data access object (DAO), se crea mediante una interface y es fundamental en la creación de microservicios.</p>
                   <br></br>
                <h4 className="card-title">Pruebas unitarias y documentación</h4>
                <p className="card-text">Dentro de las pruebas unitarias al proyecto de backend se utilizaron dos librerías importantes. Una se realizó con Junit que
                corresponde a un framework que permite crear pruebas automatizadas a los servicios que se están creando o consumiendo y para la generación de 
                documentación sobre los servicios se utiliza una librería llamada Swagger. Esta puede ser encontrada en el repositorio de Maven y cuando se tiene 
                su respectivo tipo de anotación, se anota en el POM para que este gestione las dependencias asociadas a la determinada versión de la librería y poder 
                usarla en el proyecto.</p>
                <a href="https://spring.io/projects/spring-boot" className="btn btn-primary m-2">Ir a página oficial de springBoot</a>
                <a href="https://mvnrepository.com/" className="btn btn-primary m-2">Repositorio Maven</a>
                <a href="https://junit.org/junit5/" className="btn btn-primary m-2">Página de Junit</a>
            </div>
            <div className="container md">
                 <img src="../src/image/pom.png" className="card-img-top" alt="50" />
            </div>
            </div>
            <br></br>
            <div className="card" >
            <div className="card-body">
                <h5 className="card-title">Proyecto Frontend</h5>
                <p className="card-text">En el desarrollo de la parte Frontend, se utilizó la librería de desarrollo "React", que corresponde a una librería de JS.
                 Es muy potente para el cosnumo de Apis provenientes de microservicios ya que es liviana y permite la escalabilidad. 
                 Para el desarrollo del proyecto en particular se utilizaron hooks tales como "UseState" y "UseEffect" que sirven para el manejo de estados y 
                 consumir apis de forma asíncrona. Para el consumo de Apis, se optó por el uso de la librería "Axios" y se crearon dos interfaces para el uso de la 
                 tecnología de "Axios" y también la de "Redux".</p>
                 <br></br>
                 <h4 className="card-title">Pruebas unitarias y documentación</h4>
                 <p className="cart-title" >Para las pruebas se opta por elegir la librería de "Jest" que es una librería para hacer pruebas unitarias a los elementos del proyecto. Estos 
                 pueden ser hooks, elementos del dom como también el consumo de una Api. En este caso como el uso de "Fetch" no es propio del core de "Node" se 
                 tuvo que optar por instalar la dependencia de "whatwg-fetch" para que se pudieran generar las pruebas.</p>
                <a href="https://es.react.dev/" className="btn btn-primary m-2">Ir a página oficial de React</a>
                <a href="https://www.npmjs.com/" className="btn btn-primary m-2">Ir a página oficial de NPM</a>
                <a href="https://jestjs.io/" className="btn btn-primary m-2">Ir a página oficial de Jest</a>
            </div>
            <div className="container">
             <img src="src/image/router.png" className="card-img-top"  height={750} width={300}/>
            </div>
            </div>
            <br></br>
     </div>

    

    )
}

export default Home;