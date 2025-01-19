import './App.css'
import Navbar from './Pages/Main/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Trainers from './Pages/Trainers';
import Main from './Pages/Main';
import Contact from './Pages/Contact';
import Plans from './Pages/Plans';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/trainers' element={<Trainers />} />
          <Route path='/blog' element={null} />
          <Route path='/plans' element={<Plans />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
