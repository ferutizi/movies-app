import { useState } from "react";
import useFormulario from "../hooks/useFormulario";

const Formulario = () => {

    const [formulario, handleChange, reset] = useFormulario({name: ''})
    const [search, setSearch] = useState();
    const {name} = formulario;

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(formulario);
        reset();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                name="name"
                type='text'
                placeholder="search"
                onChange={handleChange}
                value={name}
                autofocus
            />
            <button type="submit">search</button>
        </form>
    );
}

export default Formulario;