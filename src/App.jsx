import Navbar from './Pages/Main/Navbar'
import {Routes,Route} from 'react-router-dom';
import Trainers from './Pages/Trainers';
import Main from './Pages/Main';
import Contact from './Pages/Contact';
import Plans from './Pages/Plans';
import Blog from './Pages/Blog';
import FullStrength from './Pages/Blog/FullStrength';
import RestorativeYoga from './Pages/Blog/RestorativeYoga';
import FitnessBoost from './Pages/Blog/FitnessBoost';
import MorningRoutine from './Pages/Blog/MorningRoutine';
import Flexibility from './Pages/Blog/Flexibility';
import ChallengeSeries from './Pages/Blog/ChallengeSeries';

function App() {

  return (
    <>
      <div className='bg-background font-iregular box-border'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/trainers' element={<Trainers />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/full-strength' element={<FullStrength />} />
          <Route path='/blog/restorative-yoga' element={<RestorativeYoga />} />
          <Route path='/blog/10-minute-fitness' element={<FitnessBoost />} />
          <Route path='/blog/morning-routine' element={<MorningRoutine />} />
          <Route path='/blog/7-day-yoga' element={<Flexibility />} />
          <Route path='/blog/5-day-challenge' element={<ChallengeSeries />} />
          <Route path='/plans' element={<Plans />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={null} />
        </Routes>
      </div>
     
    </>
  )
}

export default App
