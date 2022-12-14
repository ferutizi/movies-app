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
                name='name'
                type='text'
                placeholder='Movie...'
                onChange={handleChange}
                value={formulario.name}
                autoFocus
                className='nav__input'
            />
            <button type='submit' className='input__button'>Search</button>
        </form>
    );
}

export default Formulario;