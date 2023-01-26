import React from 'react'
import { debounce } from "lodash"
import './search.css'

export default function Search({setInputVal}) {
 
  return (
    <div>
        <input placeholder='Search your favorite cartoon' type='text' onChange={debounce((e)=>setInputVal(e.target.value),600)} />
    </div>
  )
}
