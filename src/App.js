import {Routes, Route} from 'react-router-dom';

import {Layout} from "./components";
import {HomePage,UsersPage,PostPage,UsersDetailsPage,PostDetailsPage,UserPostsPage,CommentsPage,AlbumsPage,PhotosPage} from './pages';


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UsersDetailsPage/>}>
                            <Route path={':posts'} element={<UserPostsPage/>}/>
                        </Route>

                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={':comments'} element={<CommentsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'*'} element={<HomePage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
