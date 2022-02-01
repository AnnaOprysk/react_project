import {useReducer} from "react";

import {Form,Cats,Dogs} from "./components";

const reducer = (state, action) => {
    switch (action.type) {
        case 'addingCat':
            return {...state, cats: [...state.cats, {id: new Date().getTime(), name: action.payload.cat}]};
        case 'addingDog':
            return {...state, dogs: [...state.dogs, {id: new Date().getTime(), name: action.payload.dog}]};
        case 'removingCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== action.payload.id)};
        case 'removingDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== action.payload.id)};
        default:
            return state;
    }
}

function App() {
    const [{cats,dogs}, dispatch] = useReducer(reducer, {cats: [],dogs:[]});

    return (
        <div style={{textAlign:'center'}}>
            <Form dispatch={dispatch} />
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <div>
                    <Cats cats={cats} dispatch={dispatch}/>
                </div>
                <div>
                    <Dogs dogs={dogs} dispatch={dispatch}/>
                </div>
            </div>
        </div>
    );
}

export default App;
