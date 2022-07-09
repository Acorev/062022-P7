import { Routes, Route } from 'react-router-dom';

import AuthService from './services/authService';
import PrivateRoute from './PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Header from './components/Header';
import PostEdit from './pages/PostEdit';
import PostAdd from './pages/PostAdd/PostAdd';
import PageNotFound from './pages/PageNotFound';

const App = () => {

    return (
        <AuthService>
            <Header />
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/edit/:id' element={<PostEdit />} />
                    <Route path='/add' element={<PostAdd />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/*' element={<PageNotFound />} />
            </Routes>
        </AuthService>
    )
}

export default App