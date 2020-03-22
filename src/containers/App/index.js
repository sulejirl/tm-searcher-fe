import React,{useState,useEffect} from 'react';
import {Search} from '../Search';
import {Result} from '../Result'
import {Profile} from '../Profile';
import './App.css';
import axios from 'axios';
import useDebounce from '../../hooks/useDebounce.js';
const App = () => {
  const [searchTerm,setSearchTerm] = useState('');
  const [searchResults,setSearchResults] = useState([]);
  const [selectedItem,setSelectedItem] = useState({});
  const [profile,setProfile] = useState({});

  const debouncedSearchTerm = useDebounce(searchTerm,500);
  useEffect(()=> {
    if(debouncedSearchTerm){
      axios.get(`http://localhost:3001/search`, {params:{search:searchTerm}})
      .then((response)=> {
        setSearchResults(response.data);
        setProfile({});
      });
    }
  },[debouncedSearchTerm])
  
  const handleOnClick = (item) => {
    setSelectedItem(item);
    axios.get(`http://localhost:3001/profile`, {params:{id:item.id}})
      .then((response)=> {
        setProfile(response.data);
      });
  }
  return (
    <div className='App'>
      <Search onInputChange = {setSearchTerm}/>
      {!profile.name && searchResults.map((item,key) => {
        return(<Result item={item} onClick={handleOnClick}/>)
      })}
      {profile.name && ( 
        <Profile item={selectedItem} profile={profile}/>
      )}
    </div>
  );
}
export default App;
