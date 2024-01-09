import './Card.css';

function Card(props) { // objeto

    //const [ conDescuento, setConDescuento ] = useState(props.decuento ? "green");

    const handleClickButton = (nombreProducto) => {
        alert(`Esta apunto de agregar el siguiente producto: ${nombreProducto}`)
    }

    return ( //! true false, strings
        //<section style={{backgroundColor: "beige", fontSize: "40px"}} className='container'>
        //<section style={{backgroundColor: "beige", fontSize: "40px"}} className={`container ${!props.descuento ? "" : props.descuento}`}>
        <section style={{fontSize: "40px"}} className={`container ${props.descuento !== undefined && props.descuento ? "descuento" : "normal"}`}>
            <div className='container-image'>
                <img src={props.src} alt={props.alt}></img>
            </div>
            <div className='container-data'>
                <p className='nombre'>{props.nombre}</p>
                <p className='isbn'>{props.isbn}</p>
                <p className='precio'>{props.precio}</p>
            </div>
            <div><button onClick={() => handleClickButton(props.nombre)}>Agregar</button></div>
        </section>
    )
}

//const movie = {}

//export { movie };

export default Card;