import React from 'react'
import InputField from '../../components/Input';

export const Search = (props) => {
    return (
        <InputField name='searchTerm' label ='Search Player' variant= 'outlined'onChange={(e) => {props.onInputChange(e.target.value)}}/>
    )
}
