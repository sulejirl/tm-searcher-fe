import React from 'react'
import ValueBox from './ValueBox';
import Line from './HorizontalLine';

const Value = (props) => {
    return (
      <ValueBox>
        <div>
          {props.name}
        </div>
        <Line/>
        <div style={{fontSize:'20px'}}>
          {props.value}
        </div>
      </ValueBox>
    )
}
export default Value
