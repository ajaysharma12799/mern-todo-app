import API from '../../Backend';

export const getTodos = async () => {
    return await fetch(`${API}/getTodos`, {
        method: 'GET'
    })
    .then( (response) => {
        return response.json();
    } )
    .catch( (error) => {
        console.log(error);
    } );
}

export const addTodos = async (todo) => {
    return await fetch(`${API}/addTodo`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    .then( (response) => {
        return response.json();
    } )
    .catch( (error) => {
        console.log(error);
    } );
}

export const editTodos = async (TodoID, UpdatedTodo) => {
    return await fetch(`${API}/editTodo/${TodoID}`, {
        method: "PUT",
        header: {
            Accept: "application/json"
        },
        body: UpdatedTodo
    })
    .then( (response) => {
        return response.json();
    } )
    .catch( (error) => {
        console.log(`error from edittodo : ${error}`);
    } );
}

export const deleteTodos = async (TodoID) => {
    return await fetch(`${API}/deleteTodo/${TodoID}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json"
        }
    })
    .then( (response) => {
        return response.json();
    } )
    .catch( (error) => {
        console.log(`error from deletetodos : ${error}`);
    } );
}  