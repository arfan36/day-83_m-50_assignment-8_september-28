// use local storage to manage saved data (cart data)
const addToDb = (id, time) => {
    let savedObject = {};       //@ shoppingCart

    // get the saved data (shopping cart) from Local storage
    const savedData = localStorage.getItem('saved-data');   //@ storedCart
    if (savedData) {
        savedObject = JSON.parse(savedData);
    }

    // Add total time (quantity)
    const totalTime = savedObject[id];      //@ quantity
    if (totalTime) {
        const newTotalTime = totalTime + time;
        savedObject[id] = newTotalTime;
    }
    else {
        savedObject[id] = time;
    }
    localStorage.setItem('saved-data', JSON.stringify(savedObject));
};

// get stored data (repeat code from top)
const getSavedData = () => {            //@ getShoppingCart
    let savedObject = {};

    // get the saved data (shopping cart) from local storage
    const savedData = localStorage.getItem('saved-data');
    if (savedData) {
        savedObject = JSON.parse(savedData);
    }
    return savedObject;
};

// remove single product from local storage
const removeFromDb = id => {
    const savedData = localStorage.getItem('saved-data');
    if (savedData) {
        const savedObject = JSON.parse(savedData);
        if (id in savedObject) {
            delete savedObject[id];
            localStorage.setItem('saved-data', JSON.stringify(savedObject));
        }
    }
};

// remove total saved data from local storage
const deleteSavedData = () => {
    localStorage.removeItem('saved-data');
};

export {
    addToDb,
    getSavedData,
    removeFromDb,
    deleteSavedData
};