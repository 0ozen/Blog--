import { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

export function Edit() {

    const [Titulo, setTitulo] = useState("")
    const [Texto, setTexto] = useState("")
    const [Articulo, setArticulo] = useState([])

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
    }
    const show = () => {
        axios.get("http://localhost:3002/").then((response) => {
            response.data.filter((val) => {
                if (val.id === id) {
                    setArticulo(val);
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
                <form className="form" >
                    <label htmlFor="">Titulo</label>
                    <input type="text" required className="titulo"
                        onChange={(e) => { addtitulo(e) }}
                        defaultValue={Articulo.titulo}
                    />
                    <label htmlFor="">Texto</label>
                    <textarea type="text" required
                        onChange={(e) => { add(e) }}
                        defaultValue={Articulo.texto}
                    />
                    <button type="submit" onClick={(e) => { send(e, Articulo.id) }}>Publicar</button>
                </form>

            </div>

        </div>
    )
}