import axios from 'axios';
let baseProdQuery ="https://tm-searcher-be.herokuapp.com/";
let baseDevQuery = "http://localhost:3001/";
let type = 'dev';
process.env.NODE_ENV === 'production' ? type = 'prod' : type ='dev';

export function baseAxios(method,url,data,type) {
  console.log(process.env.NODE_ENV);
  return axios.request({
    method:method,
    url:(type === "prod" ? baseProdQuery + url : baseDevQuery + url),
    params: (data['params'] ? data['params'] : ""),
    data: (data['data'] ? data['data'] :""),
  }).then(result => result)
  .catch(console.log);
}
export function searchPlayers(params){
  return baseAxios('GET','search',{params},type)
  .then(result => result);
}
export function getProfile(params){
  return baseAxios('GET','profile',{params},type)
  .then(result => result);
}
export function getStats(params){
  return baseAxios('GET','stats',{params},type)
  .then(result => result);
}
export function getStatsBySeason(params){
  return baseAxios('GET','statsbyseason',{params},type)
  .then(result => result);
}