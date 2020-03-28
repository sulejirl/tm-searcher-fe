import React from 'react'
import ResultBox from '../../components/BasicElements/ResultBox';

export const Result = (props) => {
    return (
        <ResultBox  key={props.key} onClick={()=>{props.onClick(props.item)}}>
          <img alt={'Player Image'}src={props.item.img} width={'100%'}/>
          <div>
            <div>Name</div>
            <div>{props.item.name}</div>
          </div>
          <div>
            <div>Team</div>
            <div width={'100%'}>{props.item.club}</div>
          </div>
          <div>
            <div>Pos</div>
            <div>{props.item.position}</div>
          </div>
          <div>
            <div>Age</div>
            <div>{props.item.age}</div>
          </div>
        </ResultBox>
    )
}
