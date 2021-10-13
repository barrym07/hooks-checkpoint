
import './App.css';
import React, { useState, useEffect } from 'react';
import Products from './Products';

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function getProductsList() {
      const rawJSON = await fetch('http://52.26.193.201:3000/products/list');
      let json = await rawJSON.json();
      console.log(json);

      setProductList(json)
    };
    getProductsList();

  }, []);





  return (
    <div className="App">
      <header className="App-header">

        <Products productList={productList} />


      </header>
    </div>
  );
}

export default App;

// Make an API call to get a product list (Products data service, subsection "list") --done
// Make an API call to get specific details on a given product when its entry is clicked (Products data service - subsection ":productId")
// Display a list of products as cards with text of description
// Make each product clickable so that when clicked, it displays an image from the API for that product (Products data service - subsection "styles")
// Make it so that only one product's photo is visible at a time, and clicking it again closes the photo (NOTE: If a product does not have a viable photo on the API, allow for this eventuality with good conditional rendering).

