import React from 'react';

const Dog = ({dog:{id,name},dispatch}) => {
    return (
        <div>
            {name}
            <button onClick={()=>dispatch({type:'REMOVING_DOG',payload:{id}})}>Delete</button>
        </div>
    );
};

export {Dog};