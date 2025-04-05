import { useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../Item/Item';

const Popular = () => {

  const [popularProducts, setPopularProducts] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get("http://localhost:3000/product/popularInWomen"); // Replace with your API endpoint
          setPopularProducts(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, [])

  return (
    <div className="max-w-6xl mx-auto py-10">
      <h1 className="text-2xl font-semibold text-center mb-4">POPULAR IN WOMEN</h1>
      <hr className="w-20 border-t-2 border-black mx-auto mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {popularProducts.map((item, i) => (
          <Item 
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;

