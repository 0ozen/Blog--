import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

export function Edit() {

    const [Titulo, setTitulo] = useState("")
    const [Texto, setTexto] = useState("")
    const [Articulo, setArticulo] = useState([])

    //despues de editar go to home :
    const navigate = useNavigate()

    let { id } = useParams()
    id = parseInt(id);

    const addtitulo = (e) => {
        setTitulo(e.target.value)
    }
    const add = (e) => {
        setTexto(e.target.value)
    }
    const send = (e, id) => {
        e.preventDefault()
        const nuevo = { Titulo: Titulo, Texto: Texto }
        axios.put("http://localhost:3002/edit", { titulo: Titulo, texto: Texto, id: id }).then((response) => {
            console.log(response);
        });
        navigate('/')
    }
    const show = () => {
        axios.get("http://localhost:3002/").then((response) => {
            response.data.filter((val) => {
                if (val.id === id) {
                    setArticulo(val);
                    setTitulo(val.titulo);
                    setTexto(val.texto);
                }
            })
        });
    };

    useEffect(() => {
        show()
    }, [])


    return (
        <div>
            <div className="form-content">
                <form className="form"  >
                    <label htmlFor="">Titulo</label>
                    <input type="text" required className="titulo"
                        defaultValue={Articulo.titulo}
                        onChange={(e) => { addtitulo(e) }}
                    />
                    <label htmlFor="">Texto</label>
                    <textarea type="text" required
                        defaultValue={Articulo.texto}
                        onChange={(e) => { add(e) }}
                    />
                    <button type="submit" onClick={(e) => { send(e, Articulo.id) }}>Publicar</button>
                </form>

            </div>

        </div>
    )
}