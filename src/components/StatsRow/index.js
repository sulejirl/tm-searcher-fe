import React from 'react'
import Row from '../BasicElements/Row';
import Line from '../BasicElements/HorizontalLine';

const Value = (props) => {
    return (
      <React.Fragment>
        <Row>
          <div style={{display:'flex',color:'#4d80e4',marginTop:'10px',fontSize:'2vw'}}>
            <div>
              {props.item.season}
            </div>
            -
            <div>
              {props.item.club}
            </div>
          </div>
          <Line/>
          {props.item.stats.map((item,index)=>{
            return(
            <div>
              <div style={{display:'flex',fontSize:'1vw'}}>
                <div style={{width:'16vw'}}>{item.competition}</div>
                <div style={{width:'8vw'}}>Apps: {item.apps}</div>
                <div style={{width:'8vw'}}>{props.position === 'Goalkeeper' ? 'Conceded:' + item.conceded : 'Goals:' + item.goals}</div>
                <div style={{width:'8vw'}}>{props.position==='Goalkeeper' ?'Clean Sheets:' + item.cleansheets : 'Asists:' + item.asists}</div>
                <div style={{width:'10vw'}}>First Yellow: {item.yellow}</div>
                <div style={{width:'10vw'}}>Second Yellow: {item.secondyellow}</div>
                <div style={{width:'7vw'}}>Red: {item.red}</div>
                <div style={{width:'13vw'}}>Min Played: {item.minplayed}</div>
              </div>
              <hr/>
            </div>
            )
          })}
        </Row>
      </React.Fragment>
    )
}
export default Value
