import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from "./components/TodoList";
import './App.css';

function App() {

    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        // getLocalTodos();
    }, [])

    useEffect(() => {
        filterHandler();
        // saveLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todos, status]);

    const filterHandler = () => {
        switch(status){
            case 'completed':
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos)
                break;
        }
    };

    // const saveLocalTodos = () => {
    //     localStorage.setItem('todos', JSON.stringify(todos))
    // };

    // const getLocalTodos = () => {
    //     if(localStorage.getItem('todos') === null){
    //         localStorage.setItem('todos', JSON.stringify([]));
    //     } else {
    //         let todoLocal = JSON.parse(localStorage.getItem('todos'));
    //         setTodos(todoLocal)
    //     }

    return (
        <div className="App">
            <header>
            <img src="https://external-preview.redd.it/pNLREUUvc8FdaOZu5FHuymRPFeERUfVK92tH22N32cI.jpg?auto=webp&s=4a294c40da0018090715c7bc4b7aecde52b87119" />
                <h1>Todo List App</h1>
            </header>
            <Form
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                status={status}
                setStatus={setStatus}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
            />
        </div>
    );
}

export default App;




{/*  */}
