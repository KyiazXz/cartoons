import React from 'react'
const api = 'https://api.sampleapis.com/cartoons/cartoons2D'
import Loading from '../laoding/Loading'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';

export default function CardContent() {
  const [data, setData] = useState ( [ ] )
  const [loading , setLoading] = useState (false)
  let {name} = useParams();

  const fetchedData = async (url) => {
    const res = await fetch (url)
    const json = await res.json()
    setData(json)
  
  }

  useEffect (()=>{
    setLoading (true)
    setTimeout(() => {
        setLoading (false)
      }, 2000);
    fetchedData (api);;

} , [ ] )

const myData = data.filter((el)=> el.title===name)

  if (loading){
    return (
        <div>
            <Loading />
        </div>
    )
    }
  return (
    <div>
      {myData.map((el)=>{
        return (  <MDBCard>
          <MDBCardImage src={el.image} alt={el.title} position='top' />
          <MDBCardBody>
            <MDBCardText>
            <h2>{el.title}</h2>
            <h4>Year: {el.year}</h4>
            <h4>Episodes: {el.episodes}</h4>
            <h4>Creator:{el.creator}</h4>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>)
      })}
    </div>
  )
}
