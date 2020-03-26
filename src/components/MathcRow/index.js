import React from 'react'
import Row from '../BasicElements/Row';
import Line from '../BasicElements/HorizontalLine';
import moment from 'moment';

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
          <div style={{display:'flex',color:'#4d80e4',marginTop:'10px'}}>
            <div>
              {props.item.competition}
            </div>
          </div>
          <Line/>
          {props.item.matches.map((item,index)=>{
            return(
              <div key={index}>
              <div style={{display:'flex',fontSize:'0.8vw',marginTop:'10px'}}>
                <div style={{width:'8vw'}}>{item.matchday}</div>
                <div style={{width:'4vw'}}>{moment(item.date).format('DD.MM.YYYY')}</div>
                <div style={{width:'10vw'}}>{item.home}</div>
                <div style={{width:'2vw'}}>{item.score}</div>
                <div style={{width:'10vw'}}>{item.away}</div>
                {item.played && (
                  <React.Fragment>
                    <div style={{width:'5vw'}}>Position: {item.position}</div>
                    <div style={{width:'4vw'}}>Goals:{item.goals}</div>
                    <div style={{width:'4vw'}}>Asists:{item.assists}</div>
                    <div style={{width:'4vw'}}>Yellow:{item.yellow}</div>
                    <div style={{width:'7vw'}}>Second Yellow:{item.secondyellow}</div>
                    <div style={{width:'5vw'}}>Red:{item.red}</div>
                    <div style={{width:'5vw'}}>Sub In:{item.subIn}</div>
                    <div style={{width:'5vw'}}>Sub Out:{item.subOut}</div>
                    <div style={{width:'5vw'}}>Minutes:{item.min}</div>
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
          <hr/>
            </React.Fragment>
          )}
        </Row>
      </React.Fragment>
    )
}
export default Value
