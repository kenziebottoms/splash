import {useState,useEffect} from 'react';
import {getPlants} from './api'
import logo from './logo.svg';

function App() {
  const [plants, setPlants] = useState([])

 useEffect(() => {
   getPlants()
   .then((body) => body.json())
   .then(setPlants)
 }, [])

  return (
    <div className="bg-gray-800 text-white">
      <header>
        <img src={logo} className="max-h-[10rem] mx-auto my-2" alt="logo" />
        <p className='text-xl font-light text-center'>
          Splash
        </p>
      </header>
      <div>
        {plants.map(p => <div>{p.name}</div>)}
      </div>
    </div>
  );
}

export default App;
