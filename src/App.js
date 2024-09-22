import {Routes, Route} from 'react-router-dom';
import {Header} from './layout/Header';
import {Footer} from './layout/Footer';

import {Home} from './pages/Home';
import {Contact} from './pages/Contact';
import {About} from './pages/About';
import {NotFound} from './pages/NotFound';
import {Category} from './pages/Category';
import {Recipe} from "./pages/Recipe";

function App() {
    return (
        <>
            <Header/>
            <main className='container content'>
                <Routes >
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/category/:name' element={<Category/>}/>
                    <Route path='/meal/:id' element={<Recipe/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </main>
            <Footer/>
        </>
    );
}

export default App;
