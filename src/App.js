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

  const handleAddToList = (selectedProduct) => {
    selectedProductTime(selectedProduct.time);
  };
  const selectedProductTime = (selectedTime) => {
    return parseInt(selectedTime);
  };

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
              handleAddToList={handleAddToList}
            ></ExerciseItems>)
          }
        </div>
      </div>

      <div className='exercise-details'>
        <ExerciseDetails
          selectedTime={selectedProductTime}
        ></ExerciseDetails>
      </div>
    </div>
  );
}

export default App;
