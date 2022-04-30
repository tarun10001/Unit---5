import {legacy_createStore as createStore} from "redux";

//Action Types
const ADD_COUNT = "add";
const ADD_TODO = "ADD_TODO";

//Action Creators
const addTodo = (title) => {
    return {
        type: ADD_TODO,
        payload: title,
    }
}

//How to update Store
const reducer = (store, action) => {
console.log("Action");
    if (action.type === "ADD_COUNT") {
        return {...store, counter: store.counter + action.payload};
    }
    if (action.type === "ADD_TODO") {
        return {...store, todos: [...store]}
    }
    return store;
};

const initState = {
    counter: 0,
    todos: [],
};

const store = createStore(reducer, initState);

console.log("initial store", store.getState());

store.dispatch({type: "ADD_COUNT",
payload: {title: "Learn Javascript", status: false},
});

