import { useEffect, useState } from 'react';
import './App.css';
import ExerciseDetails from './components/ExerciseDetails/ExerciseDetails';
import ExerciseItems from './components/ExerciseItems/ExerciseItems';
import Header from './components/Header/Header';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('gymnasium-equ.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className='full-container'>
      <div className='container'>
        <div>
          <Header></Header>
        </div>
        <div className='exercise-items row mx-1'>
          {
            products.map(product => <ExerciseItems
              key={product.id}
              product={product}
            ></ExerciseItems>)
          }
        </div>
      </div>

      <div className='exercise-details'>
        <ExerciseDetails></ExerciseDetails>
      </div>
    </div>
  );
}

export default App;
