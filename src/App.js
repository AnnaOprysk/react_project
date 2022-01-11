import './App.css';

import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {


    return (
        <div className={App}>
            <div className='joinDiv'>
                <div className='users'><Users/></div>
                <div className='posts'><Posts/></div>

            </div>
            <div className='comments'><Comments/></div>

        </div>
    );
}

export default App;
