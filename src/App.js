import './App.css';

import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {


    return (
        <div className={'App'}>
            <div className={'JoinDiv'}>
                <div className={'Users'}><Users/></div>
                <div className={'Posts'}><Posts/></div>

            </div>
            <div className={'Comments'}><Comments/></div>

        </div>
    );
}

export default App;
