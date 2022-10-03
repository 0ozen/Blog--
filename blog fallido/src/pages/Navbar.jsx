import axios from "axios";
import { Link, NavLink } from 'react-router-dom';

export function Navbar() {

  function active() {
    return (({ isActive }) => { return isActive ? 'active' : "" })
  }

  return (
    <div className="navv">
      <nav>
        <div>
          <title> Blog </title>
          <Link to="/">
            <h1 id="titulo"> Blog de prueba </h1>
          </Link>
        </div>
        <div>
          <section>
            <p className="menu">
              <NavLink end to="/" >
                Home
              </NavLink>
              <NavLink end to="/add-post"  >
                Nuevo Post
              </NavLink>
            </p>
            <p className="menu2">
              <NavLink end to="/link3">
                link 3
              </NavLink>
              <NavLink end to="/link4" >
                link 4
              </NavLink>
            </p>
          </section>
        </div>
      </nav>
    </div>
  )
}