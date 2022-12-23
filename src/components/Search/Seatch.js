import React,{useState, useCallback} from 'react'
import debounce from 'lodash.debounce';
export const Seatch = ({setInpValue, setActPage}) => {


  const changeHandler = event => {
    setActPage(1)
    setInpValue(event.target.value);
  };

  const debouncedChangeHandler = useCallback(
    debounce(changeHandler, 500)

  , []);
  
  return (
    <input className='form-control w-25 text-center mx-auto mb-3 rounded-pill px-3' onChange={debouncedChangeHandler} placeholder='Search...' type="serach" />
  )
}
