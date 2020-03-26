import React from 'react'
import Row from '../BasicElements/Row';
import Line from '../BasicElements/HorizontalLine';
import './index.css'

const Value = (props) => {
    return (
      <React.Fragment>
        <Row>
          <div className='title'>
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
              <div className='row'>
                <div className='tournament'>{item.competition}</div>
                <div className='apps'>Apps: {item.apps}</div>
                <div className='goals'>{props.position === 'Goalkeeper' ? 'Conceded:' + item.conceded : 'Goals:' + item.goals}</div>
                <div className='asists'>{props.position==='Goalkeeper' ?'Clean Sheets:' + item.cleansheets : 'Asists:' + item.asists}</div>
                <div className='firstYellow'>First Yellow: {item.yellow}</div>
                <div className='secondYellow'>Second Yellow: {item.secondyellow}</div>
                <div className='redCard'>Red: {item.red}</div>
                <div className='played'>Min Played: {item.minplayed}</div>
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
