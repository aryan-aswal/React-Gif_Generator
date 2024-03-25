import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';

const Tag = () => {

    const [ gif, setGif ] = useState('');
    const [ tag, setTag ] = useState({value: "puppy"});
    const key = "eymfrqEkxzrexLl60RRS1HzHHzQSAZUn";


    const [ loading, setLoading ] = useState(false);
    function clickHandler() {
        fetchData(); 
    }

    async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${key}&tag=${tag.value}`;
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

    function changeHandler(event) {
        const {name, value} = event.target;
        setTag((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }
    
    function keyPressHandler(event) {
        if(event.key === 'Enter') {
            fetchData();
        }
    }
  return (
    <div className='tag-div flex flex-col justify-between items-center'>

        <div className='random-div-image flex justify-center items-center'>
            {
                loading ? (<Spinner></Spinner>) : ( <img src={gif} alt="" width={450}/>)
            }
        </div>

        <div className='input-div flex justify-center items-center'>
            <input type="text" className='tag-div-input' onChange={changeHandler} value={tag.value} name='value' onKeyPress={keyPressHandler}/>     
        </div>

       <div className='tag-div-buttons flex justify-center items-center'>
            <button onClick={clickHandler} className='tag-div-button'>Generate</button>
       </div>

    </div>
  )
}

export default Tag
