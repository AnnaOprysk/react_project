import React from 'react';
import {useDispatch} from "react-redux";

import css from './Todo.module.css'
import {changeStatus, deleteTodo} from "../../store";


const Todo = ({todo: {id, name, status}}) => {
    const dispatch = useDispatch();

    return (
        <div className={css.Todo}>
            <input type="checkbox" value={status} onChange={() => dispatch(changeStatus({id}))}/>
            <h1 className={status ? css.selected : ''}>{name}</h1>
            <button onClick={() => dispatch(deleteTodo({id}))}>Delete</button>
        </div>
    );
};

export {Todo};