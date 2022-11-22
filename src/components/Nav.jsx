import './Nav.scss';
import Formulario from "./Formulario";

const Nav = ({ setSearch }) => {
    return(
        <div className="nav">
            <h1 className='nav__title'>Find the perfect movie for today</h1>
            <Formulario setSearch={setSearch}/>
        </div>
    );
}

export default Nav;