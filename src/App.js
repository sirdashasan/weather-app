import axios from "axios";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import City from "./City";

function App() {
  const key = "5d4b1a1532473c491a6502d363adb68c";
  const [city, setCity] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
    <div className="App">
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Placeholder"
          className="px-2 w-[250px] py-1 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full"
        />
        <City city={city} />
      </div>
    </div>
  );
}

export default App;
