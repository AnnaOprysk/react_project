import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count: state.count + 1};
        case 'dec':
            return {...state, count: state.count - 1};
        case 'reset':
            return {...state, count: action.payload = 0};
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer,{count: 0});

    return (
        < div>
            <div className={'count'}> {state.count}</div>
            <button onClick={() => dispatch({type: 'inc'})}>Increment</button>
            <button onClick={() => dispatch({type: 'dec'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset', payload: 0})}>Reset</button>
        < /div>
    );
}

export default App;
