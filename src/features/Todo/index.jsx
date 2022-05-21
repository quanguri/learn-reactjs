import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

// TodoFeature.propTypes = {

// };

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        }
    ];
    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState('all');
    const handleTodoClick = (todo, idx) => {
        // clone new array
        const newTodoList = [...todoList];
        // toggle status
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        //Update state
        setTodoList(newTodoList);
    };
    const handleShowAllClick = () => {
        setFilterStatus('all');
    }
    const handleShowCompletedClick = () => {
        setFilterStatus('completed');
    }
    const handleShowNewClick = () => {
        setFilterStatus('new');
    }
    const renderTodoList = todoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);
    return (
        <div>
            <h2>Todo List</h2>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} filterStatus={filterStatus} />
            <button onClick={() => handleShowAllClick()}>Show All</button>
            <button onClick={() => handleShowCompletedClick()}>Show Completed</button>
            <button onClick={() => handleShowNewClick()}>Show New</button>
        </div>
    );
}

export default TodoFeature;