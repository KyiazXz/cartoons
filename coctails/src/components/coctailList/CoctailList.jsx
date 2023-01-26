import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from '../laoding/Loading'
import Search from '../searchBar/Search'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import {Card, CardBody , CardTitle , CardText} from 'reactstrap'
import {Link} from 'react-router-dom'
import './coctailList.css'
const api = 'https://api.sampleapis.com/cartoons/cartoons2D'




export default function CoctailList() {
    const [data, setData] = useState ( [ ] )
    const [loading , setLoading] = useState (false)
    const [inputVal , setInputVal] = useState ("")

const fetchedData = async (url) => {
  const res = await fetch (url)
  const json = await res.json()
  setData(json)

}
console.log(data)

    useEffect (()=>{
        setLoading (true)
        setTimeout(() => {
            setLoading (false)
          }, 4000);
        fetchedData (api);;

    } , [ ] )
  
 
const filtered = data.filter((el)=>{
    if (inputVal === ''){
        return el
    }else if (el.title.toLowerCase().includes(inputVal.toLowerCase())){
        return el
    }
})

 


if (loading){
return (
    <div>
        <Loading />
    </div>
)
}

  return ( 
    <>
        <h1>Cartoons API</h1>
        <Search  setInputVal={setInputVal}/>
        <div className='main'>
                {filtered.map((el)=>{
                    return ( <> <Link to={`/${el.title}`}>
                                <Card  style={{width: '18rem' }} key={el.id} >
                                            <div className='bg-image hover-zoom '>
                                                    <img src={el.image} className='w-100' />
                                                </div>
                                    <CardBody >
                                        <CardTitle tag="h1" >
                                        {el.title}
                                        </CardTitle>
    
                                    </CardBody>
                                </Card>
                            </Link>
                            </>)
                })}
        </div>
    </>
  )
}
