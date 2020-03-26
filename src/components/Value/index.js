import React from 'react'
import ValueBox from './ValueBox';
import Line from '../BasicElements/HorizontalLine';
import './index.css'

const Value = (props) => {
    return (
      <ValueBox>
        <div className='name'>
          {props.name}
        </div>
        <Line/>
        <div className='value'>
          {props.value}
        </div>
      </ValueBox>
    )
}
export default Value
