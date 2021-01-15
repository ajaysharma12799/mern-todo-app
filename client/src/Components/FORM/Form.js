import React, { useState } from 'react';
import { addTodos } from '../helper/APIHelper';


const Form = () => {

    const [ todos, setTodos ] = useState({
        message: ""
    });

    const { message } = todos;

    const handleChange = (event) => {
        setTodos(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const DisplayForm = () => (
        <div>
            <form>
                <div class="mb-3">
                    <input 
                        type="text" 
                        class="form-control" 
                        name="message" 
                        placeholder="Enter Your Task" 
                        // value={ message }
                        // onChange={ handleChange }
                    />
                </div>
                <button 
                    type="submit" 
                    class="btn btn-primary"
                    // onClick={ handleSubmit }
                >
                    ADD TODO
                </button>
            </form>
        </div>
    )

    return (
        <div>
            { DisplayForm() }
        </div>
    )
}

export default Form;