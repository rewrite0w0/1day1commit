// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

function humanReadable(seconds) {
  // TODO
  const CYCLE = 60
  const hour = parseInt(seconds / (CYCLE ** 2));
  const min = parseInt(seconds / CYCLE %CYCLE);
  const sec = seconds % CYCLE;
  
//   console.log(hour,min,sec);
  return `${hour < 9 ? `0${hour}`:`${hour}`}:${min <9 ? `0${min}` : `${min}`}:${sec <9 ? `0${sec}`: `${sec}`}`;
}
