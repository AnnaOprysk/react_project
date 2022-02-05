import {useState} from "react";

import './App.css';
import css from './components/ListItem/Checkbox.module.css';
import {CSSTransition, TransitionGroup} from "react-transition-group";


function App() {
    const [text, setText] = useState('');
    const [todoList, setTodoList] = useState([]);
    // const [checkbox, setCheckbox] = useState({});

    function addTodoList() {
        setTodoList([...todoList, {id: new Date().getTime(), text, status: false}]);
        setText('');
    }

    return (
        <div>
            <div className={'inputBlock'}>
                <input className={'inputMain'} type="text" placeholder={'Enter your to do list...'} value={text}
                       onChange={e => setText(e.target.value)}/>
                <button className={'inputBtn'} onClick={() => addTodoList(text)}>Save</button>
            </div>
            <hr/>
            <TransitionGroup component='ul'>
                {todoList.map(({id, text}) =>
                    <CSSTransition key={id} timeout={500} classNames='todo'>
                        <h2 className={'todo'}>

                            <input type="checkbox"/>
                            {/*onClick={() => setCheckbox(!checkbox)}/>{checkbox? {text} : <s>{text}</s> }*/}
                            {/*<div> {status===false ? {text} : <s>{text}</s> }</div>*/}
                            {/*<div className={checkbox===true? css.checkbox : ''}>   {text} </div>*/}
                            <div> {text} </div>
                            <button onClick={() => setTodoList([...todoList.filter(value => value.id !== id)])}>
                                Delete
                            </button>
                        </h2>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
}

export default App;
