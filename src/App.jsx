import { useState } from 'react'
import './App.css'
import background from './assets/background.png'
import Random from './components/Random'
import Tag from './components/Tag'
import Spinner from './components/Spinner'
function App() {
  const [ choice, setChoice ] = useState('random');
  return (
    <div className='wrapper flex flex-col items-center'>

      <div className='main-div flex flex-col items-center'>
        <h1 className='main-div-heading'>Random GIF Generator</h1>
        <p>Bored of the same old emojis and texts? Random GIF Generator is here to add some zest to your digital conversations with a fun and surprising selection of GIFs, perfect for any mood or situation.</p>
      </div>

      <div className='gif-section-button'>
          <button className={`${choice === 'random' ? ('active') : ('notActive')}`} onClick={()=>{
            setChoice('random')

            }}>Random</button>
          <button className={`${choice === 'search' ? ('active') : ('notActive')}`} onClick={()=>{setChoice('search')}}>Search gif</button>
      </div>

      <div className='gif-image-section'>
        {
          choice === 'random' ? (<div className='random'><Random></Random></div>) : (<div className='tag'><Tag></Tag></div>)
        }
      </div>
    </div>
  )
}

export default App
