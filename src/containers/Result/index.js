import React from 'react'
import ResultBox from '../../components/ResultBox';

export const Result = (props) => {
    return (
        <ResultBox onClick={()=>{props.onClick(props.item)}}>
          <img src={props.item.img}/>
          <div style={{width:'40%'}}>
            <div>Name</div>
            <div style={{width:'100%'}}>{props.item.name}</div>
          </div>
          <div style={{width:'40%'}}>
            <div>Team</div>
            <div style={{width:'100%'}}>{props.item.club}</div>
          </div>
          <div style={{width:'10%', justifyContent:'baseline', margin:'0px 2%'}}>
            <div>Pos</div>
            <div>{props.item.position}</div>
          </div>
          <div style={{width:'10%'}}>
            <div>Age</div>
            <div>{props.item.age}</div>
          </div>
        </ResultBox>
    )
}
