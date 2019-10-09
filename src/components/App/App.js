import React from 'react';

import './App.css';
import TodoList from '../TodoList/TodoList';

const App = () => {
    return (
        <div className="container-fluid">
            <TodoList todoList={[]} />
        </div>
    );
}

export default App;