import React from 'react'
import ProfileCard from '../../components/BasicElements/ProfileCard';
import Value from '../../components/Value';
import moment from 'moment';

export const Profile = (props) => {
  const nationalMatches = (matches) => {
    let result = [];
    matches.map((item,index)=> {
      result.push(<div key={index}>{item.nationalTeam} - {item.apps} </div>)
    })
    return result;
  }
    return (
      <ProfileCard style={{alignContent:'flex-start'}}>
        <Value name={'Name'} value={props.item.name}/>
        <Value name={'Club'} value={props.item.club}/>
        <Value name={'Current Value'} value={props.profile.currentValue}/>
        <Value name={'Age'} value={props.profile.age}/>
        <Value name={'Height'} value={props.profile.height}/>
        <Value name={'Foot'} value={props.profile.foot}/>
        {props.profile.position !== 'Goalkeeper'&& (
          <React.Fragment>
            <Value name={'Main Position'} value={props.profile.mainPosition}/>
            <Value name={'Other Positions'} value={props.profile.otherPosition}/>
          </React.Fragment>
        )}
        {props.profile.position === 'Goalkeeper'&& (
          <Value name={'Position'} value={props.profile.position}/>
        )}
        {props.profile.onloanfrom && (
          <React.Fragment>
            <Value name={'Loan From'} value={props.profile.onloanfrom}/>
            <Value name={'Loan Contract'} value={moment(props.profile.contractexpires).format('DD.MM.YYYY')}/>
            <Value name={'Contract'} value={moment(props.profile.contractthereexpires).format('DD.MM.YYYY')}/>
          </React.Fragment>
        )}
        {!props.profile.onloanfrom && (
          <Value name={'Contract'} value={moment(props.profile.contractexpires).format('DD.MM.YYYY')}/>
        )}
        <Value name={'Nationality'} value={props.profile.citizenship}/>
        {props.profile.nationalMatches.length > 0 && (
          <Value name={'National Caps'} value={nationalMatches(props.profile.nationalMatches)}/>
        )}
      </ProfileCard>
    )
}
