import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export function AddPost() {
    const [Titulo, setTitulo] = useState("");
    const [Texto, setTexto] = useState("");
    const [Articulo, setArticulo] = useState([]);

    const navigate = useNavigate();

    const addtitulo = (e) => {
        setTitulo(e.target.value)
    }
    const add = (e) => {
        setTexto(e.target.value)
    }
    const send = (e) => {
        e.preventDefault()
        const nuevo = { Titulo: Titulo, Texto: Texto }
        setArticulo(nuevo);
        axios.post("http://localhost:3002/post", { titulo: Titulo, texto: Texto }).then((response) => {
            console.log(response);
        });
        navigate('/');
    }

    return (
        <div>
            <div className="form-content">
                <form className="form" >
                    <label htmlFor="">Titulo</label>
                    <input type="text" required className="titulo" onChange={(e) => { addtitulo(e) }} />
                    <label htmlFor="">Texto</label>
                    <textarea type="text" required onChange={(e) => { add(e) }} />
                    <button type="submit" onClick={(e) => { send(e) }}>Publicar</button>
                </form>

            </div>
        </div>

    )
}