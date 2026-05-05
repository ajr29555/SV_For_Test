import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/items`)
      .then((res) => res.json())
      .then(setItems);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Hello Shahar</h1>
        <h2 className="text-lg text-gray-600 mb-4">פריטים מה-Express:</h2>

        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item._id}
              className="bg-gray-50 border border-gray-200 rounded px-3 py-2"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
