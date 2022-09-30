import { useEffect, useState } from 'react';
import './App.css';
import ExerciseDetails from './components/ExerciseDetails/ExerciseDetails';
import ExerciseItems from './components/ExerciseItems/ExerciseItems';
import Header from './components/Header/Header';
import Question from './components/Question/Question';
import { addToDb, getSavedData } from './components/utilities/fakedb';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart);

  useEffect(() => {
    fetch('gymnasium-equ.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [products]);

  useEffect(() => {
    const savedObject = getSavedData();
    const savedCart = [];
    for (const id in savedObject) {
      const addedProduct = products.find(product => product.id === id);
      if (addedProduct) {
        const totalTime = savedObject[id];
        addedProduct.time = totalTime;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);


  const handleAddToList = (selectedProduct) => {
    addToDb(selectedProduct.id, selectedProduct.time);
  };

  return (
    <div>
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
            cart={cart}
          ></ExerciseDetails>
        </div>
      </div>
      <div>
            <Question></Question>
      </div>
    </div>
  );
}

export default App;
