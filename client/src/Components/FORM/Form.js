import React, { useState } from 'react';
import { addTodos } from '../helper/APIHelper';
import Styles from '../../App.module.css';
import cx from 'classnames';

const Form = () => {

    const [message, setMessage] = useState("");
    const [error, setError] = useState(false); // Display Alert Based on Boolean Value of Error
    const [errorMsg, setErrorMsg] = useState(""); // Set Error MSG To State
    const [success, setSuccess] = useState(false);

    const handleChange = (event) => {
        setError('');
        setMessage(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent Default Submit Behaviour of FORM

        setError('');
        setErrorMsg("");
        setSuccess(false);

        addTodos({message})
        .then( (data) => {
            if(data.errorMessage) {
                setError(true);
                setErrorMsg(data.errorMessage);
            }
            else {
                setError('');
                setErrorMsg("");
                setSuccess(true);
                setMessage("");
                setInterval(() => {
                    window.location.reload(false);
                }, 1000)
            }
        } );
    }

    const successMessage = () => (
        <div className={ cx("container alert alert-success alert-dismissible fade show mt-4 mb-4", Styles.SharpBorder, Styles.AlertWidth) }
            style={ { display: success ? '' : 'none' } }
            role="alert"
        >
            Todo Added Successfully
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )

    const errorMessage = () => (
        <div className={ cx("container alert alert-warning alert-dismissible fade show mt-4 mb-4", Styles.SharpBorder, Styles.AlertWidth) }
            style={ { display: error ? '' : 'none' } }
            role="alert"
        >
            { errorMsg }
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )

    const DisplayForm = () => (
        <div className={ cx("container mt-4 mb-4", Styles.Form) }>
            <form>
                <div className="mb-3">
                    <input 
                        type="text" 
                        className={ cx(Styles.SharpBorder, "form-control") } 
                        name="message" 
                        placeholder="Enter Your Task" 
                        value={ message }
                        onChange={ handleChange }
                    />
                </div>
                <button 
                    type="submit" 
                    className={ cx(Styles.SharpBorder, "btn btn-primary", Styles.ButtonRight) }
                    onClick={ handleSubmit }
                >
                    ADD TODO
                </button>
            </form>
        </div>
    )

    return (
        <div>
            { successMessage() }
            { errorMessage() }
            { DisplayForm() }
        </div>
    )
}

export default Form;