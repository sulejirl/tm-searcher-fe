import React from 'react'
import ValueBox from './ValueBox';
import Line from '../HorizontalLine';

const Value = (props) => {
    return (
      <ValueBox>
        <div style={{color:'#4d80e4'}}>
          {props.name}
        </div>
        <Line/>
        <div style={{fontSize:'16px'}}>
          {props.value}
        </div>
      </ValueBox>
    )
}
export default Value
