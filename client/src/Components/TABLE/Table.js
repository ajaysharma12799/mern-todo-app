import React, { useState, useEffect } from 'react';

import { getTodos, deleteTodos } from '../helper/APIHelper';

const Table = () => {

    const [todos, setTodos] = useState([]);

    const preLoad = () => {
        getTodos()
        .then( (data) => {
            if(data.errorMessage) {
                console.log(data.errorMessage);
            }
            else {
                setTodos(data);
            }
        } )
    }

    useEffect(() => {
        preLoad();
    }, []);

    const deleteThisTodo = (productID) => {
        console.log(productID + "  product from deletethistodo");
        deleteTodos(productID)
        .then( (data) => {
            console.log(JSON.stringify(data));
            if(data.errorMessage) {
                console.log(data.errorMessage);
            }
            else {
                preLoad()
            }
        } )
        .catch( (error) => {
            console.log(`error from deletethistodo : ${error}`);
        } );
    }

    const DisplayTable = () => (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Task</th>
                    <th scope="col">Data</th>
                    <th scope="col">Completed</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
        <tbody>
            {/* <tr>
                <th scope="row">1</th>
                <td> Complete Design </td>
                <td> { new Date().now } </td>
                <td> <button> Completed </button> </td>
                <td> <button> Edit </button> </td>
                <td> <button> Delete </button> </td>
            </tr> */}
            { todos.map( (SingleTodo, index) => (
                <tr>
                <th scope="row"> { index + 1 } </th>
                <td> { SingleTodo.message } </td>
                <td> { "Date Will Come" } </td>
                <td> 
                    <button
                        // onClick={}
                    > 
                        Completed 
                    </button> 
                </td>
                <td> <button> Edit </button> </td>
                <td> 
                    <button
                        onClick={ () => { deleteThisTodo(SingleTodo._id) } }
                    > 
                        Delete 
                    </button> 
                </td>
            </tr>
            ) ) }
        </tbody>
        </table>
    )

    return (
        <div>
            { DisplayTable() }
        </div>
    )
}

export default Table;