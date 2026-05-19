import {TIMEOUT_SECONDS} from './config.js';
import async from 'regenerator-runtime/runtime';

const timeout = function(s){
  return new Promise(function(_,reject){
    setTimeout(function(){
      reject(new Error(`Request took too long! Timeout after ${s}`))
    }, s * 1000)
  });
}

export const getJSON = async function(url){
  try{
    // Loading recipe
    const getRecipe = await Promise.race([fetch(url),timeout(TIMEOUT_SECONDS)]);
    if(!getRecipe.ok) throw new Error('Recipe not found. Please try searching for another one');
    const getResponse = await getRecipe.json();

    return getResponse;
  }
  catch(err){
    throw err;
  }
}

export const sendJSON = async function(url,uploadData){
  try{
    // Loading recipe
    const fetchData = fetch(url, 
      {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(uploadData)
      } 
    )
    const sendRecipe = await Promise.race([fetchData,timeout(TIMEOUT_SECONDS)]);
    if(!sendRecipe.ok) throw new Error('Error uploading the recipe.');
    const sendResponse = await sendRecipe.json();

    return sendResponse;
  }
  catch(err){
    throw err;
  }
}
