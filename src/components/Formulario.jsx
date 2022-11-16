import { useState } from "react";
import useFormulario from "../hooks/useFormulario";

const Formulario = ({ setSearch }) => {

    const [formulario, handleChange, reset] = useFormulario({name: ''})

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(formulario.name);
        reset();
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                name="name"
                type='text'
                placeholder="search"
                onChange={handleChange}
                value={formulario.name}
                autoFocus
            />
            <button type="submit">search</button>
        </form>
    );
}

export default Formulario;