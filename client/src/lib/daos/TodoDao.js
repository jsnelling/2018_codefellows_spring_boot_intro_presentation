const defaults = { headers: { 'content-type': 'application/json' } };

export const createTodo = (todo) => fetch('todos', {
    ...defaults,
    body: JSON.stringify(todo),
    method: 'POST',
});

export const deleteTodo = (id) => fetch(`todos/${ id }`, {
    ...defaults,
    method: 'DELETE',
});

export const getTodos = () => fetch('todos').then(r => r.json());

export const updateTodo = (id, todo) => fetch(`todos/${ id }`, {
    ...defaults,
    body: JSON.stringify(todo),
    method: 'PATCH',
});