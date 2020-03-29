import React from 'react'
import Row from '../BasicElements/Row';
import Line from '../BasicElements/HorizontalLine';
import moment from 'moment';
import './index.css';


const Value = (props) => {
    return (
      <React.Fragment>
        <Row>
          {props.item.competition === '' && (
          <div>
              NO DATA
          </div>
          )}
          {props.item.competition !== '' && (
            <React.Fragment>
              <div className='competition'>
                {props.item.competition} 
              </div>
          <Line/>
          {props.item.matches.map((item,index)=>{
            return(
              <div key={index}>
              <div className='resultRow'>
                <div className='matchday'>{item.matchday}</div>
                <div className='date'>{moment(item.date).format('DD.MM.YYYY')}</div>
                <div className='home'>{item.home}</div>
                <div className='score'>{item.score}</div>
                <div className='away'>{item.away}</div>
                {item.played && (
                  <React.Fragment>
                    <div className='position'>Position: {item.position}</div>
                    <div className='goals'>Goals:{item.goals}</div>
                    <div className='asists'>Asists:{item.assists}</div>
                    <div className='yellow'>Yellow:{item.yellow}</div>
                    <div className='secondYellow'>Second Yellow:{item.secondyellow}</div>
                    <div className='red'>Red:{item.red}</div>
                    <div className='subIn'>Sub In:{item.subIn}</div>
                    <div className='subOut'>Sub Out:{item.subOut}</div>
                    <div className='minPlayed'>Minutes:{item.min}</div>
                  </React.Fragment>
                )}
                {!item.played && (
                    <div style={{width:'44vw',textAlign:'center'}}>NOT PLAYED</div>
                )}
              </div>
              <hr/>
              </div>
            )
          })}
          <div className='statistic-container'>
            When played at {props.item.matchPlayedCount} matches team scored {props.item.goalScoredPlayed} and conceded {props.item.goalConcededPlayed} also keep clean sheet at {props.item.cleanSheetPlayed} mathces
          </div>
          <div className='statistic-container'>
            When not played at {props.item.matchNotPlayedCount} matches team scored {props.item.goalScoredNotPlayed} and conceded {props.item.goalConcededNotPlayed} also keep clean sheet at {props.item.cleanSheetNotPlayed} mathces
          </div>
            </React.Fragment>
          )}
        </Row>
      </React.Fragment>
    )
}
export default Value
