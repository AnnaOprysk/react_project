import React, {useRef} from 'react';

const Form = ({dispatch}) => {
    const catInput = useRef();
    const dogInput = useRef();

    const form=(e)=>{
        e.preventDefault();
        e.target.reset();
    }

    const saveCat = () => {
        dispatch({type: 'addingCat', payload: {cat: catInput.current.value}})
    };
    const saveDog = () => {
        dispatch({type: 'addingDog', payload: {dog: dogInput.current.value}})
    };

    return (
        <div>
            <form onSubmit={form}>

                    <label> Add Cat:
                        <input type="text" placeholder={'cat'} ref={catInput}/>
                        <button onClick={saveCat}> Save</button>
                    </label>

                    <label> Add dog:
                        <input type="text" placeholder={'dog'} ref={dogInput}/>
                        <button onClick={saveDog}> Save</button>
                    </label>

            </form>
        </div>
    );
};

export {Form};