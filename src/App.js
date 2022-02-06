import {Route, Routes} from "react-router-dom";

import {Layout} from "./components";
import css from "./App.module.css";
import {UsersPage,HomePage,CarsPage} from "./pages/";

function App() {
    return (
        <div className={css.wrapper}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'cars'} element={<CarsPage/>}/>
                </Route>
            </Routes>
         </div>
    );
}

export default App;
