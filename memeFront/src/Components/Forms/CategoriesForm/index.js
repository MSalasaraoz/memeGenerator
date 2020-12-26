import React, {useState} from 'react';

    const Formulario = () => {

    const [datos, setDatos] = useState({
        name: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
        //  console.log(event.target.name)
        //  console.log(event.target.value)
        
    }

    const enviarDatos = (event) => {
        event.preventDefault()
         console.log('enviando datos...' + datos.name)
         saveCategory();
         alert('Categoria creada');
     }

     const saveCategory = () =>{
        fetch('https://proyecto-extra-rolling.herokuapp.com/api/category/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(datos),
      })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => console.log('error'))
      };

    return (
        <>
        <div className="container ">
            <form className="" onSubmit={enviarDatos}>
                <div className="row-md-3">
                    <label>Nombre de la categoria</label>
                    <input type="text" placeholder="" className="form-control" onChange={handleInputChange} name="name"></input>
                </div>
                <br></br>
                <div className="row-md-3">
                <button type="submit" className="btn btn-primary ">Crear</button>
                </div>
                
            </form>
            <ul>
                <li>
                    {datos.name}
                </li>
            </ul>
            </div>
        </>
    );
}
 
export default Formulario;