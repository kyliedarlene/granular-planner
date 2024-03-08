import { Link } from "react-router-dom";
//link to home
//link to days
//link to routine menu

function NavBar(){


    return(
        <div>
            <button>
                <Link to={`/`}>Home</Link>
            </button>
            <button>
                <Link to={`/days`}>Day Templates</Link>
            </button>
            <button>
                <Link to={`/manage-routines`}>Routines</Link>
            </button>
        </div>
    )
}

export default NavBar;