import './App.css';
import ImageSlider from './Training/Training';
import GroupExample from './Trainers/Trainer';
import Team from './Pages/TrainerTeam';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <ImageSlider/>
      <GroupExample/>
      <Routes>
        <Route path= '/team' element = {<Team/>}/>
      </Routes>
    </div>
  );
}

export default App;
