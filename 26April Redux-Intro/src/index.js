import { store } from './store.js'

const state = store.getState();

const getTodo = () => {
    event.preventDefault();
    const todo = document.getElementById('user-todo').value;
    const action = {
        type: "add-todo",
        payload: todo
    };
    store.dispatch(action);
    console.log(store.getState())
}

document.getElementById('submit').addEventListener('click', getTodo);
