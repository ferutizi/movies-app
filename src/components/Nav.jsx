import Formulario from "./Formulario";

const Nav = ({ setSearch }) => {
    return(
        <div className="nav">
            <h2>find the perfect movie for today</h2>
            <Formulario setSearch={setSearch}/>
        </div>
    );
}

export default Nav;