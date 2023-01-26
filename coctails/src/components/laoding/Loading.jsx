import React from 'react'
import { Rings } from 'react-loader-spinner'
export default function Loading() {
  return (
    <div>
        <Rings
  height="180"
  width="180"
  color="rgb(53,213,199)"
  radius="10"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="rings-loading"
/>
    </div>
  )
}
