import React, {useState} from 'react';

const Formulario = () => {


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

    return (
        <>
        <div className="container ">
            <form className="" onSubmit={enviarDatos}>
                <div className="row-md-3">
                    <label>Nombre de la categoria</label>
                    <input type="text" placeholder="" className="form-control" onChange={handleInputChange} name="nombre"></input>
                </div>
                <br></br>
                <div className="row-md-3">
                <button type="submit" className="btn btn-primary ">Crear</button>
                </div>
                
            </form>
            {/* <ul>
                <li>{datos.nombre}</li>
                <li>{datos.apellido}</li>
            </ul> */}
            </div>
        </>
    );
}
 
export default Formulario;