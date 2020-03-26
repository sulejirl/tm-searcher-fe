import React,{useState,useEffect} from 'react';
import {searchPlayers,getProfile,getStats,getStatsBySeason} from '../../utils/requests';
import {Search} from '../Search';
import {Result} from '../Result'
import {Profile} from '../Profile';
import {Stats} from '../Stats';
import useDebounce from '../../utils/hooks/useDebounce';
import './index.css';
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
      searchPlayers({search:searchTerm})
      .then(response => {
        setSearchResults(response.data);
        setProfile({});
        setStats({});
        setSeasonalStats([]);
      })
    }
  },[debouncedSearchTerm])
  
  const handleOnSelectPlayer = (item) => {
    setSelectedItem(item);
    getProfile({id:item.id})
    .then(response=>{
      setProfile(response.data);
    })
    getStats({id:item.id})
    .then(response => {
      setStats(response.data);
    })
  }
  const handleOnDetailedStats = () => {
    if(seasonalStats.length < 1) {
      getStatsBySeason({id:selectedItem.id,season:year})
      .then(response => {
        setSeasonalStats(response.data)
      })
    }
    setStatsSwitch(!statsSwitch)
  }
  const handleOnChangeYear = (year) => {
    setYear(year)
    getStatsBySeason({id:selectedItem.id,season:year})
      .then(response => {
        setSeasonalStats(response.data)
      })
  }
  return (
    <div className='application'>
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
