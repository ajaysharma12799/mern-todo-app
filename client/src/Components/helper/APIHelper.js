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

export const editTodos = async () => {

}

export const deleteTodos = async () => {

}