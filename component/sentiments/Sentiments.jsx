import React from 'react'
import Market from './Market'
import Grow from './Grow'
import Statistics from './Statistics'

function Sentiments() {
  return (
    <div className='sentiments '>
        <Market/>
        <Statistics/>
        <Grow/>


    </div>
  )
}

export default Sentiments