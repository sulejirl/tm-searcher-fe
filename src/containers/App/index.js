import React,{useState,useEffect} from 'react';
import {Search} from '../Search';
import {Result} from '../Result'
import {Profile} from '../Profile';
import {Stats} from '../Stats';

import './App.css';
import axios from 'axios';
import useDebounce from '../../hooks/useDebounce.js';
const App = () => {
  const [searchTerm,setSearchTerm] = useState('');
  const [searchResults,setSearchResults] = useState([]);
  const [selectedItem,setSelectedItem] = useState({});
  const [profile,setProfile] = useState({});
  const [stats,setStats] = useState({});
  const [year,setYear] = useState(2019);
  const [seasonalStats,setSeasonalStats] = useState([]);
  const [statsSwitch,setStatsSwitch] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm,500);
  useEffect(()=> {
    if(debouncedSearchTerm){
      axios.get(`http://localhost:3001/search`, {params:{search:searchTerm}})
      .then((response)=> {
        setSearchResults(response.data);
        setProfile({});
        setStats({});
        setSeasonalStats([]);
      });
    }
  },[debouncedSearchTerm])
  
  const handleOnSelectPlayer = (item) => {
    setSelectedItem(item);
    axios.get(`https://tm-searcher-be.herokuapp.com/profile`, {params:{id:item.id}})
      .then((response)=> {
        setProfile(response.data);
      });
      axios.get(`https://tm-searcher-be.herokuapp.com/stats`, {params:{id:item.id}})
      .then((response)=> {
        setStats(response.data);
      });
  }
  const handleOnDetailedStats = () => {
    if(seasonalStats.length < 1) {
      axios.get(`https://tm-searcher-be.herokuapp.com/statsbyseason`, {params:{id:selectedItem.id,season:year}})
      .then((response)=> {
        setSeasonalStats(response.data)
      });
    }
    setStatsSwitch(!statsSwitch)
  }
  const handleOnChangeYear = (year) => {
    setYear(year)
    axios.get(`https://tm-searcher-be.herokuapp.com/statsbyseason`, {params:{id:selectedItem.id,season:year}})
    .then((response)=> {
      setSeasonalStats(response.data)
    });
  }
  return (
    <div className='App'>
      <Search onInputChange = {setSearchTerm}/>
      {!profile.name && searchResults.map((item,key) => {
        return(<Result item={item} onClick={handleOnSelectPlayer}/>)
      })}
      <div style={{display:'flex'}}>
        {profile.name && stats.position && ( 
          <Profile item={selectedItem} profile={profile}/>
        )}
        {profile.name && stats.position && ( 
          <Stats onClick={handleOnDetailedStats} onChangeYear={handleOnChangeYear} item ={stats} seasonalStats={seasonalStats} statsSwitch ={statsSwitch}/>
        )}
      </div>
      
    </div>
  );
}
export default App;
