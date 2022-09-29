import './App.css';
import ExerciseDetails from './components/ExerciseDetails/ExerciseDetails';
import ExerciseItems from './components/ExerciseItems/ExerciseItem';

function App() {
  return (
    <div className='full-container'>
      <div className='exercise-items'>
        <ExerciseItems></ExerciseItems>
      </div>
      <div className='exercise-details'>
        <ExerciseDetails></ExerciseDetails>
      </div>
    </div>
  );
}

export default App;
