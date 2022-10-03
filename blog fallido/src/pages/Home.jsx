import { useState, useEffect } from "react";
import axios from "axios";
import { Post } from "../components/Post";
import {Link} from "react-router-dom"

export function Home() {
  const [titulo, setTitulo] = useState("");
  const [texto, setTexto] = useState("");

  const [articulo, setArticulo] = useState([]);

  const show = () => {
    axios.get("http://localhost:3002/").then((response) => {
      setArticulo(response.data);
    });
  };

  useEffect(() => {
    if(articulo.length===0){
      show()
    }
  })
  
  const del = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3002/delete/`,{ data: { id : id }}) 
        
    const nuevo = articulo.filter((val)=>{
          if(val.id!== id){
            return val;
          }
    })
    setArticulo(nuevo)
  }

  return (
    <div>
      <section className="cont" >
        {articulo.map((val, index) => {
          return (
            <article className="post"  key={val.id} >
              <div className="opciones">
                <button className="x" onClick={() => { del(val.id) }} >✖</button>
                <Link className="edit" to={`/edit/${val.id}`} >🖊</Link>
              </div>

              <Post titulo={val.titulo} texto={val.texto} img={"1"} />       
            </article>)
        })}
      </section>
    </div>
  )
}

