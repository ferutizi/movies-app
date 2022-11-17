import './Nav.css';
import Formulario from "./Formulario";
import Filters from "./Filters";

const Nav = ({ setSearch }) => {
    return(
        <div className="nav">
            <h1 className='nav__title'>Find the perfect movie for today</h1>
            <Formulario setSearch={setSearch}/>
            <Filters />
        </div>
    );
}

export default Nav;