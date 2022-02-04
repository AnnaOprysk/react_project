import {CarForm, Cars, UserForm, Users} from "./components";
import css from "./App.module.css";

function App() {
    return (
        <div className={css.wrapper}>
            <div>
                <CarForm/>
                <Cars/>
            </div>
            <hr/>
            <div>
                <UserForm/>
                <Users/>
            </div>
        </div>
    );
}

export default App;
