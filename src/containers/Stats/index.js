import React from 'react'
import ProfileCard from '../../components/ProfileCard';
import StatsRow from '../../components/StatsRow';
import MatchRow from '../../components/MathcRow';
import Dropwdown from '../../components/Dropdown';

import Button from '@material-ui/core/Button';

export const Stats = (props) => {
    return (
      <ProfileCard style={{flexDirection:'column',alignSelf:'flex-start',width:'1012px',textAlign:'center'}}>
        <Button onClick={props.onClick}style={{backgroundColor:'#46b3e6',color:'white'}}>{props.statsSwitch ? 'Click for General Stats' : 'Click for Detailed Stats'}</Button>
        {!props.statsSwitch && props.item.stats.map((item,index)=>{
          return(
            <StatsRow item={item} position={props.item.position}/>
          )
        })}
        {props.statsSwitch && (
          <Dropwdown onChange={props.onChangeYear}/>
        )}
        {props.statsSwitch && props.seasonalStats.length > 0 && props.seasonalStats.map((item,index)=>{
          return(
              <MatchRow item={item}/>
          )
        })}
      
      </ProfileCard>
    )
}
 