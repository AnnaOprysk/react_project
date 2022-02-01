import {useState} from "react";

import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

function App() {
    const [trigger, setTrigger] = useState(null);
    const update = data => {
        setTrigger(data)
    };
    const [carToUpdate, setCarToUpdate] = useState({});

    return (
        <div>
            <Form update={update} carToUpdate={carToUpdate}/>
            <Cars trigger={trigger} update={setTrigger} setCarToUpdate={setCarToUpdate}/>
        </div>
    );
}

export default App;
