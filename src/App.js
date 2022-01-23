import {Routes, Route} from 'react-router-dom';

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostPage from "./pages/PostsPage/PostPage";
import UsersDetailsPage from "./pages/UsersDetailsPage/UsersDetailsPage";
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage";
import UserPostsPage from "./pages/UserPostsPage/UserPostsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import PhotosPage from "./pages/PhotosPage/PhotosPage";

// import {HomePage,UsersPage,PostPage,UsersDetailsPage,PostDetailsPage,UserPostsPage,CommentsPage,AlbumsPage,PhotosPage} from './pages';


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
