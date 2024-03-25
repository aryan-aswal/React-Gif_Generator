import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
const Random = () => {
    const key = "eymfrqEkxzrexLl60RRS1HzHHzQSAZUn";
    const [ gif, setGif ] = useState('');
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}`;
    const [ loading, setLoading ] = useState(false);
    
    function clickHandler() {
        fetchData(); 
    }

    async function fetchData() {
        setLoading(true);

        try{
            const {data} = await axios.get(url);
            const imageSource = data.data.images.downsized_large.url;
            setGif(imageSource);
        }
        catch(err) {
            console.log("Error");
        }
        setLoading(false);
       
    }

    useEffect(()=>{
        fetchData();
    },[])
    
  return (
    <div className='random-div flex flex-col justify-between items-center'>
        <div className='random-div-image flex justify-center items-center'>
            {
            loading ? (<Spinner></Spinner>) : ( <img src={gif} alt="" width={450}/>)
            }
        </div>

       <div className='random-div-buttons'>
            <button onClick={clickHandler} className='random-div-button'>Generate</button>
       </div>
    </div>
  )
}

export default Random
