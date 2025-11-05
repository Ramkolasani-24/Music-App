import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Book from './pages/Book.jsx';
import Contact from './pages/Contact.jsx';
import Services from './pages/Services.jsx';
export default function App(){
 return(
 <BrowserRouter>
  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/services' element={<Services/>}/>
   <Route path='/book' element={<Book/>}/>
   <Route path='/contact' element={<Contact/>}/>
  </Routes>
 </BrowserRouter>);
}