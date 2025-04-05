import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../Item/Item";

const NewCollections = () => {

  const [new_collection, setNew_collection] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/product/newCollection"); // Replace with your API endpoint
        setNew_collection(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center">NEW COLLECTIONS</h1>
      <hr className="w-16 mx-auto mt-2 border-t-2 border-gray-800" />

      {/* Collection Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {new_collection.map((item, i) => (
          <div
            key={i}
            className="p-4 bg-white shadow-md rounded-lg transition-transform duration-200 ease-in-out hover:shadow-lg hover:scale-[1.02]"
          >
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
