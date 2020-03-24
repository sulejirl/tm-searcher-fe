import React from 'react'
import Row from '../Row';
import Line from '../HorizontalLine';

const Value = (props) => {
    return (
      <React.Fragment>
        <Row>
          <div style={{display:'flex',color:'#4d80e4',marginTop:'10px'}}>
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
              <div style={{display:'flex',fontSize:'16px'}}>
                <div style={{width:'220px'}}>{item.competition}</div>
                <div style={{width:'80px'}}>Apps: {item.apps}</div>
                <div style={{width:'90px'}}>{props.position === 'Goalkeeper' ? 'Conceded:' + item.conceded : 'Goals:' + item.goals}</div>
                <div style={{width:'90px'}}>{props.position==='Goalkeeper' ?'Clean Sheets:' + item.cleansheets : 'Asists:' + item.asists}</div>
                <div style={{width:'140px'}}>First Yellow: {item.yellow}</div>
                <div style={{width:'140px'}}>Second Yellow: {item.secondyellow}</div>
                <div style={{width:'80px'}}>Red: {item.red}</div>
                <div style={{width:'150px'}}>Min Played: {item.minplayed}</div>
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
