
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact';
import PageNotFound from '../404/PageNotFound';
import Blog from '../Pages/Blog';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Route>
        </Routes>
    );
};

export default Routers;