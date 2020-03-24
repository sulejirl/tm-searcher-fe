import React from 'react'
import Row from '../Row';
import Line from '../HorizontalLine';
import moment from 'moment';

const Value = (props) => {
  console.log(props.item);
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
              <div>
              <div style={{display:'flex',fontSize:'10px',marginTop:'10px',fontWeight:'bold'}}>
                <div style={{width:'100px'}}>{item.matchday}</div>
                <div style={{width:'70px'}}>{moment(item.date).format('DD.MM.YYYY')}</div>
                <div style={{width:'100px'}}>{item.home}</div>
                <div style={{width:'30px'}}>{item.score}</div>
                <div style={{width:'100px'}}>{item.away}</div>
                {item.played && (
                  <React.Fragment>
                    <div style={{width:'80px'}}>Position: {item.position}</div>
                    <div style={{width:'60px'}}>Goals:{item.goals}</div>
                    <div style={{width:'60px'}}>Asists:{item.assists}</div>
                    <div style={{width:'60px'}}>Yellow:{item.yellow}</div>
                    <div style={{width:'100px'}}>Second Yellow:{item.secondyellow}</div>
                    <div style={{width:'50px'}}>Red:{item.red}</div>
                    <div style={{width:'60px'}}>Sub In:{item.subIn}</div>
                    <div style={{width:'60px'}}>Sub Out:{item.subOut}</div>
                    <div style={{width:'60px'}}>Minutes:{item.min}</div>
                  </React.Fragment>
                )}
                {!item.played && (
                    <div style={{width:'590px',textAlign:'center'}}>NOT PLAYED</div>
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
