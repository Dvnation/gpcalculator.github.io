import {Link} from "react-router-dom"
import { About } from "./About"

export function NavBar() {
    return(
        <nav className="Nav">
<Link className="links" style={{background:"lightblue"}} to= "/"> <b>Home</b> </Link>
<Link className="links" style={{background:"lightcoral"}}  to= "/HowTo" ><b>How-To</b>  </Link>
<Link className="links" style={{background:"aquamarine"}}  to= "/about" > <b>About</b> </Link>



        </nav>

    )
}