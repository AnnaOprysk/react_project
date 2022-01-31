import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 1:
            return{...state, }
        default:
            return state;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {cat: '',dog:''});
    console.log(state.name)


    return (
        <div>
            <form>
                <label> Add Cat:
                    <input type="text" name={'cat'} onChange={reducer}/>
                    <button onClick={() => dispatch({type: 'cat'})}>Save</button>
                </label>
                <label> Add dog:
                    <input type="text" name={'dog'} onChange={reducer}/>
                    <button onClick={() => dispatch({type: 'dog'})}> Save</button>
                </label>

            </form>
            <hr/>
            <div>
                {state.value}
                <button>Delete</button>
            </div>
        </div>
    );
}

export default App;
