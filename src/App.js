import { Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import {url} from '../src/apidata'

function App() {
  const [button_active,toggle_button]=useState(false);
  const [countDown,setCountDown]=useState(-1)
  const [tileData,setTileData]=useState([])

  useEffect(()=>{
    if(countDown!==-1)
    {
      setTimeout(()=>{setCountDown(countDown-1)},1000)
    }
    else
    {
      fetch(`${url}&&count=${4}`)
    .then(res=>res.json())
    .then(data=>{setTileData(data)})
    .catch(err=>console.log(err))
      toggle_button(false)
    }
  },[countDown])

  useEffect(()=>{
    fetch(`${url}&&count=${4}`)
    .then(res=>res.json())
    .then(data=>{setTileData(data)})
    .catch(err=>console.log(err))

  },[])

  function button_click_event(){
    toggle_button(true)
    setCountDown(10)
  }
  return (
    <div className="App">
      <Header/>
      <Gallery tileData={tileData}/>
      <Button color="primary" variant="contained" disabled={button_active}
      onClick={()=>button_click_event()}>Reload New Images</Button>
      {(countDown!==-1)?(<h2>{countDown}</h2>):null}
    </div>
  );
}

export default App;
