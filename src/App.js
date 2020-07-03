import React, {useState, useEffect} from 'react';
import './App.css';
import { getGif } from './service/getGif';

function App() {
  //const DIFERENT_GIFS =['https://media1.giphy.com/media/2VKRkAdsl1oeQ/giphy.webp?cid=ecf05e47bf5b7ff774da4eef6f3f4ee026dce53ce44d4850&rid=giphy.webp']
  
  const[gifs, setGifs] = useState([])
  useEffect(()=>{
    getGif('rick').then(gifs=>setGifs(gifs))
    //setGifs(DIFERENT_GIFS)
  },[])
  return (
    <div className="App">
      <section className="App-Content">
        
        {gifs.map((gif,indice)=><img key={indice} src={gif}/>)}
      </section>
      
    </div>
  );
}

export default App;
