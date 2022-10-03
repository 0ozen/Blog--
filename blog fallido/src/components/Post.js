
export function Post(props) {
  return (  
      <>
        <h2>{props.titulo}</h2>
        <nav>
          <img
            alt=""
            className="imagen"
            src={require(`../imagenes/${props.img}.png`)}
          ></img>
        </nav>
         <p>{props.texto}</p>
   
     </>
    
  );
}
