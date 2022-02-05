import React from 'react';
import {useDispatch} from "react-redux";

import {addTodo} from "../../store";

const Form = () => {
    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        dispatch(addTodo({todo: e.target.todo.value}));
        e.target.reset()
    }
    return (
        <form onSubmit={submit} style={{display: 'flex', justifyContent: 'center', margin: '40px'}}>
            <input type="text" placeholder={'Enter your todo list...'} name={'todo'}/>
            <button>Save</button>
        </form>
    );
};

export {Form};