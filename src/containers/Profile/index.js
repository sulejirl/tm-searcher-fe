import React from 'react'
import ProfileCard from '../../components/ProfileCard';
import Value from '../../components/Value';
import moment from 'moment';

export const Profile = (props) => {
  console.log(props.profile,props.item)
    return (
      <ProfileCard>
        <Value name={'Name'} value={props.item.name}/>
        <Value name={'Club'} value={props.item.club}/>
        <Value name={'Current Value'} value={props.profile.currentValue}/>
        <Value name={'Age'} value={props.profile.age}/>
        <Value name={'Height'} value={props.profile.height}/>
        <Value name={'Foot'} value={props.profile.foot}/>
        <Value name={'Main Position'} value={props.profile.mainPosition}/>
        <Value name={'Other Positions'} value={props.profile.otherPosition}/>
        <Value name={'Contract'} value={moment(props.profile.contractexpires).format('DD.MM.YYYY')}/>
        <Value name={'Nationality'} value={props.profile.citizenship}/>
        <Value name={'Caps'} value={props.profile.caps}/>
      </ProfileCard>
    )
}
