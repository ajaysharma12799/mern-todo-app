import React, { useState, useEffect } from 'react';
import Styles from '../../App.module.css';
import cx from 'classnames';

import { getTodos, deleteTodos } from '../helper/APIHelper';

const Table = () => {

    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(false); // Display Alert Based on Boolean Value of Error
    const [errorMsg, setErrorMsg] = useState(""); // Set Error MSG To State
    const [isCompleted, setIsCompleted] = useState(false);

    const preLoad = () => {
        setError('');
        setErrorMsg("");

        getTodos()
        .then( (data) => {
            if(data.errorMessage) {
                setError(true);
                setErrorMsg(data.errorMessage);
            }
            else {
                setTodos(data);
                setError('');
                setErrorMsg("");
            }
        } )
    }

    useEffect(() => {
        preLoad();
    }, []);

    const deleteThisTodo = (productID) => {
        setError('');
        setErrorMsg("");

        deleteTodos(productID)
        .then( (data) => {
            if(data.errorMessage) {
                setError(true);
                setErrorMsg(data.errorMessage);
            }
            else {
                preLoad();
                setError('');
                setErrorMsg("");
            }
        } );
    }

    const errorMessage = () => (
        <div className={ cx("container alert alert-warning alert-dismissible fade show mt-4 mb-4", Styles.SharpBorder, Styles.AlertWidth) }
            style={ { display: error ? '' : 'none' } }
            role="alert"
        >
            { errorMsg }
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )

    const CompletedTask = (TodoID) => { // Return True Based On Completed Task of Single Product
        
    }

    const DisplayTable = () => {
    return (
        todos.length > 0 ? (
            <div>
                <table className={ cx("table container mt-4", Styles.Table) }>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Task</th>
                            <th scope="col">Completed</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { todos.map( (SingleTodo, index) => (
                            <tr key={index}
                                className={ isCompleted ? Styles.isCompleted : Styles.NotCompleted }
                            >
                                <th scope="row"> { index + 1 } </th>
                                <td> { SingleTodo.message } </td>
                                <td> 
                                    <button
                                        // onClick={ () => { setIsCompleted(true) } }
                                        className={ cx(Styles.SharpBorder, "btn btn-success") }
                                    > 
                                        Completed 
                                    </button> 
                                </td>
                                <td> 
                                    <button
                                        onClick={ () => { deleteThisTodo(SingleTodo._id) } }
                                        className={ cx(Styles.SharpBorder, "btn btn-danger") }
                                    > 
                                        Delete 
                                    </button> 
                                </td>
                            </tr>
                        ) ) }
                    </tbody>
                </table>
            </div>
        ) : (
            <div className={ cx("text-center mt-4 mb-4") }
            >
                <h1 className={ cx(Styles.NotFound) }>No Todo Found</h1>
            </div>
        )
    )
    }

    return (
        <div>
            { errorMessage() }
            { DisplayTable() }
        </div>
    )
}

export default Table;