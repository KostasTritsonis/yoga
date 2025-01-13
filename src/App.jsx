import './App.css'
import Navbar from './Components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Trainers from './Pages/Trainers';
import Main from './Pages/Main';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/trainers' element={<Trainers/>} />
          <Route path='/blog' element={null} />
          <Route path='/plans' element={null} />
          <Route path='/contact' element={null} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
