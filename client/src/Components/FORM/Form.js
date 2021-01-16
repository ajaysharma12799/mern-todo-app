import React, { useState } from 'react';
import { addTodos } from '../helper/APIHelper';

const Form = () => {

    const [ message, setMessage ] = useState("");

    const handleChange = (event) => {
        setMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodos({message})
        .then( (data) => {
            if(data.errorMessage) {
                console.log(data.errorMessage);
            }
            else {
                setMessage("");
            }
        } )
        .catch( (error) => {
            console.log(`error in FORM.js : ${error}`);
        } );
    }

    const DisplayForm = () => (
        <div>
            <form>
                <div class="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        name="message" 
                        placeholder="Enter Your Task" 
                        value={ message }
                        onChange={ handleChange }
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={ handleSubmit }
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