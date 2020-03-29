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
  .then(result =>{
    let response = result.data;
    for(let i = 0; i<response.length; i++) {
      let matchPlayedCount = 0;
      let matchNotPlayedCount = 0;
      let goalScoredPlayed = 0;
      let goalScoredNotPlayed = 0;
      let goalConcededPlayed = 0;
      let goalConcededNotPlayed = 0;
      let cleanSheetPlayed = 0;
      let cleanSheetNotPlayed = 0;
      for(let k = 0;k<response[i].matches.length; k++){
          if(response[i].matches[k].played && Number(response[i].matches[k].min.split("'")[0]) > 50){
              matchPlayedCount++;
              if(response[i].matches[k].status === 'win'){
                  let scoreArr = response[i].matches[k].score.split(':').map(Number);
                  if(scoreArr[0] > scoreArr[1]){
                      goalScoredPlayed = goalScoredPlayed + scoreArr[0];
                      goalConcededPlayed = goalConcededPlayed + scoreArr[1];
                      if(scoreArr[1] === 0 ) {
                        cleanSheetPlayed++
                      }
                  } else {
                      goalScoredPlayed = goalScoredPlayed + scoreArr[1];
                      goalConcededPlayed = goalConcededPlayed + scoreArr[0];
                      if(scoreArr[0] === 0 ) {
                        cleanSheetPlayed++
                      }
                  }
              } else if(response[i].matches[k].status === 'lose') {
                  let scoreArr = response[i].matches[k].score.split(':').map(Number);
                  if(scoreArr[0] > scoreArr[1]){
                      goalScoredPlayed = goalScoredPlayed + scoreArr[1];
                      goalConcededPlayed = goalConcededPlayed + scoreArr[0];
                  } else {
                      goalScoredPlayed = goalScoredPlayed + scoreArr[0];
                      goalConcededPlayed = goalConcededPlayed + scoreArr[1];
                  }
              } else if(response[i].matches[k].status === 'draw') {
                  let scoreArr = response[i].matches[k].score.split(':').map(Number);
                  goalScoredPlayed = goalScoredPlayed + scoreArr[1];
                  goalConcededPlayed = goalConcededPlayed + scoreArr[0];
                  if(scoreArr[1] === 0 ) {
                    cleanSheetPlayed++
                  }
              }
          } else if (!response[i].matches[k].played) {
              matchNotPlayedCount++;
              if(response[i].matches[k].status === 'win'){
                  let scoreArr = response[i].matches[k].score.split(':').map(Number);
                  if(scoreArr[0] > scoreArr[1]){
                      goalScoredNotPlayed = goalScoredNotPlayed + scoreArr[0];
                      goalConcededNotPlayed = goalConcededNotPlayed + scoreArr[1];
                      if(scoreArr[1] === 0 ) {
                        cleanSheetNotPlayed++
                      }
                  } else {
                      goalScoredNotPlayed = goalScoredNotPlayed + scoreArr[1];
                      goalConcededNotPlayed = goalConcededNotPlayed + scoreArr[0];
                      if(scoreArr[0] === 0 ) {
                        cleanSheetNotPlayed++
                      }
                  }
              } else if(response[i].matches[k].status === 'lose') {
                  let scoreArr = response[i].matches[k].score.split(':').map(Number);
                  if(scoreArr[0] > scoreArr[1]){
                      goalScoredNotPlayed = goalScoredNotPlayed + scoreArr[1];
                      goalConcededNotPlayed = goalConcededNotPlayed + scoreArr[0];
                  } else {
                      goalScoredNotPlayed = goalScoredNotPlayed + scoreArr[0];
                      goalConcededNotPlayed = goalConcededNotPlayed + scoreArr[1];
                  }
              } else if(response[i].matches[k].status === 'draw') {
                  let scoreArr = response[i].matches[k].score.split(':').map(Number);
                  goalScoredNotPlayed = goalScoredNotPlayed + scoreArr[1];
                  goalConcededNotPlayed = goalConcededNotPlayed + scoreArr[0];
                  if(scoreArr[0] === 0 ) {
                    cleanSheetNotPlayed++
                  }
              }
          }
      }
      response[i].matchPlayedCount = matchPlayedCount;
      response[i].goalScoredPlayed = goalScoredPlayed;
      response[i].goalConcededPlayed = goalConcededPlayed;
      response[i].cleanSheetPlayed = cleanSheetPlayed;
      response[i].matchNotPlayedCount = matchNotPlayedCount;
      response[i].goalScoredNotPlayed = goalScoredNotPlayed;
      response[i].goalConcededNotPlayed = goalConcededNotPlayed;
      response[i].cleanSheetNotPlayed = cleanSheetNotPlayed;

     
  }
  result.data = response;
  return result;
  });
}