import React from 'react'
import ResultBox from '../../components/BasicElements/ResultBox';

export const Result = (props) => {
    return (
        <ResultBox onClick={()=>{props.onClick(props.item)}}>
          <img alt={'Player Image'}src={props.item.img} width={'100%'}/>
          <div style={{width:'11vw'}}>
            <div>Name</div>
            <div>{props.item.name}</div>
          </div>
          <div style={{width:'11vw'}}>
            <div>Team</div>
            <div width={'100%'}>{props.item.club}</div>
          </div>
          <div style={{width:'7vw', justifyContent:'baseline',}}>
            <div>Pos</div>
            <div>{props.item.position}</div>
          </div>
          <div style={{width:'5vw'}}>
            <div>Age</div>
            <div>{props.item.age}</div>
          </div>
        </ResultBox>
    )
}
